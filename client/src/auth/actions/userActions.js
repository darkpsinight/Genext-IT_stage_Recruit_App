import axios from 'axios'
import { sessionService } from 'redux-react-session'


export const loginUser = (credentials, navigate, setFieldError, setSubmitting) => {
    //make checks and get some data
    return () => {
        axios.post("http://localhost:5000/api/form/signin",
            credentials,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then((response) => {
            const { data } = response;

            if (data.status === "FAILED") {
                const { message } = data;

                //check for specific error
                if (message.includes("credentials")) {
                    setFieldError("email", message);
                    setFieldError("password", message);
                } else if (message.includes("password")) {
                    setFieldError("password", message);
                    alert("Wrong email or password")
                }
            } else if (data.status === "SUCCESS") {
                const userData = data.data;
                const token = userData._id;

                sessionService.saveSession(token)
                    .then(() => {
                        sessionService.saveUser(userData)
                            .then(() => {
                                if (userData.role === "admin") {
                                    navigate("/dashboard")
                                } else if (userData.role === "user") {
                                    navigate("/joblist")
                                } else {
                                    navigate("/")
                                    alert("Role is not known, please contact Admin or make a new account!")
                                    sessionService.deleteSession(token)
                                }
                            })
                            .catch(err => console.error(err))
                    })
                    .catch(err => console.error(err))
            }
        })
            .catch(err => { console.error(err) });
    }
}




export const signupUser = (credentials, navigate, setFieldError, setSubmitting) => {
    return (dispatch) => {

        axios.post("http://localhost:5000/api/form/signup",
            credentials,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then((response) => {
            const { data } = response;

            if (data.status === 'FAILED') {
                const { message } = data;
                //check for specific error
                if (message.includes("name")) {
                    setFieldError("name", message);
                } else if (message.includes("email")) {
                    setFieldError("email", message);
                } else if (message.includes("date")) {
                    setFieldError("dateOfBirth", message);
                } else if (message.includes("password")) {
                    setFieldError("password", message);
                }

                //complete submission
                setSubmitting(false);

            } else if (data.status === "SUCCESS") {
                //Login user after successfull signup
                const { email, password } = credentials;

                dispatch(loginUser({ email, password }, navigate, setFieldError, setSubmitting))
            }
        })
            .catch(err => console.error(err));
    }
}




export const logoutUser = (navigate) => {
    return () => {
        sessionService.deleteSession();
        sessionService.deleteUser();
        navigate('/');
    }
}
import axios from 'axios'

export const submitJob = (credentials) => {
    //make checks and get some data
    return () => {
        axios.post("http://localhost:5000/api/form/dashboard",
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
                console.log(message);
            }
        })
            .catch(err => { console.error(err) });
    }
}

export const getAllJob = (callback) => {
    //make checks and get some data
    return () => {
        axios.get("http://localhost:5000/api/form/listjob")
            .then((response) => {
                const { data } = response;
                callback(response.data.data);
                if (data.status === "FAILED") {
                    const { message } = data;
                    console.log(message);
                }
            })
            .catch(err => { console.error(err) });
    }
}
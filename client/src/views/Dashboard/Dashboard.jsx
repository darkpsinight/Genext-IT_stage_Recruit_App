import {
  StyledTitle,
  StyledSubTitle,
  Avatar,
  StyledButton,
  StyledFormButton,
  ButtonGroup,
  StyledFormArea,
  colors
} from './../../components/Styles';

//Formik
import { Formik, Form } from 'formik';
import { TextInput } from '../../components/FormLib';

//Logo
import Logo from './../../assets/logo.png';

//auth & redux
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../auth/actions/userActions';
import { submitJob } from '../../auth/actions/submitJob';

//React router
import { useNavigate } from 'react-router-dom';

//Loader
import { ThreeDots } from 'react-loader-spinner';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Avatar image={Logo} />
      </div>
      <StyledFormArea bg={colors.dark2} style={{ marginLeft: '-400px' }}>
        <StyledTitle size={65}>Welcome to Dashboard </StyledTitle>
        <StyledSubTitle size={27}>Feel free to post new jobs</StyledSubTitle>
        <Formik
          initialValues={{
            title: '',
            description: ''
          }}
          onSubmit={(values) => {
            console.log(values);
            submitJob(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="title"
                type="text"
                label="Title of the new post: "
                placeholder="Job Title..."
              />
              <br></br>
              <TextInput
                name="description"
                type="text"
                label="Description of the new job: "
                placeholder="Job description..."
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit" to="/joblist">
                    Post Job
                  </StyledFormButton>
                )}
                {isSubmitting && (
                  <ThreeDots color="#4EBBF7" height={80} width={80} />
                )}
                <StyledButton
                  bg={colors.red}
                  style={{color: "red"}}
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(logoutUser(navigate));
                  }}
                >
                  Logout
                </StyledButton>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
      </StyledFormArea>
    </div>
  );
};

export default Dashboard;

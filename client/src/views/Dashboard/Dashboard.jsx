import {
  StyledTitle,
  StyledSubTitle,
  Avatar,
  StyledButton,
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

//React router
import { useNavigate } from 'react-router-dom';




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
        >
          <Form>
            <TextInput
              name="title"
              type="text"
              label="Title :"
              placeholder="Job Title"
            />
            <TextInput
              name="description"
              type="text"
              label="Description :"
              placeholder="Job description"
            />
          </Form>
        </Formik>
        <ButtonGroup>
          <StyledButton to="#">Post Job</StyledButton>
          <StyledButton
            bg={colors.red}
            to="#"
            onClick={()=> dispatch(logoutUser(navigate))}
          >
            Logout
          </StyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};

export default Dashboard;
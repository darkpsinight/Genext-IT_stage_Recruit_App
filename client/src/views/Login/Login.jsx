import {
  StyledTextInput,
  StyledLabel,
  StyledFormArea,
  StyledFormButton,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink
} from './../../components/Styles';
import Logo from './../../assets/logo.png';

//formik
import { Formik, Form } from 'formik';
import { TextInput } from '../../components/FormLib';

//yup validation
import * as Yup from 'yup';

//icons
import { FiMail, FiLock } from 'react-icons/fi';

//Loader
import { ThreeDots } from 'react-loader-spinner';

//auth & redux
import { connect } from 'react-redux';
import { loginUser } from '../../auth/actions/userActions';
import { useNavigate } from 'react-router-dom';

const Login = ({ loginUser }) => {
  const navigate = useNavigate();

  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Member Login
        </StyledTitle>
        <Formik
          //important tzid'ha sinon awel ma tikteb fil form tjik page blanche
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string()
              .min(8, 'Password is too short')
              .max(30, 'Password is too long')
              .required('Required')
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
            loginUser(values, navigate, setFieldError, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email :"
                placeholder="mail@mail.com"
                icon={<FiMail />}
              />

              <TextInput
                name="password"
                type="password"
                label="Password :"
                placeholder="*************"
                icon={<FiLock />}
              />

              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit">Login</StyledFormButton>
                )}
                {isSubmitting && (
                  <ThreeDots color="#4EBBF7" height={80} width={80} />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          New here? <TextLink to="/signup">Signup</TextLink>
        </ExtraText>
      </StyledFormArea>
    </div>
  );
};

export default connect(null, { loginUser })(Login);

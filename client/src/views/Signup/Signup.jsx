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
import { FiMail, FiLock, FiUser, FiCalendar } from 'react-icons/fi';

//Loader
import { ThreeDots } from 'react-loader-spinner';

//auth & redux
import { connect } from 'react-redux';
import { signupUser } from '../../auth/actions/userActions';
import { useNavigate } from 'react-router-dom';

const Signup = ({ signupUser }) => {
  const history = useNavigate();

  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Member Signup
        </StyledTitle>
        <Formik
          //important tzid'ha sinon awel ma tikteb fil form tjik page blanche
          initialValues={{
            email: '',
            password: '',
            repeatPassword: '',
            dateOfBirth: '',
            name: ''
          }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string()
              .min(8, 'Password is too short')
              .max(30, 'Password is too long')
              .required('Required'),
            name: Yup.string().required('Required'),
            dateOfBirth: Yup.date().required('Required'),
            repeatPassword: Yup.string()
              .required('Required')
              .oneOf([Yup.ref('password')], 'Password must match')
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
            signupUser(values, history, setFieldError, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                type="text"
                label="Full Name :"
                placeholder="Jhon Doe"
                icon={<FiUser />}
              />
              <TextInput
                name="email"
                type="text"
                label="Email Adress:"
                placeholder="mail@mail.com"
                icon={<FiMail />}
              />
              <TextInput
                name="dateOfBirth"
                type="date"
                label="Date Of Birth :"
                icon={<FiCalendar />}
              />
              <TextInput
                name="password"
                type="password"
                label="Password :"
                placeholder="*************"
                icon={<FiLock />}
              />
              <TextInput
                name="repeatPassword"
                type="password"
                label="Repeat Password :"
                placeholder="*************"
                icon={<FiLock />}
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit">Signup</StyledFormButton>
                )}
                {isSubmitting && (
                  <ThreeDots color="#4EBBF7" height={49} width={100} />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          Already have an account? <TextLink to="/login">Login</TextLink>
        </ExtraText>
      </StyledFormArea>
    </div>
  );
};

export default connect(null, { signupUser })(Signup);

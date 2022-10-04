import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { AuthenticationContainer } from './Authentication.styles';

const Login = () => {
  return (
    <AuthenticationContainer>
      <LoginForm />
      <RegisterForm />
    </AuthenticationContainer>
  );
};

export default Login;

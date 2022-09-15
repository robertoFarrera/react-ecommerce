import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LoginForm from '../../components/LoginForm/LoginForm';

import './Authentication.scss';

const Login = () => {
  return (
    <div className='authentication-container'>
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default Login;

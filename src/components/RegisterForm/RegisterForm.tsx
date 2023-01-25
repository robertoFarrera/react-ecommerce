import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../redux/user/userActions';

import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import { LoginFormContainer } from '../LoginForm/LoginForm.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [formFields, setFormFiields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormInputs = () => {
    setFormFiields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords does not match');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormInputs();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFiields({ ...formFields, [name]: value });
  };

  return (
    <LoginFormContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          id='displayName'
          name='displayName'
          required
          onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label='Email'
          type='emal'
          id='email'
          name='email'
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          id='password'
          name='password'
          required
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          required
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </LoginFormContainer>
  );
};

export default RegisterForm;

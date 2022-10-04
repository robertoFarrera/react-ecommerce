import { useState } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import { ButtonsContainer, LoginFormContainer } from './LoginForm.styles';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [formFields, setFormFiields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormInputs = () => {
    setFormFiields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormInputs();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Password does not match user credentials.');
          break;

        case 'auth/user-not-found':
          alert('Email not associated with any user.');
          break;

        default:
          console.log(error);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFiields({ ...formFields, [name]: value });
  };

  return (
    <LoginFormContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='emal'
          id='loginEmail'
          name='email'
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          id='LoginPassword'
          name='password'
          required
          onChange={handleChange}
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;

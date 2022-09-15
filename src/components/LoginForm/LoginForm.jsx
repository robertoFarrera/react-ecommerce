import { useState } from 'react';
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';

import './LoginForm.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [formFields, setFormFiields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);

  const resetFormInputs = () => {
    setFormFiields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
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
    <div className='register-form-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

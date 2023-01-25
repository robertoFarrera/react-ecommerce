import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import { ButtonsContainer, LoginFormContainer } from './LoginForm.styles';

import { useDispatch, useSelector } from 'react-redux';
import {
  emailSingInStart,
  googleSingInStart,
} from '../../redux/user/userActions';
import { FirebaseError } from 'firebase/app';
import { selectUserError } from '../../redux/user/userSelector';
import { AuthErrorCodes } from 'firebase/auth';

const defaultFormFields = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectUserError);
  const [formFields, setFormFiields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormInputs = () => {
    setFormFiields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSingInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSingInStart(email, password));
      resetFormInputs();
    } catch (error) {
      console.log('User sign in failed', error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFiields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert('Password does not match user credentials.');
          break;
        case AuthErrorCodes.USER_DELETED:
          alert('Email not associated with any user.');
          break;
        case AuthErrorCodes.EMAIL_EXISTS:
          alert('Cannot create user. Email is already in use.');
          break;
        default:
          console.log(error);
          break;
      }
    }
  }, [error]);

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

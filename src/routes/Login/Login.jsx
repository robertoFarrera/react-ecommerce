import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const Login = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Login</h1>
      <button type='button' onClick={signInWithGoogle}>
        Sing In With Google
      </button>
    </div>
  );
};

export default Login;

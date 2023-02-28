import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log("Response from Google: ", user);
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={ logGoogleUser }>
                Mit Google einloggen
            </button>
        </div>
    );
}

export default SignIn;
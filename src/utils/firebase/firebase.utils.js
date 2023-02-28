import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDcM4rsO2_tCGmkt9w5grvbUasX0txSMao",
    authDomain: "crwn-clothing-db-e59c1.firebaseapp.com",
    projectId: "crwn-clothing-db-e59c1",
    storageBucket: "crwn-clothing-db-e59c1.appspot.com",
    messagingSenderId: "733073200664",
    appId: "1:733073200664:web:b6f005af0ea7990541156d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log("UserDocRef: ", userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log("UserSnapshot: ", userSnapshot);
    console.log("UserSnapshot exists: ", userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
            console.log("User kaydi OLUSTURULDU...");
        }catch (e) {
            console.log('Error creating the user: ', e.message);
        }
    }

    return userDocRef;
}
import 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from '@firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCdVLy9jDsl2AOZH7oYqTM0o5xEervttb0",
    authDomain: "crwn-clothing-ccf4a.firebaseapp.com",
    projectId: "crwn-clothing-ccf4a",
    storageBucket: "crwn-clothing-ccf4a.appspot.com",
    messagingSenderId: "664201191093",
    appId: "1:664201191093:web:8ab3a12c1e68ffcfd1e8fc",
    measurementId: "G-Y0R4NKH6B9"
};

const app = initializeApp(firebaseConfig);


export const Auth = getAuth(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(Auth, provider);


// export default firebase;
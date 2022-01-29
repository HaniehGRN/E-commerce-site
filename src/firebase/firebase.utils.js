import 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { collection, getFirestore, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';

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

const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const usersRef = collection(db, "users");
    const userRef = doc(usersRef, userAuth.uid);
    const snapShot = await getDoc(userRef);

    if (snapShot.exists() == false) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            const docRef = await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            console.log(docRef.uid)
        }
        catch (error) {
            console.error(error);
        }
    }

    return userRef;

}

export const Auth = getAuth(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(Auth, provider);


// export default firebase;
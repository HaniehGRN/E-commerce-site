import { takeLatest, put, all } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import { Auth, googleProvider, createUserProfileDocument } from "../../firebase/firebase.utils";
import { signInWithPopup } from "firebase/auth";

export function* signInWithGoogle() {
    try {
        const userRef = () => signInWithPopup(Auth, googleProvider);
        console.log(userRef);
    } catch (error) {
        console.log(error.message)
    }
    
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
    yield all([onGoogleSignInStart()]);
}
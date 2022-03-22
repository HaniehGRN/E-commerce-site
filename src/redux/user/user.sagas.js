import { takeLatest, put, all } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import {
    Auth,
    googleProvider,
    createUserProfileDocument,
    getCurrentUser
} from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getDoc } from "firebase/firestore";
import {
    signInSuccess,
    signInFailure,
    signOutFailure,
    signOutSuccess,
    signUpFailure,
    signUpSuccess
} from "./user.actions";
import { createUserWithEmailAndPassword } from "firebase/auth";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield createUserProfileDocument(userAuth);
        const userSnapshot = yield getDoc(userRef);
        yield put(
            signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch (error) {
        put(signInFailure(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield signInWithPopup(Auth, googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        put(signInFailure(error));
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield signInWithEmailAndPassword(Auth, email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield signInFailure(error);
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signOut() {
    try {
        yield Auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield createUserWithEmailAndPassword(Auth, email, password);
        yield put(signUpSuccess({ user, additionalData: { displayName } }));
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

/////////////////////// listener ///////////////////////////


export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCHeckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onUserSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onUserSignUp() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onsignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
    yield all([
        onGoogleSignInStart(),
        onEmailSignInStart(),
        onCHeckUserSession(),
        onUserSignOut(),
        onUserSignUp(),
        onsignUpSuccess()
    ]);
}


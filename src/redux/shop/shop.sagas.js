import { takeLatest, put, all } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import { convertCollectionsSnapshotToMap, db } from "../../firebase/firebase.utils";
import { collection, getDocs } from 'firebase/firestore';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./shop.actions";


export function* fetchCollectionsAsync() {
    try {
        const collectionRef = collection(db, "collections");
        const snapshot = yield getDocs(collectionRef);
        const collectionsMap = yield convertCollectionsSnapshotToMap(snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([fetchCollectionsStart()]);
}
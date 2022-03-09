import ShopActionTypes from "./shop.types";
import { convertCollectionsSnapshotToMap, db } from "../../firebase/firebase.utils";
import { collection, getDocs } from 'firebase/firestore';

export const fetchCollectionsStart = () => (
    {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
    }
);

export const fetchCollectionsSuccess = collectionsMap => (
    {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    }
);

export const fetchCollectionsFailure = errorMessage => (
    {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: errorMessage
    }
);

export const fetchCollectionsStartAsynch = () => {
    return dispatch => {
        const collectionRef = collection(db, "collections");
        dispatch(fetchCollectionsStart());
        getDocs(collectionRef)
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch(error => {
                dispatch(fetchCollectionsFailure(error.message))
            });
    };
}
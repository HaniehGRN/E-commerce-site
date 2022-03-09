import { all } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

export function* rootSaga() {
    yield all([fetchCollectionsStart(), userSagas()]);
}
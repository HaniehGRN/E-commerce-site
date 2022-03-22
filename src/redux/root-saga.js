import { all } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

export function* rootSaga() {
    yield all([fetchCollectionsStart(), userSagas(), cartSagas()]);
}
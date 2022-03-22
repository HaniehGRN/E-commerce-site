import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
// import { fetchCollectionsStart } from "./shop/shop.sagas";
import { rootSaga } from "./root-saga";

import rootReducer from "./root-reducer";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];// extension point between dispaching an action & the moment it reaches the reducer 

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)

export default { store, persistor };
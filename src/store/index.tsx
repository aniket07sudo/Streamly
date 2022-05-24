import { applyMiddleware , compose , createStore} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import RootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import {persistStore} from "redux-persist";
import RootSaga from "./sagas/index";
// import hardSet from "redux-persist/es/stateReconciler/hardSet";

const persistConfig = {
    key:'root',
    storage:AsyncStorage,
    blacklist:['auth'],
}

const RootPersist = persistReducer(persistConfig,RootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootPersist,composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(RootSaga);

export const persistor = persistStore(store);

export default store;



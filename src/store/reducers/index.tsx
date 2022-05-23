import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import persistReducer from "redux-persist/lib/persistReducer";
import AuthReducer from "./auth";
import UiReducer from "./ui";


const AuthPersistConfig = {
    key:'auth',
    storage:AsyncStorage,
}

const UiPersistConfig = {
    key:'ui',
    storage:AsyncStorage,
}

const RootReducer = combineReducers({
    auth:persistReducer(AuthPersistConfig,AuthReducer),
    ui:persistReducer(UiPersistConfig,UiReducer)
})

export default RootReducer;
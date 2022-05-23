import * as types from "../actions/types";
import { REHYDRATE } from "redux-persist/lib/constants";

const initialState = {
    token:null,
    appinit:false,
}

const reducer = (state = initialState , action : any) => {
    switch(action.type) {
        case REHYDRATE:
            return {
                ...state
            }
        case types.APP_INIT_ASYNC:
            return {
                ...state,
                appinit:action.init
            }
        default:
            return state;
    }
}

export default reducer;
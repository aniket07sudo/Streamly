import * as types from "../actions/types";

const initialState = {
    ui:null,
}

const reducer = (state = initialState , action : any) => {
    switch(action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }
            default:
                return initialState;
    }
}

export default reducer;
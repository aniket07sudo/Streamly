import {call,put,takeEvery} from 'redux-saga/effects';
import * as types from "../actions/types";

function* appInit(action:any) {
    try {
        console.log(action);

        // const res = yield call(Auth.doRegister, payload.email, payload.password);
        yield put({ type:types.APP_INIT_ASYNC,init:true})
        
    } catch(e) {
        console.log(e);
        
    }
}

function *appInitSaga() {
    yield takeEvery(types.APP_INIT , appInit);
}

export default appInitSaga;
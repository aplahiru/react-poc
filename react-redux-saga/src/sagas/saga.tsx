import { delay, takeEvery } from '@redux-saga/core/effects';
import {takeLatest, put} from 'redux-saga/effects';

// dispatch action to reducer
function* incrementSaga(){
    yield delay(3000);
    yield put({type:"INCREMENT_COUNT_SAGA", payload: 1});
}

// watch action call
export function* watchIncrement(){
    // take latest click only
    yield takeLatest("INCREMENT_COUNT", incrementSaga);
}

// dispatch action to reducer
function* incrementSoonSaga(){
    yield put({type:"INCREMENT_COUNT_SAGA", payload: 1});
}

// watch action call
export function* watchIncrementSoon(){
    // take latest click only
    yield takeEvery("INCREMENT_COUNT_SOON", incrementSoonSaga);
}

// dispatch action to reducer
function* decrementSaga(){
    yield put({type:"DECREMENT_COUNT_SAGA", payload: 1});
}

// watch action call
export function* watchDecrement(){
    // take every click
    yield takeEvery("DECREMENT_COUNT", decrementSaga);
}
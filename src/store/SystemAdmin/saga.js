import {
  put,
  call,
  take,
  every,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import * as CONST from "./actionTypes";
import * as ACTION from "./actions";
import * as API from "../../Services/ApiCalls";
import { toast } from "react-toastify";

function* adminListsaga({ payload, callBack }) {
  try {
    const response = yield call(API.ADMIN_LIST, payload);
    if (response.status == 200) {
      yield put(ACTION.adminList_Success(response.data));
    } else {
      yield put(ACTION.adminList_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.adminList_Fail(response.data.error));
  }
}

function* addAdminsaga({ payload, callBack }) {
  try {
    const response = yield call(API.ADD_ADMIN_LIST, payload);
    if (response.status == 200) {
      yield put(ACTION.addAdmin_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.addAdmin_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.addAdmin_Fail(response.data.error));
  }
}

function* updateAdminsaga({ payload, callBack }) {
  try {
    const response = yield call(API.UPDATE_ADMIN_LIST, payload);
    if (response.status == 200) {
      yield put(ACTION.updateAdmin_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.updateAdmin_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.updateAdmin_Fail(response.data.error));
  }
}

function* changeAdminPasswordsaga({ payload, callBack }) {
  try {
    const response = yield call(API.CHANGE_ADMIN_PASSWORD, payload);
    // console.log("response", response);
    if (response.data && response.data.status == "success") {
      yield put(ACTION.changePassword_Success(response.data));
      callBack && callBack(response.data);
    } 
    else {
      toast.error(response.data.message);
    }
  } catch (error) {
    // console.log("callback response err", error);
    yield put(ACTION.changePassword_Fail(error));
  }
}

function* SystemAdminSaga() {
  yield takeEvery(CONST.ADMIN_LIST, adminListsaga);
  yield takeEvery(CONST.ADD_ADMIN_LIST, addAdminsaga);
  yield takeEvery(CONST.UPDATE_ADMIN_LIST, updateAdminsaga);
  yield takeEvery(CONST.CHANGE_ADMIN_PASSWORD, changeAdminPasswordsaga);
}

export default SystemAdminSaga;

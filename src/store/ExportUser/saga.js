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

function* exportUserSaga({ payload, callBack }) {
  try {
    const response = yield call(API.EXPORT_USER, payload);
    if (response.data.status == "success") {
      yield put(ACTION.exportUser_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.exportUser_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.exportUser_Fail(response.data.error));
  }
}

function* ExportUserSaga() {
  yield takeEvery(CONST.EXPORT_USER, exportUserSaga);
}

export default ExportUserSaga;

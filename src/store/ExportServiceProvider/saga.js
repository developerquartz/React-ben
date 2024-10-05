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

function* exportProviderSaga({ payload, callBack }) {
  try {
    const response = yield call(API.EXPORT_SERVICE_PROVIDER, payload);
    if (response.data.status == "success") {
      yield put(ACTION.exportServiceProvider_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.exportServiceProvider_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.exportServiceProvider_Fail(response.data.error));
  }
}

function* ExportServiceProviderSaga() {
  yield takeEvery(CONST.EXPORT_SERVICE_PROVIDER, exportProviderSaga);
}

export default ExportServiceProviderSaga;

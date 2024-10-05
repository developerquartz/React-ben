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

function* fileUploadSaga({ payload, name, callback }) {
  try {
    const response = yield call(API.FILE_UPLOAD, payload);
    console.log(response, "responseeeeee");
    callback && callback(response.data);
    if (response.data.data != "failed") {
      yield put(ACTION.fileUpload_Success(response.data));
    } else {
      yield put(ACTION.fileUpload_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.fileUpload_Fail(response.data.error));
  }
}

function* fileUpload() {
  yield takeEvery(CONST.FILE_UPLOAD, fileUploadSaga);
}

export default fileUpload;

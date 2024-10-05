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

function* getUserProfileSaga({ payload, callBack }) {
  try {
    const response = yield call(API.USER_DATA, payload);
    if (response.status == 200) {
      yield put(ACTION.getUserProfile_Success(response.data));
    } else {
      yield put(ACTION.getUserProfile_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.getUserProfile_Fail(response.data.error));
  }
}

function* ProfileSaga() {
  yield takeEvery(CONST.GET_USER_PROFILE, getUserProfileSaga);
}

export default ProfileSaga;

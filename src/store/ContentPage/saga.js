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

function* ContentPageListsaga({ payload, callBack }) {
  try {
    const response = yield call(API.CONTENTPAGE_LIST, payload);
    if (response.status == 200) {
      yield put(ACTION.contentPageList_Success(response.data));
    } else {
      yield put(ACTION.contentPageList_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.contentPageList_Fail(response.data.error));
  }
}

function* contentPageDetailssaga({ payload, callBack }) {
  try {
    const response = yield call(API.CONTENTPAGE_LIST_DETAILS, payload);
    // console.log("response", response);
    if (response.data && response.data.status == "success") {
      yield put(ACTION.contentPageDetails_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.contentPageDetails_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.contentPageDetails_Fail(response.data.error));
  }
}

function* ContentPageEditsaga({ payload, callBack }) {
  try {
    const response = yield call(API.CONTENTPAGE_EDIT, payload);
    if (response.status == 200) {
      yield put(ACTION.contentPageEdit_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.contentPageEdit_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.contentPageEdit_Fail(response.data.error));
  }
}

function* ContentpageSaga() {
  yield takeEvery(CONST.CONTENTPAGE_LIST, ContentPageListsaga);
  yield takeEvery(CONST.CONTENTPAGE_LIST_DETAILS, contentPageDetailssaga);
  yield takeEvery(CONST.CONTENTPAGE_EDIT, ContentPageEditsaga);
}

export default ContentpageSaga;

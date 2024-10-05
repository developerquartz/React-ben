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

function* faqListsaga({ payload, callBack }) {
  try {
    const response = yield call(API.FAQ_LIST, payload);
    if (response.status == 200) {
      yield put(ACTION.faqList_Success(response.data));
    } else {
      yield put(ACTION.faqList_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.faqList_Fail(response.data.error));
  }
}

function* addfaqsaga({ payload, callBack }) {
  try {
    const response = yield call(API.ADD_FAQ, payload);
    if (response.status == 200) {
      yield put(ACTION.addFaq_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.addFaq_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.addFaq_Fail(response.data.error));
  }
}

function* faqDetailssaga({ payload, callBack }) {
  try {
    const response = yield call(API.FAQ_DETAILS, payload);
    if (response.status == 200) {
      yield put(ACTION.faqDetails_Success(response.data));
    } else {
      yield put(ACTION.faqDetails_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.faqDetails_Fail(response.data.error));
  }
}

function* updatefaqsaga({ payload, callBack }) {
  try {
    const response = yield call(API.EDIT_FAQ, payload);
    if (response.status == 200) {
      yield put(ACTION.editFaq_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.editFaq_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.editFaq_Fail(response.data.error));
  }
}
function* deletefaqsaga({ payload, callBack }) {
  try {
    const response = yield call(API.DELETE_FAQ, payload);
    if (response.status == 200) {
      yield put(ACTION.deleteFaq_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.deleteFaq_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.deleteFaq_Fail(response.data.error));
  }
}

function* FaqSaga() {
  yield takeEvery(CONST.FAQ_LIST, faqListsaga);
  yield takeEvery(CONST.ADD_FAQ, addfaqsaga);
  yield takeEvery(CONST.FAQ_DETAILS, faqDetailssaga);
  yield takeEvery(CONST.EDIT_FAQ, updatefaqsaga);
  yield takeEvery(CONST.DELETE_FAQ, deletefaqsaga);
}

export default FaqSaga;

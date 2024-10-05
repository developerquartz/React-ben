import {
  put,
  call,
  takeEvery,
} from "redux-saga/effects";
import * as CONST from "./actionTypes";
import * as ACTION from "./actions";
import * as API from "../../Services/ApiCalls";
import { toast } from "react-toastify";

function* disputeListSaga({ payload, callBack }) {
  try {
    const response = yield call(API.DISPUTE_LIST, payload);
    // console.log("response", response);
    if (response.data && response.data.status == "success") {
      yield put(ACTION.disputesList_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.disputesList_Fail(response.data.error));
    }
  } catch (error) {
    // console.log("Error", error);
    yield put(ACTION.disputesList_Fail(error));
  }
}

function* disputeDetailSaga({ payload, callBack }) {
  try {
    const response = yield call(API.DISPUTE_DETAIL, payload);
    // console.log("response", response);
    if (response.data && response.data.status == "success") {
      yield put(ACTION.disputeDetails_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.disputeDetails_Fail(response.data.error));
    }
  } catch (error) {
    // console.log("Error", error);
    yield put(ACTION.disputeDetails_Fail(error));
  }
}

function* updateDisputeStatusSaga({ payload, callBack }) {
  try {
    const response = yield call(API.UPDATE_DISPUTE_STATUS, payload);
    // console.log("response", response);
    if (response.data && response.data.status == "success") {
      yield put(ACTION.updateDisputeStatus_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.updateDisputeStatus_Fail(response.data.error));
    }
  } catch (error) {
    // console.log("Error", error);
    yield put(ACTION.updateDisputeStatus_Fail(error));
  }
}

function* disputeReplySaga({ payload, callBack }) {
  try {
    const response = yield call(API.SEND_DISPUTE_REPLY, payload);
    // console.log("response", response);
    if (response.data && response.data.status == "success") {
      yield put(ACTION.disputeReply_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.disputeReply_Fail(response.data.error));
    }
  } catch (error) {
    // console.log("Error", error);
    yield put(ACTION.disputeReply_Fail(error));
  }
}

function* refundDisputeSaga({ payload, callBack }) {
  try {
    const response = yield call(API.REFUND_DISPUTE, payload);
    // console.log("response", response);
    if (response.data && response.data.status == "success") {
      yield put(ACTION.refundDispute_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.refundDispute_Fail(response.data.error));
    }
  } catch (error) {
    // console.log("Error", error);
    yield put(ACTION.refundDispute_Fail(error));
  }
}


function* DashboardSaga() {
  yield takeEvery(CONST.DISPUTES_LIST, disputeListSaga);
  yield takeEvery(CONST.DISPUTE_DETAIL, disputeDetailSaga);
  yield takeEvery(CONST.UPDATE_DISPUTE_STATUS, updateDisputeStatusSaga);
  yield takeEvery(CONST.DISPUTE_REPLY, disputeReplySaga);
  yield takeEvery(CONST.REFUND_DISPUTE, refundDisputeSaga);
}

export default DashboardSaga;
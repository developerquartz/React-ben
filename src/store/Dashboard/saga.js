import {
  put,
  call,
  takeEvery,
} from "redux-saga/effects";
import * as CONST from "./actionTypes";
import * as ACTION from "./actions";
import * as API from "../../Services/ApiCalls";
import { toast } from "react-toastify";

function* dashboardDetailsSaga({ payload, callBack }) {
  try {
    const response = yield call(API.DASHBOARD_DETAILS, payload);
    // console.log("response", response);
    if (response.data && response.data.status == "success") {
      yield put(ACTION.dashboardDetails_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.dashboardDetails_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.dashboardDetails_Fail(response.data.error));
  }
}

function* bookingListSaga({ payload, callBack }) {
  try {
    const response = yield call(API.BOOKINGS_LIST, payload);
    // console.log("response", response);
    if (response.data && response.data.status == "success") {
      yield put(ACTION.bookingsList_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.bookingsList_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.bookingsList_Fail(response.data.error));
  }
}

function* bookingDetailSaga({ payload, callBack }) {
  try {
    const response = yield call(API.BOOKING_DETAIL, payload);
    // console.log("response", response);
    if (response.data && response.data.status == "success") {
      yield put(ACTION.bookingDetail_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.bookingDetail_Fail(response.data.error));
    }
  } catch (error) {
    // console.log("Error", error);
    yield put(ACTION.bookingDetail_Fail(error));
  }
}

function* updateBookingStatusSaga({ payload, callBack }) {
  try {
    const response = yield call(API.UPDATE_BOOKING_STATUS, payload);
    // console.log("response", response);
    if (response.data && response.data.status == "success") {
      yield put(ACTION.updateBookingStatus_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.updateBookingStatus_Fail(response.data.error));
    }
  } catch (error) {
    // console.log("Error", error);
    yield put(ACTION.updateBookingStatus_Fail(error));
  }
}

function* adminTransactionListSaga({ payload, callBack }) {
  try {
    const response = yield call(API.ADMIN_TRANSACTION_LIST, payload);
    // console.log("response", response);
    if (response.data && response.data.status === "success") {
      yield put(ACTION.adminTransactionsList_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.adminTransactionsList_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.adminTransactionsList_Fail(response.data.error));
  }
}

function* providerWithdrawlListSaga({ payload, callBack }) {
  try {
    const response = yield call(API.PROVIDER_WITHDRAWL_LIST, payload);
    // console.log("response", response);
    if (response.data && response.data.status === "success") {
      yield put(ACTION.providerWithdrawlList_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.providerWithdrawlList_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.providerWithdrawlList_Fail(response.data.error));
  }
}

function* processWithdrawalSaga({ payload, callBack }) {
  try {
    const response = yield call(API.PROCESS_WITHDRAWAL, payload);
    // console.log("response", response);
    if (response.data && response.data.status === "success") {
      yield put(ACTION.processWithdrawal_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.processWithdrawal_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.processWithdrawal_Fail(response.data.error));
  }
} 

function* cancelWithdrawalSaga({ payload, callBack }) {
  try {
    const response = yield call(API.CANCEL_WITHDRAWAL, payload);
    // console.log("response", response);
    if (response.data && response.data.status === "success") {
      yield put(ACTION.cancelWithdrawal_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.cancelWithdrawal_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.cancelWithdrawal_Fail(response.data.error));
  }
} 

function* customerReportGraphSaga({ payload, callBack }) {
  try {
    const response = yield call(API.CUSTOMER_REPORT_GRAPH, payload);
    // console.log("response", response);
    if (response.data && response.data.status === "success") {
      yield put(ACTION.customerReportGraph_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.customerReportGraph_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.customerReportGraph_Fail(error));
  }
} 

function* bookingReportGraphSaga({ payload, callBack }) {
  try {
    const response = yield call(API.BOOKING_REPORT_GRAPH, payload);
    // console.log("response", response);
    if (response.data && response.data.status === "success") {
      yield put(ACTION.bookingReportGraph_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      // yield put(ACTION.bookingReportGraph_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.bookingReportGraph_Fail(error));
  }
} 

function* DashboardSaga() {
  yield takeEvery(CONST.DASHBOARD_DETAILS, dashboardDetailsSaga);
  yield takeEvery(CONST.BOOKINGS_LIST, bookingListSaga);
  yield takeEvery(CONST.BOOKING_DETAIL, bookingDetailSaga);
  yield takeEvery(CONST.UPDATE_BOOKING_STATUS, updateBookingStatusSaga);
  yield takeEvery(CONST.ADMIN_TRANSACTION_LIST, adminTransactionListSaga);
  yield takeEvery(CONST.PROVIDER_WITHDRAWL_LIST, providerWithdrawlListSaga);
  yield takeEvery(CONST.PROCESS_WITHDRAWAL, processWithdrawalSaga);
  yield takeEvery(CONST.CANCEL_WITHDRAWAL, cancelWithdrawalSaga);
  yield takeEvery(CONST.CUSTOMER_REPORT_GRAPH, customerReportGraphSaga);
  yield takeEvery(CONST.BOOKING_REPORT_GRAPH, bookingReportGraphSaga);
}

export default DashboardSaga;
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

function* exportProviderWithdrawlRequestsSaga({ payload, callBack }) {
  try {
    const response = yield call(API.EXPORT_PROVIDER_WITHDRAWL_LIST, payload);
    if (response.data && response.data.status === "success") {
      yield put(ACTION.exportProviderWithdrawlRequests_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(
        ACTION.exportProviderWithdrawlRequests_Fail(response.data.error)
      );
    }
  } catch (error) {
    yield put(ACTION.exportProviderWithdrawlRequests_Fail(response.data.error));
  }
}

function* exportAdminTransactionsSaga({ payload, callBack }) {
  try {
    const response = yield call(API.EXPORT_ADMIN_TRANSACTION_LIST, payload);
    // console.log(("response api", response))
    if (response.data && response.data.status === "success") {
      yield put(ACTION.exportAdminTransactions_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.exportAdminTransactions_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.exportAdminTransactions_Fail(response.data.error));
  }
}
function* exportBookingDataSaga({ payload, callBack }) {
  try {
    const response = yield call(API.BOOKINGS_LIST, payload);
    // console.log(("response api", response))
    if (response.data && response.data.status === "success") {
      yield put(ACTION.exportBooking_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.exportBooking_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.exportBooking_Fail(response.data.error));
  }
}

function* ExportServiceProviderSaga() {
  yield takeEvery(
    CONST.EXPORT_PROVIDER_WITHDRAWL_REQUESTS,
    exportProviderWithdrawlRequestsSaga
  );
  yield takeEvery(CONST.EXPORT_ADMIN_TRANSACTIONS, exportAdminTransactionsSaga);
  yield takeEvery(CONST.EXPORT_BOOKING_DATA, exportBookingDataSaga);
}

export default ExportServiceProviderSaga;

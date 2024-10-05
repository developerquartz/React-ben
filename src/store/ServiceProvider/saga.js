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

function* serviceProviderListSaga({ payload, callBack }) {
  try {
    const response = yield call(API.SERVICE_PROVIDER_LIST, payload);
    if (response.status == 200) {
      yield put(ACTION.serviceProviderList_Success(response.data));
    } else {
      yield put(ACTION.serviceProviderList_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.serviceProviderList_Fail(response.data.error));
  }
}
function* addServiceProvidersaga({ payload, callBack }) {
  try {
    const response = yield call(API.ADD_SERVICE_PROVIDER, payload);
    if (response.status == 200) {
      yield put(ACTION.addServiceprovider_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.addServiceprovider_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.addServiceprovider_Fail(response.data.error));
  }
}
function* editServiceProvidersaga({ payload, callBack }) {
  try {
    const response = yield call(API.EDIT_SERVICE_PROVIDER, payload);
    if (response.status == 200) {
      yield put(ACTION.editServiceProvider_Success(response.data));
    } else {
      yield put(ACTION.editServiceProvider_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.editServiceProvider_Fail(response.data.error));
  }
}
function* updateServiceProviderSaga({ payload, callBack }) {
  try {
    const response = yield call(API.UPDATE_SERVICE_PROVIDER, payload);
    if (response.data.status == "success") {
      yield put(ACTION.updateServiceProvider_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.updateServiceProvider_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.updateServiceProvider_Fail(response.data.error));
  }
}
function* blockUnblockProviderSaga({ payload, callBack }) {
  try {
    const response = yield call(API.BLOCK_UNBLOCK_PROVIDER, payload);
    if (response.data.status == "success") {
      yield put(ACTION.blockUnblockProvider_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.blockUnblockProvider_Fail(response.data.error));
    }
  } catch (error) {
    // console.log("callback response err", error);
    yield put(ACTION.blockUnblockProvider_Fail(response.data.error));
  }
}
function* deleteProvidesaga({ payload, callBack }) {
  try {
    const response = yield call(API.DELETE_SERVICE_PROVIDER, payload);
    if (response.data.status == "success") {
      yield put(ACTION.deleteServiceProvider_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.deleteServiceProvider_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.deleteServiceProvider_Fail(response.data.error));
  }
}

function* updateServiceProviderStatusSaga({ payload, callBack }) {
  try {
    const response = yield call(API.UPDATE_SERVICE_PROVIDER_STATUS, payload);
    if (response.data.status == "success") {
      yield put(ACTION.updateServiceProviderStatus_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.updateServiceProviderStatus_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.updateServiceProviderStatus_Fail(response.data.error));
  }
}

function* driverListSaga({ payload, callBack }) {
  try {
    const response = yield call(API.GET_DRIVER_LIST, payload);
    if (response.status == 200) {
      yield put(ACTION.getDriversList_Success(response.data));
    } else {
      yield put(ACTION.getDriversList_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.getDriversList_Fail(response.data.error));
  }
}

function* ServiceProviderSaga() {
  yield takeEvery(CONST.SERVICE_PROVIDER_LIST, serviceProviderListSaga);
  yield takeEvery(CONST.ADD_SERVICE_PROVIDER, addServiceProvidersaga);
  yield takeEvery(CONST.EDIT_SERVICE_PROVIDER, editServiceProvidersaga);
  yield takeEvery(CONST.UPDATE_SERVICE_PROVIDER, updateServiceProviderSaga);
  yield takeEvery(CONST.BLOCK_UNBLOCK_PROVIDER, blockUnblockProviderSaga);
  yield takeEvery(CONST.DELETE_SERVICE_PROVIDER, deleteProvidesaga);
  yield takeEvery(CONST.UPDATE_SERVICE_PROVIDER_STATUS, updateServiceProviderStatusSaga);
  yield takeEvery(CONST.GET_DRIVERS_LIST, driverListSaga);
}

export default ServiceProviderSaga;

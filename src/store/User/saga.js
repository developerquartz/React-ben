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

function* customerListSaga({ payload, callBack }) {
  try {
    const response = yield call(API.CUSTOMERS_LIST, payload);
    if (response.status == 200) {
      yield put(ACTION.customerList_Success(response.data));
    } else {
      yield put(ACTION.customerList_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.customerList_Fail(response.data.error));
  }
}
function* EditUsersaga({ payload, callBack }) {
  try {
    const response = yield call(API.EDIT_MANAGE_CUSTOMER, payload);
    if (response.status == 200) {
      yield put(ACTION.editCustomer_Success(response.data));
    } else {
      yield put(ACTION.editCustomer_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.editCustomer_Fail(response.data.error));
  }
}
function* updateUserSaga({ payload, callBack }) {
  try {
    const response = yield call(API.UPDATE_USER, payload);
    if (response.data.status == "success") {
      yield put(ACTION.updateUser_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.updateUser_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.updateUser_Fail(response.data.error));
  }
}
function* addUserSaga({ payload, callBack }) {
  try {
    const response = yield call(API.ADD_USER, payload);
    if (response.data.status == "success") {
      yield put(ACTION.addUser_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.addUser_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.addUser_Fail(response.data.error));
  }
}
function* blockUnblockUserSaga({ payload, callBack }) {
  try {
    const response = yield call(API.BLOCK_UNBLOCK_USER, payload);
    if (response.data.status == "success") {
      yield put(ACTION.blockUnblockUser_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.blockUnblockUser_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.blockUnblockUser_Fail(response.data.error));
  }
}
function* deleteUserSaga({ payload, callBack }) {
  try {
    const response = yield call(API.DELETE_USER, payload);
    if (response.data.status == "success") {
      yield put(ACTION.deleteUser_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.deleteUser_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.deleteUser_Fail(response.data.error));
  }
}

function* UserSaga() {
  yield takeEvery(CONST.CUSTOMERS_LIST, customerListSaga);
  yield takeEvery(CONST.EDIT_CUSTOMER, EditUsersaga);
  yield takeEvery(CONST.UPDATE_USER, updateUserSaga);
  yield takeEvery(CONST.ADD_USER, addUserSaga);
  yield takeEvery(CONST.BLOCK_UNBLOCK_USER, blockUnblockUserSaga);
  yield takeEvery(CONST.DELETE_USER, deleteUserSaga);
}

export default UserSaga;

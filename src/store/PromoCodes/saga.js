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

function* promoCodeListsaga({ payload, callBack }) {
  try {
    const response = yield call(API.PROMO_CODE_LIST, payload);
    if (response.status == 200) {
      yield put(ACTION.promoCodeList_Success(response.data));
    } else {
      yield put(ACTION.promoCodeList_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.promoCodeList_Fail(response.data.error));
  }
}

function* addPromosaga({ payload, callBack }) {
  try {
    const response = yield call(API.ADD_PROMO_CODE, payload);
    if (response.status == 200) {
      yield put(ACTION.addPromoCode_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.addPromoCode_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.addPromoCode_Fail(response.data.error));
  }
}

function* PromoDetailssaga({ payload, callBack }) {
  try {
    const response = yield call(API.PROMO_CODE_DETAILS, payload);
    if (response.status == 200) {
      yield put(ACTION.promoCodeDetails_Success(response.data));
    } else {
      yield put(ACTION.promoCodeDetails_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.promoCodeDetails_Fail(response.data.error));
  }
}

function* updatePromoCodesaga({ payload, callBack }) {
  try {
    const response = yield call(API.EDIT_PROMO_CODES, payload);
    if (response.status == 200) {
      yield put(ACTION.editPromoCodes_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.editPromoCodes_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.editPromoCodes_Fail(response.data.error));
  }
}
function* deletePromosaga({ payload, callBack }) {
  try {
    const response = yield call(API.DELETE_PROMO_CODE, payload);
    if (response.status == 200) {
      yield put(ACTION.deletePromo_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.deletePromo_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.deletePromo_Fail(response.data.error));
  }
}

function* PromoCodeSaga() {
  yield takeEvery(CONST.PROMO_CODE_LIST, promoCodeListsaga);
  yield takeEvery(CONST.ADD_PROMO_CODE, addPromosaga);
  yield takeEvery(CONST.PROMO_CODE_DETAILS, PromoDetailssaga);
  yield takeEvery(CONST.EDIT_PROMO_CODES, updatePromoCodesaga);
  yield takeEvery(CONST.DELETE_PROMO_CODE, deletePromosaga);
}

export default PromoCodeSaga;

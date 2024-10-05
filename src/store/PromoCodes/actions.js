import * as CONST from "./actionTypes";

export const promoCodeList = (payload, callBack) => {
  return {
    type: CONST.PROMO_CODE_LIST,
    payload: { ...payload },
    callBack,
  };
};

export const promoCodeList_Success = (payload) => ({
  type: CONST.PROMO_CODE_LIST_SUCCESS,
  payload,
});

export const promoCodeList_Fail = (payload) => ({
  type: CONST.PROMO_CODE_LIST_FAIL,
  payload,
});

// // =================ADDPROMOCODE=================== //

export const addPromoCode = (payload, callBack) => {
  return {
    type: CONST.ADD_PROMO_CODE,
    payload: { ...payload },
    callBack,
  };
};

export const addPromoCode_Success = (payload) => ({
  type: CONST.ADD_PROMO_CODE_SUCCESS,
  payload,
});

export const addPromoCode_Fail = (payload) => ({
  type: CONST.ADD_PROMO_CODE_FAIL,
  payload,
});

// // ================= PROMOCODEDETALS =================== //

export const promoCodeDetails = (payload, callBack) => {
  return {
    type: CONST.PROMO_CODE_DETAILS,
    payload: payload,
    callBack,
  };
};

export const promoCodeDetails_Success = (payload) => ({
  type: CONST.PROMO_CODE_DETAILS_SUCCESS,
  payload,
});

export const promoCodeDetails_Fail = (payload) => ({
  type: CONST.PROMO_CODE_DETAILS_FAIL,
  payload,
});

// // // =================Edit PromoCode =================== //

export const editPromoCodes = (payload, callBack) => {
  return {
    type: CONST.EDIT_PROMO_CODES,
    payload: { ...payload },
    callBack,
  };
};

export const editPromoCodes_Success = (payload) => ({
  type: CONST.EDIT_PROMO_CODES_SUCCESS,
  payload,
});

export const editPromoCodes_Fail = (payload) => ({
  type: CONST.EDIT_PROMO_CODES_FAIL,
  payload,
});

// // // =================DELETEPROMOCODE =================== //

export const deletePromo = (payload, callBack) => {
  return {
    type: CONST.DELETE_PROMO_CODE,
    payload: payload,
    callBack,
  };
};

export const deletePromo_Success = (payload) => ({
  type: CONST.DELETE_PROMO_CODE_SUCCESS,
  payload,
});

export const deletePromo_Fail = (payload) => ({
  type: CONST.DELETE_PROMO_CODE_FAIL,
  payload,
});

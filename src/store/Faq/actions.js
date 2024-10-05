import * as CONST from "./actionTypes";

export const faqList = (payload, callBack) => {
  return {
    type: CONST.FAQ_LIST,
    payload: { ...payload },
    callBack,
  };
};

export const faqList_Success = (payload) => ({
  type: CONST.FAQ_LIST_SUCCESS,
  payload,
});

export const faqList_Fail = (payload) => ({
  type: CONST.FAQ_LIST_FAIL,
  payload,
});

// // =================ADDFAQ=================== //

export const addFaq = (payload, callBack) => {
  return {
    type: CONST.ADD_FAQ,
    payload: { ...payload },
    callBack,
  };
};

export const addFaq_Success = (payload) => ({
  type: CONST.ADD_FAQ_SUCCESS,
  payload,
});

export const addFaq_Fail = (payload) => ({
  type: CONST.ADD_FAQ_FAIL,
  payload,
});

// ================= FAQDETAILS =================== //

export const faqDetails = (payload, callBack) => {
  return {
    type: CONST.FAQ_DETAILS,
    payload: payload,
    callBack,
  };
};

export const faqDetails_Success = (payload) => ({
  type: CONST.FAQ_DETAILS_SUCCESS,
  payload,
});

export const faqDetails_Fail = (payload) => ({
  type: CONST.FAQ_DETAILS_FAIL,
  payload,
});

// // =================EDITFAQ =================== //

export const editFaq = (payload, callBack) => {
  return {
    type: CONST.EDIT_FAQ,
    payload: { ...payload },
    callBack,
  };
};

export const editFaq_Success = (payload) => ({
  type: CONST.EDIT_FAQ_SUCCESS,
  payload,
});

export const editFaq_Fail = (payload) => ({
  type: CONST.EDIT_FAQ_FAIL,
  payload,
});

// // =================DELETEFAQ =================== //

export const deleteFaq = (payload, callBack) => {
  return {
    type: CONST.DELETE_FAQ,
    payload: { ...payload },
    callBack,
  };
};

export const deleteFaq_Success = (payload) => ({
  type: CONST.DELETE_FAQ_SUCCESS,
  payload,
});

export const deleteFaq_Fail = (payload) => ({
  type: CONST.DELETE_FAQ_FAIL,
  payload,
});

import * as CONST from "./actionTypes";

export const contentPageList = (payload, callBack) => {
  return {
    type: CONST.CONTENTPAGE_LIST,
    payload: { ...payload },
    callBack,
  };
};

export const contentPageList_Success = (payload) => ({
  type: CONST.CONTENTPAGE_LIST_SUCCESS,
  payload,
});

export const contentPageList_Fail = (payload) => ({
  type: CONST.CONTENTPAGE_LIST_FAIL,
  payload,
});

// ================= CONTENTPAGEDETAILS =================== //

export const contentPageDetails = (payload, callBack) => {
  return {
    type: CONST.CONTENTPAGE_LIST_DETAILS,
    payload: payload,
    callBack,
  };
};

export const contentPageDetails_Success = (payload) => ({
  type: CONST.CONTENTPAGE_LIST_DETAILS_SUCCESS,
  payload,
});

export const contentPageDetails_Fail = (payload) => ({
  type: CONST.CONTENTPAGE_LIST_DETAILS_FAIL,
  payload,
});

// ================= CONTENTPAGEUPDATE =================== //

export const contentPageEdit = (payload, callBack) => {
  return {
    type: CONST.CONTENTPAGE_EDIT,
    payload: { ...payload },
    callBack,
  };
};

export const contentPageEdit_Success = (payload) => ({
  type: CONST.CONTENTPAGE_EDIT_SUCCESS,
  payload,
});

export const contentPageEdit_Fail = (payload) => ({
  type: CONST.CONTENTPAGE_EDIT_FAIL,
  payload,
});

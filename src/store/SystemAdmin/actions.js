import * as CONST from "./actionTypes";

export const adminList = (payload, callBack) => {
  return {
    type: CONST.ADMIN_LIST,
    payload: { ...payload },
    callBack,
  };
};

export const adminList_Success = (payload) => ({
  type: CONST.ADMIN_LIST_SUCCESS,
  payload,
});

export const adminList_Fail = (payload) => ({
  type: CONST.ADMIN_LIST_FAIL,
  payload,
});

// // ================= ADDADMIN =================== //

export const addAdmin = (payload, callBack) => {
  return {
    type: CONST.ADD_ADMIN_LIST,
    payload: { ...payload },
    callBack,
  };
};

export const addAdmin_Success = (payload) => ({
  type: CONST.ADD_ADMIN_LIST_SUCCESS,
  payload,
});

export const addAdmin_Fail = (payload) => ({
  type: CONST.ADD_ADMIN_LIST_FAIL,
  payload,
});

// // ================= EDITADMIN =================== //

export const updateAdmin = (payload, callBack) => {
  return {
    type: CONST.UPDATE_ADMIN_LIST,
    payload: { ...payload },
    callBack,
  };
};

export const updateAdmin_Success = (payload) => ({
  type: CONST.UPDATE_ADMIN_LIST_SUCCESS,
  payload,
});

export const updateAdmin_Fail = (payload) => ({
  type: CONST.UPDATE_ADMIN_LIST_FAIL,
  payload,
});

// // ================= Change Password =================== //

export const changePassword = (payload, callBack) => {
  return {
    type: CONST.CHANGE_ADMIN_PASSWORD,
    payload: { ...payload },
    callBack,
  };
};

export const changePassword_Success = (payload) => ({
  type: CONST.CHANGE_ADMIN_PASSWORD_SUCCESS,
  payload
});

export const changePassword_Fail = (payload) => ({
  type: CONST.CHANGE_ADMIN_PASSWORD_FAIL,
  payload,
});

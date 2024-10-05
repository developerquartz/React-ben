import * as CONST from "./actionTypes";

export const customerList = (payload, callBack) => {
  return {
    type: CONST.CUSTOMERS_LIST,
    payload: { ...payload },
    callBack,
  };
};

export const customerList_Success = (payload) => ({
  type: CONST.CUSTOMERS_LIST_SUCCESS,
  payload,
});

export const customerList_Fail = (payload) => ({
  type: CONST.CUSTOMERS_LIST_FAIL,
  payload,
});

/* >>>>>>>>>>>>>> EDIT CUSTOMER >>>>>>>>>>>>>>>*/
export const editCustomer = (payload, callBack) => {
  return {
    type: CONST.EDIT_CUSTOMER,
    payload: payload,
    callBack,
  };
};

export const editCustomer_Success = (payload) => ({
  type: CONST.EDIT_CUSTOMER_SUCCESS,
  payload,
});

export const editCustomer_Fail = (payload) => ({
  type: CONST.EDIT_CUSTOMER_FAIL,
  payload,
});

/* >>>>>>>>>>>>>> UPDATE USER >>>>>>>>>>>>>>>*/

export const updateUser = (payload, callBack) => {
  return {
    type: CONST.UPDATE_USER,
    payload: { ...payload },
    callBack,
  };
};

export const updateUser_Success = (payload) => ({
  type: CONST.UPDATE_USER_SUCCESS,
  payload,
});

export const updateUser_Fail = (payload) => ({
  type: CONST.UPDATE_USER_FAIL,
  payload,
});

/* >>>>>>>>>>>>>> ADD USER >>>>>>>>>>>>>>>*/

export const addUser = (payload, callBack) => {
  return {
    type: CONST.ADD_USER,
    payload: { ...payload },
    callBack,
  };
};

export const addUser_Success = (payload) => ({
  type: CONST.ADD_USER_SUCCESS,
  payload,
});

export const addUser_Fail = (payload) => ({
  type: CONST.ADD_USER_FAIL,
  payload,
});

/* >>>>>>>>>>>>>> BLOCK_UNBLOCK USER >>>>>>>>>>>>>>>*/

export const blockUnblockUser = (payload, callBack) => {
  return {
    type: CONST.BLOCK_UNBLOCK_USER,
    payload: { ...payload },
    callBack,
  };
};

export const blockUnblockUser_Success = (payload) => ({
  type: CONST.BLOCK_UNBLOCK_USER_SUCCESS,
  payload,
});

export const blockUnblockUser_Fail = (payload) => ({
  type: CONST.BLOCK_UNBLOCK_USER_FAIL,
  payload,
});

/* >>>>>>>>>>>>>> DELETE USER >>>>>>>>>>>>>>>*/

export const deleteUser = (payload, callBack) => {
  return {
    type: CONST.DELETE_USER,
    payload: { ...payload },
    callBack,
  };
};

export const deleteUser_Success = (payload) => ({
  type: CONST.DELETE_USER_SUCCESS,
  payload,
});

export const deleteUser_Fail = (payload) => ({
  type: CONST.DELETE_USER_FAIL,
  payload,
});

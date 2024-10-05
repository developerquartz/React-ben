import * as CONST from "./actionTypes";

export const exportUser = (payload, callBack) => {
  return {
    type: CONST.EXPORT_USER,
    payload: { ...payload },
    callBack,
  };
};

export const exportUser_Success = (payload) => ({
  type: CONST.EXPORT_USER_SUCCESS,
  payload,
});

export const exportUser_Fail = (payload) => ({
  type: CONST.EXPORT_USER_FAIL,
  payload,
});

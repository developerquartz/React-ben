import * as CONST from "./actionTypes";

export const getUserProfile = (payload, callBack) => {
  return {
    type: CONST.GET_USER_PROFILE,
    payload: { ...payload },
    callBack,
  };
};

export const getUserProfile_Success = (payload) => ({
  type: CONST.GET_USER_PROFILE_SUCCESS,
  payload,
});

export const getUserProfile_Fail = (payload) => ({
  type: CONST.GET_USER_PROFILE_FAIL,
  payload,
});

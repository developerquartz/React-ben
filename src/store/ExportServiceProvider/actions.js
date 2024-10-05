import * as CONST from "./actionTypes";

export const exportServiceProvider = (payload, callBack) => {
  return {
    type: CONST.EXPORT_SERVICE_PROVIDER,
    payload: { ...payload },
    callBack,
  };
};

export const exportServiceProvider_Success = (payload) => ({
  type: CONST.EXPORT_SERVICE_PROVIDER_SUCCESS,
  payload,
});

export const exportServiceProvider_Fail = (payload) => ({
  type: CONST.EXPORT_SERVICE_PROVIDER_FAIL,
  payload,
});

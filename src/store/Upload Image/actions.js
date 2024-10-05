import * as CONST from "./actionTypes";

export const fileUpload = (payload, name = null, callback) => {
  return {
    type: CONST.FILE_UPLOAD,
    payload: payload,
    callback,
    name,
  };
};

export const fileUpload_Success = (payload) => ({
  type: CONST.FILE_UPLOAD_SUCCESS,
  payload,
});

export const fileUpload_Fail = (payload) => ({
  type: CONST.FILE_UPLOAD_FAIL,
  payload,
});

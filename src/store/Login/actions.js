import * as CONST from "./actionTypes";

export const loginUser = (payload, callBack) => {
  return {
    type: CONST.LOGIN_USER,
    payload: { ...payload },
    callBack,
  };
};

export const loginUser_Success = (payload) => ({
  type: CONST.LOGIN_USER_SUCCESS,
  payload,
});

export const loginUser_Fail = (payload) => ({
  type: CONST.LOGIN_USER_FAIL,
  payload,
});

// ==================================================== //

export const loginOtp = (payload, callBack) => {
  return {
    type: CONST.LOGIN_OTP,
    payload: { ...payload },
    callBack,
  };
};

export const loginOtp_Success = (payload) => ({
  type: CONST.LOGIN_OTP_SUCCESS,
  payload,
});

export const loginOtp_Fail = (payload) => ({
  type: CONST.LOGIN_OTP_FAIL,
  payload,
});

// ==================================================== //

export const forgotPassOtp = (payload, callBack) => {
  return {
    type: CONST.FORGOT_PASS_OTP,
    payload: { ...payload },
    callBack,
  };
};

export const forgotPassOtp_Success = (payload) => ({
  type: CONST.FORGOT_PASS_OTP_SUCCESS,
  payload,
});

export const forgotPassOtp_Fail = (payload) => ({
  type: CONST.FORGOT_PASS_OTP_FAIL,
  payload,
});

// ==================================================== //

export const userData = (payload, callBack) => {
  return {
    type: CONST.USER_DATA,
    payload: { ...payload },
    callBack,
  };
};

export const userData_Success = (payload) => ({
  type: CONST.USER_DATA_SUCCESS,
  payload,
});

export const userData_Fail = (payload) => ({
  type: CONST.USER_DATA_FAIL,
  payload,
});

// ==================================================== //

export const updateUserData = (payload, callBack) => {
  return {
    type: CONST.UPDATE_USER_DATA,
    payload: { ...payload },
    callBack,
  };
};

export const updateUserData_Success = (payload) => ({
  type: CONST.UPDATE_USER_DATA_SUCCESS,
  payload,
});

export const updateUserData_Fail = (payload) => ({
  type: CONST.UPDATE_USER_DATA_FAIL,
  payload,
});

// ==================================================== //

export const getDocuments = (payload, callBack) => {
  return {
    type: CONST.GET_DOCUMENTS,
    payload: { ...payload },
    callBack,
  };
};

export const getDocuments_Success = (payload) => ({
  type: CONST.GET_DOCUMENTS_SUCCESS,
  payload,
});

export const getDocuments_Fail = (payload) => ({
  type: CONST.GET_DOCUMENTS_FAIL,
  payload,
});

// ==================================================== //

export const postDocument = (payload, callBack) => {
  return {
    type: CONST.POST_DOCUMENT,
    payload: { ...payload },
    callBack,
  };
};

export const postDocument_Success = (payload) => ({
  type: CONST.POST_DOCUMENT_SUCCESS,
  payload,
});

export const postDocument_Fail = (payload) => ({
  type: CONST.POST_DOCUMENT_FAIL,
  payload,
});

// ==================================================== //

export const checkForgotOtp = (payload, callBack) => {
  return {
    type: CONST.CHECK_FORGOT_OTP,
    payload: { ...payload },
    callBack,
  };
};

export const checkForgotOtp_Success = (payload) => ({
  type: CONST.CHECK_FORGOT_OTP_SUCCESS,
  payload,
});

export const checkForgotOtp_Fail = (payload) => ({
  type: CONST.CHECK_FORGOT_OTP_FAIL,
  payload,
});

// ==================================================== //

export const changePass = (payload, callBack) => {
  return {
    type: CONST.CHANGE_PASS,
    payload: { ...payload },
    callBack,
  };
};

export const changePass_Success = (payload) => ({
  type: CONST.CHANGE_PASS_SUCCESS,
  payload,
});

export const changePass_Fail = (payload) => ({
  type: CONST.CHANGE_PASS_FAIL,
  payload,
});

// ==================================================== //

export const createPass = (payload, callBack) => {
  return {
    type: CONST.CREATE_PASS,
    payload: { ...payload },
    callBack,
  };
};

export const createPass_Success = (payload) => ({
  type: CONST.CREATE_PASS_SUCCESS,
  payload,
});

export const createPass_Fail = (payload) => ({
  type: CONST.CREATE_PASS_FAIL,
  payload,
});

// ==================================================== //

export const getDocumentById = (payload, callBack) => {
  return {
    type: CONST.GET_DOCUMENT_BY_ID,
    payload: { ...payload },
    callBack,
  };
};

export const getDocumentById_Success = (payload) => ({
  type: CONST.GET_DOCUMENT_BY_ID_SUCCESS,
  payload,
});

export const getDocumentById_Fail = (payload) => ({
  type: CONST.GET_DOCUMENT_BY_ID_FAIL,
  payload,
});

// ==================================================== //

export const postContact = (payload, callBack) => {
  return {
    type: CONST.POST_CONTACT,
    payload: { ...payload },
    callBack,
  };
};

export const postContact_Success = (payload) => ({
  type: CONST.POST_CONTACT_SUCCESS,
  payload,
});

export const postContact_Fail = (payload) => ({
  type: CONST.POST_CONTACT_FAIL,
  payload,
});

// ==================================================== //

export const postFacebook = (payload, callBack) => {
  return {
    type: CONST.POST_FACEBOOK,
    payload: { ...payload },
    callBack,
  };
};

export const postFacebook_Success = (payload) => ({
  type: CONST.POST_FACEBOOK_SUCCESS,
  payload,
});

export const postFacebook_Fail = (payload) => ({
  type: CONST.POST_FACEBOOK_FAIL,
  payload,
});

// ==================================================== //

export const postInstagram = (payload, callBack) => {
  return {
    type: CONST.POST_INSTAGRAM,
    payload: { ...payload },
    callBack,
  };
};

export const postInstagram_Success = (payload) => ({
  type: CONST.POST_INSTAGRAM_SUCCESS,
  payload,
});

export const postInstagram_Fail = (payload) => ({
  type: CONST.POST_INSTAGRAM_FAIL,
  payload,
});

// ==================================================== //

export const postTwitter = (payload, callBack) => {
  return {
    type: CONST.POST_TWITTER,
    payload: { ...payload },
    callBack,
  };
};

export const postTwitter_Success = (payload) => ({
  type: CONST.POST_TWITTER_SUCCESS,
  payload,
});

export const postTwitter_Fail = (payload) => ({
  type: CONST.POST_TWITTER_FAIL,
  payload,
});

// ==================================================== //

export const postYoutube = (payload, callBack) => {
  return {
    type: CONST.POST_YOUTUBE,
    payload: { ...payload },
    callBack,
  };
};

export const postYoutube_Success = (payload) => ({
  type: CONST.POST_YOUTUBE_SUCCESS,
  payload,
});

export const postYoutube_Fail = (payload) => ({
  type: CONST.POST_YOUTUBE_FAIL,
  payload,
});

// ==================================================== //

export const postTiktok = (payload, callBack) => {
  return {
    type: CONST.POST_TIKTOK,
    payload: { ...payload },
    callBack,
  };
};

export const postTiktok_Success = (payload) => ({
  type: CONST.POST_TIKTOK_SUCCESS,
  payload,
});

export const postTiktok_Fail = (payload) => ({
  type: CONST.POST_TIKTOK_FAIL,
  payload,
});

// ==================================================== //

export const postSubscribe = (payload, callBack) => {
  return {
    type: CONST.POST_SUBSCRIBE,
    payload: { ...payload },
    callBack,
  };
};

export const postSubscribe_Success = (payload) => ({
  type: CONST.POST_SUBSCRIBE_SUCCESS,
  payload,
});

export const postSubscribe_Fail = (payload) => ({
  type: CONST.POST_SUBSCRIBE_FAIL,
  payload,
});

// ==================================================== //

export const getContactDetail = (payload, callBack) => {
  return {
    type: CONST.GET_CONTACT_DETAIL,
    payload: { ...payload },
    callBack,
  };
};

export const getContactDetail_Success = (payload) => ({
  type: CONST.GET_CONTACT_DETAIL_SUCCESS,
  payload,
});

export const getContactDetail_Fail = (payload) => ({
  type: CONST.GET_CONTACT_DETAIL_FAIL,
  payload,
});

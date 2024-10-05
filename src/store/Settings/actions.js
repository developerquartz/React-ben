import * as CONST from "./actionTypes";

// =================BASIC-SETTING-DETAILS =================== //

export const basicSettingDetails = (payload, callBack) => {
  return {
    type: CONST.BASIC_SETTING_DETAILS,
    payload: payload,
    callBack,
  };
};

export const basicSettingDetails_Success = (payload) => ({
  type: CONST.BASIC_SETTING_DETAILS_SUCCESS,
  payload,
});

export const basicSettingDetails_Fail = (payload) => ({
  type: CONST.BASIC_SETTING_DETAILS_FAIL,
  payload,
});

// =================GET-CONFIG-DETAILS =================== //

export const getConfigDetails = (payload, callBack) => {
  return {
    type: CONST.GET_CONFIG_DETAILS,
    payload: payload,
    callBack,
  };
};

export const getConfigDetails_Success = (payload) => ({
  type: CONST.GET_CONFIG_DETAILS_SUCCESS,
  payload,
});

export const getConfigDetails_Fail = (payload) => ({
  type: CONST.GET_CONFIG_DETAILS_FAIL,
  payload,
});

// // ================= BASIC_SETTING_UPDATE =================== //

export const basicSettingUpdate = (payload, callBack) => {
  return {
    type: CONST.BASIC_SETTING_UPDATE,
    payload: { ...payload },
    callBack,
  };
};

export const basicSettingUpdate_Success = (payload) => ({
  type: CONST.BASIC_SETTING_UPDATE_SUCCESS,
  payload,
});

export const basicSettingUpdate_Fail = (payload) => ({
  type: CONST.BASIC_SETTING_UPDATE_FAIL,
  payload,
});

// // ================= GET_CONFIG_UPDATE =================== //

export const getConfigUpdate = (payload, callBack) => {
  return {
    type: CONST.GET_CONFIG_UPDATE,
    payload: { ...payload },
    callBack,
  };
};

export const getConfigUpdate_Success = (payload) => ({
  type: CONST.GET_CONFIG_UPDATE_SUCCESS,
  payload,
});

export const getConfigUpdate_Fail = (payload) => ({
  type: CONST.GET_CONFIG_UPDATE_FAIL,
  payload,
});
// // ================= GET_MAIL_UPDATE =================== //

export const getMailUpdate = (payload, callBack) => {
  return {
    type: CONST.GET_MAIL_UPDATE,
    payload: { ...payload },
    callBack,
  };
};

export const getMailUpdate_Success = (payload) => ({
  type: CONST.GET_MAIL_UPDATE_SUCCESS,
  payload,
});

export const getMailUpdate_Fail = (payload) => ({
  type: CONST.GET_MAIL_UPDATE_FAIL,
  payload,
});

// // ================= PAYMENT_CONFIG_UPDATE =================== //

export const paymentConfig_Update = (payload, callBack) => {
  return {
    type: CONST.PAYMENT_CONFIG_UPDATE,
    payload: { ...payload },
    callBack,
  };
};

export const paymentConfig_Update_Success = (payload) => ({
  type: CONST.PAYMENT_CONFIG_UPDATE_SUCCESS,
  payload,
});

export const paymentConfig_Update_Fail = (payload) => ({
  type: CONST.PAYMENT_CONFIG_UPDATE_FAIL,
  payload,
});

// // =================ANDROID_VERSION_UPDATE =================== //

export const androidVersion_Update = (payload, callBack) => {
  return {
    type: CONST.ANDROID_VERSION_UPDATE,
    payload: { ...payload },
    callBack,
  };
};

export const androidVersion_Update_Success = (payload) => ({
  type: CONST.ANDROID_VERSION_UPDATE_SUCCESS,
  payload,
});

export const androidVersion_Update_Fail = (payload) => ({
  type: CONST.ANDROID_VERSION_UPDATE_FAIL,
  payload,
});

// // =================ANDROID_APP_URL_UPDATE =================== //

export const androidAppUrl_Update = (payload, callBack) => {
  return {
    type: CONST.ANDROID_APP_URL_UPDATE,
    payload: { ...payload },
    callBack,
  };
};

export const androidAppUrl_Update_Success = (payload) => ({
  type: CONST.ANDROID_APP_URL_UPDATE_SUCCESS,
  payload,
});

export const androidAppUrl_Update_Fail = (payload) => ({
  type: CONST.ANDROID_APP_URL_UPDATE_FAIL,
  payload,
});

// // =================IOS_APP_URL_UPDATE =================== //

export const iosAppUrl_Update = (payload, callBack) => {
  return {
    type: CONST.IOS_APP_URL_UPDATE,
    payload: { ...payload },
    callBack,
  };
};

export const iosAppUrl_Update_Success = (payload) => ({
  type: CONST.IOS_APP_URL_UPDATE_SUCCESS,
  payload,
});

export const iosAppUrl_Update_Fail = (payload) => ({
  type: CONST.IOS_APP_URL_UPDATE_FAIL,
  payload,
});

// // ================== GET_MAIL_TEMPLATES =================== //

export const getMailTemplate_Details = (payload, callBack) => {
  return {
    type: CONST.GET_MAIL_TEMPLATES,
    payload: { ...payload },
    callBack,
  };
};

export const getMailTemplate_Details_Success = (payload) => ({
  type: CONST.GET_MAIL_TEMPLATES_SUCCESS,
  payload,
});

export const getMailTemplate_Details_Fail = (payload) => ({
  type: CONST.GET_MAIL_TEMPLATES_FAIL,
  payload,
});

// // =================MAIL_TEMPLATES_UPDATE =================== //

export const mailTemplates_Update = (payload, callBack) => {
  return {
    type: CONST.MAIL_TEMPLATES_UPDATE,
    payload: { ...payload },
    callBack,
  };
};

export const mailTemplates_Update_Success = (payload) => ({
  type: CONST.MAIL_TEMPLATES_UPDATE_SUCCESS,
  payload,
});

export const mailTemplates_Update_Fail = (payload) => ({
  type: CONST.MAIL_TEMPLATES_UPDATE_FAIL,
  payload,
});

// // ================== GET_SMS_TEMPLATES =================== //

export const getSmsTemplate_Details = (payload, callBack) => {
  return {
    type: CONST.GET_SMS_TEMPLATES,
    payload: { ...payload },
    callBack,
  };
};

export const getSmsTemplate_Details_Success = (payload) => ({
  type: CONST.GET_SMS_TEMPLATES_SUCCESS,
  payload,
});

export const getSmsTemplate_Details_Fail = (payload) => ({
  type: CONST.GET_SMS_TEMPLATES_FAIL,
  payload,
});

// // =================SMS_TEMPLATES_UPDATE =================== //

export const smsTemplates_Update = (payload, callBack) => {
  return {
    type: CONST.SMS_TEMPLATES_UPDATE,
    payload: { ...payload },
    callBack,
  };
};

export const smsTemplates_Update_Success = (payload) => ({
  type: CONST.SMS_TEMPLATES_UPDATE_SUCCESS,
  payload,
});

export const smsTemplates_Update_Fail = (payload) => ({
  type: CONST.SMS_TEMPLATES_UPDATE_FAIL,
  payload,
});

import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  basicSettingDetails: [],
  basicSettingUpdate: [],
  getMailTemplates: [],
  getSmsTemplates: [],
  error: null,
};

const SettingReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    // ================= GET_CONFIG_DETAILS =================== //

    case CONST.GET_CONFIG_DETAILS:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.GET_CONFIG_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        getconfigDetails: payload,
        error: null,
      };
    case CONST.GET_CONFIG_DETAILS_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };
    // ================= BASIC_SETTING_DETAILS =================== //

    case CONST.BASIC_SETTING_DETAILS:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.BASIC_SETTING_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        basicSettingDetails: payload,
        error: null,
      };
    case CONST.BASIC_SETTING_DETAILS_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // ================= BASIC_SETTING_UPDATE =================== //

    case CONST.BASIC_SETTING_UPDATE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.BASIC_SETTING_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        basicSettingUpdate: payload,
        error: null,
      };
    case CONST.BASIC_SETTING_UPDATE_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // ================= GET_CONFIG_UPDATE =================== // //

    case CONST.GET_CONFIG_UPDATE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.GET_CONFIG_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        getConfigUpdate: payload,
        error: null,
      };
    case CONST.GET_CONFIG_UPDATE_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // ================= GET_MAIL_UPDATE =================== // //

    case CONST.GET_MAIL_UPDATE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.GET_MAIL_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        getMailUpdate: payload,
        error: null,
      };
    case CONST.GET_MAIL_UPDATE_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // ================= PAYMENT_CONFIG_UPDATE =================== // //

    case CONST.PAYMENT_CONFIG_UPDATE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.PAYMENT_CONFIG_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentConfigUpdate: payload,
        error: null,
      };
    case CONST.PAYMENT_CONFIG_UPDATE_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };
    // // ================= ANDROID_VERSION_UPDATE =================== // //

    case CONST.ANDROID_VERSION_UPDATE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.ANDROID_VERSION_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        androidVersionUpdate: payload,
        error: null,
      };
    case CONST.ANDROID_VERSION_UPDATE_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // ================= ANDROID_APP_URL_UPDATE =================== // //

    case CONST.ANDROID_APP_URL_UPDATE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.ANDROID_APP_URL_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        androidUrlUpdate: payload,
        error: null,
      };
    case CONST.ANDROID_APP_URL_UPDATE_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };
    // // ================= IOS_APP_URL_UPDATE =================== // //

    case CONST.IOS_APP_URL_UPDATE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.IOS_APP_URL_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        androidUrlUpdate: payload,
        error: null,
      };
    case CONST.IOS_APP_URL_UPDATE_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };
    // // ================= GET_MAIL_TEMPLATES =================== // //

    case CONST.GET_MAIL_TEMPLATES:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.GET_MAIL_TEMPLATES_SUCCESS:
      return {
        ...state,
        loading: false,
        getMailTemplates: payload,
        error: null,
      };
    case CONST.GET_MAIL_TEMPLATES_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };
    // // ================= MAIL_TEMPLATES_UPDATE =================== // //

    case CONST.MAIL_TEMPLATES_UPDATE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.MAIL_TEMPLATES_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        mailTemplateslUpdate: payload,
        error: null,
      };
    case CONST.MAIL_TEMPLATES_UPDATE_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // ================= GET_SMS_TEMPLATES =================== // //

    case CONST.GET_SMS_TEMPLATES:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.GET_SMS_TEMPLATES_SUCCESS:
      return {
        ...state,
        loading: false,
        getSmsTemplates: payload,
        error: null,
      };
    case CONST.GET_SMS_TEMPLATES_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // ================= SMS_TEMPLATES_UPDATE =================== // //

    case CONST.SMS_TEMPLATES_UPDATE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.SMS_TEMPLATES_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        smsTemplateslUpdate: payload,
        error: null,
      };
    case CONST.SMS_TEMPLATES_UPDATE_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };
    default:
      return state;

      break;
  }
};

export default SettingReducer;

import { useSelector } from "react-redux";
import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  user: [],
  profile: {},
  updateProfile: {},
  documents: {},
  document: {},
  getDocuments: {},
  contact: {},
  subscribe: {},
  contactDetail: {},
  token: (localStorage && localStorage.getItem("token")) || null,
  userName: (localStorage && localStorage.getItem("name")) || null,
  userId: (localStorage && localStorage.getItem("id")) || null,
  error: null,
};

const LoginReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.LOGIN_USER:
      return {
        ...state,
        isLogin: true,
        loading: true,

        error: null,
      };
    case CONST.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: true,
        token: payload.token,
        user: payload,
        error: null,
      };
    case CONST.LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,

        error: payload,
      };

    // ==================== //

    case CONST.LOGIN_OTP:
      return {
        ...state,
        isLogin: true,
        error: null,
      };
    case CONST.LOGIN_OTP_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case CONST.LOGIN_OTP_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.FORGOT_PASS_OTP:
      return {
        ...state,
        error: null,
      };
    case CONST.FORGOT_PASS_OTP_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case CONST.FORGOT_PASS_OTP_FAIL:
      return {
        ...state,
        error: payload,
      };
    // ==================== //

    case CONST.USER_DATA:
      return {
        ...state,
        error: null,
      };
    case CONST.USER_DATA_SUCCESS:
      return {
        ...state,
        profile: { ...payload },
        error: null,
      };
    case CONST.USER_DATA_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.UPDATE_USER_DATA:
      return {
        ...state,
        error: null,
      };
    case CONST.UPDATE_USER_DATA_SUCCESS:
      return {
        ...state,
        updateProfile: { ...payload },
        error: null,
      };
    case CONST.UPDATE_USER_DATA_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.GET_DOCUMENTS:
      return {
        ...state,
        error: null,
      };
    case CONST.GET_DOCUMENTS_SUCCESS:
      return {
        ...state,
        documents: { ...payload },
        error: null,
      };
    case CONST.GET_DOCUMENTS_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.POST_DOCUMENT:
      return {
        ...state,
        error: null,
      };
    case CONST.POST_DOCUMENT_SUCCESS:
      return {
        ...state,
        document: { ...payload },
        error: null,
      };
    case CONST.POST_DOCUMENT_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.CHECK_FORGOT_OTP:
      return {
        ...state,
        error: null,
      };
    case CONST.CHECK_FORGOT_OTP_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case CONST.CHECK_FORGOT_OTP_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.CHANGE_PASS:
      return {
        ...state,
        error: null,
      };
    case CONST.CHANGE_PASS_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case CONST.CHANGE_PASS_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.CREATE_PASS:
      return {
        ...state,
        error: null,
      };
    case CONST.CREATE_PASS_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case CONST.CREATE_PASS_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.GET_DOCUMENT_BY_ID:
      return {
        ...state,
        error: null,
        getDocuments: "",
      };
    case CONST.GET_DOCUMENT_BY_ID_SUCCESS:
      return {
        ...state,
        getDocuments: { ...payload },
        error: null,
      };
    case CONST.GET_DOCUMENT_BY_ID_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.POST_CONTACT:
      return {
        ...state,
        error: null,
        contact: "",
      };
    case CONST.POST_CONTACT_SUCCESS:
      return {
        ...state,
        contact: { ...payload },
        error: null,
      };
    case CONST.POST_CONTACT_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.POST_FACEBOOK:
      return {
        ...state,
        error: null,
        facebook: "",
      };
    case CONST.POST_FACEBOOK_SUCCESS:
      return {
        ...state,
        facebook: { ...payload },
        error: null,
      };
    case CONST.POST_FACEBOOK_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.POST_INSTAGRAM:
      return {
        ...state,
        error: null,
        instagram: "",
      };
    case CONST.POST_INSTAGRAM_SUCCESS:
      return {
        ...state,
        instagram: { ...payload },
        error: null,
      };
    case CONST.POST_INSTAGRAM_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.POST_TWITTER:
      return {
        ...state,
        error: null,
        twitter: "",
      };
    case CONST.POST_TWITTER_SUCCESS:
      return {
        ...state,
        twitter: { ...payload },
        error: null,
      };
    case CONST.POST_TWITTER_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.POST_YOUTUBE:
      return {
        ...state,
        error: null,
        youtube: "",
      };
    case CONST.POST_YOUTUBE_SUCCESS:
      return {
        ...state,
        youtube: { ...payload },
        error: null,
      };
    case CONST.POST_YOUTUBE_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.POST_TIKTOK:
      return {
        ...state,
        error: null,
        tiktok: "",
      };
    case CONST.POST_TIKTOK_SUCCESS:
      return {
        ...state,
        tiktok: { ...payload },
        error: null,
      };
    case CONST.POST_TIKTOK_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.POST_SUBSCRIBE:
      return {
        ...state,
        error: null,
        subscribe: "",
      };
    case CONST.POST_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        subscribe: { ...payload },
        error: null,
      };
    case CONST.POST_SUBSCRIBE_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ==================== //

    case CONST.GET_CONTACT_DETAIL:
      return {
        ...state,
        error: null,
        contactDetail: "",
      };
    case CONST.GET_CONTACT_DETAIL_SUCCESS:
      return {
        ...state,
        contactDetail: { ...payload },
        error: null,
      };
    case CONST.GET_CONTACT_DETAIL_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;

      break;
  }
};

export default LoginReducer;

import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  addfaq: [],
  faqDetails: [],
  updatefaq: [],
  deletefaq: [],

  error: null,
};

const FaqReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.FAQ_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.FAQ_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        faqList: payload,
        error: null,
      };
    case CONST.FAQ_LIST_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // ================= ADD_FAQ =================== //

    case CONST.ADD_FAQ:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.ADD_FAQ_SUCCESS:
      return {
        ...state,
        loading: false,
        addfaq: payload,
        error: null,
      };
    case CONST.ADD_FAQ_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // ================= FAQ_DETAILS =================== //

    case CONST.FAQ_DETAILS:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.FAQ_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        faqDetails: payload,
        error: null,
      };
    case CONST.FAQ_DETAILS_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // ================= EDIT_FAQ =================== //

    case CONST.EDIT_FAQ:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.EDIT_FAQ_SUCCESS:
      return {
        ...state,
        loading: false,
        updatefaq: payload,
        error: null,
      };
    case CONST.EDIT_FAQ_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // ================= DELETE_FAQ =================== //

    case CONST.DELETE_FAQ:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.DELETE_FAQ_SUCCESS:
      return {
        ...state,
        loading: false,
        deletefaq: payload,
        error: null,
      };
    case CONST.DELETE_FAQ_FAIL:
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

export default FaqReducer;

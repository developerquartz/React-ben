import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  contentPageList: [],
  contentPageDetails: [],
  contentPageUpdate: [],

  error: null,
};

const ContentPageReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.CONTENTPAGE_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.CONTENTPAGE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        contentPageList: payload,
        error: null,
      };
    case CONST.CONTENTPAGE_LIST_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // ================= CONTENTPAGE_LIST_DETAILS =================== //

    case CONST.CONTENTPAGE_LIST_DETAILS:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.CONTENTPAGE_LIST_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        contentPageDetails: payload,
        error: null,
      };
    case CONST.CONTENTPAGE_LIST_DETAILS_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // ================= CONTENTPAGE_EDIT =================== //

    case CONST.CONTENTPAGE_EDIT:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.CONTENTPAGE_EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        contentPageUpdate: payload,
        error: null,
      };
    case CONST.CONTENTPAGE_EDIT_FAIL:
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

export default ContentPageReducer;

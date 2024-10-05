import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  promoCodeList: [],
  PromoDetails: [],
  error: null,
};

const PromoReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.PROMO_CODE_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.PROMO_CODE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        promoCodeList: payload,
        error: null,
      };
    case CONST.PROMO_CODE_LIST_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // ================= ADD_PROMO_CODE =================== //

    case CONST.ADD_PROMO_CODE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.ADD_PROMO_CODE_SUCCESS:
      return {
        ...state,
        loading: false,
        addPromocode: payload,
        error: null,
      };
    case CONST.ADD_PROMO_CODE_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // ================= PROMO_CODE_DETAILS =================== //

    case CONST.PROMO_CODE_DETAILS:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.PROMO_CODE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        PromoDetails: payload,
        error: null,
      };
    case CONST.PROMO_CODE_DETAILS_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // // ================= EDIT_PROMO_CODES =================== //

    case CONST.EDIT_PROMO_CODES:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.EDIT_PROMO_CODES_SUCCESS:
      return {
        ...state,
        loading: false,
        updatePromo: payload,
        error: null,
      };
    case CONST.EDIT_PROMO_CODES_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // // ================= DELETE_PROMO_CODE =================== //

    case CONST.DELETE_PROMO_CODE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.DELETE_PROMO_CODE_SUCCESS:
      return {
        ...state,
        loading: false,
        deletePromo: payload,
        error: null,
      };
    case CONST.DELETE_PROMO_CODE_FAIL:
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

export default PromoReducer;

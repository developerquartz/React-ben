import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  disputesList: [],
  disputeDetail: {},
  error: null
};

const DashboardReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.DISPUTES_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.DISPUTES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        disputesList: payload,
        error: null,
      };
    case CONST.DISPUTES_LIST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    case CONST.DISPUTE_DETAIL:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.DISPUTE_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        disputeDetail: payload,
        error: null,
      };
    case CONST.DISPUTE_DETAIL_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    case CONST.UPDATE_DISPUTE_STATUS:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.UPDATE_DISPUTE_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        disputeDetail: payload,
        error: null,
      };
    case CONST.UPDATE_DISPUTE_STATUS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    case CONST.REFUND_DISPUTE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.REFUND_DISPUTE_SUCCESS:
      return {
        ...state,
        loading: false,
        disputeDetail: payload,
        error: null,
      };
    case CONST.REFUND_DISPUTE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    case CONST.DISPUTE_REPLY:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.DISPUTE_REPLY_SUCCESS:
      return {
        ...state,
        loading: false,
        disputeDetail: payload,
        error: null,
      };
    case CONST.DISPUTE_REPLY_FAIL:
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

export default DashboardReducer;
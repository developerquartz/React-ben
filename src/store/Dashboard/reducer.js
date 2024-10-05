import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  dashboardDetails: {},
  bookingsList: [],
  bookingDetail: {},
  adminTransactionList: [],
  providerWithdrawlList: [],
  withdrawalRequest: {},
  customerReportGraphDetails: {},
  bookingReportGraphDetails: {},
  error: null
};

const DashboardReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.DASHBOARD_DETAILS:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.DASHBOARD_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        dashboardDetails: payload,
        error: null,
      };
    case CONST.DASHBOARD_DETAILS_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    case CONST.BOOKINGS_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.BOOKINGS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        bookingsList: payload,
        error: null,
      };
    case CONST.BOOKINGS_LIST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    case CONST.BOOKING_DETAIL:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.BOOKING_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        bookingDetail: payload,
        error: null,
      };
    case CONST.BOOKING_DETAIL_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    case CONST.UPDATE_BOOKING_STATUS:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.UPDATE_BOOKING_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookingDetail: payload,
        error: null,
      };
    case CONST.UPDATE_BOOKING_STATUS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    case CONST.ADMIN_TRANSACTION_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.ADMIN_TRANSACTION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        adminTransactionList: payload,
        error: null,
      };
    case CONST.ADMIN_TRANSACTION_LIST_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    case CONST.PROVIDER_WITHDRAWL_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.PROVIDER_WITHDRAWL_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        providerWithdrawlList: payload,
        error: null,
      };
    case CONST.PROVIDER_WITHDRAWL_LIST_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    case CONST.PROCESS_WITHDRAWAL:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.PROCESS_WITHDRAWAL_SUCCESS:
      return {
        ...state,
        loading: false,
        withdrawalRequest: payload,
        error: null,
      };
    case CONST.PROCESS_WITHDRAWAL_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    case CONST.CANCEL_WITHDRAWAL:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.CANCEL_WITHDRAWAL_SUCCESS:
      return {
        ...state,
        loading: false,
        withdrawalRequest: payload,
        error: null,
      };
    case CONST.CANCEL_WITHDRAWAL_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    case CONST.CUSTOMER_REPORT_GRAPH:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.CUSTOMER_REPORT_GRAPH_SUCCESS:
      return {
        ...state,
        loading: false,
        customerReportGraphDetails: payload,
        error: null,
      };
    case CONST.CUSTOMER_REPORT_GRAPH_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    case CONST.BOOKING_REPORT_GRAPH:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.BOOKING_REPORT_GRAPH_SUCCESS:
      return {
        ...state,
        loading: false,
        bookingReportGraphDetails: payload,
        error: null,
      };
    case CONST.BOOKING_REPORT_GRAPH_FAIL:
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
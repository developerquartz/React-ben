import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  exportProviderWithdrawlRequests: [],
  exportAdminTransactions: [],
  exportBookingData: [],
  error: null,
};

const ExportServiceProviderReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case CONST.EXPORT_PROVIDER_WITHDRAWL_REQUESTS:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.EXPORT_PROVIDER_WITHDRAWL_REQUESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        exportProviderWithdrawlRequests: payload,
        error: null,
      };
    case CONST.EXPORT_PROVIDER_WITHDRAWL_REQUESTS_FAIL:
      return {
        ...state,
        loading: false,

        error: payload,
      };

    case CONST.EXPORT_ADMIN_TRANSACTIONS:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.EXPORT_ADMIN_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        exportAdminTransactions: payload,
        error: null,
      };
    case CONST.EXPORT_ADMIN_TRANSACTIONS_FAIL:
      return {
        ...state,
        loading: false,

        error: payload,
      };
    case CONST.EXPORT_BOOKING_DATA:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.EXPORT_BOOKING_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        exportBookingData: payload,
        error: null,
      };
    case CONST.EXPORT_BOOKING_DATA_FAIL:
      return {
        ...state,
        loading: false,

        error: payload,
      };

    default:
      return state;

      break;
  }
};

export default ExportServiceProviderReducer;

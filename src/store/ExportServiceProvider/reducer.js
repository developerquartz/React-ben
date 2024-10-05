import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  exportProvider: [],

  error: null,
};

const ExportServiceProviderReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case CONST.EXPORT_SERVICE_PROVIDER:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.EXPORT_SERVICE_PROVIDER_SUCCESS:
      return {
        ...state,
        loading: false,
        exportProvider: payload,
        error: null,
      };
    case CONST.EXPORT_SERVICE_PROVIDER_FAIL:
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

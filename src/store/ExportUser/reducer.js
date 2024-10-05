import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  exportUser: [],

  error: null,
};

const ExportUserReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.EXPORT_USER:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.EXPORT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        exportUser: payload,
        error: null,
      };
    case CONST.EXPORT_USER_FAIL:
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

export default ExportUserReducer;

import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  adminList: [],
  addadminList: [],
  updateadminList: [],

  error: null,
};

const SystemAdminReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.ADMIN_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.ADMIN_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        adminList: payload,
        error: null,
      };
    case CONST.ADMIN_LIST_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // ================= ADD_ADMIN_LIST =================== //

    case CONST.ADD_ADMIN_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.ADD_ADMIN_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        addadminList: payload,
        error: null,
      };
    case CONST.ADD_ADMIN_LIST_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // // ================= UPDATE_ADMIN_LIST =================== //

    case CONST.UPDATE_ADMIN_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.UPDATE_ADMIN_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        updateadminList: payload,
        error: null,
      };
    case CONST.UPDATE_ADMIN_LIST_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };
    
    // // ================= CHANGE ADMIN PASSWORD =================== //
    case CONST.CHANGE_ADMIN_PASSWORD:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.CHANGE_ADMIN_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case CONST.CHANGE_ADMIN_PASSWORD_FAIL:
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

export default SystemAdminReducer;

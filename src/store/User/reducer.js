import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  user: [],
  edituser: [],
  blockUnblockUser: [],
  deleteUser: [],

  error: null,
};

const UserReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.CUSTOMERS_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.CUSTOMERS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        error: null,
      };
    case CONST.CUSTOMERS_LIST_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    /* >>>>>>>>>>>>>> EDIT CUSTOMER >>>>>>>>>>>>>>>*/

    case CONST.EDIT_CUSTOMER:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.EDIT_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        edituser: payload,
        error: null,
      };
    case CONST.EDIT_CUSTOMER_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };
    /* >>>>>>>>>>>>>> UPDATE CUSTOMER >>>>>>>>>>>>>>>*/

    case CONST.UPDATE_USER:
      return {
        ...state,
        isLogin: true,
        loading: true,

        error: null,
      };
    case CONST.UPDATE_USER_SUCCESS:
      return {
        ...state,

        loading: true,
        updateuser: { ...payload },
        error: null,
      };
    case CONST.UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,

        error: payload,
      };
    /* >>>>>>>>>>>>>> ADD CUSTOMER >>>>>>>>>>>>>>>*/

    case CONST.ADD_USER:
      return {
        ...state,
        isLogin: true,
        loading: true,

        error: null,
      };
    case CONST.ADD_USER_SUCCESS:
      return {
        ...state,

        loading: true,
        adduser: { ...payload },
        error: null,
      };
    case CONST.ADD_USER_FAIL:
      return {
        ...state,
        loading: false,

        error: payload,
      };
    /* >>>>>>>>>>>>>> BLOCK_UNBLOCK CUSTOMER >>>>>>>>>>>>>>>*/

    case CONST.BLOCK_UNBLOCK_USER:
      return {
        ...state,
        isLogin: true,
        loading: true,

        error: null,
      };
    case CONST.BLOCK_UNBLOCK_USER_SUCCESS:
      return {
        ...state,

        loading: true,
        blockUnblockUser: payload,
        error: null,
      };
    case CONST.BLOCK_UNBLOCK_USER_FAIL:
      return {
        ...state,
        loading: false,

        error: payload,
      };

    /* >>>>>>>>>>>>>> DELETE CUSTOMER >>>>>>>>>>>>>>>*/

    case CONST.DELETE_USER:
      return {
        ...state,
        isLogin: true,
        loading: true,

        error: null,
      };
    case CONST.DELETE_USER_SUCCESS:
      return {
        ...state,

        loading: true,
        deleteUser: payload,
        error: null,
      };
    case CONST.DELETE_USER_FAIL:
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

export default UserReducer;

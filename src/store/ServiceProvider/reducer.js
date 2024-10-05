import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  serviceProvider: [],
  drivers: [],
  addServiceProvider: [],
  editServiceProvider: [],
  updateserviceProvider: [],
  blockUnblockProvider: {},
  updateServiceProviderStatus: {},
  deleteUser: {},
  error: null,
};

const ServiceProviderReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.SERVICE_PROVIDER_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.SERVICE_PROVIDER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        serviceProvider: payload,
        error: null,
      };
    case CONST.SERVICE_PROVIDER_LIST_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // /* >>>>>>>>>>>>>> ADD_SERVICE_PROVIDER >>>>>>>>>>>>>>>*/

    case CONST.ADD_SERVICE_PROVIDER:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.ADD_SERVICE_PROVIDER_SUCCESS:
      return {
        ...state,
        loading: false,
        addServiceProvider: payload,
        error: null,
      };
    case CONST.ADD_SERVICE_PROVIDER_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    // /* >>>>>>>>>>>>>> EDIT_SERVICE_PROVIDER >>>>>>>>>>>>>>>*/

    case CONST.EDIT_SERVICE_PROVIDER:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.EDIT_SERVICE_PROVIDER_SUCCESS:
      return {
        ...state,
        loading: false,
        editServiceProvider: payload,
        error: null,
      };
    case CONST.EDIT_SERVICE_PROVIDER_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };
    // /* >>>>>>>>>>>>>> UPDATE_SERVICE_PROVIDER >>>>>>>>>>>>>>>*/

    case CONST.UPDATE_SERVICE_PROVIDER:
      return {
        ...state,
        isLogin: true,
        loading: true,

        error: null,
      };
    case CONST.UPDATE_SERVICE_PROVIDER_SUCCESS:
      return {
        ...state,

        loading: true,
        updateserviceProvider: payload,
        error: null,
      };
    case CONST.UPDATE_SERVICE_PROVIDER_FAIL:
      return {
        ...state,
        loading: false,

        error: payload,
      };
    // /* >>>>>>>>>>>>>> UPDATE CUSTOMER >>>>>>>>>>>>>>>*/

    case CONST.BLOCK_UNBLOCK_PROVIDER:
      return {
        ...state,
        isLogin: true,
        loading: true,

        error: null,
      };
    case CONST.BLOCK_UNBLOCK_PROVIDER_SUCCESS:
      return {
        ...state,

        loading: true,
        blockUnblockProvider: payload,
        error: null,
      };
    case CONST.BLOCK_UNBLOCK_PROVIDER_FAIL:
      return {
        ...state,
        loading: false,

        error: payload,
      };

    // /* >>>>>>>>>>>>>> DELETE_SERVICE_PROVIDER >>>>>>>>>>>>>>>*/

    case CONST.DELETE_SERVICE_PROVIDER:
      return {
        ...state,
        isLogin: true,
        loading: true,

        error: null,
      };
    case CONST.DELETE_SERVICE_PROVIDER_SUCCESS:
      return {
        ...state,

        loading: true,
        deleteServiceProvider: payload,
        error: null,
      };
    case CONST.DELETE_SERVICE_PROVIDER_FAIL:
      return {
        ...state,
        loading: false,

        error: payload,
      };

    // /* >>>>>>>>>>>>>> UPDATE_SERVICE_PROVIDER_STATUS >>>>>>>>>>>>>>>*/

    case CONST.UPDATE_SERVICE_PROVIDER_STATUS:
      return {
        ...state,
        isLogin: true,
        loading: true,

        error: null,
      };
    case CONST.UPDATE_SERVICE_PROVIDER_STATUS_SUCCESS:
      return {
        ...state,
        loading: true,
        updateServiceProviderStatus: payload,
        error: null,
      };
    case CONST.UPDATE_SERVICE_PROVIDER_STATUS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    // /* >>>>>>>>>>>>>> GET_DRIVERS_LIST >>>>>>>>>>>>>>>*/
    case CONST.GET_DRIVERS_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.GET_DRIVERS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        drivers: payload,
        error: null,
      };
    case CONST.GET_DRIVERS_LIST_FAIL:
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

export default ServiceProviderReducer;

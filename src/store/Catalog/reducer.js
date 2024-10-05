import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  vehicleMakeList: [],
  vehicleModelList: [],
  serviceList: [],
  serviceAddOnList: [],
  error: null,
};

const CatalogReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    // // ================= VEHICLE MAKE LIST =================== //
    case CONST.VEHICLE_MAKE_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.VEHICLE_MAKE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        vehicleMakeList: payload,
        error: null,
      };
    case CONST.VEHICLE_MAKE_LIST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= ADD VEHICLE MAKE =================== //
    case CONST.ADD_VEHICLE_MAKE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.ADD_VEHICLE_MAKE_SUCCESS:
      return {
        ...state,
        loading: false,
        addVehicleMake: payload,
        error: null,
      };
    case CONST.ADD_VEHICLE_MAKE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= UPDATE VEHICLE MAKE =================== //
    case CONST.UPDATE_VEHICLE_MAKE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.UPDATE_VEHICLE_MAKE_SUCCESS:
      return {
        ...state,
        loading: false,
        updateVehicleMake: payload,
        error: null,
      };
    case CONST.UPDATE_VEHICLE_MAKE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= GET VEHICLE MAKE DETAILS =================== //
    case CONST.GET_VEHICLE_MAKE_DETAILS:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.GET_VEHICLE_MAKE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        vehicleMakeDetails: payload,
        error: null,
      };
    case CONST.GET_VEHICLE_MAKE_DETAILS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= REMOVE VEHICLE MAKE =================== //
    case CONST.DELETE_VEHICLE_MAKE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.DELETE_VEHICLE_MAKE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteVehicleMake: payload,
        error: null,
      };
    case CONST.DELETE_VEHICLE_MAKE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };




    // // ================= VEHICLE MODEL LIST =================== //
    case CONST.VEHICLE_MODEL_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.VEHICLE_MODEL_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        vehicleModelList: payload,
        error: null,
      };
    case CONST.VEHICLE_MODEL_LIST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= ADD VEHICLE MODEL =================== //
    case CONST.ADD_VEHICLE_MODEL:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.ADD_VEHICLE_MODEL_SUCCESS:
      return {
        ...state,
        loading: false,
        addVehicleModel: payload,
        error: null,
      };
    case CONST.ADD_VEHICLE_MODEL_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= UPDATE VEHICLE MODEL =================== //
    case CONST.UPDATE_VEHICLE_MODEL:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.UPDATE_VEHICLE_MODEL_SUCCESS:
      return {
        ...state,
        loading: false,
        updateVehicleModel: payload,
        error: null,
      };
    case CONST.UPDATE_VEHICLE_MODEL_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= GET VEHICLE MODEL DETAILS =================== //
    case CONST.GET_VEHICLE_MODEL_DETAILS:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.GET_VEHICLE_MODEL_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        vehicleModelDetails: payload,
        error: null,
      };
    case CONST.GET_VEHICLE_MODEL_DETAILS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= REMOVE VEHICLE MODEL =================== //
    case CONST.DELETE_VEHICLE_MODEL:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.DELETE_VEHICLE_MODEL_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteVehicleModel: payload,
        error: null,
      };
    case CONST.DELETE_VEHICLE_MODEL_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };



    // // ================= SERVICE LIST =================== //
    case CONST.SERVICE_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.SERVICE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        serviceList: payload,
        error: null,
      };
    case CONST.SERVICE_LIST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= ADD SERVICE =================== //
    case CONST.ADD_SERVICE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.ADD_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        addService: payload,
        error: null,
      };
    case CONST.ADD_SERVICE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= UPDATE SERVICE =================== //
    case CONST.UPDATE_SERVICE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.UPDATE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        updateService: payload,
        error: null,
      };
    case CONST.UPDATE_SERVICE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= GET SERVICE DETAILS =================== //
    case CONST.GET_SERVICE_DETAILS:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.GET_SERVICE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        serviceDetails: payload,
        error: null,
      };
    case CONST.GET_SERVICE_DETAILS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= REMOVE SERVICE =================== //
    case CONST.DELETE_SERVICE:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteService: payload,
        error: null,
      };
    case CONST.DELETE_SERVICE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };



    // // ================= SERVICE ADDON LIST =================== //
    case CONST.SERVICE_ADDON_LIST:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.SERVICE_ADDON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        serviceAddOnList: payload,
        error: null,
      };
    case CONST.SERVICE_ADDON_LIST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= ADD SERVICE ADDON =================== //
    case CONST.ADD_SERVICE_ADDON:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.ADD_SERVICE_ADDON_SUCCESS:
      return {
        ...state,
        loading: false,
        addServiceAddOn: payload,
        error: null,
      };
    case CONST.ADD_SERVICE_ADDON_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= UPDATE SERVICE ADDON =================== //
    case CONST.UPDATE_SERVICE_ADDON:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.UPDATE_SERVICE_ADDON_SUCCESS:
      return {
        ...state,
        loading: false,
        updateServiceAddOn: payload,
        error: null,
      };
    case CONST.UPDATE_SERVICE_ADDON_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= GET SERVICE ADDON DETAILS =================== //
    case CONST.GET_SERVICE_ADDON_DETAILS:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.GET_SERVICE_ADDON_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        serviceAddOnDetails: payload,
        error: null,
      };
    case CONST.GET_SERVICE_ADDON_DETAILS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // // ================= REMOVE SERVICE ADDON =================== //
    case CONST.DELETE_SERVICE_ADDON:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.DELETE_SERVICE_ADDON_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteServiceAddOn: payload,
        error: null,
      };
    case CONST.DELETE_SERVICE_ADDON_FAIL:
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

export default CatalogReducer;
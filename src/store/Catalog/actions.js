import * as CONST from "./actionTypes";

// vehicle make list
export const vehicleMakeList = (payload, callBack) => {
  return {
    type: CONST.VEHICLE_MAKE_LIST,
    payload: { ...payload },
    callBack,
  };
};

export const vehicleMakeList_Success = (payload) => ({
  type: CONST.VEHICLE_MAKE_LIST_SUCCESS,
  payload,
});

export const vehicleMakeList_Fail = (payload) => ({
  type: CONST.VEHICLE_MAKE_LIST_FAIL,
  payload,
});


//add vehicle make
export const addVehicleMake = (payload, callBack) => {
  return {
    type: CONST.ADD_VEHICLE_MAKE,
    payload: { ...payload },
    callBack,
  };
};

export const addVehicleMake_Success = (payload) => ({
  type: CONST.ADD_VEHICLE_MAKE_SUCCESS,
  payload,
});

export const addVehicleMake_Fail = (payload) => ({
  type: CONST.ADD_VEHICLE_MAKE_FAIL,
  payload,
});


//update vehicle make
export const updateVehicleMake = (payload, callBack) => {
  return {
    type: CONST.UPDATE_VEHICLE_MAKE,
    payload: { ...payload },
    callBack,
  };
};

export const updateVehicleMake_Success = (payload) => ({
  type: CONST.UPDATE_VEHICLE_MAKE_SUCCESS,
  payload,
});

export const updateVehicleMake_Fail = (payload) => ({
  type: CONST.UPDATE_VEHICLE_MAKE_FAIL,
  payload,
});


//get vehicle make details
export const getVehicleMakeDetails = (payload, callBack) => {
  return {
    type: CONST.GET_VEHICLE_MAKE_DETAILS,
    payload: payload,
    callBack,
  };
};

export const getVehicleMakeDetails_Success = (payload) => ({
  type: CONST.GET_VEHICLE_MAKE_DETAILS_SUCCESS,
  payload,
});

export const getVehicleMakeDetails_Fail = (payload) => ({
  type: CONST.GET_VEHICLE_MAKE_DETAILS_FAIL,
  payload,
});


//delete vehicle make
export const deleteVehicleMake = (payload, callBack) => {
  return {
    type: CONST.DELETE_VEHICLE_MAKE,
    payload: { ...payload },
    callBack,
  };
};

export const deleteVehicleMake_Success = (payload) => ({
  type: CONST.DELETE_VEHICLE_MAKE_SUCCESS,
  payload,
});

export const deleteVehicleMake_Fail = (payload) => ({
  type: CONST.DELETE_VEHICLE_MAKE_FAIL,
  payload,
});



// vehicle model list
export const vehicleModelList = (payload, callBack) => {
  return {
    type: CONST.VEHICLE_MODEL_LIST,
    payload: { ...payload },
    callBack,
  };
};

export const vehicleModelList_Success = (payload) => ({
  type: CONST.VEHICLE_MODEL_LIST_SUCCESS,
  payload,
});

export const vehicleModelList_Fail = (payload) => ({
  type: CONST.VEHICLE_MODEL_LIST_FAIL,
  payload,
});


//add vehicle model
export const addVehicleModel = (payload, callBack) => {
  return {
    type: CONST.ADD_VEHICLE_MODEL,
    payload: { ...payload },
    callBack,
  };
};

export const addVehicleModel_Success = (payload) => ({
  type: CONST.ADD_VEHICLE_MODEL_SUCCESS,
  payload,
});

export const addVehicleModel_Fail = (payload) => ({
  type: CONST.ADD_VEHICLE_MODEL_FAIL,
  payload,
});


//update vehicle model
export const updateVehicleModel = (payload, callBack) => {
  return {
    type: CONST.UPDATE_VEHICLE_MODEL,
    payload: { ...payload },
    callBack,
  };
};

export const updateVehicleModel_Success = (payload) => ({
  type: CONST.UPDATE_VEHICLE_MODEL_SUCCESS,
  payload,
});

export const updateVehicleModel_Fail = (payload) => ({
  type: CONST.UPDATE_VEHICLE_MODEL_FAIL,
  payload,
});


//get vehicle model details
export const getVehicleModelDetails = (payload, callBack) => {
  return {
    type: CONST.GET_VEHICLE_MODEL_DETAILS,
    payload: payload,
    callBack,
  };
};

export const getVehicleModelDetails_Success = (payload) => ({
  type: CONST.GET_VEHICLE_MODEL_DETAILS_SUCCESS,
  payload,
});

export const getVehicleModelDetails_Fail = (payload) => ({
  type: CONST.GET_VEHICLE_MODEL_DETAILS_FAIL,
  payload,
});


//delete vehicle model
export const deleteVehicleModel = (payload, callBack) => {
  return {
    type: CONST.DELETE_VEHICLE_MODEL,
    payload: { ...payload },
    callBack,
  };
};

export const deleteVehicleModel_Success = (payload) => ({
  type: CONST.DELETE_VEHICLE_MODEL_SUCCESS,
  payload,
});

export const deleteVehicleModel_Fail = (payload) => ({
  type: CONST.DELETE_VEHICLE_MODEL_FAIL,
  payload,
});


// service list
export const serviceList = (payload, callBack) => {
  return {
    type: CONST.SERVICE_LIST,
    payload: { ...payload },
    callBack,
  };
};

export const serviceList_Success = (payload) => ({
  type: CONST.SERVICE_LIST_SUCCESS,
  payload,
});

export const serviceList_Fail = (payload) => ({
  type: CONST.SERVICE_LIST_FAIL,
  payload,
});


//add service
export const addService = (payload, callBack) => {
  return {
    type: CONST.ADD_SERVICE,
    payload: { ...payload },
    callBack,
  };
};

export const addService_Success = (payload) => ({
  type: CONST.ADD_SERVICE_SUCCESS,
  payload,
});

export const addService_Fail = (payload) => ({
  type: CONST.ADD_SERVICE_FAIL,
  payload,
});


//update service
export const updateService = (payload, callBack) => {
  return {
    type: CONST.UPDATE_SERVICE,
    payload: { ...payload },
    callBack,
  };
};

export const updateService_Success = (payload) => ({
  type: CONST.UPDATE_SERVICE_SUCCESS,
  payload,
});

export const updateService_Fail = (payload) => ({
  type: CONST.UPDATE_SERVICE_FAIL,
  payload,
});


//get service details
export const getServiceDetails = (payload, callBack) => {
  return {
    type: CONST.GET_SERVICE_DETAILS,
    payload: payload,
    callBack,
  };
};

export const getServiceDetails_Success = (payload) => ({
  type: CONST.GET_SERVICE_DETAILS_SUCCESS,
  payload,
});

export const getServiceDetails_Fail = (payload) => ({
  type: CONST.GET_SERVICE_DETAILS_FAIL,
  payload,
});


//delete service
export const deleteService = (payload, callBack) => {
  return {
    type: CONST.DELETE_SERVICE,
    payload: { ...payload },
    callBack,
  };
};

export const deleteService_Success = (payload) => ({
  type: CONST.DELETE_SERVICE_SUCCESS,
  payload,
});

export const deleteService_Fail = (payload) => ({
  type: CONST.DELETE_SERVICE_FAIL,
  payload,
});



// service add on list
export const serviceAddOnList = (payload, callBack) => {
  return {
    type: CONST.SERVICE_ADDON_LIST,
    payload: { ...payload },
    callBack,
  };
};

export const serviceAddOnList_Success = (payload) => ({
  type: CONST.SERVICE_ADDON_LIST_SUCCESS,
  payload,
});

export const serviceAddOnList_Fail = (payload) => ({
  type: CONST.SERVICE_ADDON_LIST_FAIL,
  payload,
});


//add service add on
export const addServiceAddOn = (payload, callBack) => {
  return {
    type: CONST.ADD_SERVICE_ADDON,
    payload: { ...payload },
    callBack,
  };
};

export const addServiceAddOn_Success = (payload) => ({
  type: CONST.ADD_SERVICE_ADDON_SUCCESS,
  payload,
});

export const addServiceAddOn_Fail = (payload) => ({
  type: CONST.ADD_SERVICE_ADDON_FAIL,
  payload,
});


//update service add on
export const updateServiceAddOn = (payload, callBack) => {
  return {
    type: CONST.UPDATE_SERVICE_ADDON,
    payload: { ...payload },
    callBack,
  };
};

export const updateServiceAddOn_Success = (payload) => ({
  type: CONST.UPDATE_SERVICE_ADDON_SUCCESS,
  payload,
});

export const updateServiceAddOn_Fail = (payload) => ({
  type: CONST.UPDATE_SERVICE_ADDON_FAIL,
  payload,
});


//get service  add on details
export const getServiceAddOnDetails = (payload, callBack) => {
  return {
    type: CONST.GET_SERVICE_ADDON_DETAILS,
    payload: payload,
    callBack,
  };
};

export const getServiceAddOnDetails_Success = (payload) => ({
  type: CONST.GET_SERVICE_ADDON_DETAILS_SUCCESS,
  payload,
});

export const getServiceAddOnDetails_Fail = (payload) => ({
  type: CONST.GET_SERVICE_ADDON_DETAILS_FAIL,
  payload,
});


//delete service  add on
export const deleteServiceAddOn = (payload, callBack) => {
  return {
    type: CONST.DELETE_SERVICE_ADDON,
    payload: { ...payload },
    callBack,
  };
};

export const deleteServiceAddOn_Success = (payload) => ({
  type: CONST.DELETE_SERVICE_ADDON_SUCCESS,
  payload,
});

export const deleteServiceAddOn_Fail = (payload) => ({
  type: CONST.DELETE_SERVICE_ADDON_FAIL,
  payload,
});
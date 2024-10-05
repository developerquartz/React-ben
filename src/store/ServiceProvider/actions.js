import * as CONST from "./actionTypes";

export const serviceProviderList = (payload, callBack) => {
  return {
    type: CONST.SERVICE_PROVIDER_LIST,
    payload: { ...payload },
    callBack,
  };
};

export const serviceProviderList_Success = (payload) => ({
  type: CONST.SERVICE_PROVIDER_LIST_SUCCESS,
  payload,
});

export const serviceProviderList_Fail = (payload) => ({
  type: CONST.SERVICE_PROVIDER_LIST_FAIL,
  payload,
});

/* >>>>>>>>>>>>>> ADD SERVICEPROVIDER >>>>>>>>>>>>>>>*/
export const addServiceprovider = (payload, callBack) => {
  return {
    type: CONST.ADD_SERVICE_PROVIDER,
    payload: { ...payload },
    callBack,
  };
};

export const addServiceprovider_Success = (payload) => ({
  type: CONST.ADD_SERVICE_PROVIDER_SUCCESS,
  payload,
});

export const addServiceprovider_Fail = (payload) => ({
  type: CONST.ADD_SERVICE_PROVIDER_FAIL,
  payload,
});

// /* >>>>>>>>>>>>>> EDIT SERVICE_PROVIDER >>>>>>>>>>>>>>>*/
export const editServiceProvider = (payload, callBack) => {
  return {
    type: CONST.EDIT_SERVICE_PROVIDER,
    payload: payload,
    callBack,
  };
};

export const editServiceProvider_Success = (payload) => ({
  type: CONST.EDIT_SERVICE_PROVIDER_SUCCESS,
  payload,
});

export const editServiceProvider_Fail = (payload) => ({
  type: CONST.EDIT_SERVICE_PROVIDER_FAIL,
  payload,
});

// /* >>>>>>>>>>>>>> UPDATE SERVICE PROVIDER >>>>>>>>>>>>>>>*/

export const updateServiceProvider = (payload, callBack) => {
  return {
    type: CONST.UPDATE_SERVICE_PROVIDER,
    payload: { ...payload },
    callBack,
  };
};

export const updateServiceProvider_Success = (payload) => ({
  type: CONST.UPDATE_SERVICE_PROVIDER_SUCCESS,
  payload,
});

export const updateServiceProvider_Fail = (payload) => ({
  type: CONST.UPDATE_SERVICE_PROVIDER_FAIL,
  payload,
});

/* >>>>>>>>>>>>>> BLOCK_UNBLOCK PROVIDER >>>>>>>>>>>>>>>*/

export const blockUnblockProvider= (payload, callBack) => {
  return {
    type: CONST.BLOCK_UNBLOCK_PROVIDER,
    payload: { ...payload },
    callBack,
  };
};

export const blockUnblockProvider_Success = (payload) => ({
  type: CONST.BLOCK_UNBLOCK_PROVIDER_SUCCESS,
  payload,
});

export const blockUnblockProvider_Fail = (payload) => ({
  type: CONST.BLOCK_UNBLOCK_PROVIDER_FAIL,
  payload,
});

// /* >>>>>>>>>>>>>> DELETE SERVICE PROVIDER >>>>>>>>>>>>>>>*/

export const deleteServiceProvider = (payload, callBack) => {
  return {
    type: CONST.DELETE_SERVICE_PROVIDER,
    payload: { ...payload },
    callBack,
  };
};

export const deleteServiceProvider_Success = (payload) => ({
  type: CONST.DELETE_SERVICE_PROVIDER_SUCCESS,
  payload,
});

export const deleteServiceProvider_Fail = (payload) => ({
  type: CONST.DELETE_SERVICE_PROVIDER_FAIL,
  payload,
});


// /* >>>>>>>>>>>>>> UPDATE SERVICE PROVIDER STATUS>>>>>>>>>>>>>>>*/

export const updateServiceProviderStatus = (payload, callBack) => {
  return {
    type: CONST.UPDATE_SERVICE_PROVIDER_STATUS,
    payload: { ...payload },
    callBack,
  };
};

export const updateServiceProviderStatus_Success = (payload) => ({
  type: CONST.UPDATE_SERVICE_PROVIDER_STATUS_SUCCESS,
  payload,
});

export const updateServiceProviderStatus_Fail = (payload) => ({
  type: CONST.UPDATE_SERVICE_PROVIDER_STATUS_FAIL,
  payload,
});

// /* >>>>>>>>>>>>>> GET_DRIVERS_LIST >>>>>>>>>>>>>>>*/


export const getDriversList = (payload, callBack) => {
  return {
    type: CONST.GET_DRIVERS_LIST,
    payload: { ...payload },
    callBack,
  };
};

export const getDriversList_Success = (payload) => ({
  type: CONST.GET_DRIVERS_LIST_SUCCESS,
  payload,
});

export const getDriversList_Fail = (payload) => ({
  type: CONST.GET_DRIVERS_LIST_FAIL,
  payload,
});

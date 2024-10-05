import {
    put,
    call,
    takeEvery,
} from "redux-saga/effects";
import * as CONST from "./actionTypes";
import * as ACTION from "./actions";
import * as API from "../../Services/ApiCalls";
import { toast } from "react-toastify";

//vehicle make 
function* vehicleMakeListSaga({ payload, callBack }) {
    try {
        const response = yield call(API.VEHICLE_MAKE_LIST, payload);
        if (response.status == 200) {
            yield put(ACTION.vehicleMakeList_Success(response.data));
        }
        else {
            yield put(ACTION.vehicleMakeList_Fail(response.data.error));
        }
    }
    catch (error) {
        yield put(ACTION.vehicleMakeList_Fail(response.data.error));
    }
}

function* addVehicleMakeSaga({ payload, callBack }) {
    try {
        const response = yield call(API.ADD_VEHICLE_MAKE, payload);
        if (response.status == 200) {
            yield put(ACTION.addVehicleMake_Success(response.data));
            callBack && callBack(response.data);
        } else {
            yield put(ACTION.addVehicleMake_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.addVehicleMake_Fail(response.data.error));
    }
}

function* getVehicleMakeDetailsSaga({ payload, callBack }) {
    try {
        // console.log("payload", payload);
        const response = yield call(API.GET_VEHICLE_MAKE_DETAILS, payload);
        if (response.status == 200) {
            yield put(ACTION.getVehicleMakeDetails_Success(response.data));
        } else {
            yield put(ACTION.getVehicleMakeDetails_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.getVehicleMakeDetails_Fail(response.data.error));
    }
}

function* updateVehicleMakeSaga({ payload, callBack }) {
    try {
        const response = yield call(API.UPDATE_VEHICLE_MAKE, payload);
        if (response.status == 200) {
            yield put(ACTION.updateVehicleMake_Success(response.data));
            callBack && callBack(response.data);
        } else {
            yield put(ACTION.updateVehicleMake_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.updateVehicleMake_Fail(response.data.error));
    }
}

function* deleteVehicleMakeSaga({ payload, callBack }) {
    try {
        const response = yield call(API.DELETE_VEHICLE_MAKE, payload);
        if (response.status == 200) {
            yield put(ACTION.deleteVehicleMake_Success(response.data));
            callBack && callBack(response.data);
        } else {
            yield put(ACTION.deleteVehicleMake_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.deleteVehicleMake_Fail(response.data.error));
    }
}


//vehicle model
function* vehicleModelListSaga({ payload, callBack }) {
    try {
        const response = yield call(API.VEHICLE_MODEL_LIST, payload);
        if (response.status == 200) {
            yield put(ACTION.vehicleModelList_Success(response.data));
        }
        else {
            yield put(ACTION.vehicleModelList_Fail(response.data.error));
        }
    }
    catch (error) {
        yield put(ACTION.vehicleModelList_Fail(response.data.error));
    }
}

function* addVehicleModelSaga({ payload, callBack }) {
    try {
        const response = yield call(API.ADD_VEHICLE_MODEL, payload);
        if (response.status == 200) {
            yield put(ACTION.addVehicleModel_Success(response.data));
            callBack && callBack(response.data);
        } else {
            yield put(ACTION.addVehicleModel_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.addVehicleModel_Fail(response.data.error));
    }
}

function* getVehicleModelDetailsSaga({ payload, callBack }) {
    try {
        const response = yield call(API.GET_VEHICLE_MODEL_DETAILS, payload);
        if (response.status == 200) {
            yield put(ACTION.getVehicleModelDetails_Success(response.data));
        } else {
            yield put(ACTION.getVehicleModelDetails_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.getVehicleModelDetails_Fail(response.data.error));
    }
}

function* updateVehicleModelSaga({ payload, callBack }) {
    try {
        const response = yield call(API.UPDATE_VEHICLE_MODEL, payload);
        if (response.status == 200) {
            yield put(ACTION.updateVehicleModel_Success(response.data));
            callBack && callBack(response.data);
        } else {
            yield put(ACTION.updateVehicleModel_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.updateVehicleModel_Fail(response.data.error));
    }
}

function* deleteVehicleModelSaga({ payload, callBack }) {
    try {
        const response = yield call(API.DELETE_VEHICLE_MODEL, payload);
        if (response.status == 200) {
            yield put(ACTION.deleteVehicleModel_Success(response.data));
            callBack && callBack(response.data);
        } else {
            yield put(ACTION.deleteVehicleModel_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.deleteVehicleModel_Fail(response.data.error));
    }
}


//service
function* serviceListSaga({ payload, callBack }) {
    try {
        const response = yield call(API.SERVICE_LIST, payload);
        if (response.status == 200) {
            yield put(ACTION.serviceList_Success(response.data));
        }
        else {
            yield put(ACTION.serviceList_Fail(response.data.error));
        }
    }
    catch (error) {
        yield put(ACTION.serviceList_Fail(response.data.error));
    }
}

function* addServiceSaga({ payload, callBack }) {
    try {
        const response = yield call(API.ADD_SERVICE, payload);
        if (response.data && response.data.status == "success") {
            yield put(ACTION.addService_Success(response.data));
            callBack && callBack(response.data);
        } 
        else {
            toast.error(response.data.message);
        }
    } catch (error) {
        yield put(ACTION.addService_Fail(response.data.error));
    }
}

function* getServiceDetailsSaga({ payload, callBack }) {
    try {
        const response = yield call(API.GET_SERVICE_DETAILS, payload);
        if (response.status == 200) {
            yield put(ACTION.getServiceDetails_Success(response.data));
        } else {
            yield put(ACTION.getServiceDetails_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.getServiceDetails_Fail(response.data.error));
    }
}

function* updateServiceSaga({ payload, callBack }) {
    try {
        const response = yield call(API.UPDATE_SERVICE, payload);
        if (response.status == 200) {
            yield put(ACTION.updateService_Success(response.data));
            callBack && callBack(response.data);
        } else {
            yield put(ACTION.updateService_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.updateService_Fail(response.data.error));
    }
}

function* deleteServiceSaga({ payload, callBack }) {
    try {
        const response = yield call(API.DELETE_SERVICE, payload);
        if (response.status == 200) {
            yield put(ACTION.deleteService_Success(response.data));
            callBack && callBack(response.data);
        } else {
            yield put(ACTION.deleteService_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.deleteService_Fail(response.data.error));
    }
}


//service add on
function* serviceAddOnListSaga({ payload, callBack }) {
    try {
        const response = yield call(API.SERVICE_ADDON_LIST, payload);
        if (response.status == 200) {
            yield put(ACTION.serviceAddOnList_Success(response.data));
        }
        else {
            yield put(ACTION.serviceAddOnList_Fail(response.data.error));
        }
    }
    catch (error) {
        yield put(ACTION.serviceAddOnList_Fail(response.data.error));
    }
}

function* addServiceAddOnSaga({ payload, callBack }) {
    try {
        const response = yield call(API.ADD_SERVICE_ADDON, payload);
        if (response.status == 200) {
            yield put(ACTION.addServiceAddOn_Success(response.data));
            callBack && callBack(response.data);
        } else {
            yield put(ACTION.addServiceAddOn_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.addServiceAddOn_Fail(response.data.error));
    }
}

function* getServiceAddOnDetailsSaga({ payload, callBack }) {
    try {
        const response = yield call(API.GET_SERVICE_ADDON_DETAILS, payload);
        if (response.status == 200) {
            yield put(ACTION.getServiceAddOnDetails_Success(response.data));
        } else {
            yield put(ACTION.getServiceAddOnDetails_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.getServiceAddOnDetails_Fail(response.data.error));
    }
}

function* updateServiceAddOnSaga({ payload, callBack }) {
    try {
        const response = yield call(API.UPDATE_SERVICE_ADDON, payload);
        if (response.status == 200) {
            yield put(ACTION.updateServiceAddOn_Success(response.data));
            callBack && callBack(response.data);
        } else {
            yield put(ACTION.updateServiceAddOn_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.updateServiceAddOn_Fail(response.data.error));
    }
}

function* deleteServiceAddOnSaga({ payload, callBack }) {
    try {
        const response = yield call(API.DELETE_SERVICE_ADDON, payload);
        if (response.status == 200) {
            yield put(ACTION.deleteServiceAddOn_Success(response.data));
            callBack && callBack(response.data);
        } else {
            yield put(ACTION.deleteServiceAddOn_Fail(response.data.error));
        }
    } catch (error) {
        yield put(ACTION.deleteServiceAddOn_Fail(response.data.error));
    }
}

function* CatalogSaga() {
    yield takeEvery(CONST.VEHICLE_MAKE_LIST, vehicleMakeListSaga);
    yield takeEvery(CONST.ADD_VEHICLE_MAKE, addVehicleMakeSaga);
    yield takeEvery(CONST.GET_VEHICLE_MAKE_DETAILS, getVehicleMakeDetailsSaga);
    yield takeEvery(CONST.UPDATE_VEHICLE_MAKE, updateVehicleMakeSaga);
    yield takeEvery(CONST.DELETE_VEHICLE_MAKE, deleteVehicleMakeSaga);

    yield takeEvery(CONST.VEHICLE_MODEL_LIST, vehicleModelListSaga);
    yield takeEvery(CONST.ADD_VEHICLE_MODEL, addVehicleModelSaga);
    yield takeEvery(CONST.GET_VEHICLE_MODEL_DETAILS, getVehicleModelDetailsSaga);
    yield takeEvery(CONST.UPDATE_VEHICLE_MODEL, updateVehicleModelSaga);
    yield takeEvery(CONST.DELETE_VEHICLE_MODEL, deleteVehicleModelSaga);

    yield takeEvery(CONST.SERVICE_LIST, serviceListSaga);
    yield takeEvery(CONST.ADD_SERVICE, addServiceSaga);
    yield takeEvery(CONST.GET_SERVICE_DETAILS, getServiceDetailsSaga);
    yield takeEvery(CONST.UPDATE_SERVICE, updateServiceSaga);
    yield takeEvery(CONST.DELETE_SERVICE, deleteServiceSaga);

    yield takeEvery(CONST.SERVICE_ADDON_LIST, serviceAddOnListSaga);
    yield takeEvery(CONST.ADD_SERVICE_ADDON, addServiceAddOnSaga);
    yield takeEvery(CONST.GET_SERVICE_ADDON_DETAILS, getServiceAddOnDetailsSaga);
    yield takeEvery(CONST.UPDATE_SERVICE_ADDON, updateServiceAddOnSaga);
    yield takeEvery(CONST.DELETE_SERVICE_ADDON, deleteServiceAddOnSaga);
}

export default CatalogSaga;
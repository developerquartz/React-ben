import {
  put,
  call,
  take,
  every,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import * as CONST from "./actionTypes";
import * as ACTION from "./actions";
import * as API from "../../Services/ApiCalls";
import { toast } from "react-toastify";

function* basicSettingDetailssaga({ payload, callBack }) {
  try {
    const response = yield call(API.BASIC_SETTING_DETAILS, payload);
    if (response.status == 200) {
      yield put(ACTION.basicSettingDetails_Success(response.data));
    } else {
      yield put(ACTION.basicSettingDetails_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.basicSettingDetails_Fail(response.data.error));
  }
}

function* getConfigDetailssaga({ payload, callBack }) {
  try {
    const response = yield call(API.GET_CONFIG_DETAILS, payload);
    if (response.status == 200) {
      yield put(ACTION.getConfigDetails_Success(response.data));
    } else {
      yield put(ACTION.getConfigDetails_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.getConfigDetails_Fail(response.data.error));
  }
}

function* basicSettingUpdatesaga({ payload, callBack }) {
  try {
    const response = yield call(API.BASIC_SETTING_UPDATE, payload);
    if (response.status == 200) {
      yield put(ACTION.basicSettingUpdate_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.basicSettingUpdate_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.basicSettingUpdate_Fail(response.data.error));
  }
}
function* getConfigUpdatesaga({ payload, callBack }) {
  try {
    const response = yield call(API.GET_CONFIG_UPDATE, payload);
    if (response.status == 200) {
      yield put(ACTION.getConfigUpdate_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.getConfigUpdate_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.getConfigUpdate_Fail(response.data.error));
  }
}
function* getMailUpdatesaga({ payload, callBack }) {
  try {
    const response = yield call(API.GET_MAIL_UPDATE, payload);
    if (response.status == 200) {
      yield put(ACTION.getMailUpdate_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.getMailUpdate_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.getMailUpdate_Fail(response.data.error));
  }
}
function* paymentConfigUpdatesaga({ payload, callBack }) {
  try {
    const response = yield call(API.PAYMENT_CONFIG_UPDATE, payload);
    if (response.status == 200) {
      yield put(ACTION.paymentConfig_Update_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.paymentConfig_Update_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.paymentConfig_Update_Fail(response.data.error));
  }
}
function* androidVersionUpdatesaga({ payload, callBack }) {
  try {
    const response = yield call(API.ANDROID_VERSION_UPDATE, payload);
    if (response.status == 200) {
      yield put(ACTION.androidVersion_Update_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.androidVersion_Update_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.androidVersion_Update_Fail(response.data.error));
  }
}

function* androidappUrlUpdatesaga({ payload, callBack }) {
  try {
    const response = yield call(API.ANDROID_APP_URL_UPDATE, payload);
    if (response.status == 200) {
      yield put(ACTION.androidAppUrl_Update_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.androidAppUrl_Update_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.androidAppUrl_Update_Fail(response.data.error));
  }
}
function* iosappUrlUpdatesaga({ payload, callBack }) {
  try {
    const response = yield call(API.IOS_APP_URL_UPDATE, payload);
    if (response.status == 200) {
      yield put(ACTION.iosAppUrl_Update_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.iosAppUrl_Update_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.iosAppUrl_Update_Fail(response.data.error));
  }
}
function* getmailTemplatessaga({ payload, callBack }) {
  try {
    const response = yield call(API.GET_MAIL_TEMPLATES, payload);
    if (response.status == 200) {
      yield put(ACTION.getMailTemplate_Details_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.getMailTemplate_Details_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.getMailTemplate_Details_Fail(response.data.error));
  }
}
function* mailTemplatesUpdatesaga({ payload, callBack }) {
  try {
    const response = yield call(API.MAIL_TEMPLATES_UPDATE, payload);
    if (response.status == 200) {
      yield put(ACTION.mailTemplates_Update_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.mailTemplates_Update_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.mailTemplates_Update_Fail(response.data.error));
  }
}
function* getsmsTemplatessaga({ payload, callBack }) {
  try {
    const response = yield call(API.GET_SMS_TEMPLATES, payload);
    if (response.status == 200) {
      yield put(ACTION.getSmsTemplate_Details_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.getSmsTemplate_Details_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.getSmsTemplate_Details_Fail(response.data.error));
  }
}
function* smsTemplatesUpdatesaga({ payload, callBack }) {
  try {
    const response = yield call(API.SMS_TEMPLATES_UPDATE, payload);
    if (response.status == 200) {
      yield put(ACTION.smsTemplates_Update_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.smsTemplates_Update_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.smsTemplates_Update_Fail(response.data.error));
  }
}
function* SettingSaga() {
  yield takeEvery(CONST.BASIC_SETTING_DETAILS, basicSettingDetailssaga);
  yield takeEvery(CONST.GET_CONFIG_DETAILS, getConfigDetailssaga);
  yield takeEvery(CONST.BASIC_SETTING_UPDATE, basicSettingUpdatesaga);
  yield takeEvery(CONST.GET_CONFIG_UPDATE, getConfigUpdatesaga);
  yield takeEvery(CONST.GET_MAIL_UPDATE, getMailUpdatesaga);
  yield takeEvery(CONST.PAYMENT_CONFIG_UPDATE, paymentConfigUpdatesaga);
  yield takeEvery(CONST.ANDROID_VERSION_UPDATE, androidVersionUpdatesaga);
  yield takeEvery(CONST.ANDROID_APP_URL_UPDATE, androidappUrlUpdatesaga);
  yield takeEvery(CONST.IOS_APP_URL_UPDATE, iosappUrlUpdatesaga);
  yield takeEvery(CONST.GET_MAIL_TEMPLATES, getmailTemplatessaga);
  yield takeEvery(CONST.MAIL_TEMPLATES_UPDATE, mailTemplatesUpdatesaga);
  yield takeEvery(CONST.GET_SMS_TEMPLATES, getsmsTemplatessaga);
  yield takeEvery(CONST.SMS_TEMPLATES_UPDATE, smsTemplatesUpdatesaga);
}

export default SettingSaga;

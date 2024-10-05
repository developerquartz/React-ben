import { put, call, takeEvery } from "redux-saga/effects";
import * as CONST from "./actionTypes";
import * as ACTION from "./actions";
import * as API from "../../Services/ApiCalls";
import { toast } from "react-toastify";

function* loginUserSaga({ payload, callBack }) {
  try {
    const response = yield call(API.LOGIN_USER, payload);
    console.log(response, "response login");
    if (response.data.data) {
      toast.success(response.data.message);
      localStorage.setItem("userData", JSON.stringify(response.data.data));
      localStorage.setItem("name", response.data.data.name);
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("id", response.data.data.id);
      window.location.reload();
      yield put(ACTION.loginUser_Success(response.data));
    } else {
      toast.error(response.data.error);
      yield put(ACTION.loginUser_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.loginUser_Fail(error));
  }
}

function* loginOtpSaga({ payload, callBack }) {
  try {
    const response = yield call(API.LOGIN_OTP, payload);
    if (response.data.data) {
      yield put(ACTION.loginOtp_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.error);
      yield put(ACTION.loginOtp_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.loginOtp_Fail(error));
  }
}

function* forgotPassOtpSaga({ payload, callBack }) {
  try {
    const response = yield call(API.FORGOT_PASS_OTP, payload);
    if (response.data.data) {
      yield put(ACTION.forgotPassOtp_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.error);
      yield put(ACTION.forgotPassOtp_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.forgotPassOtp_Fail(error));
  }
}

function* userDataSaga({ payload, callBack }) {
  try {
    const response = yield call(API.USER_DATA, payload);
    if (response.data.data) {
      yield put(ACTION.userData_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.error);
      if (response.data.error == "Your account is blocked by Admin.") {
        localStorage.clear();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      yield put(ACTION.userData_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.userData_Fail(error));
  }
}

function* updateUserDataSaga({ payload, callBack }) {
  try {
    const response = yield call(API.EDIT_PROFILE, payload);
    console.log(response, "reponseeee update");
    if (response.data.data) {
      yield put(ACTION.updateUserData_Success(response.data));
      toast.success(response.data.message);
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.error);
      if (response.data.error == "Your account is blocked by Admin.") {
        localStorage.clear();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      yield put(ACTION.updateUserData_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.updateUserData_Fail(error));
  }
}

function* getDocumentsSaga({ payload, callBack }) {
  try {
    const response = yield call(API.GET_DOCUMENTS, payload);
    if (response.data.data) {
      yield put(ACTION.getDocuments_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.error);
      if (response.data.error == "Your account is blocked by Admin.") {
        localStorage.clear();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      yield put(ACTION.getDocuments_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.getDocuments_Fail(error));
  }
}

function* checkForgotOtpSaga({ payload, callBack }) {
  try {
    const response = yield call(API.CHECK_FORGOT_OTP, payload);
    if (response.data.data) {
      yield put(ACTION.checkForgotOtp_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.error);
      yield put(ACTION.checkForgotOtp_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.checkForgotOtp_Fail(error));
  }
}

function* changePassSaga({ payload, callBack }) {
  try {
    const response = yield call(API.CHANGE_PASS, payload);
    if (response.data.data) {
      yield put(ACTION.changePass_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.error);
      yield put(ACTION.changePass_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.changePass_Fail(error));
  }
}

function* createPassSaga({ payload, callBack }) {
  try {
    const response = yield call(API.CREATE_PASS, payload);
    if (response.data.data) {
      yield put(ACTION.createPass_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.error);
      yield put(ACTION.createPass_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.createPass_Fail(error));
  }
}

function* postDocumentSaga({ payload, callBack }) {
  try {
    const response = yield call(API.UPLOAD_DOCUMENT, payload);
    if (response.data.data) {
      yield put(ACTION.postDocument_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.error);
      if (response.data.error == "Your account is blocked by Admin.") {
        localStorage.clear();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      yield put(ACTION.postDocument_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.postDocument_Fail(error));
  }
}

function* getDocumentByIdSaga({ payload, callBack }) {
  try {
    const response = yield call(API.GET_DOCUMENT_BY_ID, payload);
    if (response.data.data) {
      yield put(ACTION.getDocumentById_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.error);
      if (response.data.error == "Your account is blocked by Admin.") {
        localStorage.clear();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      yield put(ACTION.getDocumentById_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.getDocumentById_Fail(error));
  }
}

function* postContactSaga({ payload, callBack }) {
  try {
    const response = yield call(API.POST_CONTACT, payload);
    callBack && callBack(response.data);
    console.log(response, "response contacts");
    if (response.data.data) {
      yield put(ACTION.postContact_Success(response.data));
    } else {
      toast.error(response.data.error);
      yield put(ACTION.postContact_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.postContact_Fail(error));
  }
}

function* postFacebookSaga({ payload, callBack }) {
  try {
    const response = yield call(API.POST_FACEBOOK, payload);
    callBack && callBack(response.data);
    if (response.data.data) {
      yield put(ACTION.postFacebook_Success(response.data));
    } else {
      toast.error(response.data.error);
      yield put(ACTION.postFacebook_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.postFacebook_Fail(error));
  }
}

function* postInstagramSaga({ payload, callBack }) {
  try {
    const response = yield call(API.POST_INSTAGRAM, payload);
    callBack && callBack(response.data);
    if (response.data.data) {
      yield put(ACTION.postInstagram_Success(response.data));
    } else {
      toast.error(response.data.error);
      yield put(ACTION.postInstagram_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.postInstagram_Fail(error));
  }
}

function* postTwitterSaga({ payload, callBack }) {
  try {
    const response = yield call(API.POST_TWITTER, payload);
    callBack && callBack(response.data);
    if (response.data.data) {
      yield put(ACTION.postTwitter_Success(response.data));
    } else {
      toast.error(response.data.error);
      yield put(ACTION.postTwitter_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.postTwitter_Fail(error));
  }
}

function* postYoutubeSaga({ payload, callBack }) {
  try {
    const response = yield call(API.POST_YOUTUBE, payload);
    callBack && callBack(response.data);
    if (response.data.data) {
      yield put(ACTION.postYoutube_Success(response.data));
    } else {
      toast.error(response.data.error);
      yield put(ACTION.postYoutube_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.postYoutube_Fail(error));
  }
}

function* postTiktokSaga({ payload, callBack }) {
  try {
    const response = yield call(API.POST_TIKTOK, payload);
    callBack && callBack(response.data);
    if (response.data.data) {
      yield put(ACTION.postTiktok_Success(response.data));
    } else {
      toast.error(response.data.error);
      yield put(ACTION.postTiktok_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.postTiktok_Fail(error));
  }
}

function* postSubscribeSaga({ payload, callBack }) {
  try {
    const response = yield call(API.POST_SUBSCRIBE, payload);
    callBack && callBack(response.data);
    if (response.data.data) {
      yield put(ACTION.postSubscribe_Success(response.data));
    } else {
      toast.error(response.data.error);
      yield put(ACTION.postSubscribe_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.postSubscribe_Fail(error));
  }
}

function* getContactDetailSaga({ payload, callBack }) {
  try {
    const response = yield call(API.GET_CONTACT_DETAIL, payload);
    callBack && callBack(response.data);
    if (response.data.data) {
      yield put(ACTION.getContactDetail_Success(response.data));
    } else {
      toast.error(response.data.error);
      yield put(ACTION.getContactDetail_Fail(error));
    }
  } catch (error) {
    yield put(ACTION.getContactDetail_Fail(error));
  }
}

function* LoginSaga() {
  yield takeEvery(CONST.LOGIN_USER, loginUserSaga);
  yield takeEvery(CONST.LOGIN_OTP, loginOtpSaga);
  yield takeEvery(CONST.FORGOT_PASS_OTP, forgotPassOtpSaga);
  yield takeEvery(CONST.CHECK_FORGOT_OTP, checkForgotOtpSaga);
  yield takeEvery(CONST.CHANGE_PASS, changePassSaga);
  yield takeEvery(CONST.CREATE_PASS, createPassSaga);
  yield takeEvery(CONST.USER_DATA, userDataSaga);
  yield takeEvery(CONST.UPDATE_USER_DATA, updateUserDataSaga);
  yield takeEvery(CONST.GET_DOCUMENTS, getDocumentsSaga);
  yield takeEvery(CONST.POST_DOCUMENT, postDocumentSaga);
  yield takeEvery(CONST.GET_DOCUMENT_BY_ID, getDocumentByIdSaga);
  yield takeEvery(CONST.POST_CONTACT, postContactSaga);
  yield takeEvery(CONST.POST_FACEBOOK, postFacebookSaga);
  yield takeEvery(CONST.POST_INSTAGRAM, postInstagramSaga);
  yield takeEvery(CONST.POST_TWITTER, postTwitterSaga);
  yield takeEvery(CONST.POST_YOUTUBE, postYoutubeSaga);
  yield takeEvery(CONST.POST_TIKTOK, postTiktokSaga);
  yield takeEvery(CONST.POST_SUBSCRIBE, postSubscribeSaga);
  yield takeEvery(CONST.GET_CONTACT_DETAIL, getContactDetailSaga);
}

export default LoginSaga;

import Axios from "./Axios";
import * as API from "./URLS";

export const LOGIN_USER = (data) => Axios.post(API.LOGIN_USER, data);
export const LOGIN_OTP = (data) => Axios.post(API.LOGIN_OTP, data);
export const FORGOT_PASS_OTP = (data) => Axios.post(API.FORGOT_PASS_OTP, data);
export const USER_DATA = (data) => Axios.get(API.USER_DATA + data.id);
export const CHECK_FORGOT_OTP = (data) =>
  Axios.post(API.CHECK_FORGOT_OTP, data);
export const CHANGE_PASS = (data) => Axios.post(API.CHANGE_PASS, data);

//DASHOBARD

export const DASHBOARD_DETAILS = (data) =>
  Axios.post(API.DASHBOARD_DETAILS, data);

export const GET_CONTACT_DETAIL = () => Axios.get(API.GET_CONTACT_DETAIL);

// =================================================== //

export const CREATE_PASS = (data) => Axios.post(API.CREATE_PASS, data);
export const GET_DOCUMENTS = (data) => Axios.get(API.GET_DOCUMENTS + data.id);
export const GET_DOCUMENT_BY_ID = (data) =>
  Axios.post(API.GET_DOCUMENT_BY_ID + data.docId, { user_id: data.userId });
export const UPLOAD_DOCUMENT = (data) => Axios.post(API.UPLOAD_DOCUMENT, data);
export const VIEW_DOCUMENT = (data) => Axios.post(API.VIEW_DOCUMENT, data);
export const EDIT_PROFILE = (data) =>
  Axios.put(API.EDIT_PROFILE + data.userId, data);
export const POST_CONTACT = (data) => Axios.post(API.POST_CONTACT, data);
export const POST_SUBSCRIBE = (data) => Axios.post(API.POST_SUBSCRIBE, data);

export const POST_FACEBOOK = (data) => Axios.post(API.POST_FACEBOOK, data);
export const POST_INSTAGRAM = (data) => Axios.post(API.POST_INSTAGRAM, data);
export const POST_TWITTER = (data) => Axios.post(API.POST_TWITTER, data);
export const POST_YOUTUBE = (data) => Axios.post(API.POST_YOUTUBE, data);
export const POST_TIKTOK = (data) => Axios.post(API.POST_TIKTOK, data);

// // ================= MANAGE_CUSTOMERS =================== // //

export const CUSTOMERS_LIST = (data) => Axios.post(API.CUSTOMERS_LIST, data);
export const EDIT_MANAGE_CUSTOMER = (data) =>
  Axios.get(API.EDIT_MANAGE_CUSTOMER + data);
export const UPDATE_USER = (data) => Axios.post(API.UPDATE_USER, data);
export const ADD_USER = (data) => Axios.post(API.ADD_USER, data);
export const BLOCK_UNBLOCK_USER = (data) =>
  Axios.post(API.BLOCK_UNBLOCK_USER, data);
export const DELETE_USER = (data) => Axios.post(API.DELETE_USER, data);
export const EXPORT_USER = (data) => Axios.post(API.EXPORT_USER, data);

// // ================= SERVICE_PROVIDER =================== // //

export const SERVICE_PROVIDER_LIST = (data) =>
  Axios.post(API.SERVICE_PROVIDER_LIST, data);
export const ADD_SERVICE_PROVIDER = (data) =>
  Axios.post(API.ADD_SERVICE_PROVIDER, data);
export const EDIT_SERVICE_PROVIDER = (data) =>
  Axios.get(API.EDIT_SERVICE_PROVIDER + data);
export const UPDATE_SERVICE_PROVIDER = (data) =>
  Axios.post(API.UPDATE_SERVICE_PROVIDER, data);
export const UPDATE_SERVICE_PROVIDER_STATUS = (data) =>
  Axios.post(API.UPDATE_SERVICE_PROVIDER_STATUS, data);
export const BLOCK_UNBLOCK_PROVIDER = (data) =>
  Axios.post(API.BLOCK_UNBLOCK_PROVIDER, data);
export const DELETE_SERVICE_PROVIDER = (data) =>
  Axios.post(API.DELETE_SERVICE_PROVIDER, data);
export const EXPORT_SERVICE_PROVIDER = (data) =>
  Axios.post(API.EXPORT_SERVICE_PROVIDER, data);

export const GET_DRIVER_LIST = (data) => Axios.post(API.GET_DRIVER_LIST, data);

// // ================= FILE_UPLOAD =================== // //

export const FILE_UPLOAD = (data) => Axios.post(API.FILE_UPLOAD, data);

// ================= FAQ_LIST =================== //
export const FAQ_LIST = (data) => Axios.post(API.FAQ_LIST, data);
export const ADD_FAQ = (data) => Axios.post(API.ADD_FAQ, data);
export const EDIT_FAQ = (data) => Axios.post(API.EDIT_FAQ, data);
export const FAQ_DETAILS = (data) => Axios.get(API.FAQ_DETAILS + data);
export const DELETE_FAQ = (data) => Axios.post(API.DELETE_FAQ, data);
// ================= PROMO_CODES =================== //
export const PROMO_CODE_LIST = (data) => Axios.post(API.PROMO_CODE_LIST, data);
export const ADD_PROMO_CODE = (data) => Axios.post(API.ADD_PROMO_CODE, data);
export const EDIT_PROMO_CODES = (data) =>
  Axios.post(API.EDIT_PROMO_CODES, data);
export const PROMO_CODE_DETAILS = (data) =>
  Axios.get(API.PROMO_CODE_DETAILS + data);
export const DELETE_PROMO_CODE = (data) =>
  Axios.delete(API.DELETE_PROMO_CODE + data);

// ================= CONTENTPAGE_LIST =================== //
export const CONTENTPAGE_LIST = (data) =>
  Axios.post(API.CONTENTPAGE_LIST, data);
export const CONTENTPAGE_LIST_DETAILS = (data) =>
  Axios.get(API.CONTENTPAGE_LIST_DETAILS + data);
export const CONTENTPAGE_EDIT = (data) =>
  Axios.post(API.CONTENTPAGE_EDIT, data);

// =================== SYSTEM_ADMIN =================== //

export const ADMIN_LIST = (data) => Axios.post(API.ADMIN_LIST, data);
export const ADD_ADMIN_LIST = (data) => Axios.post(API.ADD_ADMIN_LIST, data);
export const UPDATE_ADMIN_LIST = (data) =>
  Axios.post(API.UPDATE_ADMIN_LIST, data);
export const CHANGE_ADMIN_PASSWORD = (data) =>
  Axios.post(API.CHANGE_ADMIN_PASSWORD, data);

//  ====================VEHICLE MAKE ==========================//
export const VEHICLE_MAKE_LIST = (data) =>
  Axios.post(API.VEHICLE_MAKE_LIST, data);
export const ADD_VEHICLE_MAKE = (data) =>
  Axios.post(API.ADD_VEHICLE_MAKE, data);
export const UPDATE_VEHICLE_MAKE = (data) =>
  Axios.post(API.UPDATE_VEHICLE_MAKE, data);
export const GET_VEHICLE_MAKE_DETAILS = (data) =>
  Axios.get(API.GET_VEHICLE_MAKE_DETAILS + data);
export const DELETE_VEHICLE_MAKE = (data) =>
  Axios.post(API.REMOVE_VEHICLE_MAKE, data);

//  ====================VEHICLE MODEL ==========================//
export const VEHICLE_MODEL_LIST = (data) =>
  Axios.post(API.VEHICLE_MODEL_LIST, data);
export const ADD_VEHICLE_MODEL = (data) =>
  Axios.post(API.ADD_VEHICLE_MODEL, data);
export const UPDATE_VEHICLE_MODEL = (data) =>
  Axios.post(API.UPDATE_VEHICLE_MODEL, data);
export const GET_VEHICLE_MODEL_DETAILS = (data) =>
  Axios.get(API.GET_VEHICLE_MODEL_DETAILS + data);
export const DELETE_VEHICLE_MODEL = (data) =>
  Axios.post(API.REMOVE_VEHICLE_MODEL, data);

//  ====================SERVICES ==========================//
export const SERVICE_LIST = (data) => Axios.post(API.SERVICE_LIST, data);
export const ADD_SERVICE = (data) => Axios.post(API.ADD_SERVICE, data);
export const UPDATE_SERVICE = (data) => Axios.post(API.UPDATE_SERVICE, data);
export const GET_SERVICE_DETAILS = (data) =>
  Axios.get(API.GET_SERVICE_DETAILS + data);
export const DELETE_SERVICE = (data) => Axios.post(API.REMOVE_SERVICE, data);

//  ====================SERVICE ADDON ==========================//
export const SERVICE_ADDON_LIST = (data) =>
  Axios.post(API.SERVICE_ADDON_LIST, data);
export const ADD_SERVICE_ADDON = (data) =>
  Axios.post(API.ADD_SERVICE_ADDON, data);
export const UPDATE_SERVICE_ADDON = (data) =>
  Axios.post(API.UPDATE_SERVICE_ADDON, data);
export const GET_SERVICE_ADDON_DETAILS = (data) =>
  Axios.get(API.GET_SERVICE_ADDON_DETAILS + data);
export const DELETE_SERVICE_ADDON = (data) =>
  Axios.post(API.REMOVE_SERVICE_ADDON, data);

// ================= SETTINGS =================== //

export const BASIC_SETTING_DETAILS = (data) =>
  Axios.get(API.BASIC_SETTING_DETAILS);
export const GET_CONFIG_DETAILS = (data) => Axios.get(API.GET_CONFIG_DETAILS);

export const BASIC_SETTING_UPDATE = (data) =>
  Axios.post(API.BASIC_SETTING_UPDATE, data);
export const GET_CONFIG_UPDATE = (data) =>
  Axios.post(API.GET_CONFIG_UPDATE, data);
export const GET_MAIL_UPDATE = (data) => Axios.post(API.GET_MAIL_UPDATE, data);
export const PAYMENT_CONFIG_UPDATE = (data) =>
  Axios.post(API.PAYMENT_CONFIG_UPDATE, data);

export const ANDROID_VERSION_UPDATE = (data) =>
  Axios.post(API.ANDROID_VERSION_UPDATE, data);

export const ANDROID_APP_URL_UPDATE = (data) =>
  Axios.post(API.ANDROID_APP_URL_UPDATE, data);
export const IOS_APP_URL_UPDATE = (data) =>
  Axios.post(API.IOS_APP_URL_UPDATE, data);
export const GET_MAIL_TEMPLATES = (data) => Axios.get(API.GET_MAIL_TEMPLATES);
export const GET_SMS_TEMPLATES = (data) => Axios.get(API.GET_SMS_TEMPLATES);

export const MAIL_TEMPLATES_UPDATE = (data) =>
  Axios.post(API.MAIL_TEMPLATES_UPDATE, data);
export const SMS_TEMPLATES_UPDATE = (data) =>
  Axios.post(API.SMS_TEMPLATES_UPDATE, data);

// ================= BOOKINGS =================== //

export const BOOKINGS_LIST = (data) => Axios.post(API.BOOKINGS_LIST, data);

export const BOOKING_DETAIL = (data) => Axios.get(API.BOOKING_DETAIL + data);

export const UPDATE_BOOKING_STATUS = (data) =>
  Axios.post(API.UPDATE_BOOKING_STATUS, data);

// ================= DISPUTES =================== //

export const DISPUTE_LIST = (data) => Axios.post(API.DISPUTE_LIST, data);

export const DISPUTE_DETAIL = (data) => Axios.get(API.DISPUTE_DETAIL + data);

export const UPDATE_DISPUTE_STATUS = (data) =>
  Axios.post(API.UPDATE_DISPUTE_STATUS, data);

export const REFUND_DISPUTE = (data) => Axios.post(API.REFUND_DISPUTE, data);

export const SEND_DISPUTE_REPLY = (data) =>
  Axios.post(API.SEND_DISPUTE_REPLY, data);

// ================= ADMIN TRANSACTION =================== //

export const ADMIN_TRANSACTION_LIST = (data) =>
  Axios.post(API.ADMIN_TRANSACTION_LIST, data);

export const EXPORT_ADMIN_TRANSACTION_LIST = (data) =>
  Axios.post(API.ADMIN_TRANSACTION_LIST, data);

// ================= PROVIDER WITHDRAWL =================== //

export const PROVIDER_WITHDRAWL_LIST = (data) =>
  Axios.post(API.PROVIDER_WITHDRAWL_LIST, data);

export const EXPORT_PROVIDER_WITHDRAWL_LIST = (data) =>
  Axios.post(API.PROVIDER_WITHDRAWL_LIST, data);

export const PROCESS_WITHDRAWAL = (data) =>
  Axios.post(API.PROCESS_WITHDRAWAL, data);

export const CANCEL_WITHDRAWAL = (data) =>
  Axios.post(API.CANCEL_WITHDRAWAL, data);

// ================= CUSTOMER REPORT GRAPH =================== //

export const CUSTOMER_REPORT_GRAPH = (data) =>
  Axios.post(API.CUSTOMER_REPORT_GRAPH, data);

// =================BOOKING REPORT GRAPH =================== //

export const BOOKING_REPORT_GRAPH = (data) =>
  Axios.post(API.BOOKING_REPORT_GRAPH, data);

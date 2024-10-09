export const API_URL = "https://backoffice-api.test.dev/api/";

export const LOGIN_USER = "user/usercheckotp";
export const LOGIN_OTP = "user/userloginotp";
export const FORGOT_PASS_OTP = "user/userpasswordupdatesendotp";
export const CHECK_FORGOT_OTP = "user/userpasswordupdatecheckotp";
export const CHANGE_PASS = "user/userpasswordupdate";
export const CREATE_PASS = "user/userpasswordgenerate";

// ==================================================== //
// user/uploadfiles
export const GET_DOCUMENTS = "user/getuserdocuments/";
export const GET_DOCUMENT_BY_ID = "user/getuserdocument/";
export const UPLOAD_DOCUMENT = "user/userdocument";
export const VIEW_DOCUMENT = "";

export const EDIT_PROFILE = "user/updateuser/";
export const USER_DATA = "user/getuser/";

export const POST_CONTACT = "user/addcontactus";
export const POST_SUBSCRIBE = "user/addsubscriber";

export const POST_FACEBOOK = "user/addsubscriberfacebook";
export const POST_INSTAGRAM = "user/addsubscriberinstagram";
export const POST_TWITTER = "user/addsubscribertwitter";
export const POST_YOUTUBE = "user/addsubscriberyoutube";
export const POST_TIKTOK = "user/addsubscribertiktok";

// ==================================================== //

export const GET_CONTACT_DETAIL = "user/getclientbasicsetting";

// // ================= DASHBOARD =================== // //
export const DASHBOARD_DETAILS = "adminDashboard/getDashboardList";

// // ================= BOOKINGS  =================== // //
export const BOOKINGS_LIST = "adminDashboard/allBookingsWithFilter";
export const BOOKING_DETAIL = "adminDashboard/bookingDetail/";
export const UPDATE_BOOKING_STATUS = "adminDashboard/updateBookingStatus";

// // ================= ADMIN TRANSACTION  =================== // //
export const ADMIN_TRANSACTION_LIST =
  "adminDashboard/adminTransactionsWithFilter";

// // ================= PROVIDER WITHDRAWL  =================== // //
export const PROVIDER_WITHDRAWL_LIST =
  "adminDashboard/providerWithdrawlsWithFilter";

export const PROCESS_WITHDRAWAL = "adminDashboard/processWithdrawl";

export const CANCEL_WITHDRAWAL = "adminDashboard/cancelWithdrawl";

// // ================= MANAGE_CUSTOMERS =================== // //

export const CUSTOMERS_LIST = "admin/getUsersWithFilter";
export const EDIT_MANAGE_CUSTOMER = "admin/getUserById/";
export const UPDATE_USER = "admin/editUser";
export const ADD_USER = "admin/addUser";
export const BLOCK_UNBLOCK_USER = "admin/blockUnblockCustomer";
export const DELETE_USER = "admin/removeUser";
export const EXPORT_USER = "admin/getUsersWithFilter";

// // ================= MANAGE PROVIDERS =================== // //

export const SERVICE_PROVIDER_LIST = "admin/provider/getWithFilter";
export const ADD_SERVICE_PROVIDER = "admin/provider/add";
export const EDIT_SERVICE_PROVIDER = "admin/provider/getById/";
export const UPDATE_SERVICE_PROVIDER = "admin/provider/edit";
export const BLOCK_UNBLOCK_PROVIDER = "admin/provider/blockUnblock";
export const DELETE_SERVICE_PROVIDER = "admin/provider/remove";
export const EXPORT_SERVICE_PROVIDER = "admin/provider/getWithFilter";
export const UPDATE_SERVICE_PROVIDER_STATUS =
  "admin/provider/onAccountApprovalByAdmin";
export const GET_DRIVER_LIST = "admin/provider/getDriversWithFilter";

// // ================= FILE_UPLOAD =================== // //
export const FILE_UPLOAD = "user/uploadfiles";

//================= FAQ_LIST =================== //
export const FAQ_LIST = "admin/getAllFaqs";
export const ADD_FAQ = "admin/addFaq";
export const EDIT_FAQ = "admin/editFaq";
export const FAQ_DETAILS = "admin/getFaqsById/";
export const DELETE_FAQ = "admin/deleteFaq";
// ================= CONTENTPAGE_LIST =================== //
export const CONTENTPAGE_LIST = "admin/contents";
export const CONTENTPAGE_LIST_DETAILS = "admin/contents/edit/";
export const CONTENTPAGE_EDIT = "admin/contents/update";

// ================= SETTINGS =================== //
export const BASIC_SETTING_DETAILS = "adminSetting/getBasicSettingInfo";
export const GET_CONFIG_DETAILS = "adminSetting/getConfigInfo";
export const BASIC_SETTING_UPDATE = "adminSetting/basicAppSetting";
export const GET_CONFIG_UPDATE = "adminSetting/twilio/update";
export const GET_MAIL_UPDATE = "adminSetting/mailgun/update";
export const PAYMENT_CONFIG_UPDATE = "adminSetting/paymentConfig/update";
export const ANDROID_VERSION_UPDATE = "adminSetting/appVersion/update";
export const ANDROID_APP_URL_UPDATE = "adminSetting/androidAppUrl/update";
export const IOS_APP_URL_UPDATE = "adminSetting/iosAppURL/update";
export const GET_MAIL_TEMPLATES = "adminSetting/mailTemplate/all";
export const MAIL_TEMPLATES_UPDATE = "adminSetting/mailTemplate/edit";
export const GET_SMS_TEMPLATES = "adminSetting/smsTemplate/all";
export const SMS_TEMPLATES_UPDATE = "adminSetting/smsTemplate/edit";

//=================PROMOCODE =================== //
export const PROMO_CODE_LIST = "admin/promocodes/getWithFilters";
export const ADD_PROMO_CODE = "admin/promocodes/add";
export const EDIT_PROMO_CODES = "admin/promocodes/edit";
export const PROMO_CODE_DETAILS = "admin/promocodes/getById/";
export const DELETE_PROMO_CODE = "admin/promocodes/delete/";

// ================= ADMIN_LIST =================== //

export const ADMIN_LIST = "admin/getAllAdminList";
export const ADD_ADMIN_LIST = "admin/addAdmin";
export const UPDATE_ADMIN_LIST = "admin/editAdmin";
export const CHANGE_ADMIN_PASSWORD = "admin/changePassword";

// ================= VEHICLE MAKE =================== //

export const VEHICLE_MAKE_LIST = "vehicleMake/getWithFilter";
export const ADD_VEHICLE_MAKE = "vehicleMake/add";
export const UPDATE_VEHICLE_MAKE = "vehicleMake/update";
export const GET_VEHICLE_MAKE_DETAILS = "vehicleMake/getById/";
export const REMOVE_VEHICLE_MAKE = "vehicleMake/remove";

// ================= VEHICLE MODEL =================== //

export const VEHICLE_MODEL_LIST = "vehicleModel/getWithFilter";
export const ADD_VEHICLE_MODEL = "vehicleModel/add";
export const UPDATE_VEHICLE_MODEL = "vehicleModel/update";
export const GET_VEHICLE_MODEL_DETAILS = "vehicleModel/getById/";
export const REMOVE_VEHICLE_MODEL = "vehicleModel/remove";

// ================= SERVICES =================== //

export const SERVICE_LIST = "service/getWithFilter";
export const ADD_SERVICE = "service/add";
export const UPDATE_SERVICE = "service/update";
export const GET_SERVICE_DETAILS = "service/getById/";
export const REMOVE_SERVICE = "service/remove";

// ================= SERVICE ADD ON'S =================== //

export const SERVICE_ADDON_LIST = "addOn/getWithFilter";
export const ADD_SERVICE_ADDON = "addOn/add";
export const UPDATE_SERVICE_ADDON = "addOn/update";
export const GET_SERVICE_ADDON_DETAILS = "addOn/getById/";
export const REMOVE_SERVICE_ADDON = "addOn/remove";

// // ================= DISPUTE  =================== // //
export const DISPUTE_LIST = "dispute/getWithFilters";
export const DISPUTE_DETAIL = "dispute/getDetail/";
export const UPDATE_DISPUTE_STATUS = "dispute/updateDisputeStatus";
export const REFUND_DISPUTE = "dispute/refundDispute";
export const SEND_DISPUTE_REPLY = "dispute/sendDisputeReplyByAdmin";

// // ================= CUSTOMER_REPORT_GRAPH  =================== // //

export const CUSTOMER_REPORT_GRAPH = "adminDashboard/customerCountReport";

// // ================= BOOKING_REPORT_GRAPH  =================== // //

export const BOOKING_REPORT_GRAPH = "adminDashboard/bookingGraph";

// export const STRIPE_PUBLIC_KEY = "pk_test_LLAdXVApiHYl2QUmtHy2HiHT";

export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const Numeric = /^[0-9]+$/;
export const ALPHABET = /^[A-Za-z]+$/;
export const ALPHANUMERIC_REGEX = /[^a-z\d]/i;
export const PASS_VALIDATION_MSG =
  "password should be at least 8 characters, one uppercase, lowercase, special character (@,-,~,_), numeric value.";

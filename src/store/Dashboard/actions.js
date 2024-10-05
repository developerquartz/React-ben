import * as CONST from "./actionTypes";

// ================= DASHBOARD_DETAILS =================== //
export const dashboardDetails = (payload, callBack) => {
  return {
    type: CONST.DASHBOARD_DETAILS,
    payload: payload,
    callBack,
  };
};

export const dashboardDetails_Success = (payload) => ({
  type: CONST.DASHBOARD_DETAILS_SUCCESS,
  payload,
});

export const dashboardDetails_Fail = (payload) => ({
  type: CONST.DASHBOARD_DETAILS_FAIL,
  payload,
});


// ================= BOOKINGS_LIST =================== //
export const bookingsList = (payload, callBack) => {
  return {
    type: CONST.BOOKINGS_LIST,
    payload: payload,
    callBack,
  };
};

export const bookingsList_Success = (payload) => ({
  type: CONST.BOOKINGS_LIST_SUCCESS,
  payload,
});

export const bookingsList_Fail = (payload) => ({
  type: CONST.BOOKINGS_LIST_FAIL,
  payload,
});


// ================= BOOKING DETAIL =================== //
export const bookingDetail = (payload, callBack) => {
  return {
    type: CONST.BOOKING_DETAIL,
    payload: payload,
    callBack,
  };
};

export const bookingDetail_Success = (payload) => ({
  type: CONST.BOOKING_DETAIL_SUCCESS,
  payload,
});

export const bookingDetail_Fail = (payload) => ({
  type: CONST.BOOKING_DETAIL_FAIL,
  payload,
});


// ================= UPDATE BOOKING STATUS =================== //
export const updateBookingStatus = (payload, callBack) => {
  return {
    type: CONST.UPDATE_BOOKING_STATUS,
    payload: payload,
    callBack,
  };
};

export const updateBookingStatus_Success = (payload) => ({
  type: CONST.UPDATE_BOOKING_STATUS_SUCCESS,
  payload,
});

export const updateBookingStatus_Fail = (payload) => ({
  type: CONST.UPDATE_BOOKING_STATUS_FAIL,
  payload,
});



// ================= ADMIN_TRANSACTION_LIST =================== //
export const adminTransactionsList = (payload, callBack) => {
  return {
    type: CONST.ADMIN_TRANSACTION_LIST,
    payload: payload,
    callBack,
  };
};

export const adminTransactionsList_Success = (payload) => ({
  type: CONST.ADMIN_TRANSACTION_LIST_SUCCESS,
  payload,
});

export const adminTransactionsList_Fail = (payload) => ({
  type: CONST.ADMIN_TRANSACTION_LIST_FAIL,
  payload,
});


// ================= PROVIDER_WITHDRAWL_LIST =================== //
export const providerWithdrawlList = (payload, callBack) => {
  return {
    type: CONST.PROVIDER_WITHDRAWL_LIST,
    payload: payload,
    callBack,
  };
};

export const providerWithdrawlList_Success = (payload) => ({
  type: CONST.PROVIDER_WITHDRAWL_LIST_SUCCESS,
  payload,
});

export const providerWithdrawlList_Fail = (payload) => ({
  type: CONST.PROVIDER_WITHDRAWL_LIST_FAIL,
  payload,
});


// ================= PROCESS_WITHDRAWAL =================== //
export const processWithdrawal = (payload, callBack) => {
  return {
    type: CONST.PROCESS_WITHDRAWAL,
    payload: payload,
    callBack,
  };
};

export const processWithdrawal_Success = (payload) => ({
  type: CONST.PROCESS_WITHDRAWAL_SUCCESS,
  payload,
});

export const processWithdrawal_Fail = (payload) => ({
  type: CONST.PROCESS_WITHDRAWAL_FAIL,
  payload,
});


// ================= CANCEL_WITHDRAWAL =================== //
export const cancelWithdrawal = (payload, callBack) => {
  return {
    type: CONST.CANCEL_WITHDRAWAL,
    payload: payload,
    callBack,
  };
};

export const cancelWithdrawal_Success = (payload) => ({
  type: CONST.CANCEL_WITHDRAWAL_SUCCESS,
  payload,
});

export const cancelWithdrawal_Fail = (payload) => ({
  type: CONST.CANCEL_WITHDRAWAL_FAIL,
  payload,
});

// ================= CUSTOMER_REPORT_GRAPH =================== //
export const customerReportGraph = (payload, callBack) => {
  return {
    type: CONST.CUSTOMER_REPORT_GRAPH,
    payload: payload,
    callBack,
  };
};

export const customerReportGraph_Success = (payload) => ({
  type: CONST.CUSTOMER_REPORT_GRAPH_SUCCESS,
  payload,
});

export const customerReportGraph_Fail = (payload) => ({
  type: CONST.CUSTOMER_REPORT_GRAPH_FAIL,
  payload,
});



// ================= BOOKING_REPORT_GRAPH =================== //
export const bookingReportGraph = (payload, callBack) => {
  return {
    type: CONST.BOOKING_REPORT_GRAPH,
    payload: payload,
    callBack,
  };
};

export const bookingReportGraph_Success = (payload) => ({
  type: CONST.BOOKING_REPORT_GRAPH_SUCCESS,
  payload,
});

export const bookingReportGraph_Fail = (payload) => ({
  type: CONST.BOOKING_REPORT_GRAPH_FAIL,
  payload,
});
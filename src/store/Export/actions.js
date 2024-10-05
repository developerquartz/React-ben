import * as CONST from "./actionTypes";

export const exportAdminTransactions = (payload, callBack) => {
  return {
    type: CONST.EXPORT_ADMIN_TRANSACTIONS,
    payload: { ...payload },
    callBack,
  };
};

export const exportAdminTransactions_Success = (payload) => ({
  type: CONST.EXPORT_ADMIN_TRANSACTIONS_SUCCESS,
  payload,
});

export const exportAdminTransactions_Fail = (payload) => ({
  type: CONST.EXPORT_ADMIN_TRANSACTIONS_FAIL,
  payload,
});

export const exportBooking = (payload, callBack) => {
  return {
    type: CONST.EXPORT_BOOKING_DATA,
    payload: { ...payload },
    callBack,
  };
};

export const exportBooking_Success = (payload) => ({
  type: CONST.EXPORT_BOOKING_DATA_SUCCESS,
  payload,
});

export const exportBooking_Fail = (payload) => ({
  type: CONST.EXPORT_BOOKING_DATA_FAIL,
  payload,
});

export const exportProviderWithdrawlRequests = (payload, callBack) => {
  return {
    type: CONST.EXPORT_PROVIDER_WITHDRAWL_REQUESTS,
    payload: { ...payload },
    callBack,
  };
};

export const exportProviderWithdrawlRequests_Success = (payload) => ({
  type: CONST.EXPORT_PROVIDER_WITHDRAWL_REQUESTS_SUCCESS,
  payload,
});

export const exportProviderWithdrawlRequests_Fail = (payload) => ({
  type: CONST.EXPORT_PROVIDER_WITHDRAWL_REQUESTS_FAIL,
  payload,
});

import * as CONST from "./actionTypes";

// ================= DISPUTE_DETAILS =================== //
export const disputeDetails = (payload, callBack) => {
  return {
    type: CONST.DISPUTE_DETAIL,
    payload: payload,
    callBack,
  };
};

export const disputeDetails_Success = (payload) => ({
  type: CONST.DISPUTE_DETAIL_SUCCESS,
  payload,
});

export const disputeDetails_Fail = (payload) => ({
  type: CONST.DISPUTE_DETAIL_FAIL,
  payload,
});

// ================= DISPUTES_LIST =================== //
export const disputesList = (payload, callBack) => {
  return {
    type: CONST.DISPUTES_LIST,
    payload: payload,
    callBack,
  };
};

export const disputesList_Success = (payload) => ({
  type: CONST.DISPUTES_LIST_SUCCESS,
  payload,
});

export const disputesList_Fail = (payload) => ({
  type: CONST.DISPUTES_LIST_FAIL,
  payload,
});


// ================= UPDATE DISPUTE STATUS =================== //
export const updateDisputeStatus = (payload, callBack) => {
  return {
    type: CONST.UPDATE_DISPUTE_STATUS,
    payload: payload,
    callBack,
  };
};

export const updateDisputeStatus_Success = (payload) => ({
  type: CONST.UPDATE_DISPUTE_STATUS_SUCCESS,
  payload,
});

export const updateDisputeStatus_Fail = (payload) => ({
  type: CONST.UPDATE_DISPUTE_STATUS_FAIL,
  payload,
});


// ================= REFUND DISPUTE=================== //
export const refundDispute = (payload, callBack) => {
  return {
    type: CONST.REFUND_DISPUTE,
    payload: payload,
    callBack,
  };
};

export const refundDispute_Success = (payload) => ({
  type: CONST.REFUND_DISPUTE_SUCCESS,
  payload,
});

export const refundDispute_Fail = (payload) => ({
  type: CONST.REFUND_DISPUTE_FAIL,
  payload,
});

// ================= DISPUTE REPLY =================== //
export const disputeReply = (payload, callBack) => {
  return {
    type: CONST.DISPUTE_REPLY,
    payload: payload,
    callBack,
  };
};

export const disputeReply_Success = (payload) => ({
  type: CONST.DISPUTE_REPLY_SUCCESS,
  payload,
});

export const disputeReply_Fail = (payload) => ({
  type: CONST.DISPUTE_REPLY_FAIL,
  payload,
});
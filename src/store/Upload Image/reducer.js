import * as CONST from "./actionTypes";

const intialState = { 
  isLogin: false,
  loading: false,
  edituser: [],

  error: null,
};

const UplaoadFileReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.FILE_UPLOAD:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.FILE_UPLOAD_SUCCESS:
      // console.log("IN REDUCER");
      return {
        ...state,
        loading: false,
        uploadfile: payload,
        error: null,
      };
    case CONST.FILE_UPLOAD_FAIL:
      return {
        ...state,
        loading: true,

        error: payload,
      };

    default:
      return state;

      break;
  }
};

export default UplaoadFileReducer;

import * as CONST from "./actionTypes";

const intialState = {
  document: [],
  error: null,
};

const ProfileReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.GET_USER_PROFILE:
      return {
        ...state,
        error: null,
      };
    case CONST.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        document: payload,
        error: null,
      };
    case CONST.GET_USER_PROFILE_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;

      break;
  }
};

export default ProfileReducer;

import * as ACTION_TYPES from "../actions/actionTypes";

export const initStateAuthReducer = {
  is_authenticated: false
};

export const authReducer = (state = initStateAuthReducer, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      return { ...state, is_authenticated: true };
    case ACTION_TYPES.LOGIN_FAILURE:
      return { ...state, is_authenticated: false };
    default:
      throw new Error();
  }
};

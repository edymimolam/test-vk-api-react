import * as ACTION_TYPES from "../actions/actionTypes";

export const loginStatus = () => ({ type: ACTION_TYPES.LOGIN_STATUS });

export const loginSuccess = () => ({ type: ACTION_TYPES.LOGIN_SUCCESS });
export const loginFailure = () => ({ type: ACTION_TYPES.LOGIN_FAILURE });

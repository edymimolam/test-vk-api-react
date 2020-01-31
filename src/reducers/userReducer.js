import AT from "../actions/actionTypes";

export const userInitialState = {
  isLoading: false,
  isAuth: false,
  user: null,
  friends: null,
  Error: null
};

export const userReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case AT.LOGIN_REQUEST:
    case AT.FRIENDS_REQUEST:
      return { ...state, isLoading: true };
    case AT.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: action.payload
      };
    case AT.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        Error: action.payload
      };
    case AT.LOGOUT:
      return {
        isLoading: false,
        isAuth: false,
        user: null
      };
    case AT.FRIENDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        friends: { ...action.payload }
      };
    case AT.FRIENDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        Error: action.payload
      };
    default:
      return state;
  }
};

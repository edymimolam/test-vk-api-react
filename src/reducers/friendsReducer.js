import AT from "../actions/actionTypes";

export const friendsInitialState = {
  isLoading: false,
  friends: {}
};

export const friendsReducer = (state, action) => {
  switch (action.type) {
    case AT.FRIENDS_REQUEST:
      return { ...state, isLoading: true };
    default:
      throw new Error();
  }
};

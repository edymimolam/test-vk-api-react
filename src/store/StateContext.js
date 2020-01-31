import React, { useReducer } from "react";
import Context from "./Context";

import * as ACTIONS from "./actionCreators";
import { initStateAuthReducer, authReducer } from "./authReducer";

const StateContext = ({ children }) => {
  const [stateAuthReducer, dispatchAuthReducer] = useReducer(
    authReducer,
    initStateAuthReducer
  );

  const handleLoginSuccess = () => dispatchAuthReducer(ACTIONS.loginSuccess());
  const handleLoginFailure = () => dispatchAuthReducer(ACTIONS.loginFailure());

  return (
    <Context.Provider
      value={{
        authState: stateAuthReducer,
        handleLoginSuccess,
        handleLoginFailure
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateContext;

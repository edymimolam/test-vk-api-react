import AT from "../actions/actionTypes";
import { useEffect, useCallback } from "react";
import { useMainContext } from "./useMainContext";
import { useVkContext } from "./useVkContext";

export const useAuth = () => {
  const { dispatch } = useMainContext();
  const vk = useVkContext();

  const getUserInfo = useCallback(
    () =>
      vk.Api.call(
        "users.get",
        { fields: "photo_200, counters", v: "5.103" },
        r => dispatch({ type: AT.LOGIN_SUCCESS, payload: r.response[0] })
      ),
    [dispatch, vk.Api]
  );

  useEffect(() => {
    vk.Auth.getLoginStatus(r =>
      r.session ? getUserInfo() : dispatch({ type: AT.LOGIN_FAILURE })
    );
  }, [vk.Auth, getUserInfo, dispatch]);

  const login = () => {
    dispatch({ type: AT.LOGIN_REQUEST });
    vk.Auth.login(
      r =>
        r.session
          ? getUserInfo()
          : dispatch({
              type: AT.LOGIN_FAILURE,
              payload: new Error("Authorization Error")
            }),
      2
    );
  };

  const logout = () => vk.Auth.logout(() => dispatch({ type: AT.LOGOUT }));

  return {
    login,
    logout
  };
};

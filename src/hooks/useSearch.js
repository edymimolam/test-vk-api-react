import AT from "../actions/actionTypes";
import { useEffect, useState } from "react";
import { useMainContext } from "./useMainContext";
import { useVkContext } from "./useVkContext";

export const useSearch = () => {
  const [text, setText] = useState("");
  const { dispatch } = useMainContext();
  const vk = useVkContext();

  useEffect(() => {
    if (text) {
      dispatch({ type: AT.FRIENDS_REQUEST });
      vk.Api.call(
        "friends.search",
        { q: text, fields: "photo_100, screen_name", v: "5.103" },
        r => {
          if (r.response)
            dispatch({ type: AT.FRIENDS_SUCCESS, payload: r.response });
          if (r.error) dispatch({ type: AT.FRIENDS_FAILURE, payload: r.error });
        }
      );
    } else {
      dispatch({ type: AT.FRIENDS_CLEAR });
    }

    return () => {};
  }, [text, dispatch, vk.Api]);

  const onTextChange = e => setText(e.currentTarget.value);

  return { text, onTextChange };
};

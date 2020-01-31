import AT from "../actions/actionTypes";
import { useEffect, useState } from "react";
import { useUserContext } from "./useUserContext";
import { useVkContext } from "./useVkContext";

export const useSearch = () => {
  const [text, setText] = useState("");
  const [requestText, setRequestText] = useState(null);
  const { dispatch } = useUserContext();
  const vk = useVkContext();

  useEffect(() => {
    if (requestText) dispatch({ type: AT.FRIENDS_REQUEST });
    vk.Api.call(
      "friends.search",
      { q: requestText, fields: "photo_200_orig, screen_name", v: "5.103" },
      r => {
        if (r.response)
          dispatch({ type: AT.FRIENDS_SUCCESS, payload: r.response });
        if (r.error) dispatch({ type: AT.FRIENDS_FAILURE, payload: r.error });
      }
    );
    return () => {};
  }, [requestText, dispatch, vk.Api]);

  const onTextChange = e => setText(e.currentTarget.value);

  const onTextSubmit = e => setRequestText(text);

  const onKeyPress = e => e.key === "Enter" && setRequestText(text);

  return { text, onTextChange, onTextSubmit, onKeyPress };
};

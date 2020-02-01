import React from "react";
import Friend from "./Friend";
import { useMainContext } from "../hooks/useMainContext";

const Friends = () => {
  const {
    state: { friends }
  } = useMainContext();
  let friendsArr = [];
  if (friends && friends.count > 0)
    friendsArr = friends.items.map(i => <Friend key={i.id} item={i} />);

  return friendsArr;
};

export default Friends;

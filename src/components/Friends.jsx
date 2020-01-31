import React from "react";
import Friend from "./Friend";

const Friends = ({ friends }) => {
  let friendsArr = [];
  if (friends && friends.count > 0)
    friendsArr = friends.items.map(i => <Friend key={i.id} item={i} />);
  return friendsArr;
};

export default Friends;

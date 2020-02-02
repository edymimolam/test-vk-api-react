import React from "react";
import Friend from "./Friend";
import { useMainContext } from "../hooks/useMainContext";
import styled from "styled-components";

const Container = styled.main`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Friends = () => {
  const {
    state: { friends }
  } = useMainContext();
  let friendsArr = [];
  if (friends)
    friendsArr = friends.items.map(i => <Friend key={i.id} item={i} />);

  return <Container>{friendsArr}</Container>;
};

export default Friends;

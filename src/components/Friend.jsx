import React from "react";
import styled from "styled-components";

const Container = styled.article`
  margin: 0 auto 2rem;
  max-width: 700px;
  display: flex;
  align-items: center;
`;

const Photo = styled.img`
  margin-right: 1rem;
`;

const Name = styled.h3`
  text-align: left;
`;

const Friend = ({ item }) => {
  return (
    <Container>
      <Photo
        src={item.photo_100}
        alt={`${item.first_name} ${item.last_name}`}
      />
      <Name>{`${item.first_name} ${item.last_name}`}</Name>
    </Container>
  );
};

export default Friend;

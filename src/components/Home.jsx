import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Friends from "./Friends";
import { useAuth } from "../hooks/useAuth";
import { useMainContext } from "../hooks/useMainContext";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Header = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 11px rgba(57, 63, 72, 0.1);
  margin-bottom: 3rem;
`;

const UserPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Counter = styled.span`
  margin: 0 auto 0 1rem;
  font-size: 1rem;
  text-transform: capitalize;
  & span {
    margin-left: 0.2rem;
    color: #777;
  }
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  border-radius: 10px;
  text-transform: uppercase;
`;

const LoginButton = styled(Button)`
  background: transparent;
  border: 2px solid #6200ee;
  font-size: 1.5rem;
  color: #6200ee;
`;

const LogoutButton = styled(Button)`
  background: #6200ee;
  font-size: 1.1rem;
  color: white;
  @media (max-width: 700px) {
    padding: 0.75rem 1rem;
  }
`;

const Home = () => {
  const { login, logout } = useAuth();
  const {
    state: { isAuth, user, isLoading, error }
  } = useMainContext();
  return (
    <>
      {error && <h3>{error.error_msg || error}</h3>}

      {isAuth && (
        <>
          <Header>
            <UserPhoto src={user.photo_200} />
            <Counter>
              друзья <span>{user.counters.friends}</span>
            </Counter>
            <LogoutButton onClick={() => logout()}>logout</LogoutButton>
          </Header>
          <Search />
          <Friends />
        </>
      )}

      {isAuth || isLoading || (
        <CenteredContainer>
          <LoginButton onClick={() => login()}>login</LoginButton>
        </CenteredContainer>
      )}

      {isLoading && (
        <CenteredContainer>
          <h3>Loading...</h3>
        </CenteredContainer>
      )}
    </>
  );
};
export default Home;

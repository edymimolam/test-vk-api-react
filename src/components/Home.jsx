import React from "react";
import Avatar from "./Avatar";
import Search from "./Search";
import Friends from "./Friends";
import { useAuth } from "../hooks/useAuth";
import { useMainContext } from "../hooks/useMainContext";

const Home = () => {
  const { login, logout } = useAuth();
  const {
    state: { isAuth, user, friends }
  } = useMainContext();
  return (
    <div>
      {isAuth && (
        <div>
          <button onClick={() => logout()}>logout</button>
          <Avatar src={user.photo_200_orig} />
          <p>{user.counters.friends}</p>
          <Search />
          <Friends friends={friends} />
        </div>
      )}

      {isAuth || <button onClick={() => login()}>login</button>}
    </div>
  );
};
export default Home;

// import { useVkContext } from "../hooks/useVkContext";

// const vk = useVkContext();

export const login = vk => {
  // eslint-disable-next-line no-undef
  return vk.Auth.login(r => {
    console.log(r);
  });
};

export const logout = () => {
  // eslint-disable-next-line no-undef
  vk.Auth.logout(r => console.log(r));
};

export const getLoginStatus = vk => {
  // eslint-disable-next-line no-undef
  vk.Auth.getLoginStatus(r => console.log(r));
};

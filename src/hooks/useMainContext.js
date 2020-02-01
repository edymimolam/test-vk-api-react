import { useContext } from "react";
import { MainContext } from "../providers/MainProvider";

export const useMainContext = () => {
  const mainContext = useContext(MainContext);
  return {
    state: mainContext[0],
    dispatch: mainContext[1]
  };
};

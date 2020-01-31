import { useContext } from "react";
import { VKContext } from "../providers/VkProvider";

export const useVkContext = () => {
  const context = useContext(VKContext);
  return context;
};

import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { IProvideAuth } from "/imports/types/IProvideAuth";

export const useAuth = (): IProvideAuth => {
  return useContext(AuthContext);
};

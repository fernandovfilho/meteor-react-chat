import { createContext } from "react";
import { IProvideAuth } from "/imports/types/IProvideAuth";

export const AuthContext = createContext<IProvideAuth>({
  signIn: async () => {},
  signUp: async () => {},
  logout: async () => {},
});

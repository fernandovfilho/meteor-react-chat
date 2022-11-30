import React from "react";
import { AuthContext } from "./AuthContext";
import { useProvideAuth } from "./useProvideAuth";

export const ProvideAuth = ({ children }: { children: any }) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

import React, { ReactNode } from "react";
import { AuthProvider } from "context/auth-context";

export const AppProviders = (props: { chidlren: ReactNode }) => {
  const { chidlren } = props;

  return <AuthProvider>{chidlren}</AuthProvider>;
};

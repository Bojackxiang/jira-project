import React, { ReactNode } from "react";
import { AuthProvider } from "context/auth-context";

// 这个 就是 一个封装好的 provider
export const AppProviders = (props: { chidlren: ReactNode }) => {
  const { chidlren } = props;

  return <AuthProvider>{chidlren}</AuthProvider>;
};

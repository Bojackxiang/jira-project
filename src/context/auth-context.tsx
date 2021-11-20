import React, { useState } from "react";
import * as auth from "auth-provider";
import { User } from "interfaces";
import { http } from "utils/http";
import { useUserMount } from "customized-hooks/userMount";

interface AuthForm {
  username: string;
  password: string;
}

const bootstrapUesr = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }

  return user;
};

const AuthContextSample = React.createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContextSample.displayName = "AuthContextSample";

// 这个用来 包裹整个 App 的
export const AuthProvider = (props: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (form: AuthForm) =>
    auth.login(form).then((user) => setUser(user.user));

  const register = (form: AuthForm) =>
    auth.register(form).then((user) => setUser(user.user));

  const logout = () => auth.logout().then(() => setUser(null));

  useUserMount(() => {
    bootstrapUesr().then(setUser);
  });

  return (
    <AuthContextSample.Provider
      children={props.children}
      value={{ user, login, register, logout }}
    />
  );
};

// 这个是用来在 component 里面调用 方法的
export const useAuth = () => {
  const context = React.useContext(AuthContextSample);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

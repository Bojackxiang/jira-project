import { useAuth } from "context/auth-context";
import { fakeLogin } from "fake_requests/login";
import React, { FormEvent, FormEventHandler } from "react";

const base_url = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    const response = await login({ username, password });
  };
  // login
  const { login, user, logout } = useAuth();

  return (
    <div>
      {user?.name ? user?.name : <h2>登陆</h2>}

      {user?.name ? <button onClick={logout}>登出</button> : null}

      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">用户名</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="username">密码</label>
          <input type="text" id="password" />
        </div>
        <div>
          <button type="submit">登陆</button>
        </div>
      </form>
    </div>
  );
};

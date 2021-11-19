import React, { FormEvent, FormEventHandler } from "react";

const base_url = process.env.REACT_APP_API_URL;

export const RegisterScreen = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    const response = await register({ username, password });
  };
  // login
  const register = async (params: { username: string; password: string }) => {
    fetch(`${base_url}/register`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then(async (response) => {
      if (response.ok) {
        console.log(await response.json());
      }
    });
  };

  return (
    <div>
      <h2>注册</h2>
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

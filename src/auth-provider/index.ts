import { User } from "interfaces";

const localStorageKey = "__auth_provider_token__";
const baseUrl = process.env.REACT_APP_API_URL;

export const getToken = () => {
  return localStorage.getItem(localStorageKey);
};

export const handleUserResponse = (user: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.user.token || "");
  return user;
};

export const login = (data: { username: string; password: string }) => {
  return fetch(`${baseUrl}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    }
    return Promise.reject(data);
  });
};

export const register = (data: { username: string; password: string }) => {
  return fetch(`${baseUrl}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    }
    return Promise.reject(data);
  });
};

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey);
};

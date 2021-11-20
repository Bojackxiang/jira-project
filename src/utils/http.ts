import qs from "qs";
import * as authProvider from "auth-provider";
import { useAuth } from "context/auth-context";

const base_url = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data?: object;
  token?: string;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customizedConfig }: Config = {}
) => {
  const config = {
    methods: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customizedConfig,
  };

  console.log("GET HERE 1");
  if (config.methods.toUpperCase() === "GET") {
    console.log("GET HERE 2", data);
    endpoint += `?${qs.stringify(data)}`;
    console.log("GET HERE 3", endpoint);
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window
    .fetch(`${base_url}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        // unauthorized
        // window.location.href = "/login";
        authProvider.logout();
        window.location.reload();
        return Promise.reject({
          message: "请重新登录",
        });
      }

      const data = await response.json();
      console.log(`${endpoint}`, { data });
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();

  // ts UTILITIES TYPES
  return async (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, {
      ...config,
      token: user?.token ?? "",
    });
};

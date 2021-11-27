import { createSlice } from "@reduxjs/toolkit";
import { AuthForm, bootstrapUesr } from "context/auth-context";
import { User } from "interfaces";
import { AppDispatch, RootState } from "store";
import * as auth from "auth-provider";

interface State {
  user: User | null;
}

const initialState: State = {
  user: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

// 这边是 use select 的时候使用的
export const selectUser = (state: RootState) => state.auth.user;

// 注意，这边一般都是两层函数
export const loginThunk = (form: AuthForm) => (dispatch: AppDispatch) => {
  auth.login(form).then((user) => {
    dispatch(setUser(user));
  });
};
export const registerThunk = (form: AuthForm) => (dispatch: AppDispatch) => {
  auth.register(form).then((user) => {
    dispatch(setUser(user));
  });
};
export const logoutThunk = (form: AuthForm) => (dispatch: AppDispatch) => {
  dispatch(setUser(null));
};
export const bootstrap = () => (dispatch: AppDispatch) => {
  bootstrapUesr().then((user) => {
    dispatch(setUser(user));
  });
};

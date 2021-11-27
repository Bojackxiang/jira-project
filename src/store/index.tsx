import { configureStore } from "@reduxjs/toolkit";
import { loadingModalSlice } from "./loadingState";
import { authSlice } from "./auth.sclice";

// this is the reducer for redux
export const rootReducer = {
  loading: loadingModalSlice.reducer,
  auth: authSlice.reducer,
};

// store
export const store = configureStore({
  reducer: rootReducer,
});

// 暴露两个数据类型
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

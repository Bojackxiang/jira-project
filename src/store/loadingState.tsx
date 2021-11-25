import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

interface State {
  isLoadingOpen: Boolean;
}

const initialState: State = {
  isLoadingOpen: false,
};

export const loadingModalSlice = createSlice({
  name: "loadingModalSlice",
  initialState,
  reducers: {
    openLoadingModal: (state) => {
      // 这个 state 在 dispatch 的时候是不需要 输入的
      state.isLoadingOpen = true;
    },
    closeLoadingModal: (state?) => {
      state.isLoadingOpen = false;
    },
  },
});

// 基本上就是 把 上面的 action 导出
// 这个是在 使用 dispatch 的时候使用
export const projectListActions = loadingModalSlice.actions;

// 输出 state
export const selectProjectModelState = (state: RootState) =>
  state.loading.isLoadingOpen;

import { useState } from "react";

interface IState<D> {
  error: Error | null;
  data: D | null;
  stat: "loading" | "success" | "error" | "idle";
}

const defaultInitialState: IState<null> = {
  stat: "idle",
  error: null,
  data: null,
};

export const useAsync = <D>(initialState?: IState<D>) => {
  const [state, setState] = useState<IState<D>>({
    ...defaultInitialState,
    ...initialState,
  });

  // 当请求成功的时候
  const setData = (data: D) => {
    setState({
      ...state,
      stat: "success",
      error: null,
      data,
    });
  };

  // 但出错的时候
  const setError = (error: Error) => {
    setState({
      ...state,
      stat: "error",
      error,
      data: null,
    });
  };

  // 这边试运行数据
  const run = async (promise: Promise<D>) => {
    console.log("________ run use async ________");
    if (!promise || !promise.then) {
      throw new Error("请传入 promise 类型数据");
    }
    // set loading status
    setState({
      ...state,
      stat: "loading",
    });

    // retrieve the data
    return promise
      .then((data) => {
        setData(data);
        return data;
      })
      .catch((error) => {
        setError(error);
        // 这边需要主动抛出异常，否则不会被 捕获到
        return Promise.reject(error);
      });
  };

  return {
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isSuccess: state.stat === "success",
    isError: state.stat === "error",
    run,
    setError,
    setData,
    ...state,
  };
};

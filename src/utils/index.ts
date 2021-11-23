import { useEffect, useRef } from "react";

const isFalsy = (value: unknown) =>
  value === false || value === null || value === undefined || value === "";

export const cleanObject = (targetObj: object) => {
  const newObj = { ...targetObj };
  console.log(newObj);
  Object.keys(newObj).forEach((key) => {
    // @ts-ignore
    const value = targetObj[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete newObj[key];
    }
  });

  return newObj;
};

// 更改浏览器标签的名称
export const useDocumentTitle = (
  title: string,
  keepUnMount: boolean = true
) => {
  // use ref， 拿到原始的 document title 值，
  // 并且 在初始化的整个生命周期中都不会改变
  const titleRef = useRef(document.title);

  // 当进入页面的时候定义页面的title
  useEffect(() => {
    document.title = title;
  }, [title]);

  // 当离开页面的时候需要还原 title
  useEffect(() => {
    return () => {
      if (!keepUnMount) {
        document.title = titleRef.current;
      }
    };
  }, [keepUnMount, titleRef]);
};

// 充值路由的方法
export const resetRouter = () =>
  (window.location.href = window.location.origin);

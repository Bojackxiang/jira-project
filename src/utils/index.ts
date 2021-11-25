import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";

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

// 通过 url 来获取 url 中 query 的值
export const useUrlQueryParams = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParam] = useSearchParams();
  return [
    useMemo(
      () =>
        keys.reduce((prev: object, key: string) => {
          const value = searchParams.get(key);
          // prev[key] = value; 这样写会有 type 的问题， 请使用下面的方法
          return { ...prev, [key]: value }; // 这样就能避开 any 的问题
        }, {} as { [key in K]: string }),
      [searchParams]
      // keys 不是一个基本类型，所以说传进来会导致无限循环,
      //除非这个 keys 本身也是一个 state，
      // 一个 state 下的非基本类型是可以在这边被使用的
      // 因为只有 setState 的时候，才会认为这个 key 改变
    ),
    // 下面的这个是在原有的 query 再添加新的 query value
    (params: Partial<{ [key in K]: unknown }>) => {
      const o = { ...Object.entries(searchParams), ...params };
    },
  ] as const;
};
/**
 * typescript 要求 [] 中的所有element type 都相同
 * 但是上面这个明显不相同， 所以使用 as const，来吧原来的类型给暴露出去
 */

/**
 * 下面hook 来解决 异步操作 和已经卸载的 component 的问题
 * 想象，有一个 component，里面有一个 modal 功能，model 调用了component 的 异步操作
 * 当这个 component 被卸载的时候，这个 modal 也会被卸载，但是这个 modal 又会调用 component 的异步操作
 * 页面判断如果是 false，就不再 set
 */
export const useUnmount = (fn: () => void) => {
  // 因为卸载和加载的时候，整个ref 始终存在，我们利用这个方法来看是否要 set state
  const mountedRef = useRef(false);

  useEffect(() => {
    // 页面已经被加载
    mountedRef.current = true;
    return () => {
      // 现在页面被卸载
      mountedRef.current = false;
    };
  });

  return mountedRef;
};

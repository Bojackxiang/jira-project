import { useAsync } from "customized-hooks/useAsync";
import { useDebounce } from "customized-hooks/useDebounce";
import { Project } from "interfaces";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { cleanObject } from "utils";
import { useHttp } from "utils/http";

const useProjects = (param: { name: string; personId: string }) => {
  const client = useHttp();

  // 这个 [] 里面的值变化的时候，这个 user query 就会被触发
  return useQuery<Project[], Error>(["projects", param], () => {
    return client("projects", {
      data: cleanObject(param),
    });
  });
};

export default useProjects;

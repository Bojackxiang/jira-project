import { useAsync } from "customized-hooks/useAsync";
import { useDebounce } from "customized-hooks/useDebounce";
import { Project } from "interfaces";
import { useEffect, useState } from "react";
import { cleanObject } from "utils";
import { useHttp } from "utils/http";

const useProjects = (param: { name: string; personId: string }) => {
  const [list, setList] = useState([]);
  const { run, data, isLoading, ...result } = useAsync<Project[] | void>();
  const client = useHttp();

  const debounceValue = useDebounce(param, 500);

  useEffect(() => {
    run(client("projects", { data: cleanObject(param) as any }).then(setList));
  }, [debounceValue]);

  return {
    list,
    isLoading,
  };
};

export default useProjects;

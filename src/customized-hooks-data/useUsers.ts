import { useAsync } from "customized-hooks/useAsync";
import { Project } from "interfaces";
import { useEffect, useState } from "react";
import { useHttp } from "utils/http";

const useUsers = () => {
  const [userList, setUserList] = useState([]);
  const { run, data, ...result } = useAsync<Project[] | void>();
  const client = useHttp();

  useEffect(() => {
    run(client("users").then(setUserList));
  }, []);

  return {
    userList,
  };
};

export default useUsers;

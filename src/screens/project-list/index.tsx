import { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { InfoList } from "./list";
import qs from "qs";
import { cleanObject } from "utils";
import { useUserMount } from "customized-hooks/userMount";
import { useDebounce } from "customized-hooks/useDebounce";
import { useHttp } from "utils/http";

const base_url = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const client = useHttp();

  useUserMount(() => {
    const query = qs.stringify(cleanObject(param));
    client("users").then(setUsers);
    // fetch(`${base_url}/users`).then(async (response) => {
    //   if (response.ok) {
    //     // console.log(await response.json());
    //     setUsers(await response.json());
    //   }
    // });
  });

  const debounceValue = useDebounce(param, 500);

  useEffect(() => {
    console.log("params", debounceValue);
    client("projects", { data: cleanObject(param) as any }).then(setList);
  }, [debounceValue]);

  return (
    <div>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users}
      ></SearchPanel>
      <InfoList list={list} users={users} />
    </div>
  );
};

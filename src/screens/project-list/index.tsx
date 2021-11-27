import { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { InfoList } from "./list";
import useProjects from "customized-hooks-data/useProjects";
import useUsers from "customized-hooks-data/useUsers";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const { data, isError, isLoading, isFetching, error } = useProjects(param);
  const { userList } = useUsers();

  // 这就是一个 类型守卫
  const isErrorGuard = (input: any): input is Error => input?.message;

  return (
    <div>
      <div>{isLoading ? <div>Loading...</div> : <div>not loading</div>}</div>
      {isErrorGuard(error)}
      <SearchPanel
        param={param}
        setParam={setParam}
        users={userList}
      ></SearchPanel>

      {data && <InfoList list={data} users={userList} />}
    </div>
  );
};

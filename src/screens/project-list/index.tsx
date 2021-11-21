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

  const { list } = useProjects(param);
  const { userList } = useUsers();

  return (
    <div>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={userList}
      ></SearchPanel>
      <InfoList list={list} users={userList} />
    </div>
  );
};

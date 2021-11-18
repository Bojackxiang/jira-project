import { Project, User } from "interfaces";
import React from "react";

interface IInfoList {
  list: Project[];
  users: User[];
}

export const InfoList = (props: IInfoList) => {
  const { list, users } = props;
  console.log(list, users);
  return (
    <table>
      <thead></thead>
      <tbody>
        {list.map((project) => {
          return (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

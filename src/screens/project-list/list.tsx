import { Project, User } from "interfaces";
import { Table } from "antd";
import React from "react";

interface IInfoList {
  list: Project[];
  users: User[];
}

export const InfoList = (props: IInfoList) => {
  const { list, users } = props;
  console.log(list, users);
  return (
    <Table
      pagination={false}
      dataSource={list}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
      ]}
    ></Table>
  );
};

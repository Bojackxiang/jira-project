import { Project, User } from "interfaces";
import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useUrlQueryParams } from "utils";

interface IInfoList {
  list: Project[];
  users: User[];
}

export const InfoList = (props: IInfoList) => {
  const { list, users } = props;

  return (
    <Table
      pagination={false}
      dataSource={list}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
          render: (value, project) => {
            return <Link to={`${project.id}`}>{project.name}</Link>;
          },
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

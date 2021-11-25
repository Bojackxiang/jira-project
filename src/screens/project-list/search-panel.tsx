import { Input, Select, Form } from "antd";

interface ISearchPanel {
  param: {
    name: string;
    personId: string;
  };
  setParam: (params: ISearchPanel["param"]) => void;
  users: {
    id: number;
    name: string;
  }[];
}

export const SearchPanel = (props: ISearchPanel) => {
  const { param, setParam, users } = props;

  return (
    <Form>
      <div>
        <Input
          type="text"
          name="name"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        />

        <Select
          style={{ width: "100px" }}
          id=""
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value={-1} key={"-1"}>
            请选择
          </Select.Option>
          {users.map((user) => (
            <Select.Option value={user.id} key={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </Form>
  );
};

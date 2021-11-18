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
  console.log(users.length);
  return (
    <form>
      <div>
        <input
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

        <select
          name=""
          id=""
          value={param.personId}
          onChange={(e) =>
            setParam({
              ...param,
              personId: e.target.value,
            })
          }
        >
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

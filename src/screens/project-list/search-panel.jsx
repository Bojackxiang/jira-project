export const SearchPanel = () => {

  const [param, setParam] = useState({
    name: '',
    personalId: '',
  })

  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    fetch('')
    .then(async response => {
      if (response.ok) {
        setList(await response.json());
      }
    })
    return () => {

    }
  }, [param])

  return <form>
    <div>
      <input
        type="text"
        name="name"
        value={param.name}
        onChange={e => setParam({
          ...param,
          name: e.target.value
        })} />

      <select name="" id="" value={param.personalId}
        onChange={e => setParam({
          ...param,
          personalId: e.target.value
        })}>
        {
          users.map(user => (
            <option value={user.id}>{user.name}</option>
          ))
        }

      </select>
    </div>


  </form>
}

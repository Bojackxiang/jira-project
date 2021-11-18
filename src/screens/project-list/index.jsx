import { useEffect, useState } from 'react'
import { SearchPanel } from "./search-panel"
import { InfoList } from "./list"
import qs from 'qs'
import { cleanObject } from 'utils'
import {useUserMount} from 'customized-hooks/userMount'

const base_url = process.env.REACT_APP_API_URL
console.log(base_url);
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })

  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  useUserMount(() => {
    const query = qs.stringify(cleanObject(param))
    console.log(query);
    fetch(`${base_url}/users`)
      .then(async response => {
        if (response.ok) {
          console.log()
          setUsers(await response.json())
        }
      })
  })

  useEffect(() => {
    const query = qs.stringify(cleanObject(param))
    console.log(query);
    fetch(`${base_url}/projects?${query}`)
      .then(async response => {
        if (response.ok) {
          console.log()
          setList(await response.json())
        }
      })
  }, [param])

  return <div>
    <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
    <InfoList list={list} users={users}/>
  </div>
}


import React from 'react'

export const InfoList = (props) => {
  const {list, users} = props
  console.log(list, users)
  return <table>
    <thead>

    </thead>
    <tbody>
      {
        list.map(project => {
          return (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{ users.find(user => user.id === project.personId)?.name || "未知"}</td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
}
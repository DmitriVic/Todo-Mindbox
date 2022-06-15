import React from 'react'

function TodoIteam({id, completed, text, changeStatus}) {
  return (
	<li key={id}>
	<input
	  type="checkbox"
	  checked={completed}
	  onChange={() => changeStatus(id)}
	/>
	<span>{text}</span>
 </li>
  )
}

export default TodoIteam
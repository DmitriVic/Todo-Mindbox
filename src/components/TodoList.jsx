import React from 'react'
import TodoIteam from './TodoIteam'

function TodoList({filtered, changeStatus}) {
  return (
	 <ul>
		 {filtered.map((todo) => (
         <TodoIteam
			key={todo.id}
          {...todo}
			 changeStatus={changeStatus}
			/>
        ))}
	 </ul>
  )
}

export default TodoList
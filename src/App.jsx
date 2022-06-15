import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [todos, setTodos] = useState([
		{
			 "id": "2022-06-14T19:09:20.299Z",
			 "text": "ss",
			 "completed": false
		},
		{
			 "id": "2022-06-14T19:09:21.275Z",
			 "text": "ddd",
			 "completed": false
		},
		{
			 "id": "2022-06-14T19:16:21.360Z",
			 "text": "sss",
			 "completed": false
		}
	])
	const [allTodos, setAllTodos] = useState([])

	const [text, setText] = useState('')

	const addTodo = () => {
		if (text.trim().length) {
			setTodos([...todos,
			{
				id: new Date().toISOString(),
				text: text,
				completed: false,
			}
			])

			setText('')
		}
	}


	


	function handlePressEnter(e) {
		if (e.key === 'Enter') {
			addTodo()
		}
	}

	function changeStatus(todoId) {
		setTodos(
			todos.map(todo => {
				if (todo.id !== todoId) return todo;
				return {
					...todo,
					completed: !todo.completed,
				}
			})
		)
	}

	const itemsLeft = todos.filter(el => {
		if (el.completed === false) {
			return el
		}
	})

	function activeTodo() {
		setAllTodos(todos)
		setTodos(todos.filter(el => {
			if (el.completed === false) {
				return el
			}
		}))
	}

	function complitedTodo() {
		if (todos.find(item => item.completed === false)) {
			setAllTodos(todos)
			setTodos(todos.filter(el => {
				if (el.completed === true) {
					return el
				}
			}))
		}

	}

	function AllToto() {
		setTodos(allTodos)
	}


	// if () {
	// 	console.log('sad');
	// }

	// console.log(arr.find(item => {
	// 	return item.completed
	// }));
	// console.log(arr.find(item => item.complited === true));
	//console.log(arr.includes(arr));

	//arr.includes(item => item.completed === true)

	//console.log(todos);
	let newTodo = [...todos].filter(item => item.completed === false)
	console.log(newTodo);
	return (
		<div className="App">
			<input className='inpt'
				placeholder='What needs to be done?'
				value={text} onChange={(e) => setText(e.target.value)}
				onKeyDown={handlePressEnter}
			/>
			<ul>
				{
					todos.map((todo) => (
						<li key={todo.id}>
							<input type="checkbox"
								checked={todo.completed}
								// onChange={(e) => (console.log(todos))}
								onChange={() => (changeStatus(todo.id))}
							/>
							<span>{todo.text}</span>
						</li>
					))
				}
			</ul>
			<span>{itemsLeft.length + " "}items left</span>
			<button onClick={AllToto} >All</button>
			<button onClick={activeTodo}>Active</button>
			<button onClick={complitedTodo}>Completed</button>
			<button>Clear completed</button>
		</div>
	);
}

export default App;

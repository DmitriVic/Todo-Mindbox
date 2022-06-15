import "./App.css";
import { useEffect, useState } from "react";
import s from "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import FilterPanel from "./components/FilterPanel";

console.log(s);
function App() {
  const [todos, setTodos] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    setFiltered(todos);
  }, [todos]);

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);

      setText("");
    }
  };

  function handlePressEnter(e) {
    if (e.key === "Enter") {
      addTodo();
    }
  }

  function changeStatus(todoId) {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  }

  const itemsLeft = todos.filter((el) => {
    if (el.completed === false) {
      return el;
    }
  });

  function todoFilter(status) {
    if (status === "all") {
      setFiltered(todos);
    } else if (status === "Clear") {
      setTodos(todos.filter((item) => item.completed === false));
    } else {
      let newTodo = todos.filter((item) => item.completed === status);
      setFiltered(newTodo);
    }
  }

  return (
    <div className="App">
      <InputField
        text={text}
        setText={setText}
        handlePressEnter={handlePressEnter}
      />
		<TodoList
		filtered={filtered}
		changeStatus={changeStatus}
		/>
		<FilterPanel
		itemsLeft={itemsLeft}
		todoFilter={todoFilter}
		/>
    </div>
  );
}

export default App;


import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([
    "Vezbaj React",
    "Vezbaj PHP",
    "Vezbaj Python",
  ]);

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }
  return (n
    <>
      <>
        <TodoInput handleAddTodos={handleAddTodos} />
        <TodoList todos={todos} />
      </>
    </>
  );
}

export default App;

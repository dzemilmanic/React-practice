import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([
    "Vezbaj React",
    "Vezbaj PHP",
    "Vezbaj Python",
  ]);
  return (
    <>
      <>
        <TodoInput setTodos={setTodos} />
        <TodoList todos={todos} />
      </>
    </>
  );
}

export default App;

import React, { useState } from "react";
import Todos from "./components/Todos";
import "./App.css";
const todos = [
  {
    id: 1,
    title: "Take out the trash",
    completed: false,
  },
  {
    id: 2,
    title: "Dinner with family",
    completed: false,
  },
  {
    id: 1,
    title: "Meeting with boss",
    completed: false,
  },
];
function App() {
  const [todosState, setTodos] = useState(todos);

  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;

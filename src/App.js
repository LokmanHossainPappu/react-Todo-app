import React, { useState, useEffect } from "react";
import "./App.css";
import Form from './Components/From';
import TodoList from './Components/TodoList';

function App() {

const [inputText, setInputText] = useState("");
const [todos, setTodos] = useState([]);
const [status, setStatus] = useState("all");
const [filteredTodos, setFilteredTodos] = useState([]);

const filterHandler = () => {
  switch (status) {
    case "completed":
    setFilteredTodos(todos.filter((todo) => todo.completed == true))  
      break;
    case "uncompleted":
    setFilteredTodos(todos.filter((todo) => todo.completed == false))
    break;
    default:
    setFilteredTodos(todos);
      break;
  }
}
useEffect(() => {
  filterHandler()
},[todos, status])

const saveLocalTodos = () => {
  if(localStorage.getItem("todos") === null) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};
  return (
    <div className="App">
      <header>
        <h2>Hello React</h2>  
      </header>
      <Form
       inputText={inputText} 
       todos={todos}
       setTodos={setTodos}
       setInputText={setInputText} 
       setStatus={setStatus}
       /> 
      <TodoList
       setTodos={setTodos} 
       todos={todos}
       filteredTodos={filteredTodos}
       />
    </div>
  );
}

export default App;

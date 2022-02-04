import React from "react";
import Btn from "./Btn";
import {useState, useEffect} from "react";
function Todo() {
  const [todo,setTodo] = useState("");
  const onChange = (event) => setTodo(event.target.value);
  const [todos,setTodos] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo===""){
      return;
    }
    setTodo("");
    setTodos((currentArray) => [todo,...currentArray]);
  };
  return (
    <div>
      <h1>My Todos {todos.length}</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          type="text" 
          placeholder="write todo list"
          value={todo}
        />
        <button>Add To do</button>
      </form>
      <hr />
      <ul>
          {todos.map((todo,index)=> <li key={index}>{todo}</li>)}
      </ul>

    </div>

  );
}
export default Todo;
import React, {useState} from 'react';
import Axios from 'axios'
import {v4 as uuidv4} from 'uuid';
uuidv4();
const TodoForm = (props) => {

  const[value,setValue] = useState('')
  const userID = props.todoid
  console.log(userID)

  const todo = () => {
    Axios.post('http://localhost:8080/add-todo',
    {
      "Todo":{id: uuidv4(), task:value, completed:false, isEditing:false},
      "id":userID
  })
  }
  

  const handleSubmit =(e)=>{
    e.preventDefault();
    if (value !== "")
    props.addTodo(value)
    setValue("")

  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value = {value} placeholder="What is your today's task" onChange={(e)=>{setValue(e.target.value)}}></input>
      <button type="submit" className='todo-btn' onClick={todo}>Add task</button>
    </form>
  );
};

export default TodoForm;

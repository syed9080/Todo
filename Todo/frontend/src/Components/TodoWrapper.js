import React ,{useState,useEffect}from 'react';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import { useLocation } from 'react-router-dom';
uuidv4();


export const TodoWrapper = () => {

  const location = useLocation();
  const userId = location.state?.ID;
  console.log(userId)

  const [todos, setTodos] = useState(() => {
    try {
      // Retrieve items from local storage
      const storedItems = localStorage.getItem('items');

      // Check if items exist in local storage
      if (storedItems) {
        // Parse and return the retrieved items as the initial state for 'todos'
        return JSON.parse(storedItems);
      }
    } catch (error) {
      console.error('Error retrieving data from local storage:', error);
    }

    // Default state if there's an error or no data in local storage
    return [];
  });
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todos));
  }, [todos]);

  

  const addTodo = (todo) =>{
    setTodos([...todos,{id: uuidv4(), task:todo, completed:false, isEditing:false}])
   
    console.log(todos)
  }
  const toggleComplete =(id)=>{

    setTodos(todos.map(todo =>todo.id === id?{...todo,completed:!todo.completed}:todo))
    
  }
  const deleteTodo =(id)=>{
    setTodos(todos.filter(todo =>todo.id !== id))
  } 
  const editTodo =(id)=>{

    setTodos(todos.map(todo =>todo.id === id?{...todo,isEditing:!todo.isEditing}:todo))
  }
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task:task, isEditing: !todo.isEditing } : todo
      )
    );
  };


  return (
   
    <div className='TodoWrapper'>
            <h1>Get Things Done! </h1>
      <TodoForm addTodo = {addTodo}
      todoid = {userId}
      />
      {todos.map((todo,index)=>{
        return(
        todo.isEditing? <EditTodoForm editTodo={editTask} task={todo} />:
        <Todo task={todo} key={index}
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} 
        editTodo={editTodo}/>
        )
      })}
      
    </div>
  );
};



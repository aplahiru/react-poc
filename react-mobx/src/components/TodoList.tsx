import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { TodoStore, todoStoreProps } from '../store/todoStore';

type todoListProps = {
  todoStore: TodoStore
}


const TodoList = observer(function TodoList(props:todoListProps) {

  // state defined for store input values
  const [inputValue, setInputValue] = useState("");

  // event handler for change status of todo
  const todoCompleteHandler= (selectedTodo: todoStoreProps)=>{
    const index = props.todoStore.todos.findIndex(todo=> todo.id === selectedTodo.id);
    props.todoStore.changeStatus(index);
  }

  // event handler for capture input element values
  const onChangeHandler= (event:React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(event.target.value);
    
  }

  // event handler for add new todo by capturing button click
  const addTodoHandler= ()=>{
    props.todoStore.addTodo(inputValue);
    setInputValue("");
  }

  // event handler for display next id by opening alert box
  const nextIdShowHandler= ()=>{
    window.alert(`Next Id is ${props.todoStore.showTodosNextId}`);
  }

  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={onChangeHandler} placeholder="Enter your task"/>
        <div><input type="button" value="Add" onClick={addTodoHandler}/></div>
        <div><input type="button" value="NextId" onClick={nextIdShowHandler}/></div>
      </div>
      <ul>
        {
          props.todoStore.todos.map(todo=>{
            return (
                    <li 
                      key={todo.id + todo.topic} 
                      style={{cursor: "pointer", textDecoration: todo.completed ? "line-through" : "none"}} 
                      onClick={()=>{todoCompleteHandler(todo)}}
                    >
                        {todo.id} {todo.topic}
                    </li>
                  )
          })
        }
      </ul>
    </div>
  )
})

export default TodoList
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, completeTodo, removeTodo, Todos } from '../store/slices/todoSlice';

function TodoList() {
    // access redux store
    const {todoList} = useSelector((state:any)=>state);
    // access dispatch function
    const dispatch = useDispatch();
    // state defined for store todo
    const [todo, setTodo] = useState("");

    // set todo
    const handleSetTodo=(event:any)=>{
        setTodo(event.target.value);
        
    }
    // handle save todo
    const handleSaveTodo=()=>{
        dispatch(addTodo(todo));
        setTodo("");
    }
    // handle delete todo
    const handleRemoveTodo=(id: number)=>{
        dispatch(removeTodo(id));
    }
    // handle complete todo
    const handleCompleteTodo=(id: number)=>{
        dispatch(completeTodo(id));
    }

    return (
        <div>
            <input type="text" onChange={handleSetTodo} value={todo} placeholder="Enter Todo"/>
            <button onClick={handleSaveTodo}>Add</button>
            {
                todoList.map((todo:Todos, index:number) => {
                    return(
                        <div key={index}>
                            <span style={{margin:"10px", color: todo.complete ? "gray" : "white"}}>{todo.todo}</span>
                            <button type="button" onClick={()=>handleRemoveTodo(index)}>delete</button>
                            <button type="button" disabled={todo.complete} onClick={()=>handleCompleteTodo(index)}>{todo.complete ? "Completed" : "Mark As Completed"}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoList

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, completeTodo, removeTodo } from '../store/actions/todoAction';
import { Todos } from '../store/reducers/todoReducer';

function TodoListFunctional() {
    // access redux store
    const {todoList} = useSelector((state:any)=>state.todos);
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
            <input type="text" onChange={handleSetTodo} value={todo} placeholder='Enter Todo'/>
            <button onClick={handleSaveTodo}>Add</button>
            {
                todoList.map((todo:Todos, index:number) => {
                    return(
                        <div key={index}>
                            <span style={{margin: "8px", color:todo.complete? 'gray':'white'}}>{todo.todo}</span>
                            <button type="button" style={{marginRight:"10px"}} onClick={()=>handleRemoveTodo(index)}>delete</button>
                            <button type="button" disabled={todo.complete} onClick={()=>handleCompleteTodo(index)}>{todo.complete ? "Completed" : "Mark As Completed"}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoListFunctional

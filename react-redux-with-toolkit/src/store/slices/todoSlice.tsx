import { createSlice } from "@reduxjs/toolkit";

export interface Todos {
    todo: string,
    complete: boolean
}
export interface State {
    todoList: Todos[]
}
const initialState:State = {
    todoList: []
};
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            state.todoList.push({todo:action.payload, complete:false});
        },
        removeTodo: (state, action)=>{
            state.todoList.splice(action.payload, 1);
        },
        completeTodo: (state, action)=>{
            state.todoList[action.payload].complete = true;
        }
    }
});

export const {addTodo, removeTodo, completeTodo} = todoSlice.actions;

export default todoSlice.reducer;
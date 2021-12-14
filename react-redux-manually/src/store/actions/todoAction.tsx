export const addTodo =(payload: String)=>({type:"ADD_TODO", payload});
export const removeTodo =(payload: number)=>({type:"REMOVE_TODO", payload});
export const completeTodo =(payload: number)=>({type:"COMPLETE_TODO", payload});
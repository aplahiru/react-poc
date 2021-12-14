interface Action {
    type: String,
    payload: any
}
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
const todoReducer =(state:State = initialState, action:Action)=> {
    switch (action.type) {
        case "ADD_TODO":
            state.todoList.push({todo: action.payload, complete: false});
            return {...state};
        case "REMOVE_TODO":
            state.todoList.splice(action.payload, 1);
            return {...state};
        case "COMPLETE_TODO":
            state.todoList[action.payload].complete = true;
            return {...state};
        default:
            return state;
    }
}
export default todoReducer;
import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
    todos : todoReducer
});
export const store = createStore(rootReducer);
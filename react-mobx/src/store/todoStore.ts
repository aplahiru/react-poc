import { action, computed, makeObservable, observable } from "mobx";

// props type definition
 export type todoStoreProps = {
    topic: string,
    id: number,
    completed: boolean
}

export class TodoStore {
    // constructor configure with mobx by defining oberverbles, actions and coputed functions
    constructor(){
        makeObservable(this, {
            todos: observable,
            addTodo: action,
            changeStatus: action,
            showTodosNextId: computed
        });
    }
    // id counter
    counter = 0;
    // todo list
    todos:todoStoreProps[] = [];

    // todo add method this will attach to mobx as action
    addTodo= (todo:string)=>{
        
        const obj:todoStoreProps = {
            id: ++this.counter,
            topic: todo,
            completed: false
        }
        this.todos.push(obj);
        
    }

    // status change method this will attach to mobx as action
    changeStatus= (index:number)=>{
        this.todos[index].completed = !this.todos[index].completed;
    }

    // next id return method this will attach to mobx as computed
    get showTodosNextId(){
        return (this.counter+1);
    }
}

// create new instance from class and export instance 
// this will make sure every time use same object (prevent creating multiple instances)
const store = new TodoStore();

export default store;
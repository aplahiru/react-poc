interface State{
    count: number
}
interface Action{
    type: string,
    payload: any
}
const initialState: State = {
    count: 0
}
const counterReducer= (state= initialState, action:Action)=>{
    switch (action.type){
        case "INCREMENT_COUNT_SAGA":
            state.count = state.count+ action.payload;
            return {...state};
        case "DECREMENT_COUNT_SAGA":
            state.count -= action.payload;
            return {...state}

        default:
            return state;
    }
}

export default counterReducer;
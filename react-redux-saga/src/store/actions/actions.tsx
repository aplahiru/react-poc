export const increment = (payload:number)=>({type:"INCREMENT_COUNT", payload});
export const decrement = (payload:number)=>({type:"DECREMENT_COUNT", payload});
export const incrementSoon = (payload:number)=>({type:"INCREMENT_COUNT_SOON", payload});
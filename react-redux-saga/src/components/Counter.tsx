import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementSoon } from '../store/actions/actions';

function Counter() {
    // access redux store value
    const counter = useSelector((state:any) => state.counter.count);
    // access dispatch function
    const dispatch = useDispatch();

    // handle increment count
    const handleIncrement=()=>{
        dispatch(increment(1));
    }
    // handle increment count soon
    const handleIncrementSoon=()=>{
        dispatch(incrementSoon(1));
    }
    // handle decrement count
    const handleDecrement=()=>{
        dispatch(decrement(1));
    }
    return (
        <div>
            <div>Counter : {counter}</div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleIncrementSoon}>Increment Soon</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter

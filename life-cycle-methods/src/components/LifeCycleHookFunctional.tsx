import React, { useEffect, useState } from 'react';
import { ClassProps } from './LifeCycleHookClass';

function LifeCycleHookFunctional(props:ClassProps) {
    // define state to functional component
    const [statusArray, setStatusArray] = useState(["element "+Math.round(Math.random()*100)/100]);
    // function call when component is mounted
    useEffect(()=>{
        console.log("Component is mounted");
    },[]);
    // function call when component is unmounted
    useEffect(()=>{
        return ()=>{console.log("Component is unmounted")};
    },[]);
    // function call when props are changed
    useEffect(()=>{
        console.log("Props are updated");        
    },[props.greet]);
    // function call when states are changed
    useEffect(()=>{
        console.log("State are updated");        
    },[statusArray]);
    // function call when click event fire
    const handleClick= ()=>{
        setStatusArray([...statusArray, "element "+Math.round(Math.random()*100)/100]);
    }
    return (
        <div>
                <h1>React Functional Component Lifecycle Hooks</h1>
                <h4>Please refer console to look how to work lifecycle methods</h4>
                <div><button onClick={handleClick}>Click Me</button></div>
                <h6>state of the component are listed below</h6>
                {
                    statusArray.map((status, index)=>{
                        return(
                            <p key={index}>{status}</p>
                        )
                    })
                }
                <h6>props of the component are listed below</h6>
                {
                    <p>{props.greet}</p>
                }
            </div>
    )
}

export default LifeCycleHookFunctional

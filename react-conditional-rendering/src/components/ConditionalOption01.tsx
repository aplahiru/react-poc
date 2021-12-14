import React, { useEffect, useState } from 'react'

function ConditionalOption01() {
    const [isLogin, setIsLogin] = useState(false);
    const [message, setMessage] = useState("");

    const handleLogin= ()=>{
        setIsLogin(!isLogin);
    }
    useEffect(() => {
        if(isLogin){
            setMessage("User Logged In");
        }
        else{
            setMessage("User Logged Out");
        }
    }, [isLogin]);

    return (
        <div>
            <h1>Conditional Redndering Using If / Else</h1>
            <button onClick={handleLogin}>Click Me</button>
            <p>{message}</p>
        </div>
    )
}

export default ConditionalOption01;

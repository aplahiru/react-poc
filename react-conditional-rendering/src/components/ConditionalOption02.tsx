import React, { useState } from 'react'

function ConditionalOption02() {
    const [isLogin, setIsLogin] = useState(false);
    const message = "This text is only show if and only if condition is true.";

    const handleLogin= ()=>{
        setIsLogin(!isLogin);
    }

    return (
        <div>
            <h1>Conditional Redndering Using short-circuit operator</h1>
            <button onClick={handleLogin}>Click Me</button>
            {
                isLogin && <p>{message}</p>
            }
        </div>
    )
}

export default ConditionalOption02;

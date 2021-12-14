import React, { useState } from 'react';
import logo from '../logo.svg';

function ConditionalOption03() {
    const [isLogin, setIsLogin] = useState(false);

    const handleLogin= ()=>{
        setIsLogin(!isLogin);
    }

    return (
        <div>
            <h1>Conditional Redndering Using Ternary operator</h1>
            <button onClick={handleLogin}>Click Me</button>
            {
                isLogin ? <p><img src={logo} alt="" height={200} width={200}/></p> : <p>Image is Hidden</p>
            }
        </div>
    )
}

export default ConditionalOption03;

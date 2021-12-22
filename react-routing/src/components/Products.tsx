import React from 'react'
import { useNavigate } from 'react-router-dom';

function Products() {
    const navigate = useNavigate();
    // handle go back the home component
    const handleGoBack= ()=>{
        navigate(-1);
    }
    return (
        <div>
            <h1>Products Component</h1>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    )
}

export default Products

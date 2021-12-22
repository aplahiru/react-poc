import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate();
    // handle go back the home component
    const handleGoBack= ()=>{
        navigate(-1);
    }
    return (
        <div>
            <h1>Dashboard Component</h1>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    )
}

export default Dashboard

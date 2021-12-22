import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SelectedUser() {
    const navigate = useNavigate();
    const params = useParams();
    // handle go back the home component
    const handleGoBack= ()=>{
        navigate(-1);
    }
    return (
        <div>
            <h1>User Detail Component</h1>
            <h2>This is {params.username} user details passed from params</h2>
            <p>In here, Url Params are passed</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    )
}

export default SelectedUser

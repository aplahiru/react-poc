import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Users() {
    const navigate = useNavigate();
    // handle go back the home component
    const handleGoBack= ()=>{
        navigate(-1);
    }
    return (
        <div>
            <h1>Users Component</h1>
            <button onClick={handleGoBack}>Go Back</button>
            <br/>
            <Link to={"../users/user01"}>User 01 Profile</Link>
        </div>
    )
}

export default Users

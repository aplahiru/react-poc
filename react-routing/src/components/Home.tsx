import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"dashboard"}>Dashboard</Link>
                </li>
                <li>
                    <Link to={"users"}>Users</Link>
                </li>
                <li>
                    <Link to={"products"}>Products</Link>
                </li>
            </ul>
            <h1>Home Component</h1>
        </div>
    )
}

export default Home

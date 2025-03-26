import React, {useState } from 'react';
import { login } from "../utils/api"; 

function Login() {
    // hold the login information with states 
    // name 
    const [name, setName] = useState(""); 
    // email 
    const [email, setEmail] = useState("");
    // set the error 
    const [error, setError] = useState(null);

    // function for handling Submit Button (200, error)
    function handleSubmit() {
        try {
            // submit 
             console.log()
        } catch (error) {
            // error
            console.log("Failed in Login.jsx", error);
            setError("Login Failed. Please check your credentials.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name*</label>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            > 
            </input>
            <label htmlFor='email'>Email*</label>
            <input 
                type="email"
                placeholder="email@provider.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            > 
            </input>
            <button
                type="submit"
            > Login
            </button>
            {error && <p>{error}</p>}
        </form>
    )
}

export default Login;
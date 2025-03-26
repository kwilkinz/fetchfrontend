import React from 'React';
import { useState } from 'react/cjs/react.development';
import { login } from "../utils/api"; 

function LoginForm() {
    // hold the login information with states 

    // name 
    const [name, setName] = useState(); 
    // email 
    const [email, setEmail] = useState();
    // set the error 
    const [error, setError] = useState();

    // function for handling Submit Button (200, error)
    function handleSubmit() {
        try {
            // submit
        } catch (error) {
            // error
            console.log("Failed in Login.jsx", error);
            setError("Login Failed. Please check your credentials.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value='Name'
                onChange={(e) => changethestate}
                required
            > Name*
            </input>
            <input 
                type="email"
                placeholder="email@provider.com"
                value="email"
                onChange={(e) => changethestate}
                required
            > Email*
            </input>
        </form>
    )
}

export default LoginForm;
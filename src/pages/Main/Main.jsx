import React from 'react';
import "./Main.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Main = () => {
    const [admin, setAdmin] = useState("");
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    const handleChange = async (e) => {
        navigate('/login');

    }



    return (
        <div className="login-container">
            <h1>Login</h1>
            <div className="button-container">
                <button className="login-button admin"
                    onClick={handleChange}>Admin Login</button>
                <button className="login-button user"
                    onClick={handleChange}>User Login</button>
            </div>
            <p className="signup-link">Don't have an account? <a href="/register">Register</a></p>
        </div>
    );
}

export default Main;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/Home/Home.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <nav className="navbar">
            <div className="right-content">
                <span className="airlines-text">Versatile Airlines</span>
            </div>
            <div className="left-buttons">
                <button className="register1-button" onClick={handleRegister}>Register</button>
                <button className="login1-button" onClick={handleLogin}>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;


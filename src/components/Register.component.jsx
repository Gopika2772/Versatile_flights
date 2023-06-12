import React, { useState } from "react";
import "../pages/Auth/Login.css";
import axios from "axios";

export default function Register1() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/register", {
            email, password
        }).then((res) => {
            setEmail("");
            setPassword("");
        })
            .catch((err) => {
                console.log("axios error");
            })
    }

    return (
        <div className="contain">
            <div className="login-container">
                <h1>User Register </h1>
                <form onSubmit={handleSubmit} className="login-groups">
                    <div className="login-labels">
                        <label htmlFor="email">UserName</label>
                        <input
                            autoFocus
                            type="text"
                            id="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="login-labels">
                        <label htmlFor="email">Email</label>
                        <input
                            autoFocus
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login-labels">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="login-button"
                        type="submit"
                        disabled={!validateForm()}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
import React, { useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [isLogin, setIsLogin] = useState(false);
    const [navigateTo, setNavigateTo] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login_clicked = async () => {
        try {
            const response = await fetch('http://your-backend-url/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: formData.username, password: formData.password }),
            });

            if (response.ok) {
                const data = await response.json();
                alert("Login successful");
                setIsLogin(true);
                setNavigateTo("/home");
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert("Error logging in");
        }
    };

    return (
        <div>
            {navigateTo && <Navigate to={navigateTo} />}
            <h1>{isLogin ? <h1>Welcome, {formData.username}</h1> : <h1 className="t">Login</h1>}</h1>
            <div className="login">
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input
                        type="email"
                        name="username"
                        value={formData.username}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        required
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={login_clicked}>Login</button>
            </div>
        </div>
    );
}

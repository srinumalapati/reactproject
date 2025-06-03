import React, { useState } from "react";
import "./Registration.css";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setFormError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/user/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username:name,email:email,password:password }),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Registration successful!");
        setServerMessage(result.message || "Registration successful!");
    
    
      } else {
        const error = await response.json();
      }
    } catch (err) {
    }
  };

  return (
    <div className="registration-container">
      <h1 className="c">Welcome to Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        {formError && (
          <div className="error-message">
            <h1 className="b">{formError}</h1>
          </div>
        )}
        {serverMessage && (
          <div className="success-message">
            <h1 className="b">{serverMessage}</h1>
          </div>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

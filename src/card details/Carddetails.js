import React, { useState } from "react";
import "./Carddetails.css";

export default function Carddetails() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/user/registration");
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Failed to fetch users.");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleAdd = async () => {
    const { name, email, password, confirmPassword } = formData;
    if (name && email && password && confirmPassword && password === confirmPassword) {
      try {
        const response = await fetch("http://localhost:8080/user/registration", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: name,
            email,
            password,
          }),
        });

        if (response.ok) {
          alert("User registered successfully");
          fetchUsers(); // Refresh list after add
          resetForm();
        } else {
          alert("Failed to add user.");
        }
      } catch (error) {
        console.error("Error adding user:", error);
      }
    } else {
      alert("Please fill all fields and ensure passwords match.");
    }
  };

  const handleEdit = (index) => {
    const user = users[index];
    setFormData({
      name: user.username || "",
      email: user.email || "",
      password: "", // Leave empty for security
      confirmPassword: "",
    });
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleUpdate = async () => {
    const { name, email, password, confirmPassword } = formData;
    if (name && email && password && confirmPassword && password === confirmPassword) {
      try {
        const response = await fetch("http://localhost:8080/user/update", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: users[editIndex].id,
            username: name,
            email,
            password,
          }),
        });

        if (response.ok) {
          alert("User updated successfully");
          fetchUsers(); // Refresh list after update
          resetForm();
        } else {
          alert("Failed to update user.");
        }
      } catch (error) {
        console.error("Error updating user:", error);
      }
    } else {
      alert("Please fill all fields and ensure passwords match.");
    }
  };

  const handleDelete = async (index) => {
    const username = users[index].username;
    try {
      const response = await fetch("http://localhost:8080/user/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });

      if (response.ok) {
        alert("User deleted successfully");
        fetchUsers(); // Refresh list after delete
      } else {
        alert("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="card-details">
      <button className="getbutton" onClick={fetchUsers}>Get User Details</button>

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />

        {!isEditing ? (
          <button type="button" onClick={handleAdd}>Add User</button>
        ) : (
          <button type="button" onClick={handleUpdate}>Update User</button>
        )}
      </form>

      <div className="table">
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id || index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { Views } from "../enums"
import React, { useState } from 'react';


// Profile component
export function Profile({ user }) {
  user = {
    name: "User",
    email: "username@example.com",
    age: 30
};
  return (
    <div className="profile">
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

// EditProfile component
function EditProfile({ user, updateUser }) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    age: user.age,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data
    updateUser(formData);
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

// ProfilePage component
export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'User',
    email: 'username@example.com',
    age: 30,
  });

  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <div className="profile-page">
      <Profile user={user} />
      <EditProfile user={user} updateUser={updateUser} />
    </div>
  );
}

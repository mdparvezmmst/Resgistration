// src/components/RegistrationForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './RegistrationForm.css'; // Import the CSS file

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save user credentials in local storage (in a real app, you'd want to save these securely)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    setUsername('');
    setPassword('');
    
    alert('Registration successful! You can now log in.');

    // Redirect to login page
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

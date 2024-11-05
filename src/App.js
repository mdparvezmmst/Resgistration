// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm'; // Correct import path
import HomePage from './Components/Homepage/Home'; // Correct import path
import RegistrationForm from './Components/RegistrationForm'; // Import RegistrationForm

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} /> {/* Registration route */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

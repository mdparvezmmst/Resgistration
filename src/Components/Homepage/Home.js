// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  const navigate = useNavigate();

  // Handle logout action
  const handleLogout = () => {
    // Redirect to login page
    navigate('/');
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">WEN TRAVEL PRO</div>
        <ul className="navbar-links">
          <li><a href="#packages">Packages</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Discover</h1>
            <h2>The Great Outdoors</h2>
            <p>Adventure begins now!</p>
            <button className="explore-button">Explore</button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="featured-destinations">
        <h2>Featured Destinations</h2>
        <p>Amazing Travel WP Theme</p>
        <div className="destination-cards">
          <div className="card">
            <img src="/images/switzerland.jpg" alt="Destination 1" />
            <h3>Trip to Switzerland</h3>
            <p>Escape the city and explore the mountains of Switzerland.</p>
            <button className="card-button">Explore</button>
          </div>
          <div className="card">
            <img src="/images/santorini.jpg" alt="Destination 2" />
            <h3>Trip to Santorini</h3>
            <p>Experience the beauty and culture of Santorini.</p>
            <button className="card-button">Explore</button>
          </div>
          <div className="card">
            <img src="/images/maldives.jpg" alt="Destination 3" />
            <h3>Trip to Maldives</h3>
            <p>Relax on the beautiful beaches of the Maldives.</p>
            <button className="card-button">Explore</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>WEN TRAVEL PRO is dedicated to helping you discover the world’s most exciting destinations.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email:  mdparvez13mmst.com</p>
            <p>Phone: 7758009326</p>
          </div>
          <div className="footer-section social-media">
            <h3>Follow Us</h3>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <p className="footer-credit">&copy; {new Date().getFullYear()} WEN TRAVEL PRO. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ loggedIn }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        navigate('/login');
        window.location.reload();
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  const linkStyle = {
    color: '#333333',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '0 15px',
    fontWeight: 'normal',
  };

  const buttonStyle = {
    backgroundColor: '#5A7737',
    color: '#ffffff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    marginLeft: '10px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#4A6A2C',
    transform: 'scale(1.05)',
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">E-commerce</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/cart" className="btn btn-success mx-2" style={buttonStyle}>Cart</Link>
        {loggedIn ? (
          <>
            <button
              className="btn btn-danger"
              onClick={handleLogout}
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
                e.currentTarget.style.transform = buttonHoverStyle.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Logout
            </button>
            <p style={{ marginLeft: '10px', color: 'black' }}><b>Welcome, {loggedIn}</b></p>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-danger mx-1">Login</Link>
            <Link to="/register" className="btn btn-danger mx-1">SignIn</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

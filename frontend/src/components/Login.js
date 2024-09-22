import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';

export default function Login({ setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username: username,
        password: password,
      });

      console.log(response.data); // Log the full response

      if (response.data.success) {
        navigate('/');
        setLoggedIn(response.data.username);
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      // Log full error details to help debug
      if (error.response) {
        console.error("Response error:", error.response);
        setError(error.response.data.error || 'Login failed');
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
};
  return (
    <div className="d-flex justify-content-center align-items-center pt-5 pb-5">
      <div className="card shadow-lg p-4 rounded-lg" style={cardStyle}>
        <form onSubmit={handleLogin}>
          Login
          <hr />
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-group mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="text-center mb-3">
            <button
              type="submit"
              className="btn btn-primary btn-block w-100"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
        <div className="text-center">
          <a href="/forgot-password" className="small text-muted">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}

// Inline styles for the card and background
const cardStyle = {
  width: '400px',
  borderRadius: '15px',
  padding: '20px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
};

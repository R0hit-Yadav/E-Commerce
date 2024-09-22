import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password,
      });
      if (response.data.success) {
        navigate('/login');
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center pt-5 pb-5">
      <div className="card shadow-lg p-4 rounded-lg" style={cardStyle}>
        <form onSubmit={handleRegister}>
          Registers
          <hr />
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name="first_name"
              className="form-control"
              id="firstName"
              placeholder="First name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              name="last_name"
              className="form-control"
              id="lastName"
              required
              placeholder="Last name"
            />
          </div>
          <div className="mb-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="form-control"
              id="email"
              required
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              className="form-control"
              id="username"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block w-100" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
          <div className="text-center mt-3">
            <a href="/login/">Already have an account? Login here</a>
          </div>
        </form>
      </div>
    </div>
  );
}

const cardStyle = {
  width: '400px',
  borderRadius: '15px',
  padding: '20px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
};

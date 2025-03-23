import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
      };
    
      const formStyle = {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
      };
    
      const headingStyle = {
        fontSize: '2rem',
        marginBottom: '1.5rem',
        color: '#282c34',
      };
    
      const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        marginBottom: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '1rem',
      };
    
      const buttonStyle = {
        width: '100%',
        padding: '0.75rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#61dafb',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease',
      };
    
      const buttonHoverStyle = {
        backgroundColor: '#4fa3c7',
      };

      const errorStyle = {
        color: 'red',
        marginBottom : '1rem',
      }
    
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
          setError("Passwords do not match");
          return;
        }
        try {
          const response = await axios.post('http://localhost:8000/api/signup/', {
           username,
           email,
            password,
          });
          
          console.log("response.data.message_signup : ", response.data.message);
          if(response.data.message === 'User Created Successfully') {
            localStorage.setItem('email', response.data.user.email)
            navigate('/login');
          }
        } catch (err) {
          setError(err.response?.data?.message || "Sign Up failed. Please try again.");
        }
      };
    
      return (
        <div style={containerStyle}>
          <div style={formStyle}>
            <h1 style={headingStyle}>Sign Up</h1>
            {error && <p style={errorStyle}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                style={inputStyle}

                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email"
                style={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"

                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                required
              />

          <input
            type="password"
            style={inputStyle}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
              <button
                type="submit"
                style={buttonStyle}
                onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      );
    };

export default SignUp;

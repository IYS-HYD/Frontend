import React from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
  const navbarStyle = {
    backgroundColor: '#282c34',
    padding: '1rem',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between', // Space between logo and button
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8rem', // Adds space between items
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '0',
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    margin: '0',
    color: '#61dafb',
  };

  const authenticateStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#282c34',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#4fa3c7', // Darker shade for hover effect
  };

  return (
    <div style={navbarStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>IYS</h1>
        <h2 style={subtitleStyle}>KRSNA</h2>
        <h2 style={subtitleStyle}>BALARAM</h2>
        <h2 style={subtitleStyle}>RADHA RANI</h2>
      </div>

      <div style={authenticateStyle}>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          onClick={() => navigate('/login')}
        >
          Sign In
        </button>
      </div>

      <div style={authenticateStyle}>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
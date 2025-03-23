import React from 'react';
import SadhanaCardForm from './SadhanaCardForm';
import { useNavigate } from 'react-router-dom';

const DashboardPersonal = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');

  if (!token) {
    navigate('/login');
  }

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    await fetch("http://127.0.0.1:8000/api/logout/", {
      method: 'POST',
      headers: { "Authorization": `Token ${token}` }
    });
    localStorage.removeItem('token');
    window.location.href = "/login";
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action is irreversible!")) {
      const token = localStorage.getItem("token");
      await fetch("http://127.0.0.1:8000/api/delete-account", {
        method: "DELETE",
        headers: { "Authorization": `Token ${token}` }
      });
      localStorage.removeItem('token');
      alert("Your account has been deleted..");
      window.location.href = "/signup";
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.navbar}>
        <h1 style={styles.navbarHeading}>Welcome {email ? email : 'Guest'}</h1>
        <div style={styles.navbarButtons}>
          <button
            style={styles.navbarButton}
            onClick={() => navigate('/weeklyreport')}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.navbarButtonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.navbarButton.backgroundColor)}
          >
          Weekly Report
          </button>
          <button
            style={styles.navbarButton}
            onClick={handleLogout}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.navbarButtonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.navbarButton.backgroundColor)}
          >
            Logout
          </button>
          <button
            style={styles.navbarButton}
            onClick={handleDeleteAccount}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.navbarButtonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.navbarButton.backgroundColor)}
          >
            Delete Account
          </button>
        </div>
      </div>
      <div style={styles.dashboardContent}>
        <div style={styles.sadhanaCardContainer}>
          <h1>ugram viram maha-vishnum</h1>
          <h1>jvalantam sarvato mukham</h1>
          <h1>nrisimham bhishanam bhadram</h1>
          <h1>mrityur mrityum namamy aham</h1>
        </div>
      </div>
      <div style={styles.dashboardContent}>
        <div style={styles.sadhanaCardContainer}>
          <SadhanaCardForm />
        </div>
      </div>
    </div>
  );
};

export default DashboardPersonal;

const styles = {
  // General Styles
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    margin: 0,
    padding: 0,
    color: '#333',
  },

  // Navbar Styles
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },

  navbarHeading: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },

  navbarButtons: {
    display: 'flex',
    gap: '1rem',
  },

  navbarButton: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ff4757',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },

  navbarButtonHover: {
    backgroundColor: '#ff6b81',
  },

  // Main Content Styles
  dashboardContent: {
    padding: '2rem',
  },

  // SadhanaCardForm Container
  sadhanaCardContainer: {
    marginTop: '2rem',
    padding: '2rem',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign : 'center',
  },
};
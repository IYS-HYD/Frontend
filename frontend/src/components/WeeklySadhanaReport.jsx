import React, { useState, useEffect } from 'react'
const styles = {
  global: {
    body: {
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      margin: 0,
      padding: 0,
      backgroundColor: '#f9f9f9',
    },
  },
  container: {
    maxWidth: '800px',
    margin: '16px auto',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#4a90e2',
    marginBottom: '16px',
    fontSize: '2rem',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: '16px',
    marginBottom: '8px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  noEntriesMessage: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
  },
  responsive: {
    '@media (max-width: 768px)': {
      container: {
        padding: '8px',
      },
      heading: {
        fontSize: '1.5rem',
      },
      listItem: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
  },
};

// Apply styles to your component
const WeeklySadhanaReport = () => {
  const [sadhanaData, setSadhanaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      console.log("Token from localStorage Weekly sadhana report :" , token);
      
      if (!token) {
        console.error("No authentication token found!");
        return;
      }
  
      try {
        const response = await fetch('http://127.0.0.1:8000/api/sadhana/weekly-report/', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("Weekly sadhana data:", data);
        setSadhanaData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Weekly Sadhana Report</h2>
      {sadhanaData.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Wake Up Time</th>
              <th>Rounds Chanted</th>
              <th>Hours Studied (college)</th>
              <th>Day Rest</th>
              <th>Seva</th>
              <th>Cleanliness</th>
              <th>Book Reading</th>
              <th>Sadhana Card Filled at</th>
            </tr>
          </thead>
          <tbody>
            {sadhanaData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.wake_up_time}</td>
                <td>{entry.rounds_chanted}</td>
                <td>{entry.hours_studied_college}</td>
                <td>{entry.day_rest}</td>
                <td>{entry.seva}</td>
                <td>{entry.cleanliness}</td>
                <td>{entry.book_reading_sp}</td>
                <td>{entry.card_filled_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={styles.noEntriesMessage}>No Sadhana entries found for this week.</p>
      )}
    </div>
  );
  
};

export default WeeklySadhanaReport;
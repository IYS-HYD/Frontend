import React from 'react';
import  Map  from './VoiceMap';
const Dashboard = () => {
  const dashboardStyle = {
    padding: '2rem',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    color: '#282c34',
    fontSize: '2.5rem',
    marginBottom: '1rem',
  };

  const textStyle = {
    color: '#555',
    fontSize: '1.2rem',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto 2rem auto',
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  };

  const imageStyle = {
    width: '200px',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={dashboardStyle}>
      <h1 style={headingStyle}>Welcome to ISKCON</h1>
      <p style={textStyle}>
        The International Society for Krishna Consciousness (ISKCON), also known as the Hare Krishna movement, is a worldwide organization dedicated to promoting the teachings of Lord Krishna and the practice of Bhakti Yoga. Founded in 1966 by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, ISKCON follows the principles of Vaishnavism and emphasizes devotion to Lord Krishna as the Supreme Personality of Godhead.
      </p>
      <div style={imageContainerStyle}>
        <img
          src="https://th.bing.com/th/id/OIP.PZdmdw91T8L_02Ayl8ZG3QHaFj?rs=1&pid=ImgDetMain"
          alt="Krishna with Flute"
          style={imageStyle}
        />
        <img
          src="https://th.bing.com/th/id/R.b2c9f06322b035dc24f06aec684725e7?rik=4RJuki45DRkTQg&riu=http%3a%2f%2ftheharekrishnamovement.com%2fwp-content%2fuploads%2f2021%2f08%2flord-krishna-and-balarama.jpg&ehk=cLa4Nj%2fQ1e5NeE%2ffyT5r%2bIcn50E%2fxETBiYghTRv0Y1I%3d&risl=&pid=ImgRaw&r=0"
          alt="Balarama"
          style={imageStyle}
        />
        <img
          src="https://1.bp.blogspot.com/-7Xkt5HYnUME/YURaZqN3yQI/AAAAAAAAEAA/r3TyvWynkiktlekARXQntYOdU6kPlgL8QCLcBGAsYHQ/s1034/Radha-Rani-Images-Full-Hd1.jpg"
          alt="Radha Krishna"
          style={imageStyle}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIqYClrFdtzeKEepzmcNqo07inmsL7bjjQg&s"
          alt="Narsimha Dev"
          style={imageStyle}
        />
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
};

export default Dashboard;
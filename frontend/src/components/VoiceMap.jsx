import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css'; // Keep the Leaflet styles

const VoiceMap = () => {
  const [location, setLocation] = useState(null); // User's current location
  const [additionalLocations, setAdditionalLocations] = useState([
    { lat: 17.442566062727543, lng: 78.3593374782803, title: 'GITA LIFE' },
    { lat: 17.468547250271588, lng: 78.34075896076007, title: 'BYC GACHIBOWLI' },
    { lat: 17.44973748290701, lng: 78.30516955474712, title: 'ISKCON CDEC' },
    { lat: 17.3882051754698, lng: 78.47523204952091, title: 'ISKCON ABIDS' },
  ]);

  // Fetch user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to retrieve your location. Please enable location services.');
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      alert('Geolocation is not supported by your browser.');
    }
  }, []);

  // Handle map click to add a new marker
  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    const newLocation = { lat, lng, title: 'New Location' };
    setAdditionalLocations((prevLocations) => [...prevLocations, newLocation]);
  };

  if (!location) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Loading map...</p>
      </div>
    );
  }

  return (
    <MapContainer
      center={location}
      zoom={13}
      style={{ height: '500px', width: '100%' }}
      onClick={handleMapClick}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {/* User's current location */}
      <Marker position={location}>
        <Popup>
          <b>You are here!</b>
          <br />
          <a
            href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </Popup>
      </Marker>
      
      {/* Additional locations with clustering */}
      <MarkerClusterGroup>
        {additionalLocations.map((loc, index) => (
          <Marker key={index} position={{ lat: loc.lat, lng: loc.lng }}>
            <Popup>
              <b>{loc.title}</b>
              <br />
              <a
                href={`https://www.google.com/maps?q=${loc.lat},${loc.lng}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
              </a>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default VoiceMap;  

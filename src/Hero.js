import React from 'react';
import './Hero.css';
import Weather from './component/Weather';
const Hero = ({ handleLogout }) => {
  return (
    <>
      <button
        style={{
          marginLeft: '1260px',
          cursor: 'pointer',
          background: '#020120',
          color: '#fff',
          padding: '15px',
          fontSize: '15px',
          fontWeight: 'bold',
          border: '0'
        }}
        onClick={handleLogout}
      >
        log out
      </button>
      <div className="App">
        <Weather />
      </div>
    </>
  );
};
export default Hero;

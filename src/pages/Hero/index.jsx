import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text container">
        <p>Spa & Beauty Center</p>
        <h2>Beauty & <br /> Spa Wellness</h2>
        <p>A small river named Duden flows by their place <br /> and supplies it with the necessary regelialia.</p>
        <button className='button'>MAKE AN APPOINTMENT</button>
      </div>
    </div>
  );
}

export default Hero;

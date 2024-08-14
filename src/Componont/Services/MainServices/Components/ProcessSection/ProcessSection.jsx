import React, { useState } from 'react';
import './ProcessSection.css'; // Import CSS file

const OurProcess = ({ title, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <section className="our-service">
      <div className="service-description">
        <div className="title" onClick={toggleDescription}>
          {title}
          <button className="toggle-button">
            {showDescription ? '-' : '+'}
          </button>
        </div>
        <div className={`description ${showDescription ? 'open' : ''}`}>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;

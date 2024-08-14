import React from 'react';
import "./ServiceCard.css"; // Import CSS file

const ServiceCard = ({ img_url, title, description, folderPath }) => {
  // Remove spaces from title
  const formattedTitle = title.replace(/\s+/g, '');

  return (
    <div className="service-card">
      <div className="service-image">
        <img src={img_url} className="img-fluid" alt="Service Image" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <a href={`/${folderPath}/${formattedTitle}`} className="btn stretched-link">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;

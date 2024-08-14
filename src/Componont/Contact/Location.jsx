import React from 'react';
import './Location.css';
import Gate from './../../assets/Services/indiagate1.webp'; // Adjust the path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUser, faBullseye, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Location = () => {
  return (
    <div className="location-container">
      <div className="header">
        <h2>Our Location</h2>
        <p>Find us at the heart of innovation and creativity!</p>
      </div>
      <div className="location-card">
        <div className='address-image'>
         <img src={Gate} alt="India Gate" className="location-image" />

         <div className="location-details">
             <h3>INDIA</h3>
            <p>EditQuasar Pvt. Ltd.</p>
            <p>Professor Colony, Kenduadihi, Bankura, P.O. Kenduadihi, Pin: 722102, West Bengal, India</p>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Google Map</a>
          </div>
        </div>
        
        <div className="right">
          
            <div className="block1">
            <FontAwesomeIcon icon={faComments} style={{ color: '#8c42f4', height: "2rem", width : "2rem", margin:"1rem" }} />
              <div className='contact-info'>
              <p>General Enquiry:</p>
              <p>+91 8967908081</p>
              </div>
            </div>
            <div className="block1">
            <FontAwesomeIcon icon={faEnvelope} style={{  color: '#8c42f4', height: "2rem", width : "2rem", margin:"1rem" }} />
            <div className='contact-info'>
            <p>Email:</p>
            <p>editquasar@gmail.com</p>
            </div>
            </div>
            
            
            <div className="block1">
            <FontAwesomeIcon icon={faUser} style={{  color: '#8c42f4', height: "2rem", width : "2rem", margin:"1rem" }} />
            <div className='contact-info'>
            <p>Sales Enquiry:</p>
            <p>+91 89185 07257</p>
            </div>
            </div>
            <div className="block1">
            <FontAwesomeIcon icon={faBullseye} style={{ color: '#8c42f4', height: "2rem", width : "2rem", margin:"1rem"}} />
              <div className='contact-info'>
              <p>HR Enquiry:</p>
              <p>+91 8967908081</p>
              </div>
            </div>
            
         </div>
        </div>
      </div>
    
  );
};

export default Location;

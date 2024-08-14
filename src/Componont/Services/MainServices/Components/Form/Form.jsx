import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import NewButton from './../Button/NewButton'; // Adjust the import based on your project structure
import './Form.css'; // Assuming you save the CSS in a file named FormComponent.css
import sohamImage from './../../../../../assets/Services/sohamimage.jpg'; // Replace with actual path to image
import krishImage from './../../../../../assets/Services/krishsir.jpg'; // Replace with actual path to image

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzAsl2J8wniz-xGDdyrIYGv8ueeA3ZgSM20l2_F6lXfLcKcdRFBCOO8Lj-5-cbZ1ZCq/exec';
  
    fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phonenumber: formData.phonenumber,
        message: formData.message
      }).toString(),
    })
    .then((response) => {
      if (response.ok) {
        alert('Form Submitted Successfully!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phonenumber: '',
          message: '',
        });
      } else {
        alert('Form submission failed. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  


  return (
    <div className="new-section">
      <div className="section-container">
        <div className="text-and-images">
          <div className="text">
            <h2 className="heading">We Are Happy to Help You</h2>
            <p className="descrip">
              With touchpoints across numerous verticals and a passionate team at the helm, we have what it takes to give your brand the digital evolution.
            </p>
          </div>
          <div className="images">
            <div className="image-container">
              <img src={sohamImage} alt="Soham Mandal" />
              <div className="name">
                <p>Mr. Soham Mandal</p>
                <h2>Chief Executive Officer</h2>
                <a href="https://www.linkedin.com/in/soham-mandal-founder-and-ceo-08058427a/"><FaLinkedin /></a>
              </div>
            </div>
            <div className="image-container">
              <img src={krishImage} alt="Krish Kumar" />
              <div className="name">
                <p>Mr. Krish Kumar</p>
                <h2>Chief Operating Officer</h2>
                <a href="https://www.linkedin.com/in/krish-kumar/?originalSubdomain=in"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <label htmlFor="firstname">First Name <span>*</span></label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter First Name"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-section">
              <label htmlFor="lastname">Last Name <span>*</span></label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-section">
              <label htmlFor="email">Email <span>*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-section">
              <label htmlFor="phonenumber">Phone Number <span>*</span></label>
              <input
                type="tel"
                id="phonenumber"
                name="phonenumber"
                placeholder="Enter Phone Number"
                value={formData.phonenumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-section">
              <label htmlFor="message">Tell us more <span>*</span></label>
              <textarea
                id="message"
                name="message"
                placeholder="Brief about your project"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {/* <div className='submit-button'>
              <NewButton buttonText="Submit" link="#" />
            </div> */}
            <div className='submit-button'>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

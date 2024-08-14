import React, { useState } from 'react';
import './Contact.css';
import NewButton from './../Services/MainServices/Components/Button/NewButton';
import Location from './Location';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    subject: '',
    message: '',
    consent: false // Added field
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzAsl2J8wniz-xGDdyrIYGv8ueeA3ZgSM20l2_F6lXfLcKcdRFBCOO8Lj-5-cbZ1ZCq/exec';

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert('Form Submitted Successfully!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phonenumber: '',
          subject: '',
          message: '',
          consent: false // Reset field
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="contact-container">
      <div className='text-form'>
        <div className="contact-text">
          <h1>Tell Us What’s on Your Mind?</h1>
          <p>Shoot anything that pops up in your head. From artificial intelligence to fun memes, we are all ears!</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <h2>General Enquiry</h2>
            <div className="Form-boxes">
              <div className="form-group">
                <label htmlFor="firstName">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstname"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastname"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="Form-boxes">
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number*</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phonenumber"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter your subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Tell Us More</label>
              <textarea
                id="message"
                name="message"
                placeholder="Give us a brief about your query"
                value={formData.message}
                onChange={handleChange}
                maxLength="1000"
              ></textarea>
              <div className="character-count">{formData.message.length}/1000</div>
            </div>

            <div className="form-group consent-group">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <label htmlFor="consent" className="consent-label">
                I have read the privacy policy and consent to the processing of my data for the purpose of handling my enquiry
              </label>
            </div>

            {/* <div className='button-talk'>
              <NewButton buttonText="Submit" link="https://example.com" />
            </div> */}
             <div className='button-talk'>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Location />
    </div>
  );
};

export default Contact;

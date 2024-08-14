import React, { useState } from 'react';
import SelectableButton from './selectableButton/selectableButton';
import './Lightbox.css';
import LightBoxbg from './../../assets/Services/wave 12.webp'; // Import the background image
// import Button from './../Services/MainServices/Components/Button/NewButton';

//
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';



const Lightbox = ({ onClose }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDateTime, setSelectedDateTime] = useState(dayjs().set('hour', 12).set('minute', 0));

  const handleDateTimeChange = (newValue) => {
    console.log("Selected DateTime: ", newValue);
    setSelectedDateTime(newValue);
  };

  const getCalendlyLink = () => {
    console.log("getCalendlyLink function is called");
    if (selectedDateTime) {
      const formattedDateTime = dayjs(selectedDateTime).format('YYYY-MM-DDTHH:mm:ssZ');
      console.log("Formatted DateTime: ", formattedDateTime);
      const servicesString = selectedServices.map(service => encodeURIComponent(service)).join(', ');

      const url = `https://calendly.com/editquasar/quick-meet-with-editquasar/${formattedDateTime}?month=${dayjs(selectedDateTime).format('YYYY-MM')}&date=${dayjs(selectedDateTime).format('YYYY-MM-DD')}&a1=${servicesString}`;
      
      console.log("Generated Calendly URL: ", url);
      
      return url;
    }
    return 'https://example.com'; // Fallback URL
  };

  const toggleSelection = (mainService, subService = null) => {
    if (subService) {
      // Toggle subservice selection
      setSelectedServices(prevSelected => {
        const isSelected = prevSelected.includes(subService);

        if (isSelected) {
          return prevSelected.filter(service => service !== subService);
        } else {
          return [...prevSelected, subService];
        }
      });
    } else {
      // Toggle main service and all its subservices
      const allSubservices = services.find(service => service.name === mainService).subservices;
      const areAllSelected = allSubservices.every(subservice => selectedServices.includes(subservice));

      setSelectedServices(prevSelected => {
        if (areAllSelected) {
          return prevSelected.filter(service => !allSubservices.includes(service));
        } else {
          return [...new Set([...prevSelected, ...allSubservices])]; // Use Set to avoid duplicates
        }
      });
    }
  };

  const services = [
    {
      name: "Branding",
      subservices: ["Brand Identity", "Brand Consulting", "Logo Design", "2D/3D Visualisation", "Graphic Design"]
    },
    {
      name: "Design Fusion",
      subservices: ["Personalized Advertising Poster Creation", "Personal Portfolio Creation", "Company Portfolio Making", "Personalized Business Card Making", "Social Media Creatives & Other Advertising Materials", "Brochures"]
    },
    {
      name: "Digital Marketing",
      subservices: ["Search Engine Optimisation", "Social Media Management", "Performance Marketing", "Content Marketing", "Marketing Automation", "Analytics"]
    },
    {
      name: "Experience Design",
      subservices: ["UI/UX Design", "Website Design", "Mobile Experience", "Commerce Experience", "Human Machine Interface (HMI)", "Applications & Dashboard"]
    },
    {
      name: "Technology",
      subservices: ["Data & Analytics", "Web Development", "Mobile App Development", "E-commerce", "AI & Machine Learning (ML)", "Cyber Security"]
    },
    {
      name: "Creativity",
      subservices: ["Video Editing", "Photo Editing", "Blog Writing", "Content Writing", "Resume Making", "Personalized Occasion Card Making"]
    }
  ];

  return (
    <div className="lightbox-overlay" onClick={onClose} id='lightbox'>
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundImage: `url(${LightBoxbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} // Set the background image here
      >
        <button className="close-button" onClick={onClose}>✖</button>
        <h2 className="tittle">Customize Your Services & Schedule a Consultation</h2>
        <h3 className="sub-title">Tailor your needs and book a session with our experts today.</h3>
        <div className="service-columns">
          <div className="column">
            {services.slice(0, 2).map(service => (
              <div className="main-service" key={service.name}>
                <label className="main-service-label">
                  <input
                    type="checkbox"
                    checked={service.subservices.every(sub => selectedServices.includes(sub))}
                    onChange={() => toggleSelection(service.name)}
                  />
                  {service.name}
                </label>
                <div className="sub-service-buttons">
                  {service.subservices.map(subservice => (
                    <label className="sub-service-label" key={subservice}>
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(subservice)}
                        onChange={() => toggleSelection(service.name, subservice)}
                      />
                      {subservice}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="column">
            {services.slice(2, 4).map(service => (
              <div className="main-service" key={service.name}>
                <label className="main-service-label">
                  <input
                    type="checkbox"
                    checked={service.subservices.every(sub => selectedServices.includes(sub))}
                    onChange={() => toggleSelection(service.name)}
                  />
                  {service.name}
                </label>
                <div className="sub-service-buttons">
                  {service.subservices.map(subservice => (
                    <label className="sub-service-label" key={subservice}>
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(subservice)}
                        onChange={() => toggleSelection(service.name, subservice)}
                      />
                      {subservice}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="column">
            {services.slice(4, 6).map(service => (
              <div className="main-service" key={service.name}>
                <label className="main-service-label">
                  <input
                    type="checkbox"
                    checked={service.subservices.every(sub => selectedServices.includes(sub))}
                    onChange={() => toggleSelection(service.name)}
                  />
                  {service.name}
                </label>
                <div className="sub-service-buttons">
                  {service.subservices.map(subservice => (
                    <label className="sub-service-label" key={subservice}>
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(subservice)}
                        onChange={() => toggleSelection(service.name, subservice)}
                      />
                      {subservice}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
        <div className='cta'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DateTimePicker']}
        sx={{
          mr: 2,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '0px', // Apply marginTop here for the container
        }}
      >
        <DemoItem label="Schedule your preferable date and time:">
          {/* Other configurations */}
        </DemoItem>
        <DateTimePicker 
        value={selectedDateTime}
        onChange={handleDateTimeChange} 
        minTime={dayjs().set('hour', 11).set('minute', 0)}  // Set minimum selectable time to 11:00 AM
        maxTime={dayjs().set('hour', 17).set('minute', 0)}  // Set maximum selectable time to 5:00 PM
          PopperProps={{
            sx: {
              zIndex: 4000, // Higher than the Lightbox z-index
            },
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, -10], // Adjust this value as needed
                },
              },
              {
                name: 'preventOverflow',
                options: {
                  altAxis: true, 
                  altBoundary: 'viewport',
                },
              },
            ],
          }}
          sx={{ 
            marginTop: '0px !important', 
            background: 'White', 
            border: '4px black !important',
            borderRadius: '4px', 
          }} // Apply marginTop here for the picker
        />
      </DemoContainer>
    </LocalizationProvider>
          <div className="submit-buttoon">
          <button onClick={() => {
            const url = getCalendlyLink();
            window.location.href = url;
            }}>
          Let's Talk
         </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;

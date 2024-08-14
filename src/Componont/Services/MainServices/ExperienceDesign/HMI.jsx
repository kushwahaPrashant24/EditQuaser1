import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./HMI.css"; // Import your CSS file
import NewButton from  "../../MainServices/Components/Button/NewButton";// Updated the path to correct level
import OurProcess from "../../MainServices/Components/ProcessSection/ProcessSection"; // Updated the path to correct level
import processVideo from "../../../../assets/Services/Companyprocess.mp4"; // Import the process video
import ServiceCard from "../../MainServices/Components/ServiceCard/ServiceCard"; // Updated the path to correct level
import bgsubservices from "../../../../assets/Services/wave 16.webp"; // Import background sub-services image
import serImg from "../../../../assets/Services/image.webp"; // Import service image
import OurImpact from './../Components/OurImpact/OurImpact';
import Form from './../Components/Form/Form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from './../../../Navbar/Lightbox';

const HMI = () => {
  const statsRef = useRef(null);
   // Start
   const [showLightbox, setShowLightbox] = useState(false);

   const handleOpenLightbox = () => () => {
     setShowLightbox(true);
   };
 
   const handleCloseLightbox = () => {
     setShowLightbox(false);
   };
   // End

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.impact-number');
            counters.forEach((counter) => {
              const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace('+', '');
                const speed = 200; // Adjust speed as needed
                const increment = target / speed;

                if (count < target) {
                  counter.innerText = `${Math.ceil(count + increment)}+`;
                  setTimeout(updateCount, 1);
                } else {
                  counter.innerText = `${target}+`;
                }
              };
              updateCount();
            });
            observer.unobserve(entry.target); // Stop observing once animation is done
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="brand-identity-container">
      <section className="hero-section" style={{ backgroundImage: `url(${bgsubservices})` }}>
        <div className="hero-content">
          <h1>Human Machine Interface (HMI)</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Human Machine Interface (HMI)</h2>
          <p>
          Our Human Machine Interface (HMI) design services focus on creating intuitive and userfriendly interfaces for machines, equipment, and industrial systems. Whether you're developing a
          control panel, dashboard, or monitoring system, our HMI design solutions prioritize usability,
          functionality, and safety to enhance operator efficiency and productivity in various industrial settings.
          </p>
          {/* Add more paragraphs as needed */}
        </div>
        <div className='button-ltalk'>
         {/* start  */}
         <button className='button' onClick={handleOpenLightbox()}>
            {"Let's Talk"} <ArrowForwardIcon />
          </button>
          {/* end */}
        </div>
      </section>

      <p className='Title'>Our Process</p>
      <section className="our-process">
        <video className='process-video' id='process-video' autoPlay loop muted>
          <source src={processVideo} type='video/mp4' />
        </video>

        <div className='processes'>
          <OurProcess
            title="Requirements Analysis"
            description="Understanding operational needs, user workflows, and safety requirements for the HMI." 
          />
          <OurProcess
            title="Interface Design"
            description="Designing clear and intuitive layouts, controls, and visual elements for easy navigation and operation." 
          />
          <OurProcess
            title="Usability Testing"
            description="Conducting usability tests with operators to validate design effectiveness and gather feedback for refinement." 
          />
          <OurProcess
            title="Integration Support"
            description="Collaborating with engineering teams to integrate HMI designs into equipment or systems seamlessly." 
          />
          <OurProcess
            title="Training and Documentation"
            description="Providing user training
            sessions and creating documentation to ensure operators can effectively use the HMI for optimal performance." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="What is Human Machine Interface (HMI), and why is it important?"
          description="HMI refers to the user
          interface that connects humans to machines, enabling operators to monitor, control, and interact
          with industrial equipment and systems. It is crucial for enhancing operational efficiency,reducing errors, and ensuring safety in industrial environments." 
        />
        <OurProcess
          title="Can you design HMIs for specific industry standards and regulations?"
          description="Yes, we design HMIs
          compliant with industry standards and safety regulations, considering ergonomic principles,
          visual hierarchy, and usability guidelines for optimal performance and operator safety." 
        />
        <OurProcess
          title="Do you provide customized HMI solutions for unique operational needs?"
          description=" Yes, we specialize
          in designing customized HMI solutions tailored to specific operational requirements, equipment functionalities, and user preferences across various industries." 
        />
        <OurProcess
          title="How do you ensure HMI designs are user-friendly and intuitive?"
          description="We conduct usability tests,
          gather feedback from operators, and iterate designs based on user interactions and ergonomic considerations to ensure HMI designs are intuitive, efficient, and easy to navigate." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Applications & Dashboard' 
            description='Develop user-friendly applications and dashboards for enhanced usability and data management.' 
            folderPath="Services/MainServices/ExperienceDesign" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='UI/UX Design' 
            description='Enhance user satisfaction with intuitive and aesthetically pleasing interface designs.' 
            folderPath="Services/MainServices/ExperienceDesign" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Website Design' 
            description='Develop visually appealing and user-friendly websites that provide a seamless browsing experience.' 
            folderPath="Services/MainServices/ExperienceDesign" 
          />
        </div>
        <div className="view-all-services-button">
          <NewButton buttonText="View all services" link="/services" />
        </div>
      </div>

     <OurImpact></OurImpact>
     <Form></Form>
     {showLightbox && <Lightbox onClose={handleCloseLightbox} />}
    </div>
  );
};

export default HMI;

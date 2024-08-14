import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./MobileApp.css"; // Import your CSS file
import NewButton from  "../../MainServices/Components/Button/NewButton";// Updated the path to correct level
import OurProcess from "../../MainServices/Components/ProcessSection/ProcessSection"; // Updated the path to correct level
import processVideo from "../../../../assets/Services/Companyprocess.mp4"; // Import the process video
import ServiceCard from "../../MainServices/Components/ServiceCard/ServiceCard"; // Updated the path to correct level
import bgsubservices from "../../../../assets/Services/wave 10.webp"; // Import background sub-services image
import serImg from "../../../../assets/Services/image.webp"; // Import service image
import OurImpact from './../Components/OurImpact/OurImpact';
import Form from './../Components/Form/Form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from './../../../Navbar/Lightbox';

const MobileApp = () => {
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
          <h1>Mobile App Development</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Mobile App Development</h2>
          <p>
          Our mobile app development services focus on creating innovative and user-centric applications
          for iOS and Android platforms that drive engagement, improve user experience, and achieve
          business objectives. From concept to deployment, our team of developers and designers
          collaborates closely with clients to deliver scalable and feature-rich mobile solutions tailored to meet market demands and user expectations.
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
            title="Strategy and Conceptualization"
            description="Defining app objectives, target audience, and feature requirements based on market research and business goals." 
          />
          <OurProcess
            title="UI/UX Design"
            description="Creating
            wireframes, prototypes, and visual designs that prioritize usability, intuitive navigation, and aesthetic appeal." 
          />
          <OurProcess
            title="Development"
            description="Building native or hybrid mobile apps using robust coding languages, frameworks, and development tools for optimal performance." 
          />
          <OurProcess
            title="Testing and QA"
            description="Conducting rigorous testing, usability testing, and quality assurance to identify and resolve issues before app deployment." 
          />
          <OurProcess
            title="Deployment and Support"
            description="Assisting with app store submission, launch strategies, and providing post-launch support, updates, and maintenance as needed." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is mobile app development important for businesses?"
          description="Mobile apps enhance customer
          engagement, facilitate transactions, improve brand loyalty, and provide a competitive edge by meeting user expectations for convenience and accessibility." 
        />
        <OurProcess
          title="Do you develop cross-platform mobile apps?"
          description="Yes, we develop cross-platform mobile apps
          using frameworks such as React Native, Xamarin, and Flutter, ensuring compatibility across iOS and Android devices and reducing development time and costs." 
        />
        <OurProcess
          title="Can you integrate third-party APIs and backend systems into mobile apps?"
          description="Yes, we
          specialize in integrating third-party APIs, backend databases, payment gateways, and other functionalities into mobile apps to enhance features and user experience." 
        />
        <OurProcess
          title="How do you ensure mobile app security and data protection?"
          description="We implement secure coding
          practices, encryption techniques, secure authentication, and regular security audits to protect mobile apps from cybersecurity threats and ensure user data privacy." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='E-commerce' 
            description='Develop comprehensive e-commerce solutions to boost your online sales and customer engagement.' 
            folderPath="Services/MainServices/Technology" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='AI & Machine Learning (ML)' 
            description='Implement cutting-edge AI and ML technologies to automate processes and gain insights.' 
            folderPath="Services/MainServices/Technology" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Cyber Security' 
            description='Protect your digital assets with advanced cyber security measures and strategies.' 
            folderPath="Services/MainServices/Technology" 
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

export default MobileApp;

import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./WebsiteDesign.css"; // Import your CSS file
import NewButton from  "../../MainServices/Components/Button/NewButton";// Updated the path to correct level
import OurProcess from "../../MainServices/Components/ProcessSection/ProcessSection"; // Updated the path to correct level
import processVideo from "../../../../assets/Services/Companyprocess.mp4"; // Import the process video
import ServiceCard from "../../MainServices/Components/ServiceCard/ServiceCard"; // Updated the path to correct level
import bgsubservices from "../../../../assets/Services/wave 7.webp"; // Import background sub-services image
import serImg from "../../../../assets/Services/image.webp"; // Import service image
import OurImpact from './../Components/OurImpact/OurImpact';
import Form from './../Components/Form/Form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from './../../../Navbar/Lightbox';

const WebsiteDesign = () => {
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
          <h1>Website Design</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Website Design</h2>
          <p>
          Our website design services are aimed at creating visually appealing, functional, and user-centric
          websites that resonate with your brand and engage your audience effectively. Whether you need
          a new website or a redesign, our team of designers and developers collaborates closely with you
          to deliver a website that not only looks great but also drives results and enhances your online presence.
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
            title="Discovery Phase"
            description="Understanding your business goals, target audience, and brand identity." 
          />
          <OurProcess
            title="Wireframing and Layout Design"
            description="Creating wireframes and defining the layout structure to organize content and user interactions." 
          />
          <OurProcess
            title="Visual Design"
            description="Designing website elements, including color schemes, typography, and imagery, to create a visually appealing and cohesive look." 
          />
          <OurProcess
            title="Development and Testing"
            description="Building the website using responsive design principles and conducting thorough testing across devices and browsers." 
          />
          <OurProcess
            title="Launch and Optimization"
            description="Deploying the website, monitoring performance, and optimizing for SEO, speed, and usability post-launch." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is website design important for businesses?"
          description="Website design impacts user experience,
          brand perception, and online visibility. A well-designed website enhances credibility, drives traffic, and facilitates conversions and sales." 
        />
        <OurProcess
          title="Do you design responsive websites?"
          description="Yes, we design responsive websites that provide an
          optimal viewing experience across a wide range of devices, from desktops to smartphones and tablets." 
        />
        <OurProcess
          title="Can you integrate e-commerce functionalities into websites?"
          description="Yes, we specialize in designing
          e-commerce websites with user-friendly navigation, secure payment gateways, product catalogs, and shopping cart functionalities tailored to enhance online shopping experiences." 
        />
        <OurProcess
          title="How do you ensure my website reflects my brand identity?"
          description="We align website design elements, such as colors, fonts, imagery, and tone of voice, with your brand guidelines and values to create a consistent and memorable brand experience for visitors." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Mobile Experience' 
            description='Create engaging and responsive mobile experiences for users on the go.' 
            folderPath="Services/MainServices/ExperienceDesign" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Commerce Experience' 
            description='Optimize the shopping experience to increase customer satisfaction and sales.' 
            folderPath="Services/MainServices/ExperienceDesign" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Human Machine Interface (HMI)' 
            description='Design intuitive interfaces that improve interaction between users and machines.' 
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

export default WebsiteDesign;

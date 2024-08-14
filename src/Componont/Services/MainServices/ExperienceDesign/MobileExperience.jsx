import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./MobileExperience.css"; // Import your CSS file
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

const MobileExperience = () => {
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
          <h1>Mobile Experience</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Mobile Experience</h2>
          <p>
          Our mobile experience design services focus on creating intuitive and engaging mobile interfaces
          that optimize usability and functionality across iOS and Android devices. Whether you're
          developing a mobile app or optimizing a mobile website, our team ensures seamless navigation,
          efficient interaction design, and a visually appealing experience that enhances user satisfaction and retention.
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
            title="Mobile Strategy"
            description="Defining mobile goals, target audience, and platform requirements." 
          />
          <OurProcess
            title="UX/UI Design"
            description="Creating wireframes, prototypes, and visual designs optimized for mobile interfaces." 
          />
          <OurProcess
            title="Performance Optimization"
            description=" Implementing responsive design principles and optimizing performance for fast loading and smooth navigation." 
          />
          <OurProcess
            title="User Testing"
            description="Conducting usability tests and gathering feedback to iterate and refine mobile designs." 
          />
          <OurProcess
            title="Launch and Support"
            description="Assisting with app store submission, launch strategies, and ongoing support and maintenance as needed." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is mobile experience design important for apps and websites?"
          description=" Mobile experience design
          ensures that users can easily navigate, interact, and accomplish tasks on smaller screens, leading to higher engagement, retention, and conversion rates." 
        />
        <OurProcess
          title="Do you design native apps or hybrid apps?"
          description="We design both native apps (iOS and Android) and hybrid apps, depending on client requirements, target audience, and functionality needs." 
        />
        <OurProcess
          title="Can you optimize existing mobile interfaces for better performance?"
          description="Yes, we specialize in
          redesigning and optimizing mobile interfaces to improve usability, enhance user experience, and achieve business goals more effectively." 
        />
        <OurProcess
          title="How do you ensure compatibility across different mobile devices?"
          description="We conduct thorough
          testing across various devices, screen sizes, and operating systems to ensure compatibility and consistency in performance and user experience." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
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
          <ServiceCard 
            img_url={serImg} 
            title='Applications & Dashboard' 
            description='Develop user-friendly applications and dashboards for enhanced usability and data management.' 
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

export default MobileExperience;

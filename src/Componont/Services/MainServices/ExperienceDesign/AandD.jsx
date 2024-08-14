import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./AandD.css"; // Import your CSS file
import NewButton from  "../Components/Button/NewButton";// Updated the path to correct level
import OurProcess from "../Components/ProcessSection/ProcessSection"; // Updated the path to correct level
import processVideo from "../../../../assets/Services/Companyprocess.mp4"; // Import the process video
import ServiceCard from "../Components/ServiceCard/ServiceCard"; // Updated the path to correct level
import bgsubservices from "../../../../assets/Services/wave 18.webp"; // Import background sub-services image
import serImg from "../../../../assets/Services/image.webp"; // Import service image
import OurImpact from '../Components/OurImpact/OurImpact';
import Form from '../Components/Form/Form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from './../../../Navbar/Lightbox';

const AandD = () => {
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
          <h1>Applications & Dashboard</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Applications & Dashboard</h2>
          <p>
          Our applications and dashboard design services focus on creating intuitive and visually appealing
          interfaces for software applications and data visualization tools. Whether you need a mobile app,
          web application, or data dashboard, our design team collaborates closely with you to understand
          user needs, streamline workflows, and deliver user-centric designs that enhance productivity,
          usability, and data-driven decision-making.
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
            title="Requirements Gathering"
            description="Understanding application objectives, user personas, and functional requirements." 
          />
          <OurProcess
            title="Wireframing and Prototyping"
            description="Creating wireframes and interactive
            prototypes to visualize application workflows and user interactions." 
          />
          <OurProcess
            title="Visual Design"
            description="Designing
            interface elements, including layouts, navigation menus, charts, and graphs, for intuitive user experiences." 
          />
          <OurProcess
            title="Usability Testing"
            description="Conducting usability tests and gathering feedback to refine designs and optimize user workflows." 
          />
          <OurProcess
            title="Development Collaboration"
            description=" Collaborating with development teams to ensure seamless integration of designs into applications and dashboards." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is application and dashboard design important for software usability?"
          description="Application and
          dashboard design enhances user productivity, simplifies complex data interactions, and improves
          user engagement through intuitive interfaces and visual storytelling." 
        />
        <OurProcess
          title="Do you design applications for specific platforms (e.g., iOS, Android)? "
          description="Yes, we specialize in
          designing applications for various platforms, including iOS, Android, and web-based
          environments, ensuring compatibility and optimal user experiences across devices." 
        />
        <OurProcess
          title="Can you design data visualization dashboards for business intelligence?"
          description="Yes, we design data
          dashboards that visualize complex data sets, KPIs, and metrics, enabling users to make informed decisions and derive actionable insights from data analysis." 
        />
        <OurProcess
          title="How do you ensure applications and dashboards meet user expectations? "
          description="We conduct user
          testing, gather feedback, and iterate designs based on usability testing results and user
          preferences to ensure applications and dashboards meet functional requirements and enhance user satisfaction." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
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
          <ServiceCard 
            img_url={serImg} 
            title='Mobile Experience' 
            description='Create engaging and responsive mobile experiences for users on the go.' 
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

export default AandD;

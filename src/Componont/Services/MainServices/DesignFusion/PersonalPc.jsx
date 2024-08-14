import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./PersonalPc.css"; // Import your CSS file
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

const PersonalPc = () => {
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
          <h1>Personal Portfolio Creation</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Personal Portfolio Creation</h2>
          <p>
          We specialize in creating personalized portfolios that showcase your skills, accomplishments,
          and professional journey in a compelling manner. Whether you’re a freelancer, artist, or
          professional seeking new opportunities, our portfolio creation services are tailored to highlight
          your strengths and leave a lasting impression on potential clients or employers. 
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
            title="Initial Consultation"
            description="Understanding your career goals and target audience for the portfolio." 
          />
          <OurProcess
            title="Content Gathering"
            description="Collecting information, work samples, and achievements to include in the portfolio." 
          />
          <OurProcess
            title="Design Development"
            description="Creating a layout and design that reflects your personal brand and showcases your work effectively." 
          />
          <OurProcess
            title="Review and Feedback"
            description="Sharing the initial draft for your feedback and making necessary revisions." 
          />
          <OurProcess
            title="Finalization"
            description="Delivering the completed portfolio in digital and/or print format as per your requirements." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why do I need a personal portfolio?"
          description=" A personal portfolio serves as a visual representation of
          your skills, experience, and accomplishments, helping you stand out in job applications or client pitches." 
        />
        <OurProcess
          title="What should I include in my personal portfolio?"
          description="Include your best work samples,
          testimonials, certifications, and any other relevant information that demonstrates your expertise and capabilities." 
        />
        <OurProcess
          title="Can you create an online version of the portfolio?"
          description="Yes, we can design and develop an online
          portfolio that showcases your work in a digital format, accessible to potential clients or employers." 
        />
        <OurProcess
          title="How do you ensure my portfolio reflects my personal brand?"
          description="We tailor the design, layout,
          and content of the portfolio to align with your personal brand identity, ensuring consistency and authenticity." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Company Portfolio Making' 
            description='Present your companys strengths and successes through a compelling portfolio.' 
            folderPath="Services/MainServices/DesignFusion" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Personalized Business Card Making' 
            description='Create customized business cards that leave a lasting impression.' 
            folderPath="Services/MainServices/DesignFusion" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Social Media Creatives & Other Advertising Materials' 
            description='Enhance your social media presence with engaging creatives and promotional materials.' 
            folderPath="Services/MainServices/DesignFusion" 
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

export default PersonalPc;

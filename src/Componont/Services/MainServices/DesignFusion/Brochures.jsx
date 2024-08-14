import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./Brochures.css"; // Import your CSS file
import NewButton from  "../../MainServices/Components/Button/NewButton";// Updated the path to correct level
import OurProcess from "../../MainServices/Components/ProcessSection/ProcessSection"; // Updated the path to correct level
import processVideo from "../../../../assets/Services/Companyprocess.mp4"; // Import the process video
import ServiceCard from "../../MainServices/Components/ServiceCard/ServiceCard"; // Updated the path to correct level
import bgsubservices from "../../../../assets/Services/wave 18.webp"; // Import background sub-services image
import serImg from "../../../../assets/Services/image.webp"; // Import service image
import OurImpact from './../Components/OurImpact/OurImpact';
import Form from './../Components/Form/Form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from './../../../Navbar/Lightbox';

const Brochures = () => {
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
          <h1>Brochures</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Brochures</h2>
          <p>
          Our brochure design services are tailored to create informative and visually appealing marketing
          materials that effectively communicate your brand’s offerings and messages. Whether you need
          product catalogs, service brochures, or company profiles, our creative team develops compelling
          layouts and designs that capture attention and convey information clearly and persuasively. 

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
            title="Content Gathering"
            description="Collecting information, visuals, and key messages to be included in the brochure." 
          />
          <OurProcess
            title="Design Conceptualization"
            description="Creating initial design concepts and layouts that align with your brand’s identity and marketing goals." 
          />
          <OurProcess
            title="Content Integration"
            description="Incorporating content, images, and graphics into the brochure design while maintaining visual appeal and readability." 
          />
          <OurProcess
            title="Review and Revision"
            description="Sharing drafts for your feedback and making revisions based on your input and preferences." 
          />
          <OurProcess
            title="Finalization"
            description="Producing high-quality print-ready or digital versions of the brochure for distribution and marketing purposes." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why are brochures effective marketing tools?"
          description="Brochures provide a tangible and
          comprehensive way to showcase your products, services, and brand benefits to potential customers or clients." 
        />
        <OurProcess
          title="What should be included in a brochure?"
          description="Include a compelling headline, key benefits,
          product/service details, visuals, contact information, and a call to action to encourage further engagement." 
        />
        <OurProcess
          title="Can you design brochures in different formats and sizes?"
          description="Yes, we offer customization
          options for brochure formats, sizes, and finishes to suit your specific marketing needs and preferences." 
        />
        <OurProcess
          title="How do you ensure the brochure design reflects my brand’s identity?"
          description="We tailor the design,
          color scheme, typography, and overall layout of the brochure to align with your brand guidelines and messaging, ensuring consistency and brand integrity." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Personalized Advertising Poster Creation' 
            description='Design eye-catching posters tailored to your specific advertising needs.' 
            folderPath="Services/MainServices/DesignFusion"  
          />
          <ServiceCard 
            img_url={serImg} 
            title='Personal Portfolio Creation' 
            description='Showcase your skills and achievements with a professionally designed personal portfolio.' 
            folderPath="Services/MainServices/DesignFusion"  
          />
          <ServiceCard 
            img_url={serImg} 
            title='Company Portfolio Making' 
            description='Present your companys strengths and successes through a compelling portfolio.' 
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

export default Brochures;

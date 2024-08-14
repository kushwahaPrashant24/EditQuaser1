import React, { useRef, useEffect, useState } from 'react';//Usestate
import './GraphicDesign.css'; // Import your CSS file
import NewButton from "../MainServices/Components/Button/NewButton";
import OurProcess from './Components/ProcessSection/ProcessSection'; // Updated to OurProcess
import processVideo from "../../../assets/Services/Companyprocess.mp4";
import ServiceCard from './Components/ServiceCard/ServiceCard';
import bgsubservices from '../../../assets/Services/wave 16.webp';
import serImg from '../../../assets/Services/image.webp';
import OurImpact from './Components/OurImpact/OurImpact';
import Form from './Components/Form/Form';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from '../../Navbar/Lightbox';


const GraphicDesign = () => {
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
          <h1>Graphic Design</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Graphic Design: Enhancing Your Brand’s Visual Communication</h2>
          <p>
          We create visually compelling designs that elevate your brand’s presence. Our graphic design
          services cover a wide range of needs, from marketing materials to digital assets, ensuring every
          design element aligns with your brand identity and engages your audience. 
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
            title="Briefing"
            description="Understanding your design needs and project goals." 
          />
          <OurProcess
            title="Concept Development"
            description="Creating initial design concepts based on your brief." 
          />
          <OurProcess
            title="Design Iteration"
            description="Refining the designs through feedback and revisions." 
          />
          <OurProcess
            title="Final Design"
            description="Finalizing the designs and ensuring they meet your expectations." 
          />
          <OurProcess
            title="Delivery"
            description="Providing the final designs in various formats suitable for print and digital use." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is graphic design important for my brand?"
          description="Graphic design plays a crucial role in visually communicating your brand’s message, creating
          professional marketing materials, and enhancing brand recognition." 
        />
        <OurProcess
          title="How do you ensure the designs align with my brand identity?"
          description="We take the time to understand your brand’s identity, values, and goals, ensuring that all design
          elements are cohesive and reflective of your brand." 
        />
        <OurProcess
          title="Can I request multiple design revisions?"
          description="Yes, we offer multiple revisions to ensure the final designs meet your expectations and requirements." 
        />
        <OurProcess
          title="What types of graphic design services do you offer?"
          description="We offer a wide range of services, including logo design, marketing materials, digital assets,
          packaging design, and more." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Brand Identity' 
            description='Create a cohesive and recognizable brand image that resonates with your target audience.' 
            folderPath="Services/MainServices" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Brand Consulting' 
            description='Leverage expert insights to refine and elevate your brand strategy for maximum impact' 
            folderPath="Services/MainServices" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Logo Design' 
            description='Craft unique and memorable logos that embody your brands essence and values.' 
            folderPath="Services/MainServices" 
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

export default GraphicDesign;

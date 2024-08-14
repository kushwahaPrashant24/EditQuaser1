import React, { useRef, useEffect, useState } from 'react';//Usestate
import './BrandIdentity.css'; // Import your CSS file
import NewButton from "../MainServices/Components/Button/NewButton";
import OurProcess from './Components/ProcessSection/ProcessSection'; // Updated to OurProcess
import processVideo from "../../../assets/Services/Companyprocess.mp4";
import ServiceCard from './Components/ServiceCard/ServiceCard';
import bgsubservices from '../../../assets/Services/wave 6.webp';
import serImg from '../../../assets/Services/image.webp';
import OurImpact from './Components/OurImpact/OurImpact';
import Form from './Components/Form/Form';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from '../../Navbar/Lightbox';



const BrandIdentity = () => {
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
          <h1>Brand Identity</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Brand Identity:Tailored for Distinction and Impact</h2>
          <p>
            We take pride in developing brand identities that resonate with your target audience and reflect your core values. Our expert team crafts unique brand identities that set you apart in the marketplace, ensuring your brand stands out and makes a lasting impression.
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
            description="We start by understanding your business, its values, and your vision for the brand." 
          />
          <OurProcess
            title="Market Analysis"
            description="Conducting thorough market research to understand industry trends and competitive landscapes." 
          />
          <OurProcess
            title="Identity Creation"
            description="Designing brand elements such as logos, color schemes, and typography that align with your brand’s values and appeal to your audience." 
          />
          <OurProcess
            title="Feedback Loop"
            description="We work closely with you to refine the brand identity based on feedback and ensure it meets your expectations." 
          />
          <OurProcess
            title="Finalization"
            description="Delivering a comprehensive brand identity package that includes all design assets and guidelines for consistent use." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="What is brand identity, and why is it important? "
          description="Brand identity is the visual and verbal expression of a brand, including its logo, colors, typography, and tone. It’s important because it distinguishes your brand in the marketplace and creates a memorable impression on your audience." 
        />
        <OurProcess
          title="How long does it take to develop a brand identity? "
          description="The timeline varies depending on the scope of work and complexity of the project. Typically, it can take anywhere from a few weeks to a few months." 
        />
        <OurProcess
          title="Can existing brands benefit from a brand identity refresh?"
          description="Yes, even established brands can benefit from a refreshed brand identity to stay relevant and appeal to evolving market trends and consumer preferences." 
        />
        <OurProcess
          title="What elements are included in a brand identity package? "
          description="A typical brand identity package includes a logo, color palette, typography, imagery style, and brand guidelines to ensure consistent application across all platforms." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Brand Consulting' 
            description='Leverage expert insights to refine and elevate your brand strategy for maximum impact.' 
            folderPath="Services/MainServices" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Logo Design' 
            description='Craft unique and memorable logos that embody your brands essence and values.' 
            folderPath="Services/MainServices" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='2D/3D Visualization' 
            description='Transform ideas into stunning 2D and 3D visuals to bring your concepts to life.' 
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

export default BrandIdentity;

import React, { useRef, useEffect, useState } from 'react';//Usestate
import './LogoDesign.css'; // Import your CSS file
import NewButton from "../MainServices/Components/Button/NewButton";
import OurProcess from './Components/ProcessSection/ProcessSection'; // Updated to OurProcess
import processVideo from "../../../assets/Services/Companyprocess.mp4";
import ServiceCard from './Components/ServiceCard/ServiceCard';
import bgsubservices from '../../../assets/Services/wave 10.webp';
import serImg from '../../../assets/Services/image.webp';
import OurImpact from './Components/OurImpact/OurImpact';
import Form from './Components/Form/Form';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from '../../Navbar/Lightbox';


const LogoDesign = () => {
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
          <h1>Logo Design</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Logo Design:Crafted for Impact and Memorability</h2>
          <p>
          We specialize in designing logos that capture the essence of your brand and make a lasting
          impression. Our team works closely with you to create logos that are not only visually appealing
          but also reflective of your brand’s identity and values.
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
            title="Concept Development"
            description="Understanding your brand’s essence and creating initial logo concepts." 
          />
          <OurProcess
            title="Design Iteration"
            description="Refining the logo designs based on your feedback and preferences." 
          />
          <OurProcess
            title="Finalization"
            description="Selecting the final logo design and making any necessary adjustments." 
          />
          <OurProcess
            title="Delivery"
            description="Providing the logo in various formats for use across different platforms and media." 
          />
          <OurProcess
            title="Guidelines"
            description="Creating a logo usage guide to ensure consistency in application." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is a logo important for my brand?"
          description="A logo is a visual representation of your brand and plays a critical role in brand recognition and
          customer perception. It helps create a memorable and professional image." 
        />
        <OurProcess
          title="How long does the logo design process take?"
          description="The timeline can vary, but typically it takes a few weeks from the initial consultation to the final
          delivery of the logo." 
        />
        <OurProcess
          title="Can I request revisions during the logo design process?"
          description="Yes, we encourage feedback and will work with you to make necessary revisions until you are
          satisfied with the final design." 
        />
        <OurProcess
          title="What formats will I receive my logo in?"
          description="You will receive your logo in various formats, including PNG, JPEG, SVG, and EPS, to ensure it
          can be used across different platforms and media." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='2D/3D Visualization' 
            description='Transform ideas into stunning 2D and 3D visuals to bring your concepts to life.' 
            folderPath="Services/MainServices" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Graphic Design' 
            description='Convey complex ideas, data, or instructions in a visually appealing and easily understandable manner.' 
            folderPath="Services/MainServices" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Brand Identity' 
            description='Create a cohesive and recognizable brand image that resonates with your target audience.' 
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

export default LogoDesign;

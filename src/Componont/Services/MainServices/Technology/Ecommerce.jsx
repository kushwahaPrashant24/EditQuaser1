import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./Ecommerce.css"; // Import your CSS file
import NewButton from  "../../MainServices/Components/Button/NewButton";// Updated the path to correct level
import OurProcess from "../../MainServices/Components/ProcessSection/ProcessSection"; // Updated the path to correct level
import processVideo from "../../../../assets/Services/Companyprocess.mp4"; // Import the process video
import ServiceCard from "../../MainServices/Components/ServiceCard/ServiceCard"; // Updated the path to correct level
import bgsubservices from "../../../../assets/Services/wave 12.webp"; // Import background sub-services image
import serImg from "../../../../assets/Services/image.webp"; // Import service image
import OurImpact from './../Components/OurImpact/OurImpact';
import Form from './../Components/Form/Form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from './../../../Navbar/Lightbox';

const Ecommerce = () => {
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
          <h1>E-commerce</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>E-commerce</h2>
          <p>
          Our e-commerce solutions are designed to empower businesses to sell products and services
          online effectively, drive sales growth, and enhance customer satisfaction. From custom ecommerce website development to optimization and marketing, our comprehensive services
          cater to diverse industry needs and consumer preferences, ensuring seamless transactions and a
          superior shopping experience.
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
            title="E-commerce Strategy"
            description="Defining business goals, target audience, and competitive positioning in the online marketplace." 
          />
          <OurProcess
            title="Platform Selection"
            description="Recommending and implementing ecommerce platforms such as Shopify, WooCommerce, Magento, or custom solutions based on business requirements." 
          />
          <OurProcess
            title="Design and Development"
            description="Designing user-friendly interfaces, product
            catalogs, secure payment gateways, and scalable backend functionalities for optimal e-commerce
            performance." 
          />
          <OurProcess
            title="Integration and Testing"
            description=" Integrating inventory management systems, CRM
            platforms, and third-party APIs, and conducting rigorous testing for functionality, usability, and security." 
          />
          <OurProcess
            title="Optimization and Marketing"
            description="Optimizing product listings, implementing SEO
            strategies, launching digital marketing campaigns, and analyzing performance metrics to drive traffic, conversions, and revenue." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is e-commerce important for businesses?"
          description="E-commerce expands market reach, enables
          global sales, provides 24/7 accessibility, and allows businesses to leverage digital marketing
          strategies for customer acquisition and retention." 
        />
        <OurProcess
          title="Which e-commerce platform is best for my business?"
          description="The best e-commerce platform depends
          on your business size, industry, scalability needs, budget, and specific functionalities required.
          We provide guidance and recommend platforms that align with your objectives and growth strategy." 
        />
        <OurProcess
          title="Can you migrate existing websites to e-commerce platforms?"
          description="Yes, we offer website
          migration services to transfer existing websites or platforms to e-commerce solutions, ensuring
          seamless transition, data integrity, and minimal disruption to operations." 
        />
        <OurProcess
          title="Do you provide ongoing support and maintenance for e-commerce websites? "
          description="Yes, we
          provide ongoing support, maintenance, and performance monitoring services to optimize ecommerce websites, resolve issues promptly, and ensure a smooth shopping experience for customers." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
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
          <ServiceCard 
            img_url={serImg} 
            title='Data & Analytics' 
            description='Harness the power of data to make informed business decisions and drive growth.' 
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

export default Ecommerce;

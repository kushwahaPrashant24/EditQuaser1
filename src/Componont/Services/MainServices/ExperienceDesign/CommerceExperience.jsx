import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./CommerceExperience.css"; // Import your CSS file
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

const CommerceExperience = () => {
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
          <h1>Commerce Experience</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Commerce Experience</h2>
          <p>
          Our commerce experience design services focus on optimizing user interfaces and experiences
          for e-commerce platforms, ensuring seamless navigation, intuitive product discovery, and
          streamlined checkout processes. Whether you're launching an online store or enhancing an existing platform, our team leverages best practices in UX/UI design to maximize conversions and drive revenue growth.
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
            description="Understanding business objectives, target audience, and competitive landscape." 
          />
          <OurProcess
            title="UX/UI Design"
            description="Designing intuitive navigation, product categories, search functionalities, and conversion-focused interfaces." 
          />
          <OurProcess
            title="Payment Integration"
            description="Integrating secure payment gateways and optimizing checkout processes for frictionless transactions." 
          />
          <OurProcess
            title="Mobile Optimization"
            description="Ensuring responsive design and mobile-friendly interfaces for optimal shopping experiences on smartphones and tablets." 
          />
          <OurProcess
            title="Analytics and Optimization"
            description="Monitoring e-commerce performance metrics, analyzing user behavior, and iterating designs to enhance conversion rates and ROI." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is commerce experience design critical for online stores?"
          description="Commerce experience design
          optimizes user journeys, enhances usability, and simplifies the shopping process, leading to increased conversions and customer satisfaction." 
        />
        <OurProcess
          title="Can you integrate third-party e-commerce platforms into websites?"
          description="Yes, we specialize in
          integrating popular e-commerce platforms such as Shopify, WooCommerce, Magento, and others into websites, customizing functionalities to meet specific business requirements." 
        />
        <OurProcess
          title="Do you offer post-launch support and optimization for e-commerce sites?"
          description="Yes, we provide
          ongoing support, maintenance, and optimization services to ensure e-commerce platforms perform efficiently, remain secure, and deliver a seamless shopping experience." 
        />
        <OurProcess
          title="How do you optimize product pages for better conversions?"
          description="We optimize product pages with
          high-quality visuals, detailed product descriptions, customer reviews, related product
          recommendations, and clear calls-to-action to encourage purchases and enhance user experience." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
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
          <ServiceCard 
            img_url={serImg} 
            title='UI/UX Design' 
            description='Enhance user satisfaction with intuitive and aesthetically pleasing interface designs.' 
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

export default CommerceExperience;

import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./DataAndAnalytic.css"; // Import your CSS file
import NewButton from  "../../MainServices/Components/Button/NewButton";// Updated the path to correct level
import OurProcess from "../../MainServices/Components/ProcessSection/ProcessSection"; // Updated the path to correct level
import processVideo from "../../../../assets/Services/Companyprocess.mp4"; // Import the process video
import ServiceCard from "../../MainServices/Components/ServiceCard/ServiceCard"; // Updated the path to correct level
import bgsubservices from "../../../../assets/Services/wave 6.webp"; // Import background sub-services image
import serImg from "../../../../assets/Services/image.webp"; // Import service image
import OurImpact from './../Components/OurImpact/OurImpact';
import Form from './../Components/Form/Form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from './../../../Navbar/Lightbox';

const DataAndAnalytic = () => {
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
          <h1>Data & Analytics</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Data & Analytics</h2>
          <p>
          At editquasar, our Data & Analytics services focus on harnessing data-driven insights to drive
          strategic decision-making and business growth. Whether you're looking to analyze customer
          behavior, optimize operations, or enhance marketing effectiveness, our team leverages advanced analytics and visualization tools to uncover actionable insights and drive measurable results. 
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
            title="Data Collection"
            description="Gathering and consolidating data from various sources, including internal systems, third-party APIs, and digital platforms." 
          />
          <OurProcess
            title="Data Cleansing and Preparation"
            description="Cleaning, transforming, and organizing data to ensure accuracy and consistency for analysis." 
          />
          <OurProcess
            title="Data Analysis"
            description="Applying statistical methods, predictive modeling, and machine learning algorithms to
            extract meaningful patterns and insights from data." 
          />
          <OurProcess
            title="Data Visualization"
            description="Creating interactive
            dashboards and visual representations of data insights to facilitate decision-making and stakeholder communication." 
          />
          <OurProcess
            title="Insights and Recommendations"
            description="Providing actionable recommendations based on data analysis to optimize strategies, improve performance, and achieve business objectives." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why are data and analytics important for businesses?"
          description="Data and analytics enable businesses to
          make informed decisions, identify trends, predict outcomes, and optimize processes for improved efficiency and competitiveness." 
        />
        <OurProcess
          title="What types of data do you analyze?"
          description="We analyze various data types, including customer data,
          sales data, marketing performance metrics, operational data, and market trends, tailored to meet specific business objectives and requirements." 
        />
        <OurProcess
          title="Do you offer customized analytics solutions for different industries?"
          description="Yes, we specialize in
          developing customized analytics solutions tailored to specific industry needs, regulatory requirements, and business goals, ensuring relevance and effectiveness." 
        />
        <OurProcess
          title="How do you ensure data privacy and security during analytics processes?"
          description="We adhere to
          stringent data privacy regulations and implement robust security measures to protect sensitive information, ensuring compliance and safeguarding data integrity throughout the analytics lifecycle." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Web Development' 
            description='Build robust and scalable websites tailored to your specific needs and goals.' 
            folderPath="Services/MainServices/Technology" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Mobile App Development' 
            description='Create innovative mobile applications that provide a seamless user experience.' 
            folderPath="Services/MainServices/Technology" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='E-commerce' 
            description='Develop comprehensive e-commerce solutions to boost your online sales and customer engagement.' 
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

export default DataAndAnalytic;

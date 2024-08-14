import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./Analytics.css"; // Import your CSS file
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

const Analytics = () => {
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
          <h1>Analytics</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Analytics</h2>
          <p>
          Our analytics services provide actionable insights and data-driven
          strategies to optimize marketing campaigns, improve performance, and drive business growth. From website analytics to campaign tracking and customer behavior analysis, we empower businesses to make informed decisions and maximize ROI through comprehensive data analysis and reporting.
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
            description="Gathering and consolidating data from various
            sources, including website analytics, CRM systems, and marketing platforms." 
          />
          <OurProcess
            title="Performance Measurement"
            description="Analyzing key performance
            indicators (KPIs) such as traffic sources, conversion rates, ROI, and customer acquisition costs." 
          />
          <OurProcess
            title="Data Visualization"
            description="Creating visual dashboards and reports to present insights clearly and facilitate decision-making." 
          />
          <OurProcess
            title="Insights and Recommendations"
            description="Providing actionable insights
            and recommendations based on data analysis to optimize marketing strategies and campaigns." 
          />
          <OurProcess
            title="Continuous Improvement"
            description="Monitoring performance metrics,
            testing hypotheses, and iterating strategies to achieve continuous improvement and maximize marketing effectiveness." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why are analytics important for marketing?"
          description="Analytics help businesses understand customer behavior, track
          campaign performance, measure ROI, and optimize marketing efforts to achieve business objectives and growth." 
        />
        <OurProcess
          title="What types of data do you analyze for marketing analytics?"
          description="We analyze various data sets, including website traffic, engagement
          metrics, conversion rates, customer demographics, and campaign
          performance data, to gain comprehensive insights into marketing effectiveness and audience behavior." 
        />
        <OurProcess
          title="How do you ensure data privacy and security?"
          description="We adhere to strict data privacy regulations and implement robust
          security measures to protect sensitive information and ensure compliance with data protection laws." 
        />
        <OurProcess
          title="Can you integrate analytics with other marketing tools and platforms?"
          description="Yes, we integrate analytics with CRM systems, marketing automation
          platforms, and other digital tools to streamline data collection, analysis, and reporting, providing a unified view of marketing performance and customer insights." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Search Engine Optimization (SEO)' 
            description='Improve your website’s visibility and ranking on search engines to attract more organic traffic.' 
            folderPath="Services/MainServices/DigitalMarketing" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Social Media Management' 
            description='Engage your audience and build a strong online presence with strategic social media management.' 
            folderPath="Services/MainServices/DigitalMarketing" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Performance Marketing' 
            description='Drive results with data-driven performance marketing strategies tailored to your business goals.' 
            folderPath="Services/MainServices/DigitalMarketing" 
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

export default Analytics;

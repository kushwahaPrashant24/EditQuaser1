import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./SEO.css"; // Import your CSS file
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

const SEO = () => {
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
          <h1>Search Engine Optimization (SEO)</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Search Engine Optimization (SEO)</h2>
          <p>
          At editquasar, we specialize in Search Engine Optimization (SEO)
          services aimed at boosting your website's visibility and organic traffic. Our dedicated team conducts in-depth keyword research, on-page optimization, and off-page strategies to improve your search engine
          rankings. Whether you're looking to increase website traffic, generate leads, or enhance online visibility, our tailored SEO solutions are designed to deliver measurable results and long-term success. 
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
            title="SEO Audit"
            description="Conducting a comprehensive audit of your website to identify strengths, weaknesses, and opportunities for improvement." 
          />
          <OurProcess
            title="Keyword Research"
            description="Analyzing relevant keywords and search trends to optimize content and attract targeted traffic." 
          />
          <OurProcess
            title="On-Page Optimization"
            description="Optimizing website elements such as meta tags, headers, and content for improved search engine rankings." 
          />
          <OurProcess
            title="Off-Page Strategies"
            description="Building quality backlinks and enhancing online reputation through strategic outreach and link-building campaigns." 
          />
          <OurProcess
            title="Performance Tracking"
            description="Monitoring SEO performance metrics, including traffic, rankings, and conversions, to measure success and adjust strategies as needed." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="What is SEO, and why is it important for my website?"
          description="SEO refers to the process of optimizing your website to rank higher in
          search engine results pages (SERPs), thereby increasing organic traffic
          and visibility. It is crucial for attracting qualified leads and improving online presence." 
        />
        <OurProcess
          title="How long does it take to see results from SEO efforts?"
          description="The timeline for SEO results varies based on factors such as
          competition, website authority, and the effectiveness of implemented strategies. Generally, noticeable improvements can be observed within a few months, with ongoing optimizations yielding long-term benefits." 
        />
        <OurProcess
          title="Can SEO benefit my business even if it's local?"
          description="Yes, local SEO strategies focus on optimizing your website for locationspecific searches, making it easier for nearby customers to find and engage with your business." 
        />
        <OurProcess
          title="Do you provide SEO reporting and analytics?"
          description="Yes, we offer regular reporting and analytics to track key SEO metrics
          and provide insights into campaign performance, allowing for informed decision-making and continuous improvement." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
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
          <ServiceCard 
            img_url={serImg} 
            title='Content Marketing' 
            description='Create and distribute valuable content to attract and retain a clearly defined audience.' 
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

export default SEO;

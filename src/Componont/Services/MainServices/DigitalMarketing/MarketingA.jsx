import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./MarketingA.css"; // Import your CSS file
import NewButton from  "../../MainServices/Components/Button/NewButton";// Updated the path to correct level
import OurProcess from "../../MainServices/Components/ProcessSection/ProcessSection"; // Updated the path to correct level
import processVideo from "../../../../assets/Services/Companyprocess.mp4"; // Import the process video
import ServiceCard from "../../MainServices/Components/ServiceCard/ServiceCard"; // Updated the path to correct level
import bgsubservices from "../../../../assets/Services/wave 16.webp"; // Import background sub-services image
import serImg from "../../../../assets/Services/image.webp"; // Import service image
import OurImpact from './../Components/OurImpact/OurImpact';
import Form from './../Components/Form/Form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from './../../../Navbar/Lightbox';

const MarketingA = () => {
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
          <h1>Marketing Automation </h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Marketing Automation </h2>
          <p>
          Our marketing automation services streamline and optimize your
          marketing efforts by automating repetitive tasks, nurturing leads, and
          delivering personalized experiences at scale. From email marketing automation to lead scoring and customer journey mapping, we empower businesses to improve efficiency, increase productivity, and enhance customer engagement throughout the sales funnel. 

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
            title="Automation Strategy"
            description="Developing a tailored marketing
            automation strategy based on your business goals, target audience, and customer journey." 
          />
          <OurProcess
            title="Platform Integration"
            description="Implementing marketing automation
            software and integrating it with your existing CRM and other digital tools for seamless operation." 
          />
          <OurProcess
            title="Workflow Design"
            description="Creating automated workflows for lead nurturing, email campaigns, customer segmentation, and personalized content delivery." 
          />
          <OurProcess
            title="Testing and Optimization"
            description="Conducting A/B testing, analyzing performance data, and optimizing automation workflows to improve conversion rates and ROI." 
          />
          <OurProcess
            title="Performance Reporting"
            description="Providing actionable insights and
            analytics on automation performance, campaign effectiveness, and customer behavior to drive informed decision-making." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="What is marketing automation, and how can it benefit my business?"
          description="Marketing automation involves using software and technology to
          automate repetitive marketing tasks, streamline processes, and deliver personalized experiences to prospects and customers. It helps businesses improve efficiency, nurture leads, and drive revenue growth." 
        />
        <OurProcess
          title="Which marketing tasks can be automated?"
          description="Marketing automation can automate tasks such as email marketing
          campaigns, lead scoring, customer segmentation, social media scheduling, and personalized content delivery based on user behavior and preferences." 
        />
        <OurProcess
          title="Can marketing automation help improve lead generation and nurturing?"
          description="Yes, marketing automation allows businesses to nurture leads through
          automated workflows, personalized communication, and timely followups, increasing the likelihood of converting leads into customers." 
        />
        <OurProcess
          title="Do you provide training on using marketing automation platforms?"
          description="Yes, we offer training and support to help your team effectively use
          marketing automation platforms, optimize workflows, and leverage automation features to achieve marketing objectives and business goals." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Analytics' 
            description='Gain actionable insights and measure the success of your marketing campaigns with advanced analytics.' 
            folderPath="Services/MainServices/DigitalMarketing" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Search Engine Optimization (SEO)' 
            description='Improve your website visibility and ranking on search engines to attract more organic traffic.' 
            folderPath="Services/MainServices/DigitalMarketing" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Social Media Management' 
            description='Engage your audience and build a strong online presence with strategic social media management.' 
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

export default MarketingA;

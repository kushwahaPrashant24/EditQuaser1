import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./PerformanceM.css"; // Import your CSS file
import NewButton from  "../../MainServices/Components/Button/NewButton";// Updated the path to correct level
import OurProcess from "../../MainServices/Components/ProcessSection/ProcessSection"; // Updated the path to correct level
import processVideo from "../../../../assets/Services/Companyprocess.mp4"; // Import the process video
import ServiceCard from "../../MainServices/Components/ServiceCard/ServiceCard"; // Updated the path to correct level
import bgsubservices from "../../../../assets/Services/wave 10.webp"; // Import background sub-services image
import serImg from "../../../../assets/Services/image.webp"; // Import service image
import OurImpact from './../Components/OurImpact/OurImpact';
import Form from './../Components/Form/Form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from './../../../Navbar/Lightbox';

const PerformanceM = () => {
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
          <h1>Performance Marketing</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Performance Marketing</h2>
          <p>
          Our performance marketing services focus on driving measurable results and maximizing ROI through targeted digital advertising campaigns. Whether you're looking to increase sales, generate leads, or boost brand awareness, our data-driven approach ensures efficient allocation of resources and optimization of campaign performance across channels. 
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
            title="Campaign Strategy"
            description="Developing a customized performance marketing strategy based on your business goals and target audience." 
          />
          <OurProcess
            title="Audience Targeting"
            description="Identifying and targeting specific audience segments through demographic, behavioral, and interest-based criteria." 
          />
          <OurProcess
            title="Ad Creation"
            description="Designing compelling ad creatives and messages that resonate with your target audience and align with campaign objectives." 
          />
          <OurProcess
            title="Campaign Optimization"
            description="Monitoring campaign performance in real-time, adjusting bids, targeting parameters, and creative elements to maximize results." 
          />
          <OurProcess
            title="Performance Analysis"
            description="Analyzing campaign data and metrics to
            measure ROI, identify opportunities for improvement, and refine future strategies." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="What is performance marketing, and how can it benefit my business?"
          description="Performance marketing focuses on achieving measurable results, such
          as sales or leads, through digital advertising campaigns. It allows businesses to optimize spending and maximize ROI based on performance metrics." 
        />
        <OurProcess
          title="Which digital channels do you use for performance marketing?"
          description="We leverage various digital channels, including search engines (SEM),
          social media platforms, display networks, and affiliate marketing, to reach and engage target audiences effectively." 
        />
        <OurProcess
          title="Do you offer A/B testing for performance marketing campaigns?"
          description="Yes, we conduct A/B testing to compare different ad creatives,
          messaging, and targeting strategies to determine which combinations yield the best results and optimize campaign performance accordingly." 
        />
        <OurProcess
          title="Can performance marketing campaigns be scaled based on budget and objectives?"
          description="Yes, performance marketing campaigns are scalable based on your
          budget, business objectives, and desired outcomes. We adjust strategies and allocate resources to achieve optimal campaign performance and ROI." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Content Marketing' 
            description='Create and distribute valuable content to attract and retain a clearly defined audience.' 
            folderPath="Services/MainServices/DigitalMarketing" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Marketing Automation' 
            description='Streamline your marketing efforts with automation tools for better efficiency and effectiveness.' 
            folderPath="Services/MainServices/DigitalMarketing" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Analytics' 
            description='Gain actionable insights and measure the success of your marketing campaigns with advanced analytics.' 
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

export default PerformanceM;

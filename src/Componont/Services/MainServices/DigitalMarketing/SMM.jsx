import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./SMM.css"; // Import your CSS file
import NewButton from  "../../MainServices/Components/Button/NewButton";// Updated the path to correct level
import OurProcess from "../../MainServices/Components/ProcessSection/ProcessSection"; // Updated the path to correct level
import processVideo from "../../../../assets/Services/Companyprocess.mp4"; // Import the process video
import ServiceCard from "../../MainServices/Components/ServiceCard/ServiceCard"; // Updated the path to correct level
import bgsubservices from "../../../../assets/Services/wave 7.webp"; // Import background sub-services image
import serImg from "../../../../assets/Services/image.webp"; // Import service image
import OurImpact from './../Components/OurImpact/OurImpact';
import Form from './../Components/Form/Form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from './../../../Navbar/Lightbox';

const SMM = () => {
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
          <h1>Social Media Management</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Social Media Management</h2>
          <p>
          Our social media management services are designed to enhance your brand's online presence, engage your audience, and drive meaningful
          interactions across various social platforms. From content creation and scheduling to community management and performance analysis, we
          ensure your social media channels are effectively utilized to achieve your marketing objectives and foster customer loyalty.
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
            title="Strategy Development"
            description="Creating a tailored social media strategy aligned with your brand goals and target audience preferences." 
          />
          <OurProcess
            title=" Content Creation"
            description="Developing engaging and relevant content,
            including posts, images, videos, and stories, to resonate with your audience." 
          />
          <OurProcess
            title="Community Engagement"
            description="Monitoring social media channels,
            responding to comments, messages, and interactions to build relationships and foster engagement." 
          />
          <OurProcess
            title="Performance Monitoring"
            description="Analyzing social media metrics such as reach, engagement, and conversions to optimize content and strategies." 
          />
          <OurProcess
            title="Campaign Management"
            description="Planning and executing paid social media campaigns to amplify reach and achieve specific marketing objectives." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is social media management important for businesses?"
          description="Social media management helps businesses build brand awareness,
          engage with customers, drive website traffic, and increase sales through strategic content and interaction." 
        />
        <OurProcess
          title="Which social media platforms do you manage?"
          description="We manage all major social media platforms, including Facebook,
          Instagram, Twitter, LinkedIn, Pinterest, and more, tailored to each platform's unique audience and best practices." 
        />
        <OurProcess
          title="Can you create and publish content on behalf of my business?"
          description="Yes, we provide end-to-end content creation services, from ideation
          and design to scheduling and publishing, ensuring consistent and compelling messaging across platforms." 
        />
        <OurProcess
          title="How do you measure the success of social media campaigns?"
          description="We track key performance indicators (KPIs) such as engagement rates,
          click-through rates, conversions, and ROI to evaluate campaign effectiveness and optimize strategies for maximum impact." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
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
          <ServiceCard 
            img_url={serImg} 
            title='Marketing Automation ' 
            description='Streamline your marketing efforts with automation tools for better efficiency and effectiveness.' 
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

export default SMM;

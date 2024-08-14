import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./CompanyPm.css"; // Import your CSS file
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


const CompanyPm = () => {
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
          <h1>Company Portfolio Making</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Company Portfolio Making</h2>
          <p>
          Our company portfolio creation services are designed to showcase your organization’s
          achievements, capabilities, and portfolio of work to prospective clients or stakeholders. Whether
          you’re looking to attract new business opportunities, investors, or partners, our comprehensive
          portfolio-making process highlights your strengths and sets you apart in the competitive marketplace. 
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
            description="Understanding your company’s history, mission, and key achievements." 
          />
          <OurProcess
            title="Content Collection"
            description="Gathering information, case studies, project highlights, and testimonials." 
          />
          <OurProcess
            title="Design Conceptualization"
            description="Developing a layout and visual style that represents your brand and engages the audience." 
          />
          <OurProcess
            title="Review and Iteration"
            description="Sharing drafts for feedback and making revisions based on your input." 
          />
          <OurProcess
            title="Finalization and Delivery"
            description=" Providing the final company portfolio in digital and/or print format for distribution." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is a company portfolio important?"
          description=" A company portfolio serves as a powerful marketing
          tool to showcase your expertise, credibility, and track record to potential clients or partners." 
        />
        <OurProcess
          title="What should be included in a company portfolio?"
          description="Include case studies, client testimonials,
          project highlights, team profiles, and any other relevant information that demonstrates your company’s capabilities and successes." 
        />
        <OurProcess
          title="Can you create a multimedia company portfolio?"
          description="Yes, we can incorporate multimedia
          elements such as videos, infographics, and interactive content to enhance engagement and showcase your work effectively." 
        />
        <OurProcess
          title="How long does it take to create a company portfolio?"
          description="The timeline varies based on the scope
          and complexity of the portfolio but typically ranges from a few weeks to a couple of months, depending on client feedback and revisions." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Personalized Business Card Making' 
            description='Create customized business cards that leave a lasting impression.' 
            folderPath="Services/MainServices/DesignFusion" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Social Media Creatives & Advertising Materials' 
            description='Enhance your social media presence with engaging creatives and promotional materials' 
            folderPath="Services/MainServices/DesignFusion" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Brochures' 
            description='Develop informative and visually appealing brochures that effectively communicate your message.' 
            folderPath="Services/MainServices/DesignFusion" 
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

export default CompanyPm;

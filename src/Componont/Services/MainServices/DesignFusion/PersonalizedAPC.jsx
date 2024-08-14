import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./PersonalizedAPC.css"; // Import your CSS file
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

const PersonalizedAPC = () => {
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
          <h1>Personalized Advertising Poster Creation</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Personalized Advertising Poster Creation</h2>
          <p>
          At EditQuasar, we specialize in crafting personalized advertising posters that effectively convey
          your message and captivate your audience. Whether you’re promoting an event, product, or
          service, our creative team ensures each poster is tailored to reflect your brand’s identity and
          engage your target audience. From concept development to final design, we strive to create
          visually compelling posters that leave a lasting impression and drive results.
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
            title="Consultation"
            description="Understanding your advertising goals and target audience." 
          />
          <OurProcess
            title="Conceptualization"
            description="Brainstorming and developing creative concepts for the poster." 
          />
          <OurProcess
            title="Design Execution"
            description="Bringing the chosen concept to life through visually appealing designs." 
          />
          <OurProcess
            title="Feedback and Revisions"
            description="Incorporating your feedback to refine the poster until it meets your satisfaction." 
          />
          <OurProcess
            title="Finalization"
            description="Delivering the final poster in formats suitable for print and digital use." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="What makes a good advertising poster?"
          description=" A good advertising poster effectively communicates
          the message, grabs attention, and engages the audience through compelling visuals and clear
          messaging." 
        />
        <OurProcess
          title="How long does it take to create an advertising poster?"
          description="The timeline depends on the
          complexity of the design and client feedback but typically ranges from a few days to a couple of weeks." 
        />
        <OurProcess
          title="Can you handle large-scale poster printing?"
          description="Yes, we collaborate with trusted printing partners
          to ensure high-quality prints for large-scale advertising campaigns." 
        />
        <OurProcess
          title="Do you provide design ideas for the poster?"
          description="Yes, our creative team provides multiple design concepts based on your brief and preferences for you to choose from." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Personal Portfolio Creation' 
            description='Showcase your skills and achievements with a professionally designed personal portfolio.' 
            folderPath="Services/MainServices/DesignFusion" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Company Portfolio Making' 
            description='Present your companys strengths and successes through a compelling portfolio.' 
            folderPath="Services/MainServices/DesignFusion" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Personalized Business Card Making' 
            description='Create customized business cards that leave a lasting impression' 
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

export default PersonalizedAPC;

import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./UIDesign.css"; // Import your CSS file
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

const UIDesign = () => {
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
          <h1>UI/UX Design</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>UI/UX Design</h2>
          <p>
          At editquasar, we specialize in UI/UX design services that prioritize user experience and
          interface aesthetics. Our team combines creativity with user-centered design principles to create intuitive and visually appealing interfaces that enhance user satisfaction and engagement. Whether you're developing a new application or revamping an existing platform, our UI/UX design solutions are tailored to meet your specific needs and deliver seamless digital experiences. 
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
            title="Research and Discovery"
            description="Understanding user personas, user journeys, and business objectives to inform the design process." 
          />
          <OurProcess
            title="Wireframing and Prototyping"
            description="Creating wireframes
            and interactive prototypes to visualize interface layouts and functionalities." 
          />
          <OurProcess
            title="Visual Design"
            description="Designing interface elements, including colors, typography, and imagery, to create a cohesive and engaging user interface." 
          />
          <OurProcess
            title="Usability Testing"
            description="Conducting usability tests and gathering feedback to refine designs and ensure optimal user experience." 
          />
          <OurProcess
            title=" Implementation Support"
            description="Collaborating with development teams to ensure smooth implementation of UI/UX designs and ongoing support as needed." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="What is UI/UX design, and why is it important?"
          description="UI/UX design focuses on enhancing user
          satisfaction by improving the usability, accessibility, and pleasure provided in the interaction between the user and the product. It is crucial for creating intuitive and user-friendly digital experiences that drive engagement and satisfaction." 
        />
        <OurProcess
          title="How can UI/UX design benefit my business?"
          description="Effective UI/UX design can lead to increased
          user retention, higher conversion rates, reduced bounce rates, and improved customer satisfaction, ultimately driving business growth and competitiveness." 
        />
        <OurProcess
          title="Do you conduct user research as part of UI/UX design?"
          description="Yes, we prioritize user research and
          usability testing to understand user behaviors, preferences, and pain points, ensuring that our
          designs meet user needs and expectations effectively." 
        />
        <OurProcess
          title="Can you redesign existing interfaces to improve usability?"
          description="Yes, we specialize in redesigning
          interfaces to enhance usability, modernize aesthetics, and optimize user workflows based on feedback and usability testing results." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Website Design' 
            description='Develop visually appealing and user-friendly websites that provide a seamless browsing experience.' 
            folderPath="Services/MainServices/ExperienceDesign" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Mobile Experience' 
            description='Create engaging and responsive mobile experiences for users on the go.' 
            folderPath="Services/MainServices/ExperienceDesign" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Commerce Experience' 
            description='Optimize the shopping experience to increase customer satisfaction and sales.' 
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

export default UIDesign;

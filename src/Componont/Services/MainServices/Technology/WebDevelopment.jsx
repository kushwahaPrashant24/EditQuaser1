import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./WebDevelopment.css"; // Import your CSS file
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

const WebDevelopment = () => {
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
          <h1>Web Development</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Web Development</h2>
          <p>
          Our web development services focus on designing and building scalable, secure, and userfriendly websites that align with your business goals and enhance online presence. From custom
          web applications to content management systems (CMS), our team leverages industry best
          practices and cutting-edge technologies to deliver robust web solutions that drive engagement and achieve measurable results. 
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
            title="Discovery and Planning"
            description="Understanding business requirements, target audience, and functional specifications for the website." 
          />
          <OurProcess
            title="Frontend Development"
            description="Designing intuitive user
            interfaces (UI) and responsive layouts for optimal user experience across devices." 
          />
          <OurProcess
            title="Backend Development"
            description="Building scalable architecture, database management systems, and server-side functionalities to support website operations." 
          />
          <OurProcess
            title="Integration and Testing"
            description="Integrating third-party APIs, testing functionalities, and conducting quality assurance to ensure seamless performance." 
          />
          <OurProcess
            title="Launch and Maintenance"
            description="Deploying the website, monitoring performance, and providing ongoing support, updates, and maintenance as needed." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is web development important for businesses?"
          description="Web development establishes an online
          presence, enhances brand visibility, enables customer interaction, and supports business growth through effective digital marketing and e-commerce capabilities." 
        />
        <OurProcess
          title="Do you develop custom web applications?"
          description="Yes, we specialize in developing custom web
          applications tailored to specific business needs, functionalities, and user requirements, ensuring scalability and flexibility." 
        />
        <OurProcess
          title="Can you redesign and update existing websites?"
          description="Yes, we offer website redesign and update
          services to enhance user experience, implement new features, improve performance, and align with evolving business goals and industry trends." 
        />
        <OurProcess
          title="How do you ensure websites are secure against cyber threats?"
          description="We implement security best
          practices, SSL certificates, regular updates, and vulnerability assessments to protect websites from cyber threats and ensure data integrity and user safety." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
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
          <ServiceCard 
            img_url={serImg} 
            title='AI & Machine Learning (ML)' 
            description='Implement cutting-edge AI and ML technologies to automate processes and gain insights.' 
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

export default WebDevelopment;

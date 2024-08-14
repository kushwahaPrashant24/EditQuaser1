import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./AIML.css"; // Import your CSS file
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

const AIML = () => {
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
          <h1>AI & Machine Learning (ML)</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>AI & Machine Learning (ML)</h2>
          <p>
          Our AI & Machine Learning (ML) services leverage cutting-edge technologies to develop
          intelligent solutions that automate processes, enhance decision-making, and unlock valuable
          insights from data. From predictive analytics to natural language processing (NLP) and computer
          vision, our team applies ML algorithms to solve complex challenges and drive innovation across various industries.
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
            title="Discovery and Assessment"
            description="Identifying business challenges, data sources, and opportunities for AI and ML implementation." 
          />
          <OurProcess
            title="Model Development"
            description="Designing and training machine learning models using supervised, unsupervised, or reinforcement learning techniques tailored to
            specific use cases and objectives." 
          />
          <OurProcess
            title="Integration"
            description="Integrating AI and ML models into existing
            systems, applications, or platforms to automate tasks, improve efficiency, and deliver personalized experiences." 
          />
          <OurProcess
            title="Performance Evaluation"
            description="Testing and evaluating model
            performance, accuracy, and scalability using real-world data and benchmarks to ensure reliability and effectiveness." 
          />
          <OurProcess
            title="Deployment and Optimization"
            description=" Deploying AI solutions, monitoring
            performance metrics, and optimizing models based on feedback and continuous learning to drive business impact and ROI." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="What are the benefits of AI and machine learning for businesses?"
          description=" AI and machine learning
          enable automation, predictive analytics, personalized recommendations, operational efficiency,
          and competitive advantage through data-driven insights and decision-making." 
        />
        <OurProcess
          title="Can AI and ML be integrated into existing business processes and applications?"
          description="Yes, we
          specialize in integrating AI and ML capabilities into CRM systems, customer service platforms,
          financial models, supply chain management, and other business applications to enhance functionalities and drive innovation." 
        />
        <OurProcess
          title="Do you provide AI consulting and strategy development services?"
          description="Yes, we offer AI
          consulting to assess feasibility, develop AI roadmaps, and strategize AI adoption based on
          business goals, industry trends, and technology advancements." 
        />
        <OurProcess
          title="How do you ensure AI solutions comply with data privacy and regulatory requirements?"
          description="We adhere to data privacy laws, implement secure data handling practices, and conduct audits to
          ensure AI solutions comply with regulations and protect sensitive information throughout the
          development and deployment phases." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Cyber Security' 
            description='Protect your digital assets with advanced cyber security measures and strategies.' 
            folderPath="Services/MainServices/Technology" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Data & Analytics' 
            description='Harness the power of data to make informed business decisions and drive growth.' 
            folderPath="Services/MainServices/Technology" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Web Development' 
            description='Build robust and scalable websites tailored to your specific needs and goals.' 
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

export default AIML;

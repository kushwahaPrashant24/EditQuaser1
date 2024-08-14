import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./CyberSecurity.css"; // Import your CSS file
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

const CyberSecurity = () => {
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
          <h1>Cyber Security</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Cyber Security</h2>
          <p>
          Our cyber security services focus on protecting businesses from evolving cyber threats,
          safeguarding data assets, and ensuring continuous operational resilience. From risk assessments
          to threat detection and incident response, our team of security experts implements proactive
          measures and industry best practices to mitigate risks, secure networks, and maintain compliance with regulatory standards.
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
            title="Cyber Security Assessment"
            description="Conducting comprehensive audits and assessments to identify vulnerabilities, risks, and compliance gaps within IT infrastructure and systems." 
          />
          <OurProcess
            title="Threat Detection and Monitoring"
            description="Implementing advanced threat detection tools and continuous
            monitoring to detect and respond to cyber threats in real-time." 
          />
          <OurProcess
            title="Security Architecture"
            description="Designing and implementing robust security architectures, including firewalls, encryption protocols, and access controls, to protect data and systems from unauthorized access." 
          />
          <OurProcess
            title="Incident Response"
            description=" Developing incident response plans, conducting simulations, and providing rapid
            response services to minimize impact and restore operations during security incidents." 
          />
          <OurProcess
            title="Compliance and Training"
            description="Ensuring compliance with industry regulations (e.g., GDPR,
            HIPAA) through regular audits, training programs, and security awareness initiatives to foster a
            culture of cyber security awareness and readiness." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is cyber security important for businesses?"
          description="Cyber security protects sensitive data,
          mitigates financial losses from cyber attacks, preserves customer trust, and ensures business continuity in the face of evolving cyber threats." 
        />
        <OurProcess
          title="What cyber security measures do you implement?"
          description="We implement multi-layered security
          measures, including network security, endpoint protection, encryption, secure authentication, and
          employee training, tailored to industry standards and specific business needs." 
        />
        <OurProcess
          title="Do you provide 24/7 monitoring and incident response services?"
          description="Yes, we offer 24/7
          monitoring, threat detection, and incident response services to identify and mitigate cyber threats promptly, minimizing downtime and potential damage to business operations." 
        />
        <OurProcess
          title="How do you ensure data protection and compliance with regulatory standards?"
          description="We
          implement data encryption, secure data storage practices, and access controls to protect sensitive
          information, ensuring compliance with data protection laws and regulatory requirements relevant
          to your industry." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
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
          <ServiceCard 
            img_url={serImg} 
            title='Mobile App Development' 
            description='Create innovative mobile applications that provide a seamless user experience.' 
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

export default CyberSecurity;

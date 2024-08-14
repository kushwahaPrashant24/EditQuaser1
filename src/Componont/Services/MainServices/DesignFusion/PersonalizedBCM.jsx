import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./PersonalizedBCM.css"; // Import your CSS file
import NewButton from  "../../MainServices/Components/Button/NewButton";// Updated the path to correct level
import OurProcess from "../../MainServices/Components/ProcessSection/ProcessSection"; // Updated the path to correct level
import processVideo from "../../../../assets/Services/Companyprocess.mp4"; // Import the process video
import ServiceCard from "../../MainServices/Components/ServiceCard/ServiceCard"; // Updated the path to correct level
import bgsubservices from "../../../../assets/Services/wave 12.webp"; // Import background sub-services image
import serImg from "../../../../assets/Services/image.webp"; // Import service image
import OurImpact from './../Components/OurImpact/OurImpact';
import Form from './../Components/Form/Form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from './../../../Navbar/Lightbox';

const PersonalizedBCM = () => {
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
          <h1>Personalized Business Card Making</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Personalized Business Card Making</h2>
          <p>
          Our personalized business card making services are designed to create professional and
          memorable business cards that leave a lasting impression on your clients, partners, and contacts.
          We offer custom designs tailored to reflect your personal brand and business identity, ensuring
          your business cards stand out in a competitive environment. 
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
            title="Design Consultation"
            description=": Understanding your preferences, brand identity, and contact information to include on the card." 
          />
          <OurProcess
            title="Design Development"
            description="Creating initial design concepts and layouts for the business card." 
          />
          <OurProcess
            title="Feedback and Revision"
            description="Incorporating your feedback to refine the design and layout until you are satisfied." 
          />
          <OurProcess
            title="Finalization"
            description="Printing the business cards on highquality materials with options for finishes and textures." 
          />
          <OurProcess
            title="Delivery"
            description="Delivering the finished business cards ready for distribution and networking." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why are business cards still important in the digital age?"
          description=" Business cards provide a tangible
          and personal way to exchange contact information and leave a memorable impression during face-to-face meetings or networking events." 
        />
        <OurProcess
          title="Can you create business cards with unique designs?"
          description="Yes, we specialize in creating custom designs that align with your brand identity and make your business cards distinctive and professional." 
        />
        <OurProcess
          title="What information should be included on a business card?"
          description="Include your name, job title,
          company name, contact information (phone number, email, website), and any relevant social media handles or QR codes." 
        />
        <OurProcess
          title="Do you offer environmentally friendly business card options?"
          description="Yes, we offer eco-friendly
          printing options and materials to minimize environmental impact without compromising on quality or design." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Social Media Creatives & Other Advertising Materials' 
            description='Enhance your social media presence with engaging creatives and promotional materials.' 
            folderPath="Services/MainServices/DesignFusion"  
          />
          <ServiceCard 
            img_url={serImg} 
            title='Brochures' 
            description='Develop informative and visually appealing brochures that effectively communicate your message.' 
            folderPath="Services/MainServices/DesignFusion"  
          />
          <ServiceCard 
            img_url={serImg} 
            title='Personalized Advertising Poster Creation' 
            description='Design eye-catching posters tailored to your specific advertising needs.' 
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

export default PersonalizedBCM;

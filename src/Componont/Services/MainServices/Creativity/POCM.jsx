import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./POCM.css"; // Import your CSS file
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

const POCM = () => {
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
          <h1>Personalized Occasion Card Making</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Personalized Occasion Card Making</h2>
          <p>
          At EditQuasar, our personalized occasion card making services are designed to help you
          celebrate life's special moments with unique and beautifully crafted cards. Whether it's for
          birthdays, weddings, anniversaries, holidays, or any other significant event, we create custom
          cards that capture the essence of the occasion and convey your heartfelt messages with style and elegance.
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
            title="Consultation and Concept Development"
            description="Understanding the occasion, your preferences, and
            the message you wish to convey to create a personalized card concept that aligns with your vision." 
          />
          <OurProcess
            title="Design and Layout"
            description="Crafting custom designs, selecting appropriate color schemes, fonts, and
            graphics to enhance the visual appeal and thematic relevance of the card." 
          />
          <OurProcess
            title="Personalization and Customization"
            description="Adding personalized elements such as names, dates, and special messages to make each card unique and meaningful." 
          />
          <OurProcess
            title="Review and Approval"
            description="Sharing design drafts with clients for review, gathering feedback, and making revisions to ensure the final card meets expectations and specifications." 
          />
          <OurProcess
            title="Printing and Delivery"
            description="Producing high-quality printed cards using premium materials and
            delivering them promptly to ensure they are ready for your special occasion." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="What types of occasions do you create personalized cards for?"
          description="We create personalized cards for a wide range of occasions, including birthdays, weddings,
          anniversaries, holidays, graduations, baby showers, and other special events, tailoring each design to suit the specific occasion and recipient." 
        />
        <OurProcess
          title="Can I include custom messages and photos in my occasion cards? "
          description="Yes, we offer full customization options, allowing you to include personalized messages, quotes,
          and photos in your cards to add a personal touch and make them truly special." 
        />
        <OurProcess
          title="Do you provide digital versions of the cards for online sharing?"
          description="Yes, we can create digital versions of your personalized cards, enabling you to share them
          electronically via email or social media, in addition to providing high-quality printed versions." 
        />
        <OurProcess
          title="How long does it take to create and deliver personalized occasion cards?"
          description="The timeline for creating and delivering personalized occasion cards varies based on the
          complexity of the design and the quantity ordered. We work efficiently to ensure timely delivery, typically within a few days to a week, depending on your specific requirements." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Video Editing' 
            description='Transform raw footage into polished videos that captivate and engage your audience.' 
            folderPath="Services/MainServices/Creativity" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Photo Editing' 
            description='Enhance and retouch photos to achieve a professional and appealing look.' 
            folderPath="Services/MainServices/Creativity" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Blog Writing' 
            description='Create compelling and informative blog content to engage and inform your readers.' 
            folderPath="Services/MainServices/Creativity" 
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

export default POCM;

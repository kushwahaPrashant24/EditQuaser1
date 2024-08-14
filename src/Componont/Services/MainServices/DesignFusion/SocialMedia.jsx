import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./SocialMedia.css"; // Import your CSS file
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

const SocialMedia = () => {
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
          <h1>Social Media Creatives & Other Advertising Materials</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Social Media Creatives & Other Advertising Materials</h2>
          <p>
          Our social media creatives and advertising materials are designed to enhance your brand’s online
          presence and engagement across various digital platforms. Whether you need eye-catching social
          media posts, banners, or digital ads, our creative team develops compelling visuals and
          messaging that resonate with your audience and drive meaningful interactions. 

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
            title="Strategy Consultation"
            description="Understanding your social media goals, target audience, and campaign objectives." 
          />
          <OurProcess
            title="Creative Conceptualization"
            description=" Developing visual concepts and content ideas tailored to each platform’s specifications." 
          />
          <OurProcess
            title="Content Creation"
            description="Designing engaging social media posts, banners, and ads that align with your brand’s voice and objectives." 
          />
          <OurProcess
            title="Review and Approval"
            description="Sharing drafts for your review and incorporating feedback to refine the creatives." 
          />
          <OurProcess
            title="Delivery"
            description=" Providing finalized creatives in formats optimized for each platform and campaign launch." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why are social media creatives important for my brand?"
          description="Social media creatives help attract
          attention, convey your brand’s message, and engage your audience on platforms where visual content is crucial." 
        />
        <OurProcess
          title="Can you manage social media campaigns in addition to creating creatives?"
          description="Yes, we offer
          comprehensive social media management services, including content creation, posting schedules, and performance tracking." 
        />
        <OurProcess
          title="What platforms do you create social media creatives for?"
          description="We create creatives for all major
          social media platforms, including Facebook, Instagram, Twitter, LinkedIn, Pinterest, and more, tailored to each platform’s best practices and audience preferences." 
        />
        <OurProcess
          title="Do you provide analytics and insights for social media campaigns?"
          description="Yes, we track campaign
          performance metrics such as reach, engagement, and conversions to measure success and optimize future campaigns." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
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
          <ServiceCard 
            img_url={serImg} 
            title='Personal Portfolio Creation' 
            description='Showcase your skills and achievements with a professionally designed personal portfolio.' 
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

export default SocialMedia;

import React, { useRef, useEffect, useState } from 'react';//Usestate
import './BrandConsulting.css'; // Import your CSS file
import NewButton from "../MainServices/Components/Button/NewButton";
import OurProcess from './Components/ProcessSection/ProcessSection'; // Updated to OurProcess
import processVideo from "../../../assets/Services/Companyprocess.mp4";
import ServiceCard from './Components/ServiceCard/ServiceCard';
import bgsubservices from '../../../assets/Services/wave 7.webp';
import serImg from '../../../assets/Services/image.webp';
import OurImpact from './Components/OurImpact/OurImpact';
import Form from './Components/Form/Form';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from '../../Navbar/Lightbox';

const BrandConsulting = () => {
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
          <h1>Brand Consulting</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Brand Consulting:Enhance Your Brand's Identity with Expert Recommendations</h2>
          <p>
          At editquasar, our branding consultancy services are crafted to help organizations build a 
distinctive and impactful brand identity. Our team of experts conducts thorough research into 
your business goals, target audience, and competitive landscape to develop a comprehensive 
ely conveys your brand message. Whether you're launching a new 
At editquasar, our branding consultancy services
 distinctive and impactful brand identity. Our team of experts conducts thorough research into 
your business goals, target audience, and competitive landscape to develop a comprehensive 
brand strategy that effectively conveys your brand message. Whether you're launching a new 
brand or revitalizing an existing one, we are dedicated to helping you establish a powerful brand 
identity and forge deeper connections with your audience.
 brand or revitalizing an existing one, we are dedicated to helping you establish a powerful brand 
brand or revitalizing an existing one, we are dedicated to helping you establish a powerful brand 
identity and forge deeper connections with your audience.
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
            title="Sales Volume "
            description="We analyze and strategize to increase your sales volume, ensuring sustained growth and 
            profitability. " 
          />
          <OurProcess
            title="Loyalty"
            description="We focus on building brand loyalty, creating long
            We focus on building brand loyalty, creating long-term relationships with your customers." 
          />
          <OurProcess
            title=" Quality and Pricing Power "
            description="you enhance your brand's perceived quality and pricing power, allowing you to 
            We help you enhance your brand's perce 
            command better margins. " 
          />
          <OurProcess
            title="Customer Effectiveness "
            description="We develop strategies to improve customer engagement and effectiveness, ensuring your brand 
            meets their needs. " 
          />
          <OurProcess
            title="Brand Identity "
            description="We craft a unique and memorable brand identity that sets you apart from the competition." 
          />
           <OurProcess
            title="Market Research"
            description=" We conduct comprehensive market research to understand your industry, competitors, and target 
            audience, providing actionable insights for your brand strategy." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        
        <OurProcess
          title="What is brand consulting, and how can it benefit my business? "
          description="Brand consulting is a service that helps companies build, manage, and enhance their brands. It
          can benefit your business by creating a clear and compelling brand message that resonates with
          your audience, improving brand reputation, loyalty, and profitability." 
        />
        <OurProcess
          title="What is the ideal timeline for a brand consulting project?"
          description="The timeline for a brand consulting project depends on the scope of work and the complexity of
          the task. It can range from a few weeks to several months or even years." 
        />
         <OurProcess
          title="What types of businesses can benefit from brand consulting services?"
          description="Any business with a brand can benefit from brand consulting services, regardless of its size or 
          industry. Small businesses, startups, and established companies can all 
          image, messaging, and customer perception through brand consulting." 
        />
        <OurProcess
          title="How can I select the right brand consulting service for my business?"
          description="When choosing a brand consultancy, consider the following elements: Look for a company with
          a robust track record of fulfilment and a portfolio of satisfied clients.Find a logo consulting
          organisation that specialises in your industry or has experience working with businesses just like
          yours. Choose an organisation that has a collaborative and customised approach to brand
          consulting, tailoring their services to satisfy your particular wishes. Consider the knowledge and
          credentials of the consulting team, making sure they have the talents and revel in the essentials to
          achieve your brand goals." 
        />
      </div>


      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Logo Design' 
            description='Craft unique and memorable logos that embody your brands essence and values.' 
            folderPath="Services/MainServices" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='2D/3D Visualization' 
            description='Transform ideas into stunning 2D and 3D visuals to bring your concepts to life.' 
            folderPath="Services/MainServices" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Graphic Design' 
            description='Convey complex ideas, data, or instructions in a visually appealing and easily understandable manner.' 
            folderPath="Services/MainServices" 
          />
        </div>
        <div className="view-all-services-button">
        <div>
      <NewButton buttonText="View all services" link="/services" />
       </div>
       </div>
     </div>

   <OurImpact></OurImpact>

   <Form></Form>

   {showLightbox && <Lightbox onClose={handleCloseLightbox} />}
    </div>
  );
};

export default BrandConsulting;

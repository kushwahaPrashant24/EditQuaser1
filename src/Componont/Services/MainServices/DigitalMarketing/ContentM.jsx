import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./ContentM.css"; // Import your CSS file
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

const ContentM = () => {
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
          <h1>Content Marketing</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Content Marketing</h2>
          <p>
          Our content marketing services are designed to attract, engage, and
          convert your target audience through strategic content creation and distribution. From blog posts and articles to videos, infographics, and
          eBooks, we develop valuable and relevant content that educates, entertains, and inspires action while aligning with your brand’s goals and objectives. 
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
            title="Content Strategy"
            description="Developing a content strategy aligned with your brand's voice, target audience, and marketing objectives." 
          />
          <OurProcess
            title="Content Creation"
            description="Producing high-quality and engaging content,
            including articles, blogs, videos, and visual assets, that resonates with your audience." 
          />
          <OurProcess
            title="Distribution Plan"
            description="Strategically distributing content across various channels, including your website, social media, email newsletters, and third-party platforms." 
          />
          <OurProcess
            title="Performance Measurement"
            description="Monitoring content performance
            metrics such as traffic, engagement, and conversions to evaluate effectiveness and inform future content strategies." 
          />
          <OurProcess
            title="Optimization and Iteration"
            description="Analyzing data insights to optimize
            content strategies, update existing content, and create new content that addresses audience needs and preferences." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is content marketing important for businesses?"
          description="Content marketing helps businesses build brand authority, attract
          organic traffic, nurture leads, and foster customer loyalty through valuable and relevant content." 
        />
        <OurProcess
          title="What types of content do you create for content marketing?"
          description="We create a wide range of content formats, including articles, blog
          posts, infographics, videos, whitepapers, case studies, and more, tailored to meet specific marketing goals and audience preferences." 
        />
        <OurProcess
          title="Can you help with SEO through content marketing?"
          description="Yes, our content marketing strategies include SEO best practices such
          as keyword optimization, internal linking, and content formatting to improve search engine rankings and drive organic traffic." 
        />
        <OurProcess
          title="How do you measure the success of content marketing efforts?"
          description="We measure success through key performance indicators (KPIs) such as
          website traffic, engagement metrics, lead conversions, and content ROI, providing comprehensive insights into campaign performance and effectiveness." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Marketing Automation' 
            description='Streamline your marketing efforts with automation tools for better efficiency and effectiveness.' 
            folderPath="Services/MainServices/DigitalMarketing" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Analytics' 
            description='Gain actionable insights and measure the success of your marketing campaigns with advanced analytics.' 
            folderPath="Services/MainServices/DigitalMarketing" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Search Engine Optimization (SEO)' 
            description='Improve your website visibility and ranking on search engines to attract more organic traffic.' 
            folderPath="Services/MainServices/DigitalMarketing" 
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

export default ContentM;

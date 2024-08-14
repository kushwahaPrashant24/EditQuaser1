import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./PhotoEditing.css"; // Import your CSS file
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

const PhotoEditing = () => {
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
          <h1>Photo Editing</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Photo Editing</h2>
          <p>
          Our photo editing services are crafted to enhance visual appeal, correct imperfections, and elevate the impact of your images across digital and print platforms. Whether for marketing
          materials, personal portfolios, or social media campaigns, editquasar employs advanced editing techniques to ensure your photos stand out and convey the desired message effectively.
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
            title="Image Enhancement"
            description="Enhancing colors, contrast, and lighting to improve overall image quality and visual appeal." 
          />
          <OurProcess
            title="Retouching and Restoration"
            description="Removing blemishes, wrinkles, and imperfections, and performing photo restoration to revive old or damaged photos." 
          />
          <OurProcess
            title="Background Removal and Manipulation"
            description="Editing backgrounds, adding or removing elements,
            and creating composite images to enhance composition and storytelling." 
          />
          <OurProcess
            title="Special Effects and Filters"
            description="Applying artistic filters, effects, and creative enhancements to achieve specific visual styles and thematic effects." 
          />
          <OurProcess
            title="Quality Assurance"
            description="Conducting meticulous reviews and revisions to ensure edited photos meet client specifications and quality standards before final delivery." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="What types of photo editing services do you offer?"
          description="We offer a wide range of photo editing
          services, including portrait retouching, product photo enhancement, real estate photo editing, and
          creative photo manipulation, tailored to meet diverse client needs and project requirements. " 
        />
        <OurProcess
          title="Can you edit photos in bulk for large-scale projects?"
          description="Yes, we provide bulk photo editing
          services with efficient workflows and quick turnaround times, ensuring consistency and quality across large volumes of images for commercial and corporate projects." 
        />
        <OurProcess
          title="Do you provide customized editing styles based on client preferences?"
          description="Yes, we collaborate
          closely with clients to understand their editing preferences, style guidelines, and aesthetic
          preferences, ensuring edited photos reflect their unique brand identity and visual storytelling goals." 
        />
        <OurProcess
          title="How do you ensure confidentiality and security of client photos?"
          description=" We prioritize data security
          and confidentiality, implementing secure file transfer protocols and strict confidentiality agreements to protect client photos and sensitive information throughout the editing process." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Blog Writing' 
            description='Create compelling and informative blog content to engage and inform your readers.' 
            folderPath="Services/MainServices/Creativity" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Content Writing' 
            description='Craft high-quality content that effectively communicates your message and resonates with your audience.' 
            folderPath="Services/MainServices/Creativity" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Resume Making' 
            description='Design professional resumes that highlight your skills and achievements.' 
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

export default PhotoEditing;

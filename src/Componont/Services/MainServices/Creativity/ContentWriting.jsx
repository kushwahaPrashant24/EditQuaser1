import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./ContentWriting.css"; // Import your CSS file
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

const ContentWriting = () => {
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
          <h1>Content Writing</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Content Writing</h2>
          <p>
          Our content writing services encompass a wide range of creative and strategic writing solutions
          tailored to meet diverse business needs and communication goals. Whether you require website
          content, marketing copy, social media posts, or email newsletters, editquasar delivers compelling
          and well-crafted content that engages audiences, enhances brand visibility, and drives meaningful interactions.
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
            title="Content Strategy Development"
            description="Defining content objectives, target audience personas, and messaging guidelines to align with brand identity and communication goals." 
          />
          <OurProcess
            title="Research and Ideation"
            description="Conducting thorough research, brainstorming ideas, and developing content concepts
            that resonate with audience interests and address specific business objectives." 
          />
          <OurProcess
            title="Writing and Optimization"
            description="Crafting clear, concise, and persuasive content with attention to SEO best
            practices, readability, and audience engagement to enhance online visibility and search engine rankings." 
          />
          <OurProcess
            title="Editing and Proofreading"
            description="Reviewing drafts, refining language, and ensuring accuracy, coherence, and consistency in tone and messaging before finalization." 
          />
          <OurProcess
            title="Distribution and Performance Analysis"
            description=" Publishing content across relevant platforms, tracking performance
            metrics, and analyzing audience engagement to optimize content strategies and achieve measurable results." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is content writing essential for digital marketing?"
          description=" Content writing drives brand
          awareness, educates audiences, nurtures leads, and enhances customer engagement by delivering
          valuable information, establishing credibility, and fostering meaningful connections with target audiences." 
        />
        <OurProcess
          title="Can you create SEO-friendly content for websites and online platforms?"
          description="Yes, we specialize
          in creating SEO-friendly content that incorporates relevant keywords, optimized metadata, and
          compelling storytelling to improve search engine visibility, attract organic traffic, and increase conversions." 
        />
        <OurProcess
          title="Do you provide content writing for multiple formats and channels?"
          description="Yes, we offer content
          writing services for websites, blogs, social media platforms, email marketing campaigns, press
          releases, and more, tailoring content formats and tones to suit specific communication goals and audience preferences." 
        />
        <OurProcess
          title="How do you ensure content quality and consistency across projects?"
          description="We adhere to strict
          editorial guidelines, conduct quality checks, and collaborate closely with clients to maintain
          consistency in brand voice, messaging alignment, and content relevance across all content writing projects." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Resume Making' 
            description='Design professional resumes that highlight your skills and achievements.' 
            folderPath="Services/MainServices/Creativity" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Personalized Occasion Card Making' 
            description='Create unique and heartfelt occasion cards tailored to your personal style and message.' 
            folderPath="Services/MainServices/Creativity" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Video Editing' 
            description='Transform raw footage into polished videos that captivate and engage your audience.' 
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

export default ContentWriting;

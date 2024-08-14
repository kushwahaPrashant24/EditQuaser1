import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./BlogWriting.css"; // Import your CSS file
import NewButton from  "../../MainServices/Components/Button/NewButton";// Updated the path to correct level
import OurProcess from "../../MainServices/Components/ProcessSection/ProcessSection"; // Updated the path to correct level
import processVideo from "../../../../assets/Services/Companyprocess.mp4"; // Import the process video
import ServiceCard from "../../MainServices/Components/ServiceCard/ServiceCard"; // Updated the path to correct level
import bgsubservices from "../../../../assets/Services/wave 10.webp"; // Import background sub-services image
import serImg from "../../../../assets/Services/image.webp"; // Import service image
import OurImpact from './../Components/OurImpact/OurImpact';
import Form from './../Components/Form/Form';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from './../../../Navbar/Lightbox';

const BlogWriting = () => {
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
          <h1>Blog Writing</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Blog Writing</h2>
          <p>
          Our blog writing services are designed to establish thought leadership, engage audiences, and
          drive organic traffic to your website through informative and compelling content. Whether you
          need industry insights, how-to guides, or thought-provoking articles, editquasar's team of skilled
          writers crafts SEO-friendly blog posts that resonate with your target audience and enhance your online presence.
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
            title="Topic Research and Ideation"
            description="Conducting research to identify trending topics, keywords, and audience interests to inspire engaging blog topics and ideas." 
          />
          <OurProcess
            title="Content Planning and Outlining"
            description="Creating detailed outlines and content plans to organize information, structure articles, and ensure alignment with client goals and messaging." 
          />
          <OurProcess
            title="Writing and Editing"
            description="Crafting well-researched, informative, and engaging blog posts with clear structure, compelling narratives, and SEO optimization to enhance discoverability and readability." 
          />
          <OurProcess
            title="Review and Revision"
            description=" Reviewing drafts, gathering feedback from clients, and making revisions to refine content, improve clarity, and align with client preferences before publication." 
          />
          <OurProcess
            title="Publication and Promotion"
            description="Publishing blog posts, sharing across social media platforms, and implementing
            content promotion strategies to maximize reach, engagement, and audience interaction." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is blog writing important for businesses?"
          description="Blog writing establishes authority, educates
          audiences, drives organic traffic, and supports SEO efforts by targeting relevant keywords and
          providing valuable content that addresses audience needs and interests." 
        />
        <OurProcess
          title="Do you conduct keyword research for blog posts?"
          description="Yes, we conduct keyword research to
          identify high-ranking keywords, long-tail phrases, and search queries relevant to client industries, ensuring blog posts are optimized for SEO and visibility in search engine results." 
        />
        <OurProcess
          title="Can you write blogs for different industries and topics?"
          description="Yes, our team of writers specializes
          in diverse industries and topics, including technology, finance, health and wellness, travel, and
          more, adapting writing styles and tones to resonate with specific target audiences and industry nuances." 
        />
        <OurProcess
          title="Do you offer blog management services for ongoing content creation?"
          description="Yes, we provide blog
          management services with regular content updates, editorial calendars, and strategic planning to
          maintain consistency, relevance, and engagement across blog posts and content marketing initiatives." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
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
          <ServiceCard 
            img_url={serImg} 
            title='Personalized Occasion Card Making' 
            description='Create unique and heartfelt occasion cards tailored to your personal style and message.' 
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

export default BlogWriting;

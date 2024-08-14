import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./ResumeMaking.css"; // Import your CSS file
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

const ResumeMaking = () => {
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
          <h1>Resume Making</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Resume Making</h2>
          <p>
          Our resume writing services are dedicated to crafting professional, compelling, and customized
          resumes that highlight your skills, experience, and achievements effectively. Whether you're
          entering the job market, seeking career advancement, or transitioning to a new industry,
          editquasar's resume experts create tailored resumes that impress employers, showcase your
          qualifications, and increase your chances of securing interviews.
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
            title="Personal Consultation"
            description="Conducting one-on-one consultations to gather information about your career goals, professional background, skills, and achievements." 
          />
          <OurProcess
            title="Resume Writing and Formatting"
            description="Crafting concise, achievement-focused resume content, organizing information
            logically, and formatting resumes to enhance readability and visual appeal." 
          />
          <OurProcess
            title="Keyword Optimization"
            description="Incorporating industry-specific keywords, skills, and qualifications relevant to
            target job roles to improve resume visibility in applicant tracking systems (ATS) and online job portals." 
          />
          <OurProcess
            title="Review and Revision"
            description="Reviewing draft resumes, gathering feedback, and making
            revisions to refine content, improve clarity, and align with client preferences and job application requirements." 
          />
          <OurProcess
            title="Finalization and Delivery"
            description="Delivering final resumes in editable formats (e.g.,
            Word, PDF) and providing guidance on resume customization, cover letter writing, and job application strategies as needed." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="Why is professional resume writing important for job seekers?"
          description="Professional resume writing
          enhances job search outcomes by highlighting key qualifications, achievements, and skills
          effectively, increasing applicant competitiveness, and capturing employer attention during the hiring process." 
        />
        <OurProcess
          title="Do you customize resumes for specific industries and job roles?"
          description="Yes, we specialize in
          tailoring resumes for diverse industries, job functions, and career levels, adapting content,
          formatting, and language to align with industry standards, employer expectations, and job application requirements." 
        />
        <OurProcess
          title="Can you update and optimize existing resumes for career advancement?"
          description="Yes, we offer
          resume updating and optimization services to refresh content, incorporate new achievements, and align resumes with current industry trends." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
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
          <ServiceCard 
            img_url={serImg} 
            title='Photo Editing' 
            description='Enhance and retouch photos to achieve a professional and appealing look.' 
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

export default ResumeMaking;

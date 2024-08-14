import React, { useRef, useState, useEffect } from 'react';
import './Technology.css'; // Import CSS file
import ServiceHeader from './Components/Header/header';
import ServiceCard from './Components/ServiceCard/ServiceCard';
import OurProcess from './Components/ProcessSection/ProcessSection'; // Updated to OurProcess

import bgVideo from "../../../assets/Services/TechnologyFinalBg.mp4";
import serImg from '../../../assets/Services/image.webp';
import descriptionVideo from "../../../assets/Services/branddescription2.mp4";
import processVideo from "../../../assets/Services/Companyprocess.mp4";
import NewButton from "../MainServices/Components/Button/NewButton";
import Form from "../MainServices/Components/Form/Form";

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
  </svg>
);

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="white"/>
  </svg>
);

const MuteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 9V15H12L17 20V4L12 9H9Z" fill="white"/>
  </svg>
);

const UnmuteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 9V15H12L17 20V4L12 9H9Z" fill="white"/>
    <line x1="1" y1="1" x2="23" y2="23" stroke="white" strokeWidth="2"/>
  </svg>
);

const Technology = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePauseClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  const handleMuteClick = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };


 

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play();
          setIsPaused(false);
        } else {
          videoElement.pause();
          setIsPaused(true);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  useEffect(() => {
    const videoElement = document.getElementById('process-video');
    if (videoElement) {
      videoElement.play(); // Ensure video starts playing when component mounts
    }
  }, []);

  return (
    <>
      <ServiceHeader video_link={bgVideo} />
      <div className="service-header-overlay">
                <p className="service-header-title">Technology</p>
                <p className="service-header-description"> Empowering Innovation Through Cutting-Edge Technology</p>
            </div>

      <div className='branding-description'>
        <p className='text'>We provide end-to-end technology solutions that align with your business objectives and deliver
        sustainable growth.</p>
        <div style={{ position: 'relative' }}>
          <video className='description-video' ref={videoRef} loop>
            <source src={descriptionVideo} type='video/mp4' />
          </video>
          <button className='pause-button' onClick={handlePauseClick}>
            {isPaused ? <PlayIcon /> : <PauseIcon />}
          </button>
          <button className='mute-button' onClick={handleMuteClick}>
            {isMuted ? <UnmuteIcon /> : <MuteIcon />}
          </button>
        </div>
      </div>

      <p className='Title'>Services</p>

      <div className='ServicesGrid'>
        <ServiceCard 
          img_url={serImg} 
          title='Data & Analytics' 
          description='Utilize data analytics to inform business decisions, optimize strategies, and drive growth.' 
        folderPath="Services/MainServices/Technology" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Web Development' 
          description="Develop robust and scalable websites that deliver exceptional performance and user experiences." 
        folderPath="Services/MainServices/Technology" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Mobile App Development' 
          description='Create innovative and user-centric mobile applications for various platforms, enhancing your
          digital presence.' 
        folderPath="Services/MainServices/Technology" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='E-commerce ' 
          description='Build comprehensive e-commerce solutions that drive sales, enhance customer experiences, and support business growth.' 
        folderPath="Services/MainServices/Technology" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='AI & Machine Learning (ML)' 
          description='Integrate AI and ML technologies to automate processes, gain insights, and enhance business efficiency.' 
        folderPath="Services/MainServices/Technology" 
        />
         <ServiceCard 
          img_url={serImg} 
          title='Cyber Security' 
          description='Implement comprehensive security measures to protect your digital assets, data, and systems
          from cyber threats.' 
        folderPath="Services/MainServices/Technology" 
        />
      </div>

      <p className='Title'>Our Process</p>
      <section className="our-process">
        <video className='process-video' id='process-video' autoPlay loop muted>
          <source src={processVideo} type='video/mp4' />
        </video>
        <div className='processes'>
          <OurProcess
            title="Initial Consultation"
            description=" Begin with an in-depth discussion to understand your technology needs,
            business goals, and project scope." 
          />
          <OurProcess
            title="Strategic Planning"
            description="Develop a comprehensive strategy tailored to your objectives, outlining
            the project roadmap and key milestones." 
          />
          <OurProcess
            title="Design and Architecture"
            description="Create detailed designs and architectural plans to ensure the
            technology solutions align with your vision and requirements." 
          />
          <OurProcess
            title="Development"
            description=" Build and develop technology solutions using cutting-edge tools and
            methodologies, ensuring they meet your specific needs." 
          />
          <OurProcess
            title="Integration"
            description="Seamlessly integrate the developed solutions with your existing systems and
            processes for a smooth transition." 
          />
          <OurProcess
            title="Quality Assurance and Testing"
            description="Conduct rigorous testing to ensure the solutions meet
            performance, functionality, and security standards. " 
          />
           <OurProcess
            title="Deployment"
            description="Deploy the solutions efficiently, ensuring minimal disruption to your operations
            and verifying successful implementation." 
          />
           <OurProcess
            title=" Ongoing Maintenance and Support"
            description=" Provide continuous maintenance and support services
            to ensure the solutions remain optimal, addressing any issues and implementing updates as necessary." 
          />
        </div>
      </section>
      
      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        
        <OurProcess
          title="How does data analytics enhance business strategy and decision-making?"
          description="Data
          analytics provides deep insights into performance metrics, customer preferences, and
          market trends, enabling you to refine strategies and make informed business decisions." 
        />
        <OurProcess
          title="In what ways does web development improve user experience and functionality?"
          description="Web development focuses on creating responsive, intuitive, and feature-rich websites that
          enhance user engagement, streamline navigation, and boost overall functionality." 
        />
         <OurProcess
          title="Why is investing in mobile app development crucial for customer engagement?"
          description="Mobile app development creates dedicated platforms for customer interaction, offering
          seamless experiences and supporting key business operations such as marketing, sales, and support." 
        />
        <OurProcess
          title="How can integrating e-commerce solutions transform my online business?"
          description="Ecommerce integration enables seamless online transactions, enhances customer
          experience, and boosts sales through streamlined shopping processes and secure payment gateways." 
        />
         <OurProcess
          title="What benefits does AI and machine learning bring to business operations?"
          description="AI and
          machine learning automate processes, predict trends, and enhance decision-making
          through advanced algorithms, improving efficiency and driving innovation across various business functions." 
        />
         <OurProcess
          title="What measures do you take to safeguard our digital assets against cyber threats?"
          description="We employ state-of-the-art cyber security strategies, including advanced encryption,
          multi-layered firewalls, and routine security audits, to safeguard your digital assets from potential threats." 
        />
         <OurProcess
          title=" How does data analytics help in optimizing marketing campaigns?"
          description="Data analytics
          identifies customer behaviors and preferences, allowing you to tailor marketing
          strategies, improve targeting, and enhance campaign effectiveness for better ROI." 
        />
         <OurProcess
          title="What features make a mobile app essential for modern businesses?"
          description=" Essential
          features of a mobile app include user-friendly interfaces, robust functionality, and
          seamless integration with other business systems, enhancing customer engagement and
          operational efficiency." 
        />
      </div>
       
      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Creativity' 
            description='Bring your ideas to life with our creative services, ensuring your content is compelling, polished,  and impactful.' 
          folderPath="Services" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Branding' 
            description='Develop a strong and cohesive brand identity that connects with your audience and sets you apart from the competition.' 
          folderPath="Services" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Digital Marketing' 
            description='Elevate your online presence with comprehensive digital marketing strategies that drive engagement, traffic, and conversions.' 
          folderPath="Services" 
          />
        </div>
        <div className="view-all-services-button">
        <div>
      <NewButton buttonText="View all services" link="/services" />
    </div>
      </div>
    </div>
<Form></Form>
    
       
      
    </>
  );
};

export default Technology;
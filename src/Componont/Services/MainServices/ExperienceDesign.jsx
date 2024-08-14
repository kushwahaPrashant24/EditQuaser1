import React, { useRef, useState, useEffect } from 'react';
import './ExperienceDesign.css'; // Import CSS file
import ServiceHeader from './Components/Header/header';
import ServiceCard from './Components/ServiceCard/ServiceCard';
import OurProcess from './Components/ProcessSection/ProcessSection'; // Updated to OurProcess

import bgVideo from "../../../assets/Services/ExperiencedesignFinalBg.mp4";
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

const ExperienceDesign = () => {
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
                <p className="service-header-title">Experience Design</p>
                <p className="service-header-description">Crafting Seamless Journeys for Exceptional Experiences</p>
            </div>

      <div className='branding-description'>
        <p className='text'>Our experience design services focus on creating user-centric digital experiences that enhance
        engagement, usability, and satisfaction across various touchpoints. Our team of designers and
        developers work collaboratively to deliver innovative and intuitive interfaces that meet user needs and
        business objectives.</p>
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
          title='UI/UX Design' 
          description='Design intuitive and visually appealing user interfaces that enhance user experiences and drive engagement.' 
         folderPath="Services/MainServices/ExperienceDesign" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Website Design' 
          description="Create aesthetically pleasing and functional websites that effectively communicate your brand
          message and meet user needs." 
         folderPath="Services/MainServices/ExperienceDesign" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Mobile Experience' 
          description='Develop mobile-friendly designs and applications to ensure seamless user experiences across devices.' 
         folderPath="Services/MainServices/ExperienceDesign" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Commerce Experience' 
          description='Enhance e-commerce platforms to improve user journeys, increase conversions, and drive online sales.' 
         folderPath="Services/MainServices/ExperienceDesign" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Human Machine Interface (HMI)' 
          description='Design interactive interfaces that facilitate seamless interactions between users and machines.' 
         folderPath="Services/MainServices/ExperienceDesign" 
        />
         <ServiceCard 
          img_url={serImg} 
          title='Applications & Dashboard' 
          description='Create custom applications and dashboards that provide valuable insights and streamline
          business operations.' 
         folderPath="Services/MainServices/ExperienceDesign" 
        />
      </div>

      <p className='Title'>Our Process</p>
      <section className="our-process">
        <video className='process-video' id='process-video' autoPlay loop muted>
          <source src={processVideo} type='video/mp4' />
        </video>
        <div className='processes'>
          <OurProcess
            title="Research and Discovery"
            description="Conducting user research and market analysis to understand user needs and
            business goals." 
          />
          <OurProcess
            title="Design and Prototyping"
            description=" Creating wireframes, mockups, and prototypes to visualize and test design concepts." 
          />
          <OurProcess
            title="Development and Implementation"
            description="Building and deploying user-centric interfaces and applications
            with a focus on usability and functionality." 
          />
          <OurProcess
            title="Testing and Optimization"
            description=" Conducting usability testing and making iterative improvements to enhance
            the user experience." 
          />
        </div>
      </section>
      
      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        
        <OurProcess
          title="Why is UI/UX design crucial for a website's success?"
          description="UI/UX design enhances user experience by making websites intuitive and visually appealing,
          leading to higher user satisfaction, retention, and conversion rates." 
        />
        <OurProcess
          title="How do you make sure websites are optimized for mobile devices?"
          description="We implement responsive design principles and perform extensive testing on various devices and
          screen sizes to ensure optimal performance and usability on mobile devices." 
        />
         <OurProcess
          title="Is it possible to add e-commerce features to an existing website?"
          description="Absolutely, we can seamlessly integrate e-commerce functionalities into your current website,
          boosting its capability for online sales and improving customer interaction." 
        />
        <OurProcess
          title="What role does user research play in experience design?"
          description="User research helps us understand user needs, behaviors, and pain points, allowing us to create
          designs that are user-centric and meet the target audience's expectations." 
        />
         <OurProcess
          title="How do you enhance the usability of a digital product?"
          description="We focus on creating intuitive navigation, clear information architecture, and user-friendly
          interfaces, and we conduct usability testing to ensure ease of use." 
        />
         <OurProcess
          title="Can you customize the design according to brand identity?"
          description="Yes, we tailor our designs to reflect your brand’s identity, ensuring consistency in visual
          elements, tone, and overall user experience across all platforms." 
        />
         <OurProcess
          title="What is the significance of prototyping in experience design?"
          description="Prototyping allows us to test and refine design concepts before full-scale development, ensuring
          functionality, usability, and a seamless user experience." 
        />
         <OurProcess
          title="How do you keep up with the latest design trends and technologies?"
          description="We stay updated with industry trends and advancements through continuous learning, research,
          and attending design conferences, ensuring our designs are modern and innovative." 
        />
      </div>
       
      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Design Fusion' 
            description='Combine creativity and innovation to deliver visually stunning designs that communicate your message and captivate your audience.' 
           folderPath="Services" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Technology' 
            description='Leverage cutting-edge technology solutions to optimize your business operations, enhance security, and drive growth.' 
           folderPath="Services" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Creativity' 
            description='Bring your ideas to life with our creative services, ensuring your content is compelling, polished, and impactful.' 
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

export default ExperienceDesign;
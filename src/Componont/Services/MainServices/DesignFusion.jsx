import React, { useRef, useState, useEffect } from 'react';
import './DesignFusion.css'; // Import CSS file
import ServiceHeader from './Components/Header/header';
import ServiceCard from './Components/ServiceCard/ServiceCard';
import OurProcess from './Components/ProcessSection/ProcessSection'; // Updated to OurProcess

import bgVideo from "../../../assets/Services/DesignFusionFinalBg.mp4";
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

const DesignFusion = () => {
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
                <p className="service-header-title">Design Fusion</p>
                <p className="service-header-description">Blending Creativity with Strategy for Impactful Design Solutions</p>
            </div>

      <div className='branding-description'>
        <p className='text'>Our Design Fusion services blend creativity with strategy to craft impactful designs.
        From personalized posters to business cards and portfolios, we create tailored solutions
        that capture your brand identity and leave a lasting impression.</p>
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
          title='Personalized Advertising Poster Creation' 
          description='Custom-designed posters tailored to your advertising needs.' 
         folderPath="Services/MainServices/DesignFusion" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Personal Portfolio Creation' 
          description="Be spoke portfolios that showcase your personal achievements and skills." 
         folderPath="Services/MainServices/DesignFusion" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Company Portfolio Making' 
          description='Professionally crafted company portfolios that highlight your business strengths.' 
         folderPath="Services/MainServices/DesignFusion" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Personalized Business Card Making' 
          description='Unique business cards that reflect your personal brand and professionalism.' 
         folderPath="Services/MainServices/DesignFusion" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Social Media Creatives & Advertising Materials' 
          description='Engaging designs for social media and other
          promotional content.' 
         folderPath="Services/MainServices/DesignFusion" 
        />
         <ServiceCard 
          img_url={serImg} 
          title='Brochures' 
          description='Informative and visually appealing brochures to effectively communicate your
          message.' 
         folderPath="Services/MainServices/DesignFusion" 
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
            description=" Understanding your specific design needs and objectives through a
            detailed discussion." 
          />
          <OurProcess
            title="Research and Concept Development"
            description="Conducting research and developing design concepts
            that align with your goals and target audience." 
          />
          <OurProcess
            title="Design Creation"
            description="Crafting initial designs for posters, portfolios, business cards, social media
            creatives, and brochures." 
          />
          <OurProcess
            title="Client Review"
            description=" Presenting the preliminary designs to you for feedback and suggestions." 
          />
          <OurProcess
            title="Revisions and Refinements"
            description="Incorporating your feedback and making necessary adjustments
            to the designs." 
          />
          <OurProcess
            title="Finalization"
            description="Finalizing the designs with attention to detail, ensuring they meet your
            expectations and standards." 
          />
           <OurProcess
            title="Approval and Delivery"
            description="Obtaining your approval and delivering the final designs in the
            required formats." 
          />
           <OurProcess
            title="Post-Delivery Support"
            description="Providing ongoing support and any additional modifications to
            ensure complete satisfaction with the final product." 
          />
        </div>
      </section>
      
      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        
        <OurProcess
          title="What types of personalized advertising posters can you create?"
          description="We design customized
          advertising posters tailored to your brand's unique needs, including promotional, event, and
          informational posters." 
        />
        <OurProcess
          title=" How do you approach creating a personal portfolio?"
          description="We work closely with you to
          understand your career goals and achievements, then design a visually compelling and
          professional portfolio that highlights your strengths and accomplishments." 
        />
         <OurProcess
          title=" Can you develop a company portfolio for different industries?"
          description="Yes, we create company
          portfolios for a wide range of industries, ensuring that each portfolio effectively showcases your
          business's capabilities and successes." 
        />
        <OurProcess
          title="What is the process for making personalized business cards?"
          description="We start by understanding
          your brand identity and preferences, then design business cards that reflect your personal or
          corporate style, ensuring a memorable first impression." 
        />
         <OurProcess
          title="How do you ensure the effectiveness of social media creatives?"
          description="Our team designs engaging
          and visually appealing social media creatives that align with your brand's voice and target
          audience, helping to boost your online presence and engagement." 
        />
         <OurProcess
          title="What elements are included in your brochure designs?"
          description="Our brochure designs incorporate
          compelling visuals, clear and concise content, and a layout that guides the reader through your
          information seamlessly." 
        />
         <OurProcess
          title="How long does it take to complete a design project?"
          description="The timeline for completing a design
          project varies based on its complexity and scope, but we always aim to deliver high-quality
          designs within a mutually agreed timeframe." 
        />
         <OurProcess
          title="Do you offer revisions on your designs?"
          description=" Yes, we offer revisions to ensure that the final
          designs meet your expectations and requirements. We collaborate with you throughout the
          process to achieve the best results." 
        />
      </div>
       
      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        
        <div className='ServicesGrid'>
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
          <ServiceCard 
            img_url={serImg} 
            title='Branding' 
            description='Develop a strong and cohesive brand identity that connects with your audience and sets you apart from the competition.' 
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

export default DesignFusion;
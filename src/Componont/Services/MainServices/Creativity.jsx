import React, { useRef, useState, useEffect } from 'react';
import './Creativity.css'; // Import CSS file
import ServiceHeader from './Components/Header/header';
import ServiceCard from './Components/ServiceCard/ServiceCard';
import OurProcess from './Components/ProcessSection/ProcessSection'; // Updated to OurProcess

import bgVideo from "../../../assets/Services/CreativityFinalBg.mp4";
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

const Creativity = () => {
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
                <p className="service-header-title">Creativity</p>
                <p className="service-header-description">Blending Creative Works and Strategy for Visual Brilliance</p>
            </div>

      <div className='branding-description'>
        <p className='text'>Our creative services are dedicated to bringing your vision to life through innovative and impactful visual
        and written content.</p>
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
          title='Video Editing' 
          description='Transform raw footage into polished and engaging videos that captivate audiences and convey
          your message effectively.' 
        folderPath="Services/MainServices/Creativity" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Photo Editing' 
          description="Enhance visual appeal and correct imperfections to create high-quality images for various purposes." 
        folderPath="Services/MainServices/Creativity" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Blog Writing' 
          description='Craft informative and engaging blog posts that establish thought leadership and drive organic traffic.' 
        folderPath="Services/MainServices/Creativity" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Content Writing' 
          description='Deliver compelling and well-crafted content for websites, marketing materials, social media, and more.' 
        folderPath="Services/MainServices/Creativity" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Resume Making' 
          description='Create professional and customized resumes that highlight your skills, experience, and
          achievements effectively.' 
        folderPath="Services/MainServices/Creativity" 
        />
         <ServiceCard 
          img_url={serImg} 
          title='Personalized Occasion Card Making' 
          description='Design unique and beautifully crafted cards for special occasions, adding a personal touch to your celebrations.' 
        folderPath="Services/MainServices/Creativity" 
        />
      </div>

      <p className='Title'>Our Process</p>
      <section className="our-process">
        <video className='process-video' id='process-video' autoPlay loop muted>
          <source src={processVideo} type='video/mp4' />
        </video>
        <div className='processes'>
          <OurProcess
            title="Vision and Goal Setting"
            description="Understand your vision and objectives to develop creative concepts that align with your goals." 
          />
          <OurProcess
            title="Concept Ideation"
            description=": Brainstorm and generate innovative ideas that resonate with your
            target audience." 
          />
          <OurProcess
            title="Design Execution"
            description="Execute creative projects with meticulous attention to detail,
            ensuring high-quality results." 
          />
          <OurProcess
            title="Collaborative Review"
            description=" Engage with clients to review drafts, gather feedback, and
            refine the work to meet expectations." 
          />
          <OurProcess
            title="Revisions and Refinements"
            description="Make necessary adjustments based on feedback to perfect the creative output." 
          />
          <OurProcess
            title="Finalization and Delivery"
            description="Deliver completed projects on time and in the desired
            formats, ready for implementation and distribution." 
          />
        </div>
      </section>
      
      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        
        <OurProcess
          title="What types of videos can you edit?"
          description="We edit a wide range of videos, including corporate
          presentations, promotional clips, event highlights, social media content, and more, tailored to
          meet specific client objectives and audience preferences." 
        />
        <OurProcess
          title="Can you create custom designs for special occasion cards?"
          description="Yes, we specialize in
          creating personalized occasion cards with custom designs, messages, and elements that make
          each card unique and meaningful." 
        />
         <OurProcess
          title="How do you ensure content quality and consistency?"
          description="We adhere to strict editorial
          guidelines, conduct quality checks, and collaborate closely with clients to maintain
          consistency in brand voice, messaging alignment, and content relevance across all projects." 
        />
        <OurProcess
          title="What is your process for developing a new logo design?"
          description="Our logo design process
          involves understanding your brand, brainstorming creative concepts, creating initial drafts,
          and refining the design based on client feedback to achieve a logo that accurately represents
          your brand identity." 
        />
         <OurProcess
          title="Can you provide examples of your past design work?"
          description="Yes, we can share a portfolio
          showcasing our diverse range of creative projects, including graphic designs, video edits,
          custom illustrations, and more, to demonstrate our expertise and versatility." 
        />
         <OurProcess
          title="How do you stay updated with current design trends?"
          description="Our team regularly follows
          industry news, attends design conferences, participates in workshops, and engages with the
          creative community to stay informed about the latest trends and techniques in design." 
        />
         <OurProcess
          title="What software and tools do you use for your creative projects?"
          description=" We use industrystandard software and tools such as Adobe Creative Suite (Photoshop, Illustrator, Premiere
          Pro, After Effects), Final Cut Pro, and other specialized applications to deliver high-quality
          creative outputs." 
        />
         <OurProcess
          title="How do you handle client feedback and revisions?"
          description="We value client feedback and work
          collaboratively to make necessary revisions. Our process includes multiple review stages
          where clients can provide input, ensuring the final product meets their expectations and
          requirements." 
        />
      </div>
       
      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        
        <div className='ServicesGrid'>
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
          <ServiceCard 
            img_url={serImg} 
            title='Experience Design' 
            description='Create seamless and intuitive user experiences that enhance customer satisfaction and loyalty across all digital touchpoints.' 
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

export default Creativity;
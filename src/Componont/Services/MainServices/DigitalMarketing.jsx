import React, { useRef, useState, useEffect } from 'react';
import './DigitalMarketing.css'; // Import CSS file
import ServiceHeader from './Components/Header/header';
import ServiceCard from './Components/ServiceCard/ServiceCard';
import OurProcess from './Components/ProcessSection/ProcessSection'; // Updated to OurProcess

import bgVideo from "../../../assets/Services/DigitalMarketingFinalBg.mp4";
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

const DigitalMarketing = () => {
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
                <p className="service-header-title">Digital Marketing</p>
                <p className="service-header-description">Solving the Digital Maze for Success</p>
            </div>

      <div className='branding-description'>
        <p className='text'>Our digital marketing services are designed to elevate your brand's online presence and drive
         measurable results. We combine strategic planning, creative execution, and data-driven insights
         to deliver comprehensive marketing solutions that resonate with your target audience and
         achieve your business goals.</p>
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
          title='Search Engine Optimisation (SEO)' 
          description='Optimize your website to improve its visibility in search engine results, driving organic traffic and
          enhancing your online presence.' 
          folderPath="Services/MainServices/DigitalMarketing" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Social Media Management' 
          description="Manage your social media platforms to build brand awareness, engage with your audience, and foster
          community growth." 
          folderPath="Services/MainServices/DigitalMarketing" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Performance Marketing' 
          description='Develop targeted marketing campaigns focused on delivering measurable results and optimizing return
          on investment (ROI).' 
          folderPath="Services/MainServices/DigitalMarketing" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Content Marketing' 
          description='Create valuable and relevant content that attracts, engages, and retains your audience, building brand
          loyalty and driving conversions.' 
          folderPath="Services/MainServices/DigitalMarketing" 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Marketing Automation' 
          description='Implement automation tools and strategies to streamline marketing processes, nurture leads, and
          enhance customer interactions.' 
          folderPath="Services/MainServices/DigitalMarketing" 
        />
         <ServiceCard 
          img_url={serImg} 
          title='Analytics' 
          description='Leverage data analytics to gain insights into marketing performance, audience behavior, and campaign
          effectiveness.' 
          folderPath="Services/MainServices/DigitalMarketing" 
        />
      </div>

      <p className='Title'>Our Process</p>
      <section className="our-process">
        <video className='process-video' id='process-video' autoPlay loop muted>
          <source src={processVideo} type='video/mp4' />
        </video>
        <div className='processes'>
          <OurProcess
            title="Discovery and Strategy"
            description="Understanding your business goals, target audience, and current digital presence and developing
            a tailored marketing strategy based on this understanding." 
          />
          <OurProcess
            title="Planning"
            description="Outlining the specific steps and resources needed for the marketing campaigns & setting clear
            objectives and timelines for each campaign." 
          />
          <OurProcess
            title="Implementation"
            description="Executing marketing campaigns across various channels, including SEO, social media, content
            marketing, and more as well as ensuring consistent brand messaging and engaging content." 
          />
          <OurProcess
            title="Monitoring and Optimization"
            description="Continuously tracking performance metrics and analyzing data and making data-driven
            adjustments to optimize campaigns for better results." 
          />
          <OurProcess
            title="Reporting"
            description="Providing detailed reports and insights and keeping you informed about campaign performance
            and ROI." 
          />
          <OurProcess
            title="Review and Refinement"
            description="Regularly reviewing overall strategy and campaign effectiveness and refining approaches to
            ensure continuous improvement and alignment with business goals." 
          />
        </div>
      </section>
      
      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        
        <OurProcess
          title="What is digital marketing, and why is it important for businesses?"
          description="Digital marketing refers to promoting products or services through digital platforms like
          websites, social media, email, and search engines. It's crucial in today's digital era because it
          allows businesses to reach a broader audience, engage with customers in real-time, and measure
          the effectiveness of their marketing efforts." 
        />
        <OurProcess
          title="How can digital marketing aid my business’s growth?"
          description="Digital marketing can fuel business growth by enhancing brand visibility, driving more traffic
          to your website, generating leads, boosting conversion rates, and fostering customer engagement
          and loyalty. When executed correctly, it can lower marketing expenses while maximizing return
          on investment (ROI). " 
        />
         <OurProcess
          title="What are the main elements of a successful digital marketing strategy?"
          description="A successful digital marketing strategy involves thorough research into your product, pricing,
          and target market, along with a comprehensive competitor analysis. It should also include a welldefined marketing plan and a strong sales funnel." 
        />
        <OurProcess
          title="How do I select the appropriate digital marketing channels for my business?"
          description="Choosing the right digital marketing channels depends on your target audience, business
          objectives, and budget. Researching where your audience spends their time online and tailoring
          your strategy to those platforms will help you focus your efforts effectively." 
        />
         <OurProcess
          title=" What is SEO, and how does it benefit my business?"
          description="SEO (Search Engine Optimization) involves optimizing your website to achieve higher
          rankings in search engine results pages (SERPs). It benefits your business by increasing organic
          traffic, enhancing visibility, and attracting potential customers actively searching for your
          products or services." 
        />
         <OurProcess
          title="How can social media marketing enhance my business’s online presence?"
          description="Social Media Marketing (SMM) promotes your brand to your stakeholders, conveying your
          brand's culture, offerings, unique selling points, and more to potential customers, employees, and other stakeholders." 
        />
         <OurProcess
          title="What is performance marketing, and how does it drive sales?"
          description="Performance marketing focuses on generating revenue through targeted campaigns designed to
          increase leads and sales. It prioritizes improving your return on ad spend (ROAS) and ultimately
          enhancing your overall ROI." 
        />
         <OurProcess
          title="How do I measure the success of my digital marketing campaigns?"
          description=" To measure success, track key performance indicators (KPIs) such as website traffic, conversion
          rates, click-through rates, engagement metrics, and ROI using tools like Google Analytics,
          Microsoft Clarity, and Luker Studio." 
        />
         <OurProcess
          title="What are common challenges businesses face in digital marketing?"
          description="Many businesses concentrate on campaign setup and technical implementation but overlook
          crucial marketing fundamentals. A successful digital campaign must integrate the four P’s of
          marketing (Product, Price, Place, and Promotion). Often, businesses fail to effectively combine
          these elements." 
        />
        <OurProcess
          title="How can marketing automation benefit my business?"
          description="Marketing automation streamlines omnichannel communication by creating automated user
          journeys to engage and retain customers. For example, you can send an automated WhatsApp
          message offering a customer an additional 10% discount on their birthday, enhancing customer
          satisfaction and loyalty." 
        />
      </div>
       
      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Experience Design' 
            description='Create seamless and intuitive user experiences that enhance customer satisfaction and loyalty across all digital touchpoints.' 
            folderPath="Services" 
          />
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

export default DigitalMarketing;
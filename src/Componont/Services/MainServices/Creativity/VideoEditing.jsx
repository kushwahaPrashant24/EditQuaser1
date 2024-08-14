import React, { useRef, useEffect, useState } from 'react';//Usestate
import "./VideoEditing.css"; // Import your CSS file
import NewButton from  "../../MainServices/Components/Button/NewButton";// Updated the path to correct level
import OurProcess from "../../MainServices/Components/ProcessSection/ProcessSection"; // Updated the path to correct level
import processVideo from "../../../../assets/Services/Companyprocess.mp4"; // Import the process video
import ServiceCard from "../../MainServices/Components/ServiceCard/ServiceCard"; // Updated the path to correct level
import bgsubservices from "../../../../assets/Services/wave 6.webp"; // Import background sub-services image
import serImg from "../../../../assets/Services/image.webp"; // Import service image
import OurImpact from './../Components/OurImpact/OurImpact';
import Form from './../Components/Form/Form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from './../../../Navbar/Lightbox';

const VideoEditing = () => {
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
          <h1>Video Editing</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>Video Editing</h2>
          <p>
          At editquasar, our video editing services are designed to transform raw footage into polished and
          engaging videos that captivate audiences and convey your message effectively. Whether you
          need corporate videos, promotional clips, or social media content, our team combines creativity
          with technical expertise to deliver high-quality video edits that align with your brand and engage viewers.
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
            title="Footage Review and Selection"
            description="Reviewing raw footage to select the best clips that align with the video's purpose and narrative." 
          />
          <OurProcess
            title="Editing and Sequencing"
            description="Editing footage, arranging
            sequences, and adding transitions, effects, and overlays to enhance visual appeal and storytelling." 
          />
          <OurProcess
            title="Audio Enhancement"
            description=" Optimizing audio quality, adding background music, voiceovers, and sound effects to complement the video's mood and message." 
          />
          <OurProcess
            title="Visual Effects and Graphics"
            description="Incorporating motion graphics, titles, lower thirds, and visual enhancements to reinforce branding and improve viewer engagement." 
          />
          <OurProcess
            title="Review and Finalization"
            description="Collaborating with clients to review drafts, gather feedback, and make revisions until the final video meets expectations for quality and content." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="What types of videos can you edit?"
          description="We edit various types of videos, including corporate
          presentations, product demos, event highlights, social media content, and educational videos, tailored to meet specific client objectives and audience preferences." 
        />
        <OurProcess
          title="How do you ensure video edits reflect our brand identity?"
          description=" We align video edits with your
          brand guidelines, incorporating colors, fonts, and visual elements that resonate with your brand identity and maintain consistency across all marketing channels." 
        />
        <OurProcess
          title="Can you add subtitles or captions to videos for accessibility?"
          description="Yes, we provide subtitle and
          caption services to enhance video accessibility, improve viewer engagement, and accommodate diverse audience preferences and needs." 
        />
        <OurProcess
          title="Do you offer video editing packages for ongoing projects?"
          description="Yes, we offer customized video
          editing packages for recurring projects, providing flexible pricing and tailored services based on project scope, frequency, and client requirements." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Photo Editing' 
            description='Enhance and retouch photos to achieve a professional and appealing look.' 
            folderPath="Services/MainServices/Creativity" 
          />
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

export default VideoEditing;

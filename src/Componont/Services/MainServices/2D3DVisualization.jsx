import React, { useRef, useEffect, useState } from 'react';//Usestate
import './2D3DVisualization.css'; // Import your CSS file
import NewButton from "../MainServices/Components/Button/NewButton";
import OurProcess from './Components/ProcessSection/ProcessSection'; // Updated to OurProcess
import processVideo from "../../../assets/Services/Companyprocess.mp4";
import ServiceCard from './Components/ServiceCard/ServiceCard';
import bgsubservices from '../../../assets/Services/wave 12.webp';
import serImg from '../../../assets/Services/image.webp';
import OurImpact from './Components/OurImpact/OurImpact';
import Form from './Components/Form/Form';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lightbox from '../../Navbar/Lightbox';



const Visualization = () => {
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
          <h1>2D/3D Visualization</h1>
          {/* Add more content as needed */}
        </div>
      </section>
      <section className="content-section">
        <div className="content-inner">
          <h2>2D/3D Visualization: Bringing Ideas to Life with Precision</h2>
          <p>
          Our 2D and 3D visualization services transform your concepts into engaging visuals that
          captivate your audience. By utilizing the latest technologies, we create stunning visualizations
          that effectively communicate your ideas and leave a lasting impact.
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
            title="Research"
            description="We begin with an idea. What do you want to achieve? We'll generate ideas and develop a tailored plan,
            focusing on identifying your target audience, defining your goals, and analyzing relevant trends and
            competitors." 
          />
          <OurProcess
            title="Concept and Script"
            description="We bring your ideas to life through storyboarding, ensuring the flow of your content is captivating by
            visually mapping out the animation's characters, setting, and plot. Additionally, we'll craft a script that is
            clear, concise, and engaging." 
          />
          <OurProcess
            title="Storyboard"
            description="We design your 3D objects. If your content requires 3D elements, we'll create them using the latest
            software and techniques, developing detailed 3D models of characters, settings, and props. Additionally,
            we'll animate your 2D components with advanced animation tools." 
          />
          <OurProcess
            title="Styling"
            description="We integrate your 3D and 2D elements. This is where the magic unfolds! We'll blend your components
            in a customized manner, adding color, texture, and style to create something genuinely distinctive." 
          />
          <OurProcess
            title="Voiceover"
            description="We finalize your animation. In this last step, we generate the final images or video from our computer
            data by incorporating sound effects, voice-overs, music, and other finishing touches." 
          />
           <OurProcess
            title="Animation"
            description="We utilize cutting-edge software and techniques to infuse movement and fluidity into the visuals,
            animating characters, objects, and environments to create a dynamic and engaging experience." 
          />
           <OurProcess
            title="Sound Effects"
            description="We incorporate sound effects to enhance and bring your animation to life. By carefully selecting a
            variety of sounds, we create a realistic and immersive experience tailored to the animation and its audience." 
          />
           <OurProcess
            title="Delivery"
            description="We ensure the final product is delivered on schedule and within budget, keeping you informed of our
            progress every step of the way. Our commitment is to provide you with the highest level of customer service." 
          />
        </div>
      </section>

      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        <OurProcess
          title="What is the difference between 2D and 3D visualization?"
          description="2D visualization involves flat
          graphics, while 3D visualization creates depth and realism, making it ideal for more complex and
          detailed representations."/>
        <OurProcess
          title="How can 2D/3D visualization benefit my business?"
          description="These visualizations can enhance
          presentations, marketing materials, and product designs by providing clear and engaging visuals
          that effectively communicate your ideas." 
        />
        <OurProcess
          title="What industries can benefit from 2D/3D visualization services?"
          description="Industries such as
          architecture, real estate, product design, and entertainment can significantly benefit from these
          services." 
        />
        <OurProcess
          title="How long does the visualization process take?"
          description="The timeline varies based on the complexity of the project
          but typically ranges from a few weeks to a couple of months." 
        />
      </div>

      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Graphic Design' 
            description='Convey complex ideas, data, or instructions in a visually appealing and easily understandable manner.' 
            folderPath="Services/MainServices" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Brand Identity' 
            description='Create a cohesive and recognizable brand image that resonates with your target audience.' 
            folderPath="Services/MainServices" 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Brand Consulting' 
            description='Leverage expert insights to refine and elevate your brand strategy for maximum impact.' 
            folderPath="Services/MainServices" 
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

export default Visualization;

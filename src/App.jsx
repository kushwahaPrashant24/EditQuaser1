import { useState } from 'react';
import './App.css';
import ResponsiveAppBar from './Componont/Navbar/Nav';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../src/Componont/Home/Home';
import Careers from '../src/Componont/Careers/Careers';
import Contact from '../src/Componont/Contact/Contact';
import Services from './Componont/Services/Services';
import EQCourses from './Componont/EQ Courses/EQCourses';
// import More from './Componont/More/More';
import Footer from './Footer/Footer';
import About from './Componont/About Us/About';
import Industries from './Componont/Industries/Industries';
import Branding from './Componont/Services/MainServices/Branding';
import BrandIdentity from './Componont/Services/MainServices/BrandIdentity'; // Import the BrandIdentity component
import BrandConsulting from './Componont/Services/MainServices/BrandConsulting';
import LogoDesign from './Componont/Services/MainServices/LogoDesign';
import Visualization from './Componont/Services/MainServices/2D3DVisualization';
import GraphicDesign from './Componont/Services/MainServices/GraphicDesign';
import DesignFusion from './Componont/Services/MainServices/DesignFusion';
import PersonalizedAPC from './Componont/Services/MainServices/DesignFusion/PersonalizedAPC';
import PersonalPc from './Componont/Services/MainServices/DesignFusion/PersonalPc';
import CompanyPm from './Componont/Services/MainServices/DesignFusion/CompanyPm';
import PersonalizedBCM from './Componont/Services/MainServices/DesignFusion/PersonalizedBCM';
import SocialMedia from './Componont/Services/MainServices/DesignFusion/SocialMedia';
import Brochures from './Componont/Services/MainServices/DesignFusion/Brochures';
import DigitalMarketing from './Componont/Services/MainServices/DigitalMarketing';
import SEO from './Componont/Services/MainServices/DigitalMarketing/SEO';
import SMM from './Componont/Services/MainServices/DigitalMarketing/SMM';
import PerformanceM from './Componont/Services/MainServices/DigitalMarketing/PerformanceM';
import ContentM from './Componont/Services/MainServices/DigitalMarketing/ContentM';
import MarketingA from './Componont/Services/MainServices/DigitalMarketing/MarketingA';
import Analytics from './Componont/Services/MainServices/DigitalMarketing/Analytics';
import ExperienceDesign from './Componont/Services/MainServices/ExperienceDesign';
import UIDesign from './Componont/Services/MainServices/ExperienceDesign/UIDesign';
import WebsiteDesign from './Componont/Services/MainServices/ExperienceDesign/WebsiteDesign';
import MobileExperience from './Componont/Services/MainServices/ExperienceDesign/MobileExperience';
import CommerceExperience from './Componont/Services/MainServices/ExperienceDesign/CommerceExperience';
import HMI from './Componont/Services/MainServices/ExperienceDesign/HMI';
import AandD from './Componont/Services/MainServices/ExperienceDesign/AandD';
import Technology from './Componont/Services/MainServices/Technology';
import DataAndAnalytic from './Componont/Services/MainServices/Technology/DataAndAnalytic';
import WebDevelopment from './Componont/Services/MainServices/Technology/WebDevelopment';
import MobileApp from './Componont/Services/MainServices/Technology/MobileApp';
import Ecommerce from './Componont/Services/MainServices/Technology/Ecommerce';
import AIML from './Componont/Services/MainServices/Technology/AIML';
import CyberSecurity from './Componont/Services/MainServices/Technology/CyberSecurity';
import Creativity from './Componont/Services/MainServices/Creativity';
import VideoEditing from './Componont/Services/MainServices/Creativity/VideoEditing';
import PhotoEditing from './Componont/Services/MainServices/Creativity/PhotoEditing';
import BlogWriting from './Componont/Services/MainServices/Creativity/BlogWriting';
import ContentWriting from './Componont/Services/MainServices/Creativity/ContentWriting';
import ResumeMaking from './Componont/Services/MainServices/Creativity/ResumeMaking';
import POCM from './Componont/Services/MainServices/Creativity/POCM';
import bgvideo from './assets/Services/ourimpact1.mp4';
import bgballvideo from './assets/Services/ballbg.mp4';
import Lightbox from './Componont/Navbar/Lightbox';



const router = createBrowserRouter([
  {
    path: "/",
    element: <><ResponsiveAppBar /><Home /><Footer /></>,
  },


  {
    path: "Services",
    element: <><ResponsiveAppBar /><section><Services /><Footer /></section></>,
  },




  {
    path: "EQCourses",
    element: <><ResponsiveAppBar /><section>
      <EQCourses
      bgvideo={bgvideo} 
      title="Elevate Your Skills to New Heights" 
      description="Unlock a world of knowledge and expertise with our upcoming EQ Courses. 
                    Designed to empower professionals and enthusiasts alike, our courses cover 
                    a diverse range of subjects tailored to enhance your career and personal growth. 
                    Stay tuned for innovative, industry-relevant content delivered by expert instructors."
      />
      <Footer />
      </section></>,
  },
  
  
  {
    path: "EQEvents",
    element: <><ResponsiveAppBar /><section>
      <EQCourses
      bgvideo={bgballvideo} 
      title="Unleashing Innovation and Collaboration" 
      description="Get ready for a series of inspiring events designed to bring together thought leaders, industry experts, and
       passionate professionals. From workshops to conferences, our EQ Events will spark creativity and foster meaningful connections. 
       Stay tuned for updates on our exciting lineup."
      />
      <Footer />
      </section></>,
  },

  {
    path: "EQMerchandise",
    element: <><ResponsiveAppBar /><section>
      <EQCourses
      bgvideo={bgballvideo} 
      title="Show Your EQ Pride" 
      description="
      Express your passion for EditQuasar with our exclusive merchandise. 
      From stylish apparel to unique accessories, our EQ Merchandise offers something for every fan. 
      Perfect for both personal use and gifting, these items let you carry a piece of EQ wherever you go."
      />
      <Footer />
      </section></>,
  },

  {
    path: "EQBlogs",
    element: <><ResponsiveAppBar /><section>
      <EQCourses
      bgvideo={bgvideo} 
      title="Insightful Articles and Expert Opinions" 
      description="
      Dive into a treasure trove of knowledge with our EQ Blogs. 
      Featuring articles, insights, and opinions from industry leaders, 
      our blogs are designed to keep you informed and inspired. Stay updated on the latest trends, tips, 
      and stories from the world of business and technology."
      />
      <Footer />
      </section></>,
  },

  {
    path: "SuccessStories",
    element: <><ResponsiveAppBar /><section>
      <EQCourses
      bgvideo={bgballvideo} 
      title="Inspiring Journeys and Achievements" 
      description="Discover the remarkable journeys of individuals and businesses who have reached new heights 
      with the help of EditQuasar. Our Success Stories showcase real-life examples of success, innovation, and transformation.
       Get inspired by their achievements and learn from their experiences."
      />
      <Footer />
      </section></>,
  },

  {
    path: "HallofFame",
    element: <><ResponsiveAppBar /><section>
      <EQCourses
      bgvideo={bgballvideo} 
      title="Celebrating Excellence and Impact" 
      description="
      Celebrate the extraordinary contributions and accomplishments of our community members.
      The EQ Hall of Fame honors those who have made a significant impact in their fields and within our community.
      Join us in recognizing and applauding their outstanding efforts."
      />
      <Footer />
      </section></>,
  },
  
  
  
  
  
  {
    path: "Industries",
    element: <><ResponsiveAppBar /><Industries /><Footer /></>,
  },
  {
    path: "Careers",
    element: <><ResponsiveAppBar /><Careers /><Footer /></>,
  },
  {
    path: "Contact",
    element: <><ResponsiveAppBar /><Contact /><Footer /></>,
  },
  {
    path: "About",
    element: <><ResponsiveAppBar /><About /><Footer /></>,
  },
  {
    path: "Services/Branding",
    element: <><ResponsiveAppBar /><Branding /><Footer /></>,
  },
  {
    path: "Services/MainServices/BrandIdentity", // Add the path for BrandIdentity
    element: <><ResponsiveAppBar /><BrandIdentity /><Footer /></>,
  },
  {
    path: "Services/MainServices/BrandConsulting", // Add the path for BrandConsulting
    element: <><ResponsiveAppBar /><BrandConsulting /><Footer /></>,
  },
  {
    path: "Services/MainServices/LogoDesign", // Add the path for LogoDesign
    element: <><ResponsiveAppBar /><LogoDesign /><Footer /></>,
  },
  {
    path: "Services/MainServices/2D/3DVisualization", // Add the path for 2d/3d Visualization
    element: <><ResponsiveAppBar /><Visualization /><Footer /></>,
  },
  {
    path: "Services/MainServices/GraphicDesign", // Add the path for Graphic Design
    element: <><ResponsiveAppBar /><GraphicDesign /><Footer /></>,
  },
  {
    path: "Services/DesignFusion", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><DesignFusion /><Footer /></>,
  },
  {
    path: "Services/MainServices/DesignFusion/PersonalizedAdvertisingPosterCreation", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><PersonalizedAPC /><Footer /></>,
  },
  {
    path: "Services/MainServices/DesignFusion/PersonalPortfolioCreation", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><PersonalPc /><Footer /></>,
  },
  {
    path: "Services/MainServices/DesignFusion/CompanyPortfolioMaking", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><CompanyPm /><Footer /></>,
  },
  {
    path: "Services/MainServices/DesignFusion/PersonalizedBusinessCardMaking", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><PersonalizedBCM /><Footer /></>,
  },
  {
    path: "Services/MainServices/DesignFusion/SocialMediaCreatives&AdvertisingMaterials", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><SocialMedia /><Footer /></>,
  },
  {
    path: "Services/MainServices/DesignFusion/Brochures", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><Brochures /><Footer /></>,
  },
  {
    path: "Services/DigitalMarketing", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><DigitalMarketing /><Footer /></>,
  },
  {
    path: "Services/MainServices/DigitalMarketing/SearchEngineOptimization(SEO)", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><SEO /><Footer /></>,
  },
  {
    path: "Services/MainServices/DigitalMarketing/SocialMediaManagement", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><SMM /><Footer /></>,
  },
  {
    path: "Services/MainServices/DigitalMarketing/PerformanceMarketing", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><PerformanceM /><Footer /></>,
  },
  {
    path: "Services/MainServices/DigitalMarketing/ContentMarketing", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><ContentM /><Footer /></>,
  },
  {
    path: "Services/MainServices/DigitalMarketing/MarketingAutomation", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><MarketingA /><Footer /></>,
  },
  {
    path: "Services/MainServices/DigitalMarketing/Analytics", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><Analytics /><Footer /></>,
  },
  {
    path: "Services/ExperienceDesign", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><ExperienceDesign /><Footer /></>,
  },
  {
    path: "Services/MainServices/ExperienceDesign/UI/UXDesign", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><UIDesign /><Footer /></>,
  },
  {
    path: "Services/MainServices/ExperienceDesign/WebsiteDesign", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><WebsiteDesign /><Footer /></>,
  },
  {
    path: "Services/MainServices/ExperienceDesign/MobileExperience", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><MobileExperience /><Footer /></>,
  },
  {
    path: "Services/MainServices/ExperienceDesign/CommerceExperience", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><CommerceExperience /><Footer /></>,
  },
  {
    path: "Services/MainServices/ExperienceDesign/HumanMachineInterface(HMI)", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><HMI /><Footer /></>,
  },
  {
    path: "Services/MainServices/ExperienceDesign/Applications&Dashboard", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><AandD /><Footer /></>,
  },
  {
    path: "Services/Technology", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><Technology /><Footer /></>,
  },
  {
    path: "Services/MainServices/Technology/Data&Analytics", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><DataAndAnalytic /><Footer /></>,
  },
  {
    path: "Services/MainServices/Technology/WebDevelopment", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><WebDevelopment /><Footer /></>,
  },
  {
    path: "Services/MainServices/Technology/MobileAppDevelopment", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><MobileApp /><Footer /></>,
  },
  {
    path: "Services/MainServices/Technology/E-commerce", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><Ecommerce /><Footer /></>,
  },
  {
    path: "Services/MainServices/Technology/AI&MachineLearning(ML)", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><AIML /><Footer /></>,
  },
  {
    path: "Services/MainServices/Technology/CyberSecurity", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><CyberSecurity /><Footer /></>,
  },
  {
    path: "Services/Creativity", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><Creativity /><Footer /></>,
  },
  {
    path: "Services/MainServices/Creativity/VideoEditing", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><VideoEditing /><Footer /></>,
  },
  {
    path: "Services/MainServices/Creativity/PhotoEditing", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><PhotoEditing /><Footer /></>,
  },
  {
    path: "Services/MainServices/Creativity/BlogWriting", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><BlogWriting /><Footer /></>,
  },
  {
    path: "Services/MainServices/Creativity/ContentWriting", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><ContentWriting /><Footer /></>,
  },
  {
    path: "Services/MainServices/Creativity/ResumeMaking", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><ResumeMaking /><Footer /></>,
  },
  {
    path: "Services/MainServices/Creativity/PersonalizedOccasionCardMaking", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><POCM /><Footer /></>,
  },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

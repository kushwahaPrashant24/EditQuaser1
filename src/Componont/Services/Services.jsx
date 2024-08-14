
import React, { useState,useRef, useEffect } from "react";
import Counter from "./counter";
import Increase from "./increase";
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import "./Services.css";
import { AiFillCloseCircle } from "react-icons/ai";
import service from "../../assets/final background for service section.mp4";
import logo from "../../assets/logo-noname.png";
import brand1 from "../../assets/BrandIdentity.png";
import brand2 from "../../assets/Brand Consulting.png";
import brand3 from "../../assets/2d design.png";
import brand4 from "../../assets/Logo design.png";
import brand5 from "../../assets/graphic design.png";



// for 2 sub service
import Brochers from "../../assets/Brochers.jpg";
import Bussiness from  "../../assets/bussines card.png";
import Company from "../../assets/company portfolio.jpg";
import Personal from "../../assets/personal portfolio.jpg";
import Adv from "../../assets/second1.jpg";
import social from "../../assets/social media.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowRoundDown } from "react-icons/io";
// for 3 sub service
import Seo from "../../assets/seo.jpg";
import Performance from "../../assets/performance.jpg";
import Market from "../../assets/market.jpg";
import Mang from "../../assets/management.jpg";
import Content from "../../assets/content.jpg";
import Ana from "../../assets/Analytics.jpg";

// 4 sub service
import Appli from "../../assets/Application.jpg";
import Comm from "../../assets/commerce.jpg";
import HMI from "../../assets/HMI.jpg";
import Mob from "../../assets/mobile.jpg";
import UI from "../../assets/UI.jpg";
import Web from "../../assets/website.jpg";
// 5 sub service
import Ai from "../../assets/Ai.jpg";
import Cyber from "../../assets/cyber.jpg";
import Data from "../../assets/data.jpg";
import E_comm from "../../assets/E-comm.jpg";
import M_dev from "../../assets/mobile dev.jpg";
import W_dev from "../../assets/web dev.jpg";
// 6 sub service 
import Blog from "../../assets/blog.jpg";
import Cards from "../../assets/card.jpg";
import Photo from "../../assets/photo.jpg";
import Resume from "../../assets/resume.jpg";
import Videos from "../../assets/video.jpg";
import Write from "../../assets/Writing.jpg";

import ReviewSt from "../../Componont/Home/Homepage/Review/ReviewStructure";




export default function Services() {

  const services = [
    
    {
      imgClass: "img1",
      title: "Branding",
      description: "Build a powerful brand with EditQuasar's comprehensive branding solutions. We create unique identities that resonate with your target audience.",
      content1:"Explore Branding",
      content2:"Include Branding",
      mainLogo:Mang,
    },
    {
      imgClass: "img2",
      title: "Design Fusion",
      description: "Transform your ideas into captivating visuals with EditQuasar's Design Fusion package. We provide comprehensive design solutions tailored to your needs.",
      content1:"Explore Design",
      content2:"Include Design",
    },
    {
      imgClass: "img3",
      title: "Digital Marketing",
      description: "Boost your online presence with EditQuasar's Digital Marketing solutions. We deliver targeted strategies to reach and engage your audience.",
      content1:"Explore Digital Marketing",
      content2:"Include Digital Marketing",
    },
    {
      imgClass: "img4",
      title: "Experience Design",
      description: "Create intuitive and engaging digital experiences with EditQuasar's Experience Design package. We design interfaces that delight users.",
      content1:"Explore Experience",
      content2:"Include Experience",
    },
    {
      imgClass: "img5",
      title: "Technology",
      description: "Empower your business with EditQuasar's Technology solutions. We offer innovative tech services to meet your unique needs.",
      content1:"Explore Technology",
      content2:"Include Technology",
    },
    {
      imgClass: "img6",
      title: "Creativity",
      description: "Turn your ideas into stunning content with EditQuasar's Creativity package. We bring your creative visions to life.",
      content1:"Explore Creativity",
      content2:"Include Creativity",
    },
  ];

  const absol = [
     [     
            {   
                image: brand1,
                heading: "Brand Identity:",
                subtitle: "Develop a strong and consistent brand identity with EditQuasar. Our experts craft a memorable presence for your business.",
                btntext: "Service Details",
                id:"first1"
            },
            {   
                image: brand2,
                heading: "Brand Consulting:",
                subtitle: "Receive expert advice to enhance your brand’s market presence. Our consulting services help align your brand with its mission.",
                btntext: "Service Details",
                id:"first2"
            },
            {   
                image: brand4,
                heading: "Logo Design:",
                subtitle: "Make a memorable impression with EditQuasar’s meaningful logo design. Our creative team ensures a logo that resonates.",
                btntext: "Service Details",
                id:"first3"
            },
            {   
                image: brand3,
                heading: "2D/3D Visualization:",
                subtitle: "Bring your ideas to life with stunning 2D and 3D visualizations. We create visuals that captivate and engage.",
                btntext: "Service Details",
                id:"first4"
            },
            {   
                image: brand5,
                heading: "Graphic Design:",
                subtitle: "Elevate your brand with our exceptional graphic design services. We create visuals that communicate your brand’s message effectively.",
                btntext: "Service Details",
                id:"first5"
            }
        ],
        [ 
            {
                image: Adv,
                heading: "Personalized Advertising Poster Creation:",
                subtitle: "Design impactful posters tailored to your specific needs. Our posters capture attention and convey your message effectively.",
                btntext: "Service Details",
                id:"second1"
            },
            {
                image: Personal,
                heading: "Personal Portfolio Creation:",
                subtitle: "Build professional portfolios that highlight your achievements. Our personalized portfolios make you stand out.",
                btntext: "Service Details",
                id:"second4"
            },
            {
                image: Company,
                heading: "Company Portfolio Making:",
                subtitle: "Showcase your company’s success with comprehensive portfolios. We create portfolios that impress and inform.",
                btntext: "Service Details",
                id:"second5"
            },
            {
                image: Bussiness,
                heading: "Personalized Business Card Making:",
                subtitle: "Create unique business cards that leave a lasting impression. Our custom designs reflect your professional identity.",
                btntext: "Service Details",
                id:"second6"
            },
            {
                image: social,
                heading: "Social Media Creatives & Other Advertising Materials:",
                subtitle: "Develop engaging creatives for effective social media campaigns. Our advertising materials drive engagement and visibility.",
                btntext: "Service Details",
                id:"second2"


            },
            {
              image: Brochers,
              heading: "Brochures:",
              subtitle: "Design informative and visually appealing brochures. Our brochures communicate your message clearly and attractively.",
              btntext: "Service Details",
              id:"second3"
            }
        ],
     [  
          {
              image: Seo,
              heading: "Search Engine Optimization:",
              subtitle: "Enhance your online visibility with our SEO services. We help you rank higher and attract more traffic.",
              btntext: "Service Details",
              id:"third1"
          },
          {
              image: Mang,
              heading: "Social Media Management:",
              subtitle: "Manage your social presence and engage with your audience. Our experts handle your social media for maximum impact.",
              btntext: "Service Details",
              id:"third2"
          },
          {
              image: Performance,
              heading: "Performance Marketing:",
              subtitle: "Drive targeted results with our data-driven marketing strategies. We optimize your campaigns for the best ROI.",
              btntext: "Service Details",
              id:"third3"
          },
          {
              image: Content,
              heading: "Content Marketing:",
              subtitle: "Create valuable content that resonates with your audience. Our content marketing boosts engagement and brand loyalty.",
              btntext: "Service Details",
              id:"third4"
          },
          {
              image: Market,
              heading: "Marketing Automation:",
              subtitle: "Streamline your marketing efforts with automated solutions. We implement automation for efficient and effective campaigns.",
              btntext: "Service Details",
              id:"third5"
          },
          {
            image: Ana,
            heading: "Analytics:",
            subtitle:"Gain insights and measure the effectiveness of your campaigns. Our analytics services provide actionable data." ,
            btntext: "Service Details",
            id:"third6"
          }
      ],
      [ 
        {
            image: UI,
            heading: "UI/UX Design:",
            subtitle: "Enhance user experiences with our intuitive UI/UX designs. We make interactions seamless and enjoyable.",
            btntext: "Service Details",
            id:"forth1"
        },
        {
            image: Web,
            heading: "Website Design:",
            subtitle: "Create stunning and user-friendly websites with our design services. We ensure your site is both beautiful and functional.",
            btntext: "Service Details",
            id:"forth2"
        },
        {
            image: Mob,
            heading: "Mobile Experience:",
            subtitle: "Optimize mobile interfaces for seamless user interactions. Our designs enhance mobile usability and engagement.",
            btntext: "Service Details",
            id:"forth3"
        },
        {
            image: Comm,
            heading: "Commerce Experience:",
            subtitle: "Build effective and engaging e-commerce platforms. Our designs drive sales and improve user satisfaction.",
            btntext: "Service Details",
            id:"forth4"
        },
        {
            image: HMI,
            heading: "Human Machine Interface (HMI):",
            subtitle: "Design advanced interfaces for seamless human-machine interaction. We create intuitive and efficient HMIs.",
            btntext: "Service Details",
            id:"forth5"
        },
        {
          image:Appli,
          heading: "Applications & Dashboard:",
          subtitle: "Develop interactive applications and dashboards. Our designs provide clear, actionable insights and user-friendly experiences.",
          btntext: "Service Details",
          id:"forth6"

        }
    ],
     [ 
      {
          image: Data,
          heading: "Data & Analytics:",
          subtitle: "Leverage data for actionable insights and informed decisions. Our analytics services help you understand and grow your business.",
          btntext: "Service Details",
          id:"fifth1"
      },
      {
          image: W_dev,
          heading: "Web Development:",
          subtitle: "Build robust and scalable web solutions with our development services. We create websites that are secure and efficient.",
          btntext: "Service Details",
          id:"fifth2"
      },
      {
          image: M_dev,
          heading: "Mobile App Development:",
          subtitle: "Create user-friendly mobile applications with our expert team. We develop apps that enhance user experience and engagement.",
          btntext: "Service Details",
          id:"fifth3"
      },
      {
          image: E_comm,
          heading: "E-commerce:",
          subtitle: "Develop effective e-commerce platforms to boost sales. Our solutions are tailored to your business needs.",
          btntext: "Service Details",
          id:"fifth4"
      },
      {
          image: Ai,
          heading: "AI & Machine Learning (ML):",
          subtitle: "Integrate advanced AI and ML solutions into your operations. We help you stay ahead with cutting-edge technology.",
          btntext: "Service Details",
          id:"fifth5"
      },
      {
        image: Cyber,
        heading: "Cyber Security:",
        subtitle: "Protect your digital assets with our advanced cybersecurity measures. We ensure your data and systems are secure.",
        btntext: "Service Details",
        id:"fifth6"
      }
  ],
   [  
      {
          image: Videos,
          heading: "Video Editing:",
          subtitle: "Create professional and engaging videos with our editing services. We enhance your content to captivate your audience.",
          btntext: "Service Details",
          id:"sixth1"
      },
      {
          image: Photo,
          heading: "Photo Editing:",
          subtitle: "Enhance images to perfection with our photo editing services.We make your visuals look their best.",
          btntext: "Service Details",
          id:"sixth2"
      },
      {
          image: Blog,
          heading: "Blog Writing:",
          subtitle: "Craft compelling and informative blog posts with our writing services. We help you connect with your audience.",
          btntext: "Service Details",
          id:"sixth3"
      },
      {
          image: Write,
          heading: "Content Writing:",
          subtitle: "Produce high-quality content that engages readers. Our writing services boost your brand’s visibility and credibility.",
          btntext: "Service Details",
          id:"sixth4"
      },
      {
          image: Resume,
          heading: "Resume Making:",
          subtitle: "Create unique cards for any occasion. Our personalized designs add a special touch to your celebrations.",
          btntext: "Service Details",
          id:"sixth5"
      },
      {
        image: Cards,
        heading: "Personalized Occasion Card Making:",
        subtitle:"Create unique cards for any occasion. Our personalized designs add a special touch to your celebrations.",
        btntext:"Service Details",
        id:"sixth6"
      }
  ]
];




  const [active, setActive] = useState('navBar')

  
  // function to toggle navbar 
  const showNav = () => {
    setActive('navBar activenavBar');
  }

  const removeNavbar = () => {
    setActive('navBar');
    
  }
  const [ind,setInd]=useState(0);

  const slider = useRef(null);

  let f=0;
  // const downslide =()=>{
  //   slider.current.style.transform='translateY(-230px)';  
  // }

  const downslide = () => {
    
    // setCurrentSlide((prevSlide) => (prevSlide + 1) % absol[ind].length);
    slider.current.scrollIntoView({
      behavior: "smooth",
      block:"nearest" ,
    });
  };
 
  
  
  

  const con=useRef();

  if (con.current && (ind === 0 || ind === 1)) {
    con.current.style.transform = 'translateY(50px)';
  }
  else if(con.current && (ind === 2 || ind === 3)) {
    con.current.style.transform = 'translateY(160px)';
  }
  else if(con.current && (ind === 4 || ind === 5)) {
    con.current.style.transform = 'translateY(280px)';
  }

  return (
    <>
      <div>
        {/*   video section */}
        <section>
        <div className="relative my-8  h-[100vh] -mt-36 mb-56  ">
          <video autoPlay loop muted>
            <source src={service} type="video/mp4" />
          </video>
          <div className="absolute top-[25%] left-[11%]  w-[50%] h-[60%] flex flex-col justify-evenly videosection">
            <p className="text-xl   sm:text-3xl lg:text-6xl text-richblack-5  ">
              Creating Experiences That Inspire:
            </p>

            <p className="text-sm hidden md:block  text-richblack-5 sm:text-lg"style={{fontSize:"1.1vw"}}>
              We specialize in the art and science of designing, building,
              and marketing, mastering every detail to deliver exceptional
              results.
            </p>

          </div>
        </div>
        </section>
        {/* service section */}
        <div className="services-section">
          <p className="text text-center font-bold">
            Our Services
          </p>
          <div className="max-w-maxContent w-11/12 px-5 mx-auto">
            <p className="text-lg text-center  font-bold text-white md:text-5xl pb-2 text2">
              WHAT WE <span className="text-lg md:text-5xl text-[#bcc8eb] ">OFFER </span>
            </p>
            <p className=" text-center font-bold  text-white  md:pb-4 para">
              Elevate Your Expectations.
            </p>


            <p className="text-center text-white pb-4 "  style={{fontSize:"1.1vw",width:"75vw"}}>
              Welcome to EditQuasar, your premier destination for a comprehensive suite of digital services designed  to amplify your online presence and fuel your success in the digital world. Our team of highly skilled  professionals is committed to delivering innovative solutions that are precisely tailored to meet your  unique needs. We take pride in our client-centric approach, ensuring that we consistently provide top tier services that surpass expectations. Collaborate with us to unlock your digital potential and embark  on a path of sustained growth and success in today’s dynamic digital landscape.

            </p>
            <div className="w-full md:w-auto flex justify-center md:justify-start counter">
              <Counter />
            </div>



          </div>
          <div className="max-w-maxContent w-11/12 px-5 mx-auto" style={{position:"relative",left:"2.5vw"}}>
            <p className="text-lg text-center  font-bold text-white md:text-6xl pb-3 pt-20 text3">
              Unleashing Digital <span className="text-lg md:text-6xl text-[#bcc8eb]">Excellence</span>
            </p>
            <p className=" text-center  font-bold  text-white  md:pb-4 para1">
              Explore our comprehensive suite of top-tier digital services today.
            </p>

          </div>

        </div>


        <div className="wrapper">
          <div className="cols">
            {services.map((item, index) => (
              <div className="col" key={index}>
                <div className="container">
                  
                  
                  <div className={`front ${item.imgClass}`}>
                    <img src={item.mainLogo} alt="" style={{position:"absolute",height:"5vw",width:"5vw",left:"5vw",top:"3vh",zIndex:"9",borderRadius:"50%",backgroundSize:"cover",backgroundPosition:"center",objectFit:"cover"}}/>
                    <div className="inner">
                      <p className="rp">{item.title}:</p>
                      <span>
                        {item.description}
                      </span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <div className="flex flex-col justify-center  items-center  my-8">
                        <button className="bg-blue-200 mx-auto   hover:bg-blue-900 text-richblack-5 font-bold  rounded-lg mb-6 mt-6 px-3 py-1 transition-transform duration-300 transform hover:-translate-y-3">
                          {item.content1}
                        </button>
                        <img
                          src={logo}
                          alt="logo"
                          width={300}
                          className="absolute z-[-50] "
                        />
                        <button onClick={()=>{setInd(index);showNav()}} className="bg-blue-200  mx-aut o hover:bg-blue-900 text-richblack-5 font-bold py-1 px-3 rounded-lg mb-5 transition-transform duration-300 transform hover:-translate-y-3">
                          {item.content2}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            ))}
          </div>

          <div className={active} ref={con}>
            <div className="container1" id="container1" >
              <div className="cards" >
                {absol[ind].map((item,index) => (
                  <div className="box" id={item.id}  key={index} ref={slider} >
                    <div className="head">
                      
                      <img src={item.image} alt="logo" className="logo" />
                      
                      
                      <h2 className="headingg">{item.heading}</h2>
                    </div>
                    <span className="support">{item.subtitle}</span>
                    <button className="btn1">{item.btntext}<span> <MdKeyboardArrowRight /></span> </button>
                  </div>

                ))}

              </div>
              <div onClick={removeNavbar} className="closeNavbar">
                <AiFillCloseCircle className='icon' />
              </div>

              <div className="arr" onClick={downslide} >
              <IoIosArrowRoundDown />
              </div>

            </div>
          </div>

        </div>



        
        {/* contact section */}
        <div className="contact-section text-center flex h-[25vh] w-[40vw]  p-10 " style={{alignItems:"center",position:"relative" ,top:"-5vh", left:"28vw",paddingBottom:"4vh"}}>
          <div className="Contact text-center p-6" style={{border:"2px solid #bcc8eb",position:"relative",bottom:"5vh",borderRadius:"15px",backgroundColor:"#bcc8eb"}}>
            
            <Link to="/contact" className="text-lg text-center  font-bold text-black md:text-2xl us" style={{position:"relative",bottom:"0vw"}}><p>CONTACT US</p></Link>
          </div>
          <div className="phone flex text-sm text-center text-white font-bold    " style={{position:"relative",bottom:"5vh",left:"5vw",fontSize:"1.5vw",lineHeight:"1.5"}} >
            <Link to="tel:+918967908081"><PhoneIcon style={{position:"relative",right:"2vw",top:"1vh",border:"2px solid #bcc8eb",fontSize:"4vw",borderRadius:"50%",backgroundColor:"#bcc8eb"}}/></Link>
            <div>
              <a href="tel:+918967908081"><p>+91 8967908081</p></a>
              <p>Talk to an Expert</p>
            </div>


          </div>



        </div>
        {/* increase */}
        <div className="relative  md:w-auto flex justify-center md:justify-start ">
          <Increase />
        </div>

        <div>
          <ReviewSt/>
        </div>
        
      </div>
    </>
  );
}

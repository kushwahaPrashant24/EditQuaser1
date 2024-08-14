import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Nav.css";
import Lightbox from './Lightbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();
const menuConfig = [
  { name: "Services", path: "/services", content: "Services Content" },
  { name: "EQ Courses", path: "/EQCourses" },
  { name: "Industries", path: "/Industries" },
  { name: "More"},
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [sticky, setSticky] = useState(false);
  const [hoverBoxContent, setHoverBoxContent] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [anchorElMore, setAnchorElMore] = useState(null);
  const [menuName, setMenuName] = useState(null);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMouseEnter = (content) => {
    setHoverBoxContent(content);
  };

  const handleMouseLeave = () => {
    setHoverBoxContent(null);
  };

  const handleOpenLightbox = (serviceName) => () => {
    setShowLightbox(true);
    setSelectedService(serviceName);
  };

  const handleCloseLightbox = () => {
    setShowLightbox(false);
  };

  const handleToggleMoreMenu = () => {
    setIsMoreMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div id="full-scr">
        <div className="full-div1"></div>
      </div>
      <AppBar
        position="sticky"
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "flex" },
          justifyContent: "space-around",
          backgroundColor: sticky ? "rgb(45, 15, 94)" : "transparent",
          transition: "background-color 0.3s",
          borderRadius: "50px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between", //if any change change to space-around
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={Logo} style={{ height: "60px", width: "60px" }} />
            </Typography>

            <Box
              sx={{
                flexGrow: 10,
                display: { xs: "flex", sm: "none", md: "flex"},
                 justifyContent: 'flex-end'

              }}

            >
              <div className="header">
                <div>
               <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon 
                 sx = {{ display : {xs: "flex", md: "none"}}}
                />
              </IconButton>
              </div>
                 
              <div>
              <Menu
                id="menu-appbar"

                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: 'flex',
                  [theme.breakpoints.down('xs')]: {
                    display: 'flex',
                    backgroundColor: 'lightcoral', // Background color for xs screens
                    flexDirection: 'row', // Different flex direction for xs screens
                    p: 1, // Different padding for xs screens
                  },
                }}
              >
              </Menu>
              </div>
              </div>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={Logo} style={{ height: "60px", width: "60px" }} />
            </Typography>
            <Box
              sx={{
                flexGrow: 10,
                display: { xs: "none", sm: "flex", md: "flex" },
                justifyContent: "space-around",
              }}
            >
              {menuConfig.map((menu) => (
                <div
                  key={menu.name}
                  onMouseLeave={() => handleMouseLeave()}
                  style={{ position: "relative" }}
                >
                  <Button
                    onClick={() =>
                      menu.name === "More"
                        ? handleToggleMoreMenu()
                        : handleCloseNavMenu()
                    }
                    sx={{ my: 2, color: "white" }}
                    component={Link}
                    to={menu.path}
                    onMouseEnter={() => handleMouseEnter(menu.content)}
                  >
                    {menu.name}
                    {menu.name === "More" && (
                      <span className="dropdown-icon">
                        {isMoreMenuOpen ? "▲" : "▼"}
                      </span>
                    )}
                  </Button>

                  {menu.name === "More" && isMoreMenuOpen && (
                    <Box className="dropdown-menu">
                      <MenuItem component={Link} to="/EQEvents">EQ Events</MenuItem>
                      <MenuItem component={Link} to="/EQMerchandise">EQ Merchandise</MenuItem>
                      <MenuItem component={Link} to="/EQBlogs">EQ Blogs</MenuItem>
                      <MenuItem component={Link} to="/SuccessStories">Success Stories</MenuItem>
                      <MenuItem component={Link} to="/HallofFame">Hall of Fame</MenuItem>
                    </Box>
                  )}




                    {menu.content && (
                      <Box
                        className={`hover-box ${hoverBoxContent === menu.content ? "visible" : ""}`}
                        
                      >
                        
                        
                        {menu.content === 'Services Content' && (
                          <div className="grid-container">
                            
                            <div className="grid-item">
                              <p className="services-header">Building Strong Capabilities to Empower Your Brand</p>
                              <div className="service-arrow">
                              <p className="services-dis" onClick={handleOpenLightbox(menu.name)}>
                              Start Your Personalized Project{' '} 
                                <span className="material-symbols-outlined">
                                  arrow_forward
                                </span>
                                </p>
                              
                              </div>
                            </div>
                            <div className="grid-item">
                              <div>
                              <a href="/Services/Branding" className="sub-heading-title">Branding 
                                 <span className="material-symbols-outlined">
                                  arrow_forward
                                </span></a>
                              <ul className="service-heading-title">

                              <li><Link to="/Services/MainServices/BrandIdentity">Brand Identity</Link></li>
                              <li><Link to="/Services/MainServices/BrandConsulting">Brand Consulting</Link></li>
                              <li><Link to="/Services/MainServices/LogoDesign">Logo Design</Link></li>
                              <li><Link to="/Services/MainServices/2D/3DVisualization">2D/3D Visualization</Link></li>
                              <li><Link to="/Services/MainServices/GraphicDesign">Graphic Design</Link></li>
                              </ul>
                              </div>
                              <div> 
                              <a href="/Services/DesignFusion" className="sub-heading-title">Design Fusion
                                 <span className="material-symbols-outlined">
                                  arrow_forward
                                </span></a>
                                <ul className="service-heading-title">
                                  <li><Link to="/Services/MainServices/DesignFusion/PersonalizedAdvertisingPosterCreation">Personalized Advertising Poster Creation</Link></li>
                                  <li><Link to="/Services/MainServices/DesignFusion/PersonalPortfolioCreation">Personal Portfolio Creation</Link></li>
                                  <li><Link to="/Services/MainServices/DesignFusion/CompanyPortfolioMaking">Company Portfolio Making</Link></li>
                                  <li><Link to="/Services/MainServices/DesignFusion/PersonalizedBusinessCardMaking">Personalized Business Card Making</Link></li>
                                  <li><Link to="/Services/MainServices/DesignFusion/SocialMediaCreatives&AdvertisingMaterials">Social Media Creatives & Advertising Materials</Link></li>                                      
                                  <li><Link to="/Services/MainServices/DesignFusion/Brochures">Brochures</Link></li>
                                 </ul>
                              </div>

                            </div>
                            <div className="grid-item">
                              <div>
                              <a href="/Services/DigitalMarketing" className="sub-heading-title">Digital Marketing
                                 <span className="material-symbols-outlined">
                                  arrow_forward
                                </span></a>
                              <ul className="service-heading-title">
                              <li><Link to="/Services/MainServices/DigitalMarketing/SearchEngineOptimization(SEO)">Search Engine Optimisation</Link></li>
                              <li><Link to="/Services/MainServices/DigitalMarketing/SocialMediaManagement">Social Media Management</Link></li> 
                              <li><Link to="/Services/MainServices/DigitalMarketing/PerformanceMarketing">Performance Marketing</Link></li> 
                              <li><Link to="/Services/MainServices/DigitalMarketing/ContentMarketing">Content Marketing</Link></li>
                              <li><Link to="/Services/MainServices/DigitalMarketing/MarketingAutomation">Marketing Automation</Link></li>
                              <li><Link to="/Services/MainServices/DigitalMarketing/Analytics">Analytics</Link></li>
                              </ul>
                              </div>
                              <div>
                              <a href="/Services/ExperienceDesign" className="sub-heading-title">Experience Design
                                 <span className="material-symbols-outlined">
                                  arrow_forward
                                </span></a>
                              <ul className="service-heading-title">
                              <li><Link to="/Services/MainServices/ExperienceDesign/UI/UXDesign">UI/UX Design</Link></li>
                              <li><Link to="/Services/MainServices/ExperienceDesign/WebsiteDesign">Website Design</Link></li>
                              <li><Link to="/Services/MainServices/ExperienceDesign/MobileExperience">Mobile Experience</Link></li>
                              <li><Link to="/Services/MainServices/ExperienceDesign/CommerceExperience">Commerce Experience</Link></li>
                              <li><Link to="/Services/MainServices/ExperienceDesign/HumanMachineInterface(HMI)">Human Machine Interface (HMI)</Link></li>
                              <li><Link to="/Services/MainServices/ExperienceDesign/Applications&Dashboard">Applications & Dashboard</Link></li>
                              </ul>
                              </div>
                            </div>
                            <div className="grid-item">
                              <div>
                              <a href="/Services/Technology" className="sub-heading-title">Technology
                                 <span className="material-symbols-outlined">
                                  arrow_forward
                                </span></a>
                              <ul className="service-heading-title">
                              <li><Link to="/Services/MainServices/Technology/Data&Analytics">Data & Analytics</Link></li>
                              <li><Link to="/Services/MainServices/Technology/WebDevelopment">Web Development</Link></li>
                              <li><Link to="/Services/MainServices/Technology/MobileAppDevelopment">Mobile App Development</Link></li>
                              <li><Link to="/Services/MainServices/Technology/E-commerce">E-commerce</Link></li>
                              <li><Link to="/Services/MainServices/Technology/AI&MachineLearning(ML)">AI & Machine Learning (ML)</Link></li>
                              <li><Link to="/Services/MainServices/Technology/CyberSecurity">Cyber Security</Link></li>
                              </ul>
                              </div>  
                              <div>
                              <a href="/Services/Creativity" className="sub-heading-title">Creativity
                                 <span className="material-symbols-outlined">
                                  arrow_forward
                                </span></a>
                                  <ul className="service-heading-title">
                                  <li><Link to="/Services/MainServices/Creativity/VideoEditing">Video Editing</Link></li>
                                  <li><Link to="/Services/MainServices/Creativity/PhotoEditing">Photo Editing</Link></li>
                                  <li><Link to="/Services/MainServices/Creativity/BlogWriting">Blog Writing</Link></li>
                                  <li><Link to="/Services/MainServices/Creativity/ContentWriting">Content Writing</Link></li>
                                  <li><Link to="/Services/MainServices/Creativity/ResumeMaking">Resume Making</Link></li>
                                  <li><Link to="/Services/MainServices/Creativity/PersonalizedOccasionCardMaking">Personalized Occasion Card Making</Link></li>
                                  </ul>
                              </div>
                            </div>
                          
                          
                          </div>
                      )}
                      
                      </Box>
                    )}
                  </div>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {showLightbox && <Lightbox serviceName={selectedService} onClose={handleCloseLightbox} />}
      </>
    );
  }


export default ResponsiveAppBar;
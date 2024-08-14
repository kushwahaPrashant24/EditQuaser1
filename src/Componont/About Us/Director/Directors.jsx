import React from "react";
import DirectorOne from "../../../assets/About Us/Directors/soham.png"
import DirectorTwo from "../../../assets/About Us/Directors/jatin.png"
import DirectorThree from "../../../assets/About Us/Directors/krish.png"
import DirectorFour from "../../../assets/About Us/Directors/debrito.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Trust from "../../../assets/About Us/Integrity & Trust.png"


function Director() {
    return <>
        <div className="p-24 ">
        <div>
      <center><h1 className="text-5xl">Meet Our Visionary Directors</h1></center>
      <center><p className="text-2xl p-10">Our seasoned directors bring unparalleled expertise and leadership to EditQuasar, steering us towards innovation and excellence. They play a pivotal role in shaping our strategic direction and ensuring we deliver exceptional value to our clients.</p></center>
      </div>
     
    

      

<div className="flex flex-wrap justify-center gap-4">
<div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-black p-2 relative group ">
  <img className="w-full h-full object-cover" src={DirectorOne} alt="Director One"/>
  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <a href="https://www.linkedin.com/in/soham-mandal-founder-and-ceo-08058427a" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon className="text-white bg-black rounded-full p-1" style={{ fontSize: '2.5rem' }} />
    </a>
  </div>
  <div className="mt-5 text-center">
    <p className="text-white font-bold">Mr. Soham Mandal</p>
    <p className="text-gray-400">Founder & Chief Executive Officer</p>
  </div>
</div>

<div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-black p-2 relative group">
  <img className="w-full h-full object-cover" src={DirectorTwo} alt="Director Two"/>
  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <a href="https://www.linkedin.com/in/jatin-pokhriyal" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon className="text-white bg-black rounded-full p-1" style={{ fontSize: '2.5rem' }} />
    </a>
  </div>
  <div className="mt-5 text-center">
    <p className="text-white font-bold">Mr. Jatin Pokhriyal</p>
    <p className="text-gray-400">Chief Creative Officer</p>
  </div>
</div>

<div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-black  relative group">
  <img className="w-full h-full object-cover" src={DirectorThree} alt="Director Three"/>
  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <a href="https://www.linkedin.com/in/krish-kumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon className="text-white bg-black rounded-full p-1" style={{ fontSize: '2.5rem' }} />
    </a>
  </div>
  <div className="mt-5 text-center">
    <p className="text-white font-bold">Mr. Krish Kumar</p>
    <p className="text-gray-400">Chief Strategy Officer</p>
  </div>
</div>

<div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-black p-2 relative group">
  <img className="w-full h-full object-cover" src={DirectorFour} alt="Director Four"/>
  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <a href="https://www.linkedin.com/in/debadrito-chowdhury-8b0436316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon className="text-white bg-black rounded-full p-1" style={{ fontSize: '2.5rem' }} />
    </a>
  </div>
  <div className="mt-5 text-center">
    <p className="text-white font-bold">Mr. Debadrito Chaudhary</p>
    <p className="text-gray-400">Project Manager</p>
  </div>
</div>

      
      </div>
      </div>
    </>
}


export default Director; 
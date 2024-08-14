import React from "react";
import Img from "../../../../assets/coding.jpg";
import Homevid2 from "../../../../assets/homevid2.mp4";
import { motion, useScroll, useTransform } from "framer-motion";

function Impact() {
  const variants = {
    initial: {
      y: 150,
      opacity: 0,
    },
    animate: {
      y: 1,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildern: 1,
      },
    },
  };

  

  return (
    <>
      <motion.div
        className="flex flex-col md:flex-row justify-around items-center md:items-start p-4 md:p-10 lg:py-16 lg:px-20"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div
          className="w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0 mt-24"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <video className="w-full rounded-lg shadow-lg" autoPlay loop muted>
            <source src={Homevid2} type="video/mp4" />
          </video>
        </motion.div>
        <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left px-4 lg:px-10">
          <h2 className="w-full sm:w-3/4 md:w-full text-lg md:text-xl lg:text-2xl font-medium text-head2 mb-2">
            Why choose Us
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white ">
            OUR IMPACT
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 lg:mb-8">
            Powering Creativity
          </h1>
          <div className="text-sm md:text-base lg:text-lg font-medium text-caribbeangreen-5 leading-relaxed">
            <p className="hidden md:block mb-4 lg:mb-6">
              At EditQuasar, creativity drives every successful project. Our
              transformative solutions empower clients to reach new heights
              through innovative designs, compelling content, and cutting-edge
              technology. We fuel the creative potential of every brand we work
              with.
            </p>
            <p className="hidden md:block mb-4 lg:mb-6">
              Our commitment to excellence is evident in the diverse services we
              offer, designed to unlock new opportunities and drive success.
              From graphic design to web development and video editing to mobile
              app creation, we ensure each project makes a lasting impact. At
              EditQuasar, we inspire, innovate, and elevate.
            </p>
            <p className="block md:hidden">
              At EditQuasar, creativity drives every successful project. Our
              transformative solutions empower clients to reach new heights
              through innovative designs, compelling content, and cutting-edge
              technology. We fuel the creative potential of every brand we work
              with.
            </p>
            <p className="block md:hidden">
              Our commitment to excellence is evident in the diverse services we
              offer, designed to unlock new opportunities and drive success.
              From graphic design to web development and video editing to mobile
              app creation, we ensure each project makes a lasting impact. At
              EditQuasar, we inspire, innovate, and elevate.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Impact;

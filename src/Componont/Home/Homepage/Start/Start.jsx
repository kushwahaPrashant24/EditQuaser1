import React from "react";
import Img from "../../../../assets/coding.jpg";
import Homevid1 from "../../../../assets/homevid1.mp4";
import Startcard from "./StartCard/StartCard";
import { motion, useScroll, useTransform } from "framer-motion";

function Start() {
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
        className="flex flex-col md:flex-row justify-around items-center "
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="mt-8 md:mt-16 w-full md:w-8/12">
          <h2 className="w-full text-lg md:text-xl lg:text-2xl font-medium text-left text-head2">
            Why choose Us
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
            What We Offer
          </h1>
          <Startcard />
        </div>
        <motion.div
          className="w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0 mt-12 md:mt-24"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <video className="w-full rounded-lg shadow-lg" autoPlay loop muted>
            <source src={Homevid1} type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Start;

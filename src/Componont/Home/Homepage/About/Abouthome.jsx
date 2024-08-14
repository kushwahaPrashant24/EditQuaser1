import React from "react";
import Model2 from "../../../../assets/NewModel2.png";
import Aboutcard from "./AboutCard/Aboutcard";
import { motion, useScroll, useTransform } from "framer-motion";

function Abouthome() {
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
        className="flex flex-col justify-around items-center md:flex-row mt-10"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className=" mb-6 md:mb-0">
          <img className=" object-cover" src={Model2} alt="Model Image" />
        </div>
        <div className="w-3/5  h-7xl  flex  justify-around items-center flex-col gap-5">
          <div>
            <h2 className=" text-lg md:text-xl lg:text-2xl font-medium text-left text-head2">
              About Us
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              We Harness Creativity to Serve Our Clients
            </h1>
            <p className="text-head text-lg sm:text-xl font-semibold mt-5 text-head2 p-5">
              At EditQuasar, creativity isn't just a tool; it's our guiding
              principle. We believe in harnessing the power of imagination to
              craft solutions that not only meet but exceed our clients'
              expectations. From innovative designs to captivating content, we
              weave creativity into every aspect of our work, ensuring that each
              project is a masterpiece in its own right.
            </p>
          </div>
          <div className=" mt-5">
            <Aboutcard />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Abouthome;

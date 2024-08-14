import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Impact() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      ></ScrollTrigger>
      <div className="flex flex-col  items-center justify-center gap-24 p-10 mt-10">
        <center>
          <div>
            <h1 className=" text-6xl  font-black">Our Impact</h1>
            <p>
              Our relentless pursuit of excellence fuels every innovatio
              difference, design transformative experiences that enrich lives,
              and build dynamic ecosystems that drive progress and inspire
              creativity.
            </p>
          </div>
        </center>

        <div className="w-full flex justify-around ">
          <div>
            <h1 className="text-7xl  text-center">
              {counterOn && (
                <CountUp className="text-7xl" start={0} end={1000} delay={0} />
              )}
              +
            </h1>
            <p> Hours dedicated to community-driven initiatives
           </p>
          </div>
          <div>
            <h1 className="text-7xl  text-center">
              {counterOn && (
                <CountUp className="text-7xl" start={0} end={100} delay={0} />
              )}
              +
            </h1>
            <p>  Innovative technologies integrated into client solutions</p>
          </div>
          <div>
            <h1 className="text-7xl  text-center">
              {counterOn && (
                <CountUp className="text-7xl" start={0} end={200} delay={0} />
              )}
              +
            </h1>
            <p>Custom solutions tailored to meet diverse client needs</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Impact;

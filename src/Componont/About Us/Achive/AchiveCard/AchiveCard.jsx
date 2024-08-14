import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function AchiveCard() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className=" flex flex-wrap gap-36 w-1/2 p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl text-center">
            {counterOn ? (
              <CountUp className="text-7xl" start={0} end={100} delay={0} />
            ) : (
              "0"
            )}
            +
          </h1>
          <p className="-mt-24">International Clients</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-7xl text-center">
            {counterOn ? (
              <CountUp className="text-7xl" start={0} end={15} delay={0} />
            ) : (
              "0"
            )}
            +
          </h1>
          <p className="-mt-24">Countries</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-7xl text-center">
            {counterOn ? (
              <CountUp className="text-7xl" start={0} end={60} delay={0} />
            ) : (
              "0"
            )}
            +
          </h1>
          <p className="-mt-24">Workshops Conducted</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-7xl text-center">
            {counterOn ? (
              <CountUp className="text-7xl" start={0} end={50} delay={0} />
            ) : (
              "0"
            )}
            +
          </h1>
          <p className="-mt-24">Happy Partners</p>
        </div>
      </div>
    </ScrollTrigger>
  </div>
  
  );
}

export default AchiveCard;

import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import IndustryVideo from "../../../assets/Industry/final industry section top video (1).mp4";

function Main() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <div>
        <section>
          <div className="relative my-8  h-full -mt-36 mb-56  ">
            <video autoPlay loop muted>
              <source src={IndustryVideo} type="video/mp4" />
            </video>
            <div className="absolute top-[22%] left-[25%]  w-[60%] h-[60%] flex flex-col justify-evenly videosection">
              <p
                className=" font-black  text-white
               sm:text-5xl lg:text-7xl"
              >
                Industry Experties
              </p>
            </div>
          </div>
        </section>

        <div className="h-full  flex justify-center items-center ">
          <div className="w-1/2 flex flex-col gap-28">
            <h1 className="text-7xl font-thin text-white">
              Advancing Industry Innovation
            </h1>
            <div>
              <h2 className="text-xl text-white">
                Delivering excellence across diverse industries and making a
                significant impact in each.
              </h2>
              <div className="w-56 sticky bottom-0 border-t-1 mt-10 bg-white">
                <button className="w-56 h-12 border-2 ">
                  Let's talk <ArrowForwardIcon />
                </button>
              </div>
            </div>
          </div>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="w-[500px]  h-96 flex  items-end mt-84 ">
              <h1
                id="industrycount"
                className="text-[300px] bg-gradient-to-r from-blue-200 via-white-800 to-yellow-700 bg-clip-text text-transparent"
              >
                {counterOn && (
                  <CountUp
                    className=" text-[300px] "
                    start={0}
                    end={10}
                    delay={0}
                  />
                )}
                +
              </h1>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </>
  );
}

export default Main;

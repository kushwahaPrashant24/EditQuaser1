import React from "react";
import Background from "../../../assets/About Us/Team.mp4";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Join() {
  return (
    <>
      <div className="  text-white p-36 flex justify-between">
        <div className="flex flex-col justify-center gap-10 w-1/2 mt-36">
          <div>
            <h1 className="text-6xl">You Will Like It Here!</h1>
          </div>
          <div>
            <p className="text-2xl">
              Here at EditQuasar, we foster an environment that nurtures your
              growth, enabling you to strengthen your foundations and reach for
              greater heights. Join us on this fulfilling journey together!
            </p>
          </div>
          <center>
            <button className="h-10 w-96   border-2 border-black">
            See all openings<ArrowForwardIcon />
            </button>
          </center>
        </div>
        <div>
          <video autoPlay loop muted className="h-[750px]">
            <source src={Background} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default Join;

import React from "react";
import Background from "../../../assets/About Us/EQ Courses Background .mp4";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Design() {
  return (
    <>
      <section>
        <div className="relative   h-[100vh]  mb-56  ">
          <video autoPlay loop muted>
            <source src={Background} type="video/mp4" />
          </video>
          <div className="absolute  top-[25%] left-[30%]  w-[50%] h-[60%] flex flex-col justify-evenly gap-10 videosection">
            <div className="flex flex-col gap-10">
              <p className="text-xl   sm:text-3xl lg:text-6xl ">
                Design. Create. Elevate.
              </p>

              <p
                className="text-md hidden md:block  text-richblack-5 sm:text-lg"
                style={{ fontSize: "1.1vw" }}
              >
                It's in EditQuasar's DNA to transform your brand into its best
                digital self. customer-centric approach, we craft engaging,
                interactive, and immersive experiences that consistently deliver
                excellence.
              </p>
            </div>

            <center>
              <button className="h-10 w-96  text-white border-2 border-white">
                Our Experties <ArrowForwardIcon />
              </button>
            </center>
          </div>
        </div>
      </section>
    </>
  );
}

export default Design;

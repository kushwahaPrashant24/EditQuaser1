import React from "react";
import Background from "../../assets/About Us/EQ Courses Background .mp4";

function Hero() {
  return (
    <>
      <div className="relative">
        <div className="sticky">
          <section>
            <div className="  flex   relative -mt-24">
              <video autoPlay loop muted>
                <source src={Background} type="video/mp4" />
              </video>
              <div>
                <div className="absolute top-[10%] left-[25%]  w-[50%] h-[60%] flex flex-col justify-center gap-10 videosection">
                 <center><p className="text-xl   sm:text-3xl lg:text-6xl text-richblack-5  p-5">
                    Let Our Team Be Your Team
                  </p>

                  <p
                    className="text-sm hidden md:block  text-richblack-5 sm:text-lg"
                    style={{ fontSize: "1.1vw" }}
                  >
                    We are dedicated to making a positive impact in all we do.
                    If making a difference matters to you, join us at EditQuasar
                  </p></center> 
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Hero;

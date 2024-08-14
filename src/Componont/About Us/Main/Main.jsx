import React from "react";
import Directors from "../../../assets/About Us/Directors/our director.mp4";

function Main() {
  return (
    <>
      <React.Fragment>
        <div className=" mb-36 ">
          <div className="flex justify-around p-24">
            <div>
              <h1 className="text-3xl">About Us</h1>
            </div>
            <div className="w-1/2">
              <h1 className="text-5xl">
                Bengal's home-grown creative agency, making waves and creating
                impact since 2023!
              </h1>
            </div>
          </div>
          <div className="">
      <video className="" autoPlay loop muted>
            <source src={Directors} type="video/mp4" />
          </video>
      </div>
        </div>
      </React.Fragment>
    </>
  );
}

export default Main;

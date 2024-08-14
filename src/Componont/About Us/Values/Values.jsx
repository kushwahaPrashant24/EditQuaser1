import React from "react";
import Cards from "./Values Card/Cards";
import ValueCard from "./Values Card/ValuesCard";

function Values() {
  return (
    <>
      <div className="p-10 ">
        <center>
          <h1 className="text-4xl">Our Values</h1>
          <p className="w-[60%] mt-10 text-xl">
            At EditQuasar, we are dedicated to embodying and promoting our four
            core values every single day, through both challenges and triumphs.
            These values are the steadfast principles we uphold as a team and
            promise to our clients.
          </p>
        </center>

      
          <div className="">
            <ValueCard />
          </div>
       
      </div>
    </>
  );
}

export default Values;

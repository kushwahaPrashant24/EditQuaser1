import React from "react";
import ValuesChart from "./ValuesChart";

function Values() {
  return (
    <>
      <div className="h-[100vh] flex">
        <div className="h-[100vh] w-1/2 text-white  flex justify-center items-center">
        
          <div className="w-96 flex flex-col gap-10">
            <h1 className="text-5xl text-greys-50">The Values That Guide Us</h1>
            <p className="text-xl font-bold">
              We place our core values at the heart of everything we do,
              ensuring they shine through in every action, decision, and
              interaction.
            </p>
          </div>
        </div>
        <div className="h-[100vh] w-1/2 flex justify-center items-center ">
          <ValuesChart />
        </div>
      </div>
    </>
  );
}

export default Values;

import React from "react";

function ValuesChart() {
  return (
    <>
      <div className="h-[60vh] overflow-y-auto p-10  text-white">
        <div className="h-[100vh]  p-10 flex flex-col justify-between">
          <div className="w-[500px]">
            <h2 className="text-xl font-black text-greys-500">01</h2>
            <h1 className="text-5xl font-black text-greys-50">Growth</h1>
            <p className="text-xl font-bold">
              We envision collective growth, fostering an environment where both
              the organization and individuals achieve their goals together.
            </p>
          </div>

          <div className="w-[500px]">
            <h2 className="text-xl font-black text-greys-500">02</h2>
            <h1 className="text-5xl font-black text-greys-50"> People</h1>
            <p className="text-xl font-bold">
              Our team is the foundation of our success. We are dedicated to
              recognizing their contributions and giving back to them.
            </p>
          </div>

          <div className="w-[500px]">
            <h2 className="text-xl font-black text-greys-500">03</h2>
            <h1 className="text-5xl font-black text-greys-50"> Balance</h1>
            <p className="text-xl font-bold text-greys-25">
              We prioritize a harmonious balance, supporting our team in
              excelling both professionally and personally.
            </p>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default ValuesChart;

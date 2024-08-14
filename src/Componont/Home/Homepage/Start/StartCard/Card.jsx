import React from "react";

function StarterCard(props) {
  return (
    <>
      <div
        id="HomeAbout"
        className="flex flex-col items-center justify-center w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 rounded-2xl bg-Aboutcard  p-3"
      >
        <div className="flex flex-col sm:flex-row items-center p-3 justify-around">
          <div className="w-24 sm:w-36">
            <img className="pl-3" src={props.logo} alt="Logo" />
          </div>
          <h1 className="mt-4 sm:mt-0 sm:ml-10 text-2xl sm:text-3xl text-head">
            {props.name}
          </h1>
        </div>
        <div>
          <p className="text-lg sm:text-xl text-head2">{props.Passaage}</p>
        </div>
      </div>
    </>
  );
}

export default StarterCard;

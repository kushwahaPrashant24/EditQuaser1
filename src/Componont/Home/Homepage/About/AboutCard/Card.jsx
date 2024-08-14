import React from "react";

function Card(props) {
  return (
    <>
      <div
        id="HomeAbout"
        className="flex flex-col items-center justify-center w-8/12 sm:w-6/12 md:w-5/12 lg:w-4/12 rounded-2xl bg-Aboutcard  p-3"
      >
        <div className="flex flex-col sm:flex-row items-center  justify-around">
          <div className="w-20 sm:w-36">
            <img className="pl-5" src={props.logo} alt="Logo" />
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

export default Card;

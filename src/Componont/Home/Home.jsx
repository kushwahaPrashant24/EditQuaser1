import React from "react";
import "./Home.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Doing from "./Homepage/Doing/Doing";
import Abouthome from "./Homepage/About/Abouthome";
import Start from "./Homepage/Start/Start";
import Serve from "./Homepage/Serve/Serve";
import Impact from "./Homepage/Impact/Impact";
import Gotproject from "./Homepage/Getproject/Getproject";
import Review from "./Homepage/Review/Review";
import Aura from "./Aura/Aura";
import CaseStudies from "./Homepage/Casestudies/Casestudies";
import Compnies from "./Homepage/Compnies/Compnies";
import ReviewStrucure from "./Homepage/Review/ReviewStructure";
import Hero from "./Homepage/Hero/Hero";


export default function Home() {
  return (
    <>
      <div id="Home" className=" ">
        <div className=" flex flex-col sm:block align-center">
          <section>
          <Hero /> 
          </section>

         <section>
         <div className="h-10"></div> 
          <Compnies />
          <Doing />
          <Abouthome />
          <Serve />
          <Start />
          <Impact />
          <CaseStudies />
          <Gotproject />
          <ReviewStrucure />
          </section> 
        </div>
      </div>
    </>
  );
}

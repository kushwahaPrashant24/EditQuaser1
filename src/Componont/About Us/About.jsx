import React from "react";
import Main from "./Main/Main";
import Story from "./Story/Story";
import Achive from "./Achive/Achive";
import Values from "./Values/Values";
import Director from "./Director/Directors";
import Design from "./Design/Design";
import Impact from "./Impact/Impact";
import Opportunities from "./Opportunities/Opportunities";

function About() {
      return <>
           <React.Fragment>
           <div  className="text-white">
            <Main />
           <Achive />
            <Story />
            <Values />
            <Director />
            <Design />
            <Impact />
            <Opportunities />
            </div>
           </React.Fragment>
      </>
}

export default About;
import React from "react";
import "./IndustriesData.css"
import Card from "./Card";
import Data from "./DataConst.jsx";

function createcards(Industryprops){
    return <Card 
          
          key= {Industryprops.id}
          name= {Industryprops.name}
          img= {Industryprops.img}
          paramain={Industryprops.paramain}

          projectonename={Industryprops.projectonename}
          projectImageone={Industryprops.projectImageone}
          projectonePara={Industryprops.projectonePara}
          projectOverviewOne= {Industryprops.projectOverviewOne}
          solutionOne={Industryprops.solutionOne}
          
          objectivesOne1={Industryprops.objectivesOne1}
          objectivesOne2={Industryprops.objectivesOne2}
          objectivesOne3={Industryprops.objectivesOne3}
          
          servicesProvidedOne1= {Industryprops.servicesProvidedOne1}
          servicesProvidedOne2= {Industryprops.servicesProvidedOne2}
          servicesProvidedOne3= {Industryprops.servicesProvidedOne3}
          testimonialOne={Industryprops.testimonialOne}
          clientOne={Industryprops.clientOne}
          servicesProvidedOne={Industryprops.servicesProvidedOne}

          projectTwoname={Industryprops.projectTwoname}
          projectImageTwo={Industryprops.projectImageTwo}
          projectTwoPara={Industryprops.projectTwoPara}
          
          objectivesTwo1={Industryprops.objectivesTwo1}
          objectivesTwo2={Industryprops.objectivesTwo2}
          objectivesTwo3={Industryprops.objectivesTwo3}
          
          servicesProvidedTwo1= {Industryprops.servicesProvidedTwo1}
          servicesProvidedTwo2= {Industryprops.servicesProvidedTwo2}
          servicesProvidedTwo3= {Industryprops.servicesProvidedTwo3}

          projectOverviewTwo= {Industryprops.projectOverviewTwo}
          objectivesTwo={Industryprops.objectivesTwo}
          solutionTwo={ Industryprops.solutionTwo}
          testimonialTwo={Industryprops.testimonialTwo}
          clientTwo={Industryprops.clientTwo}
    />
   }




function IndustriesData () {
    return <> <div className="flex flex-col justify-center items-center gap-16 m-10 ">{Data.map(createcards)}</div>
</>

}


export default IndustriesData;
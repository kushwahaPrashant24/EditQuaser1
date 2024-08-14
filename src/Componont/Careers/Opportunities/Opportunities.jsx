import React from "react";
import OpportunitiesData from "./OpportunitiesData";
import Card from "./Card";

function CreateCard(Opp) {
  return (
    <>
      <Card 
      key={Opp.id} 
      title={Opp.title} 
      experience={Opp.experience} />
    </>
  );
}

function Opportunities() {
  return (
    <>
      <div className="mt-10">
        <center>
          <div>
            <h1 className="text-5xl text-white "> Current Opening </h1>
          </div>
        </center>
        <div className="p-24">{OpportunitiesData.map(CreateCard)}</div>
      </div>
    </>
  );
}

export default Opportunities;

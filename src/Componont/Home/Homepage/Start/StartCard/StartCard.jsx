import React from "react";
import StartConst from "./Const";
import StarterCard from "./Card";



function createCard(bb) {
    return <StarterCard
        key={bb.id}
        logo={bb.logo}
        name={bb.name}
        Passaage={bb.Passaage}
        
     />

}


function Startcard() {
    return <div className="flex gap-10 flex-wrap mt-10">
        {StartConst.map(createCard)}
        </div>
}

export default Startcard;
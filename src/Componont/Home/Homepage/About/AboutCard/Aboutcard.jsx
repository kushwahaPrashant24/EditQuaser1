import React from "react";
import AboutConst from "./Const";
import Card from "./Card";
import "./Aboutcard.css"


function createCard(aa) {
    return <Card
        key={aa.id}
        logo={aa.logo}
        name={aa.name}
        Passaage={aa.Passaage}
        
     />

}


function Aboutcard() {
    return <div className="flex  justify-center gap-10 flex-wrap">
        {AboutConst.map(createCard)}
        </div>
}

export default Aboutcard;
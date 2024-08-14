import React from "react";
import Cards from "./Cards";
import Data from "./Data";


function createCard(ValCard) {
    return  <Cards
     key={ValCard.id}
     Heading= {ValCard.Heading} 
     Content= {ValCard.Content}
     img={ValCard.img}
     />
}



function ValueCard() {
    console.log(Data);
   return <div className="flex m-24 gap-16 flex-wrap justify-center items-ceter">{Data.map(createCard)}</div>
}

export default ValueCard;
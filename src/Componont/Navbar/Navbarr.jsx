import React, { useState } from 'react';



const Navbarr = () => {
    const [active,setActive]=useState("false");
    const window = () =>{

        setActive("true");

    }
  return (
    <>
     <button onMouseOver={window}></button>
     
    </>
  )
}

export default Navbarr

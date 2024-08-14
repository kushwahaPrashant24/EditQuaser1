import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Card (OpportunitiesData) {
    return <>
    <a>
        <div className="h-36 flex items-center justify-between text-white border-b-4  m-5 p-5">
          
                <p className="text-3xl w-96">{OpportunitiesData.title}</p>
               <p className="text-3xl">{OpportunitiesData.experience}</p>
               <button className="text-3xl">Apply Now <ArrowForwardIcon /> </button>
        </div>
        </a>
    </>
}


export default Card;
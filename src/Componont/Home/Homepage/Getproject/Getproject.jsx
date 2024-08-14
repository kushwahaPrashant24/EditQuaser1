import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import "./Getproject.scss"

function Gotproject() {
    return <>
         <div id="GetProject" className="w-full  flex items-center justify-center flex-col gap-10 pb-10 ">
         <div className="flex items-center justify-center flex-col mt-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">Got New Project</h1>
            <div className="h-2 rounded-md flex align-center bg-head w-36 mt-5"></div>
            </div>
            <div className="flex items-center justify-center flex-col">
                <div className="flex items-center justify-center flex-col mb-10">
                <p className=" text-head text-lg sm:text-xl font-semibold">Call us at this number for instant support</p>
                <p className=" text-head text-lg sm:text-xl font-semibold ">+91 8967908081</p>
                </div>
                <Link
              to="/contact"
              className="text-lg text-center  font-bold text-black md:text-2xl us"
              style={{ position: "relative", bottom: "0vw" }}
            >
              <div
                className="Contact text-center p-2 m-5"
                style={{

                  width: "300px",
                  border: "2px solid #bcc8eb",
                  position: "relative",
                  bottom: "5vh",
                  borderRadius: "15px",
                  backgroundColor: "#bcc8eb",
                }}
              >
                <p>CONTACT US</p>
              </div>
            </Link>
            </div>
         </div>
      
    </>
}

export default Gotproject;
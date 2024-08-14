import React from "react";
import Logotwo from "../assets/logo-noname.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <div className="bg-black text-white pt-44">
        <div className="  flex justify-around items-center pb-20">
          <div>
            <h1 className="text-6xl">Get started now!</h1>
            <p className="text-xl">It takes less than a minute of your time.</p>
          </div>
          <div>
            <button className="h-12 w-56  border-2">Request a quote</button>
          </div>
        </div>

        <div className="w-full flex  justify-around p-20">
          <div className=" flex flex-col  gap-2 ">
            <h1 className="text-4xl">Company</h1>
            <p className="text-xl">Home</p>
            <p className="text-xl">About</p>
            <p className="text-xl">Services</p>
            <p className="text-xl">Team</p>
            <p className="text-xl">Career</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">Services </h1>
            <p className="text-xl">Branding</p>
            <p className="text-xl">Design Fusion</p>
            <p className="text-xl">Experience Design</p>
            <p className="text-xl">Technology</p>
            <p className="text-xl">Digital Marketing</p>
            <p className="text-xl">Creativity</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">Other </h1>
            <p className="text-xl">EQ Courses</p>
            <p className="text-xl">EQ Events</p>
            <p className="text-xl">EQ Blogs</p>
            <p className="text-xl">Hall of Fame</p>
            <p className="text-xl">EQ Merchandise</p>
            <p className="text-xl">EQ Community</p>
            <p className="text-xl">Success Stories</p>
          </div>

          <div className="flex flex-col  gap-2">
            <h1 className="text-4xl">Connect </h1>
            <div className="flex gap-5">
              <span>General Enquiry:</span>
              <span>+91 8967908081</span>
            </div>
            <div className="flex gap-5">
              <span>Sales Enquiry:</span>
              <span>+91 8101668460</span>
            </div>
            <div className="flex gap-5">
              <span>Email:</span>
              <span>editquasar@gmail.com</span>
            </div>
            <div className="flex gap-5">
              <span>WhatsApp (Sales):</span>
              <span>+91 8967908081</span>
            </div>
          </div>
        </div>
        <div className="flex justify-around pb-24">
          <div className="flex gap-10">
            <div>
              <p>EditQuasar©2024 All rights reserved</p>
            </div>
            <div>
              <p>Privacy Policy|Terms & Conditions</p>
            </div>
          </div>
          <div className="flex gap-10 ">
            <LinkedInIcon />
            <InstagramIcon />
            <XIcon />
            <YouTubeIcon />
          </div>
        </div>
      </div>
    </>
  );
}

/*function Footer() {
  return (
    <>
      <section>
        <div className="h-[90vh]  bg-white  pt-36 rounded-t-[50px]">
          <div className="flex justify-around items-center   h-[80%] p-5">
            <div className="  flex flex-col justify-center items-center">
            <div className="m-5">
                <h1 className="text-5xl font-semibold">EditQuasar Inc.</h1>
              </div>
              <div>
                <p className="text-3xl p-2">
                  Stay in the loop and sign up for the  EditQuasar newsletter:
                </p>
              </div>
              <div className="m-5">
                <input placeholder="Enter your email"></input>
              </div>
            </div>
            <div className="w-full flex  gap-5 justify-around">
            <div className=" flex flex-col  gap-2 ">
              <h1 className="text-4xl">Company</h1>
              <h2 className="text-2xl">Home</h2>
              <h2 className="text-2xl">About</h2>
              <h2 className="text-2xl">Services</h2>
              <h2 className="text-2xl">Team</h2>
              <h2 className="text-2xl">Career</h2>
            </div>
            <div className="flex flex-col  gap-2">
              <h1 className="text-4xl">Documentation</h1>
              <h2 className="text-2xl">Help Centre</h2>
              <h2 className="text-2xl">Contact</h2>
              <h2 className="text-2xl">FAQ </h2>
              <h2 className="text-2xl">Privacy Policy</h2>
              
            </div>
            <div className="flex flex-col  gap-2">
              <h1 className="text-4xl">Social</h1>
              <h2 className="text-2xl">Facebook</h2>
              <h2 className="text-2xl">Instagram</h2>
              <h2 className="text-2xl">Youtube</h2>
              <h2 className="text-2xl">Twitter</h2>
              
            </div>

            </div>
          </div>

          <div className=" flex justify-between px-24 border-t-2  m-10 p-4">
            <h1 className="text-xl">© EditQuasar Inc. All Rights Reserved 2024</h1>
            <h1 className="text-xl">Terms & Conditions</h1>
          </div>
        </div>
      </section>
    </>
  );
}*/

export default Footer;

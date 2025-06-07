import React from "react";
import {Link} from 'react-router-dom'

export const Homepage = ({color}) => {
  const isColor = color === 'light'
    return (
        <div className="flex flex-col gap-4 max-w-[620px] mx-auto my-[6rem]">
      <div className="text-center">
        <span className={`rounded-xl px-4 py-2 ${isColor ? "bg-black text-white" : "bg-white text-black"}`}>
          Trusted by 💙 10000+ freelancers
        </span>
      </div>
      <div className="text-center">
        <span className={`text-6xl ${isColor ? "text-black" : "text-white"}`}>
          Create Invoices in <span className="text-blue-500">minutes</span> not In hours
        </span>
      </div>
      <div className={`text-center ${isColor ? "text-black" : "text-white"}`}>
        <span>
          A Simple Invoice Generator for Freelancers and Businesses and enterprises.
          Effortlessly create, manage, and send professional invoices.
        </span>
      </div>
      <div>
        <div className="flex flex-row gap-5 justify-center">
          <button className="text-white bg-blue-500 rounded-lg sm:px-5 px-3 py-1.5 flex items-center justify-center gap-4 group transition-all duration-300">
            <span className="transition-transform duration-300 group-hover:translate-x-2 sm:text-lg text-md font-semibold">
              <a href="/generate">Get Started</a>
            </span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-sm opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </button>

          <a>
            <button className={`hover:underline cursor-pointer my-1 ${isColor ? "text-black hover:text-blue-500" : "text-white hover:text-blue-500"}`}>
              Try for free
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};


export const Card = ({color}) => {
  const isColor = color === "light";
  return (
    
    <div  >
      abhay 
    </div>
   
  );
};

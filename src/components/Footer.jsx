import { useState } from "react";
import React from 'react'
import logo from "../images/Logo/logo.jpeg";
import livelogo from "../images/livelogo.webm";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1;

      if (newCount === 5) {
        navigate("/upload");
        return 0;
      }

      return newCount;
    });
  };


  return (
    <>
      <div className=" bg-gray-200/30">
        <div className='grid lg:grid-cols-3 sm:grid-cols-1  gap-5 px-8 py-20 max-w-7xl mx-auto'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-1 gap-4'>
              <div>
                  <p className='text-lg text-[#8a8a8a]'>Abuja Nigeria</p>
                  <p className='text-lg text-[#8a8a8a]'>Obasanjo Space Center</p>
                  <p className='text-lg'>Umar Musa Yar'Adua Express Way</p>
                  <p>Lugbe, Abuja</p>
                  <p className='mt-6'>Abuja Office</p>
                  <p>+234 1 234 5678</p>
              </div>
              <div className='lg:mt-5'>
                  <p className='text-lg text-[#8a8a8a]'>Lagos Regional Business Office</p>
                  <p className='text-lg text-[#8a8a8a]'>Awolowo Road, Opposite Lagos</p>
                  <p className='text-lg'>Motor Boat Club, South West Ikoyi,</p>
                  <p className='mt-6'>Lagos, Nigeria</p>
                  <p>+234 1 234 5678</p>
              </div>
          </div>
          <div className='flex justify-center items-center'>
        
            <img src={logo} alt="Logo" className='w-full h-full object-cover '/>
            {/* <video onClick={handleClick} src={livelogo} autoPlay loop muted className="w-60 h-60 object-cover "/> */}
        
          </div>
          <div className="max-w-md space-y-5">
              <p className="text-gray-600 text-sm leading-6">Subscribe to our newsletter to stay up to date with the latest news, updates, and exclusive offers.</p>
              <div className="flex overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 text-gray-800 placeholder-gray-400 outline-none"/>
                <button className="bg-gray-600 px-6 py-3 font-medium text-white transition hover:bg-gray-700">
                  Sign Up
                </button>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="newsletter" className="mt-1 h-4 w-4 rounded border-gray-300 accent-black"/>
                <label htmlFor="newsletter" className="text-sm leading-5 text-gray-400">
                  I'm okay with receiving emails and having my activity tracked to improve my experience.
                </label>
              </div>
              <div className='grid grid-cols-4 gap-4'>
        
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

import React from 'react'
// import logo from "../images/logo.jpeg";
import livelogo from "../images/livelogo.mp4";

const Footer = () => {
  return (
    <>
      <div className='grid grid-cols-3  gap-5 bg-gray-200 p-10'>
        <div className='grid gap-4'>
            <div>
                <p className='text-sm text-[#8a8a8a]'>Abuja Nigeria</p>
                <p className='text-sm text-[#8a8a8a]'>Obasanjo Space Center</p>
                <p className='text-sm'>Umar Musa Yar'Adua Express Way</p>
                <p>Lugbe, Abuja</p>
                <p className='mt-6'>Abuja Office</p>
                <p>+234 1 234 5678</p>
            </div>

            <div className='mt-5'>
                <p className='text-sm text-[#8a8a8a]'>agos Regional Business Office</p>
                <p className='text-sm text-[#8a8a8a]'>Awolowo Road, Opposite Lagos</p>
                <p className='text-sm'>Motor Boat Club, South West Ikoyi,</p>
                <p className='mt-6'>Lagos, Nigeria</p>
                <p>+234 1 234 5678</p>
            </div>

        </div>
        <div className='flex justify-center items-center'>
            <div className='w-60 h-60 rounded-full flex items-center justify-center shadow-lg bg-white '>
                {/* <img src={logo} alt="Logo" className='w-full h-full object-cover rounded-full'/> */}
                <video src={livelogo} autoPlay loop muted className="w-full h-full object-cover rounded-full"/>
            </div>
        </div>
        <div className="max-w-md space-y-5">
            <p className="text-gray-300 text-sm leading-6">Subscribe to our newsletter to stay up to date with the latest news, updates, and exclusive offers.</p>

            <div className="flex overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 text-gray-800 placeholder-gray-400 outline-none"/>

              <button className="bg-gray-600 px-6 py-3 font-medium text-white transition hover:bg-gray-700">
                Sign Up
              </button>
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="newsletter" className="mt-1 h-4 w-4 rounded border-gray-300 accent-red-600"/>

              <label htmlFor="newsletter" className="text-sm leading-5 text-gray-400">
                I'm okay with receiving emails and having my activity tracked to improve my experience.
              </label>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer

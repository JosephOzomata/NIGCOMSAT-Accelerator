
// import launchpadImage from "..images/launchpad.png";
import React from 'react'
import { motion } from 'framer-motion'

function Launchpad() {
  return (

    <div className="bg-[#F7F3EB] py-24 px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 flex items-center gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{duration: 0.5}}
         className="w-full">
          <img
            // src={launchpadImage}
            alt="Launchpad"
            className="w-full object-cover rounded-[30px]"
         />


        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1, x: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{duration: 0.5, delay: 0.2, ease: "easeInOut"}}
         className="w-full">


         <div className="w-full">
          <p className="uppercase text-[#2166D1] tracking-widest font-semibold mb-3">
            NIGCOMSAT Accelerator
          </p>

          <h2 className="text-[60px] font-bold leading-tight text-[#2166D1] mb-6">
            Build.
            <br />
            Launch.
            <br />
            Scale.
          </h2>

          <p className="text-xl text-gray-700 leading-9 mb-10">
            More than an accelerator—we're a launchpad for ambitious founders,
            providing the mentorship, partnerships, and national infrastructure
            needed to transform bold ideas into lasting impact.
          </p>

          <button className="bg-[#2166D1] text-white px-8 py-4 rounded-full hover:bg-blue-800 transition duration-300">
            Join the Accelerator
          </button>

         </div>
        </motion.div>

      </div>

    </div> 

  );
}

export default Launchpad;
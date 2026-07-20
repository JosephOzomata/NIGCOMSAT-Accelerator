// import launchpadImage from "../images/launchpad.png";
import React from "react";
import { motion } from "framer-motion";

function Launchpad() {
  return (
    <div className="bg-[#F7F3EB] py-24 px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <img
            // src={launchpadImage}
            alt="Launchpad"
            className="w-full object-cover rounded-[30px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="w-full"
        >
          <p className="uppercase text-[#2166D1] tracking-widest font-semibold mb-3">
            NIGCOMSAT Accelerator
          </p>

          <h2 className="text-[47px] font-bold text-[#2166D1] leading-tight mb-6">
            We do more than accelerate,
            <br />
            we are a national launchpad
          </h2>

          <a
            href="/"
            className="text-xl font-medium hover:underline inline-block mb-12"
          >
            How the program works →
          </a>

          <div className="space-y-6 mb-8">
            <p>
              The NIGCOMSAT Accelerator gives you an exclusive stamp of
              partnership with Nigeria's national satellite operator, letting
              you build and validate your product directly on our
              infrastructure.
            </p>

            <p>
              From day one, you'll plug into a global market network and get
              one-on-one mentorship from VCs, CTOs, and tech leaders. Best of
              all, it's completely free—no application fees, no equity taken,
              and you keep 100% of your IP.
            </p>
          </div>

          <div className="space-y-6">
            <p>
              A NigComSat-endorsed startup walks into procurement
              conversations, investor meetings, and partnership negotiations
              with something most early-stage companies spend years trying to
              earn: legitimacy at a national scale.
            </p>

            <p>
              Combined with our zero-cost, zero-equity, zero-IP-claim model,
              the Accelerator is built entirely around your growth—not ours.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Launchpad;
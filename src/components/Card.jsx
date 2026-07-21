import { motion } from "framer-motion";
import CountUpModule from "react-countup";

// Safe export resolution for Vite/Next ESM environments
const CountUp = CountUpModule.CountUp || CountUpModule.default || CountUpModule;

export default function Card() {
  // Container animation with staggered children reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Item variants: starts at center (offset + scaled down) and expands out
  const cohortVariants = {
    hidden: { x: 80, y: 80, scale: 0, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 14 },
    },
  };

  const startupVariants = {
    hidden: { x: -80, y: 80, scale: 0, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 14 },
    },
  };

  const fundingVariants = {
    hidden: { y: -80, scale: 0, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 14 },
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center">
        
        {/* Left Feature Card */}
        <motion.div
          className="w-full max-w-[550px] bg-stone-900 text-white rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">
            What NigComSat brings to the program
          </h2>

          <ul className="space-y-3">
            <li>&gt; Satellite technology access and infrastructure for product development</li>
            <li>&gt; NIGCOMSAT brand endorsement for successful graduates.</li>
            <li>&gt; Market connections and procurement pathways.</li>
            <li>
              &gt; Government alignment through the Federal Ministry of
              Communications, Innovation, and Digital Economy
            </li>
          </ul>
        </motion.div>

        {/* Right Stats Container (Exploding Triangle + CountUp) */}
        <motion.div
          className="w-full flex flex-col items-center justify-center gap-10 min-h-[320px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Top Base (3+ and 30+) */}
          <div className="flex justify-center items-end gap-12 sm:gap-16 w-full">
            <motion.div variants={cohortVariants} className="text-center">
              <h1 className="text-6xl font-bold">
                <CountUp start={0} end={3} duration={2} enableScrollSpy scrollSpyOnce />+
              </h1>
              <p className="text-2xl mt-2">Cohorts</p>
            </motion.div>

            <motion.div variants={startupVariants} className="text-center">
              <h1 className="text-7xl font-bold">
                <CountUp start={0} end={30} duration={2} enableScrollSpy scrollSpyOnce />+
              </h1>
              <p className="text-2xl mt-2">Startups</p>
            </motion.div>
          </div>

          {/* Bottom Tip (98+) */}
          <motion.div variants={fundingVariants} className="text-center">
            <h1 className="text-7xl font-bold">
              <CountUp start={0} end={98} duration={2} enableScrollSpy scrollSpyOnce />+
            </h1>
            <p className="text-2xl mt-2">Funding Disbursed</p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
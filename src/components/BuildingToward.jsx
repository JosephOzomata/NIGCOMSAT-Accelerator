import React from 'react';
import { motion } from 'framer-motion';
import magnifying from '../images/magnifying.png';
import equip from '../images/equip.png';
import link from '../images/link.jpg';
import support from '../images/support.jpg';

export default function BuildingToward() {
  const cards = [
    {
      id: 1,
      title: "Identify and Support",
      desc: "Identify and support nascent actors in the Nigerian space ecosystem.",
      iconUrl: magnifying
    },
    {
      id: 2,
      title: "Equip Startups",
      desc: "Equip adjacent-industry startups with tools to build on space infrastructure.",
      iconUrl: equip
    },
    {
      id: 3,
      title: "Connect Founders",
      desc: "Connect founders to world-class mentorship and funding networks.",
      iconUrl: link
    },
    {
      id: 4,
      title: "Support FMC's target",
      desc: "Contribute to the FMC's target: 100% increase in tech-enabled startups.",
      iconUrl: support
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 md:p-12 overflow-x-hidden">

      <div className="text-center mb-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
          What we're building toward
        </h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="flex lg:grid lg:grid-cols-4 gap-4 w-full max-w-6xl overflow-x-auto lg:overflow-x-visible pb-6 lg:pb-0 snap-x snap-mandatory scrollbar-none"
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            className="min-w-[260px] flex-1 lg:min-w-0 snap-center rounded-2xl p-6 min-h-[220px] flex flex-col items-center text-center justify-start border border-slate-200/60 shadow-sm bg-white transition-all duration-300 hover:shadow-md"
          >
            <div className="w-10 h-10 mb-4 flex items-center justify-center select-none">
              <img 
                src={card.iconUrl} 
                alt="" 
                className="w-full h-full object-contain opacity-80"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-slate-800 tracking-tight leading-snug">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500 leading-relaxed max-w-[220px] mx-auto">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}
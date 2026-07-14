
import React, { useEffect, useRef, useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

function ScrollSquare({ text, number, isEven }) {
  return (
    <div className={`flex w-1/2 z-10 ${isEven ? 'self-end justify-start pl-8' : 'self-start justify-end pr-8'}`}>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.75, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-[300px] h-[200px] bg-white rounded-xl flex items-center overflow-hidden box-border shadow-2xl p-4 relative"
      >
        <span className="text-[15rem] font-black text-sky-400/30 select-none leading-none absolute left-2 bottom-[-10px]">
          {number}
        </span>
        
        <div className="z-20 w-full pl-2">
          <p className="text-base font-sans font-bold text-slate-800 leading-snug drop-shadow-sm text-right">
            {text}
          </p>
        </div>
      </motion.div>

    </div>
  );
}

export default function App() {
  const steps = [
    { id: 1, text: "Application: Submit your idea, team, and MVP details.", number: 1 },
    { id: 2, text: "Evaluation: Panel review by VCs, and industry experts.", number: 2 },
    { id: 3, text: "Deep Dive: Product refinement + business development", number: 3 },
    { id: 4, text: "Demo Day: Pitch to investors, media, and launch", number: 4 }
  ];

  return (
    <div className="w-full min-h-screen bg-[#F7F3EB]">
      <header className="text-center py-16 px-5">
        <h1 className="text-4xl font-black text-slate-800 mb-2">What the project looks like</h1>
      </header>

      <div className="relative max-w-2xl mx-auto flex flex-col gap-24 pb-0">
        <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-slate-800 -translate-x-1/2 z-0"></div>
        
        {steps.map((step, index) => (
          <ScrollSquare 
            key={step.id} 
            text={step.text} 
            number={step.number}
            isEven={index % 2 !== 0} 
          />
        ))}
      </div>
    </div>
  );
}
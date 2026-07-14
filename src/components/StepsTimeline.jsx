import React from 'react';
import { motion } from 'framer-motion';

function ScrollSquare({ text, number, isEven }) {
  return (
    <div className={`flex w-1/2 z-10 ${isEven ? 'self-end justify-start pl-6' : 'self-start justify-end pr-6'}`}>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.75, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-72 h-72 bg-white border-4 border-sky-400 rounded-lg flex flex-col overflow-hidden box-border shadow-xl shadow-slate-300/60"
      >
        <div className="flex-1 w-full grid place-items-center bg-slate-50">
          <span className="text-6xl font-black text-sky-400 select-none">
            {number}
          </span>
        </div>
        
        <div className="bg-slate-800 w-full h-14 box-border m-0 p-0 grid place-items-center">
          <span className="inline-block m-0 p-0 text-white font-sans text-xs font-bold text-center leading-none vertical-middle px-2">
            {text}
          </span>
        </div>
      </motion.div>

    </div>
  );
}

export default function App() {
  const steps = [
    { id: 1, text: "Application", number: 1 },
    { id: 2, text: "Evaluation", number: 2 },
    { id: 3, text: "Deep Dive", number: 3 },
    { id: 4, text: "Demo Day", number: 4 }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <header className="text-center py-12 px-5">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-2">What the project looks like</h1>
      </header>

      <div className="relative max-w-xl mx-auto flex flex-col gap-24 pb-64">
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
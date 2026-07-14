<<<<<<< HEAD
import react, { useState, useEffect, useRef } from 'react';
import '../assets/Timeline.css'
=======
import React, { useEffect, useRef, useState } from 'react';
>>>>>>> 4711ce72442ce7351d4dfc14f7e9f2fca57bf28b

function ScrollSquare({ text, imgSrc, isEven }) {
  const [isVisible, setIsVisible] = useState(false);
  const squareRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: "-20px 0px -20px 0px"
      }
    );

    if (squareRef.current) {
      observer.observe(squareRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`flex w-1/2 z-10 ${isEven ? 'self-end justify-start pl-6' : 'self-start justify-end pr-6'}`}>
      <div 
        ref={squareRef} 
        className={`w-40 h-44 bg-blue-500 border-4 border-slate-800 rounded flex flex-col overflow-hidden box-border transform transition-all duration-500 ease-in-out
          ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-8'}`}
      >
        <div className="flex-1 w-full overflow-hidden">
          <img src={imgSrc} alt={text} className="w-full h-full object-cover" />
        </div>
        
        <div className="bg-slate-800 w-full h-12 box-border m-0 p-0 grid place-items-center">
          <span className="inline-block m-0 p-0 text-white font-sans text-sm font-bold text-center leading-none vertical-middle">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const steps = [
    { id: 1, text: "Application", img: "https://picsum.photos" },
    { id: 2, text: "Evaluation", img: "https://picsum.photos" },
    { id: 3, text: "Deep Dive", img: "https://picsum.photos" },
    { id: 4, text: "Demo Day", img: "https://picsum.photos" }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <header className="text-center py-10 px-5">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-2">What the program looks like</h1>
      </header>

      <div className="relative max-w-lg mx-auto flex flex-col gap-20 pb-52">
        <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-slate-800 -translate-x-1/2 z-0"></div>
        
        {steps.map((step, index) => (
          <ScrollSquare 
            key={step.id} 
            text={step.text} 
            imgSrc={step.img} 
            isEven={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}
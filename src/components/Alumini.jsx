import React, { useState, useEffect } from "react";
const Alumini = () => {
    
  // Array of background colors to act as placeholder slides
  const slides = ["bg-blue-400", "bg-blue-700","bg-blue-400", "bg-blue-700","bg-blue-400"];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-5 w-full p-2">
      
      {/* CAROUSEL CONTAINER (Left Side) */}
      <div className="relative overflow-hidden rounded-lg h-[350px]">
        <div
          className="flex h-full transition-transform duration-900 ease-in-out"
         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((bgColor, index) => (
            <div
              key={index}
             className={`w-full h-full flex-shrink-0 ${bgColor}`}
            ></div>
          ))}
        </div>

        {/* Optional: Navigation Dots at the bottom */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* STATIC CONTAINER (Right Side) */}
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-red-500 rounded-lg hover:scale-105 transition-transform"></div>
        <div className="bg-red-500 rounded-lg hover:scale-105 transition-transform"></div>
        <div className="bg-red-500 rounded-lg hover:scale-105 transition-transform"></div>
        <div className="bg-red-500 rounded-lg hover:scale-105 transition-transform"></div>
      </div>
      
    </div>
  );
};

export default Alumini;
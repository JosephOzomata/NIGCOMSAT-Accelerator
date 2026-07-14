import react, { useState, useEffect, useRef } from 'react';
import './Timeline.css'

function ScrollSquare({ text, imgSrc }) {
  const [isVisible, setIsVisible] = useState(false);
  const squareRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
          setIsVisible(entry.isIntersecting);
      },
      {threshold: 0.3,
      rootMargin: "-20px 0px -20px 0px"
      }
    );

    if (squareRef.current) {
      observer.observe(squareRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={squareRef} 
      className={`square ${isVisible ? 'fade-in' : ''}`}
    >
      {imgSrc ? (
        <img src={imgSrc} alt={text} className="square-image" />
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
    <>
      <Home />
    </>
}
export default function App() {
  const steps = [
    { id: 1, text: "Application", img: "https://picsum.photos" },
    { id: 2, text: "Evaluation", img: "https://picsum.photos" },
    { id: 3, text: "Deep Dive", img: "https://picsum.photos" },
    { id: 4, text: "Demo Day", img: "https://picsum.photos" }
  ];

  return (
    <div className="app-container">
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {steps.map((step) => (
          <div key={step.id} className="timeline-row">
            <ScrollSquare text={step.text} imgSrc={step.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

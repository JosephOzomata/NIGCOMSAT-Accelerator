import React, { useState, useEffect, useRef } from 'react';

export default function OrganizationalSpotlight() {
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Array of your slide content, distinct colors, and corresponding presentation images
  const slidesData = [
    {
      title: "Design System Architecture",
      tagline: "Crafting beautiful interfaces",
      desc: "Deploy pixel-perfect components built on universal design principles. This workspace enables rapid prototyping with unified layout primitives.",
      img: "https://unsplash.com",
      glowColor: "rgba(99, 102, 241, 0.25)" // Vivid Purple-Indigo
    },
    {
      title: "Dynamic Asset Processing",
      tagline: "Optimized multi-threaded queues",
      desc: "Instantly transcode media assets down the line. Our processing pipeline balances system overhead to secure stable frame updates across edge instances.",
      img: "https://unsplash.com",
      glowColor: "rgba(236, 72, 153, 0.25)" // Vibrant Pink-Rose
    },
    {
      title: "Global CDN Routing",
      tagline: "Sub-millisecond data delivery",
      desc: "Distribute your visual media structures straight to localized consumer storage layers, flattening server-side wait overhead for incoming global traffic.",
      img: "https://unsplash.com",
      glowColor: "rgba(20, 184, 166, 0.25)" // Bright Teal-Cyan
    }
  ];

  // Performance-optimized cursor variable updates
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  // Simple auto-slide rotation script mimicking active page progression
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slidesData.length);
    }, 4500); // Transitions to next deck slide every 4.5 seconds
    return () => clearInterval(timer);
  }, [slidesData.length]);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#f4f4f7', // Shifted background color to a cleaner, brighter grey-white profile
        color: '#1f2937', // Adjusted copy tracking color to deep charcoal for visibility
        fontFamily: 'system-ui, sans-serif',
        overflow: 'hidden',
        display: 'flex',
        '--mouse-x': '50%',
        '--mouse-y': '50%'
      }}
    >
      {/* Subtle Reactive Cursor Ambient Layer across the bright canvas background */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `radial-gradient(700px circle at var(--mouse-x) var(--mouse-y), ${slidesData[activeSlide].glowColor}, transparent 85%)`,
          transition: 'background 0.5s ease-in-out' // Smoothly interpolates lighting colors during slide jumps
        }} 
      />

      {/* LEFT SIDE: Presentation Text Column */}
      <div style={{ width: '50%', padding: '6rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '480px', margin: '0 auto' }}>
          
          {/* Tagline Indicator block */}
          <span style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#4f46e5', display: 'block', marginBottom: '0.75rem' }}>
            {slidesData[activeSlide].tagline}
          </span>

          {/* Slide Heading - Animates softly via basic CSS opacity states */}
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, margin: '0 0 1.25rem 0', color: '#111827', letterSpacing: '-0.025em', transition: 'opacity 0.3s ease' }}>
            {slidesData[activeSlide].title}
          </h1>

          {/* Description Paragraph Block */}
          <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.75', margin: '0 0 2.5rem 0' }}>
            {slidesData[activeSlide].desc}
          </p>

          {/* Interactive Pagination Slide Pills */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {slidesData.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveSlide(index)}
                style={{
                  width: index === activeSlide ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: index === activeSlide ? '#4f46e5' : '#d1d5db',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* RIGHT SIDE: Fixed / Sticky Image Slider Frame */}
      <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem', position: 'relative', zIndex: 10 }}>
        
        {/* Core Media Window Wrapper */}
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '500px', 
          height: '400px', 
          borderRadius: '24px', 
          overflow: 'hidden',
          backgroundColor: '#e5e7eb',
          boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)'
        }}>
          
          {/* Map slide array straight into absolute stacks, shifting positions based on active states */}
          {slidesData.map((slide, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: index === activeSlide ? 1 : 0,
                transform: `translateX(${(index - activeSlide) * 40}px) scale(${index === activeSlide ? 1 : 0.95})`,
                transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: index === activeSlide ? 2 : 1
              }}
            >
              {/* Individual Image Asset */}
              <img 
                src={slide.img} 
                alt={slide.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Reactive Inner Glow Layer tied explicitly to each deck element color profile */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), ${slide.glowColor}, transparent 80%)`,
                  mixBlendMode: 'multiply' // Blends the vibrant spotlight color deeply directly over image details
                }}
              />
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

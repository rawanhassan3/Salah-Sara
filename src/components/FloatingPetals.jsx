import React, { useEffect, useState } from 'react';

export default function FloatingPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate random falling petals & golden shimmer specks
    const items = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 14 + 10,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 8,
      rotation: Math.random() * 360,
      isGold: i % 3 === 0
    }));
    setPetals(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-[-40px] opacity-60"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            animation: `fall ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            transform: `rotate(${petal.rotation}deg)`
          }}
        >
          {petal.isGold ? (
            <div
              className="w-full h-full rounded-full opacity-70 blur-[0.5px]"
              style={{
                background: 'radial-gradient(circle, #DFCA98 20%, #C5A059 80%, transparent)'
              }}
            />
          ) : (
            <svg viewBox="0 0 30 40" className="w-full h-full drop-shadow-sm fill-[#E8C5C8] opacity-75">
              <path d="M15,0 C25,10 30,25 20,35 C10,45 0,30 5,18 C10,6 12,2 15,0 Z" />
            </svg>
          )}
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-50px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(105vh) translateX(60px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

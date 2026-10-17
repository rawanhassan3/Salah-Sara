import React, { useEffect, useState } from 'react';

export default function FloatingPetals() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate gentle golden specks & champagne petals
    const items = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 10 + 6,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 8,
      rotation: Math.random() * 360,
      isGold: i % 2 === 0
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-[-30px] opacity-60"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.2}px`,
            animation: `goldFall ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotation}deg)`
          }}
        >
          {p.isGold ? (
            <div
              className="w-full h-full rounded-full opacity-80 blur-[0.5px]"
              style={{
                background: 'radial-gradient(circle, #FFF3D6 15%, #D4AF37 60%, #9E7933 100%)'
              }}
            />
          ) : (
            <div
              className="w-full h-full rounded-full opacity-50 blur-[0.3px]"
              style={{
                background: 'radial-gradient(circle, #FFFFFF 20%, #E8DFCF 80%, transparent)'
              }}
            />
          )}
        </div>
      ))}
      <style>{`
        @keyframes goldFall {
          0% {
            transform: translateY(-40px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.75;
          }
          85% {
            opacity: 0.75;
          }
          100% {
            transform: translateY(105vh) translateX(50px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

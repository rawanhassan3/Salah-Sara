import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Crown } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function EnvelopeIntro({ onOpen, lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const isAr = lang === 'ar';

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Synchronous call to start Hussain Al Jassmi inside user tap (iOS Safari & Android Chrome)
    if (onOpen) {
      onOpen();
    }

    // Burst gold and champagne confetti
    confetti({
      particleCount: 65,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFF3D6', '#B89047', '#EBD8B0']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8F5EE] paper-texture px-4">
      <div className="relative w-full max-w-md flex flex-col items-center">
        
        {/* Royal Ambient Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-[1px] w-8 bg-[#C5A059]/60" />
            <Crown className="w-4 h-4 text-[#B89047]" />
            <span className="h-[1px] w-8 bg-[#C5A059]/60" />
          </div>

          <span className="text-[#8E6A2B] tracking-[0.35em] uppercase text-xs font-serif-luxury font-bold block mb-1">
            {isAr ? "دعوة زفاف ملكية" : "ROYAL WEDDING INVITATION"}
          </span>
          <h1 className="text-4xl md:text-5xl font-script text-[#2D241E] leading-tight drop-shadow-sm">
            {weddingConfig.groom[lang]} &amp; {weddingConfig.bride[lang]}
          </h1>
          <p className="text-[#7A6F66] text-xs tracking-widest uppercase mt-1 font-serif-luxury">
            {weddingConfig.displayDate.shortDay} &bull; {weddingConfig.venue.city[lang]}
          </p>
        </motion.div>

        {/* 3D Envelope Container (Gold & Beige Velvet) */}
        <div 
          onClick={handleOpenEnvelope}
          className="relative w-full max-w-[360px] h-[240px] cursor-pointer group select-none"
          style={{ perspective: '1200px' }}
        >
          {/* Card Inside Envelope (Slides Up on click) */}
          <motion.div
            className="absolute left-4 right-4 top-2 h-[210px] bg-[#FCFAF6] rounded-t-xl border border-[#E8DFCF] card-royal-shadow p-4 flex flex-col items-center justify-center text-center overflow-hidden z-10"
            initial={{ y: 0 }}
            animate={isOpen ? { y: -130, opacity: 1 } : { y: 0, opacity: 0.9 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Elegant Double Gold Hairline Border */}
            <div className="absolute inset-2 border border-[#C5A059]/50 rounded-lg pointer-events-none" />

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8E6A2B] font-serif-luxury font-bold mt-2">
              {isAr ? "احفظوا التاريخ" : "SAVE THE DATE"}
            </p>
            <h2 className="text-3xl font-script text-[#2D241E] my-1">
              {weddingConfig.groom[lang]} &amp; {weddingConfig.bride[lang]}
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A059] my-1" />
            <p className="text-xs font-serif-luxury text-[#8E6A2B] font-bold tracking-wider">
              {weddingConfig.displayDate.dayMonth}
            </p>
            <p className="text-[10px] text-[#7A6F66] tracking-widest mt-1">
              {weddingConfig.venue.name[lang]}
            </p>
          </motion.div>

          {/* Envelope Pocket Base (Rich Warm Antique Gold / Champagne) */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#C5A059] via-[#B89047] to-[#8E6A2B] rounded-xl overflow-hidden envelope-gold-shadow z-20 flex items-end border border-[#E0C78D]"
          >
            {/* Envelope Pocket Cutout lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 360 240" 
              preserveAspectRatio="none"
            >
              {/* Left flap */}
              <polygon points="0,0 180,120 0,240" fill="#9E7833" opacity="0.6" />
              {/* Right flap */}
              <polygon points="360,0 180,120 360,240" fill="#8C6726" opacity="0.5" />
              {/* Bottom pocket */}
              <polygon points="0,240 180,110 360,240" fill="#B89047" />
              {/* Delicate gold border line */}
              <polyline points="0,240 180,110 360,240" fill="none" stroke="#FFF3D6" strokeWidth="1.2" strokeOpacity="0.7" />
            </svg>
          </div>

          {/* Envelope Flap (Top triangle that folds open in Gold) */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[125px] z-30 origin-top"
            initial={{ rotateX: 0 }}
            animate={isOpen ? { rotateX: 180, zIndex: 5 } : { rotateX: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <svg 
              className="w-full h-full drop-shadow-md" 
              viewBox="0 0 360 125" 
              preserveAspectRatio="none"
            >
              <polygon points="0,0 360,0 180,125" fill="#B89047" />
              <polyline points="0,0 180,125 360,0" fill="none" stroke="#FFF3D6" strokeWidth="1.5" strokeOpacity="0.8" />
            </svg>
          </motion.div>

          {/* Wax Seal Centered over Flap in Pearlescent Gold */}
          <motion.div
            className="absolute left-1/2 top-[108px] -translate-x-1/2 -translate-y-1/2 z-40"
            initial={{ scale: 1 }}
            animate={isOpen ? { scale: 1.25, opacity: 0, y: -20 } : { scale: [1, 1.04, 1] }}
            transition={isOpen ? { duration: 0.5 } : { repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFF5DE] via-[#EBD8B0] to-[#C5A059] border-2 border-[#B89047] shadow-xl flex items-center justify-center p-1 relative overflow-hidden group-hover:shadow-[#C5A059]/60 transition-shadow">
              {/* Wax embossed ring */}
              <div className="w-13 h-13 rounded-full border border-dashed border-[#8E6A2B] flex flex-col items-center justify-center text-[#2D241E]">
                <span className="font-serif-luxury text-[9px] font-bold tracking-tighter text-[#8E6A2B]">S &amp; S</span>
                <Heart className="w-2.5 h-2.5 fill-[#8E6A2B] text-[#8E6A2B] mt-0.5" />
              </div>
              <div className="absolute top-1 left-2 w-4 h-2 bg-white/50 rounded-full blur-[1px]" />
            </div>
          </motion.div>
        </div>

        {/* Tap to Open CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <button
            onClick={handleOpenEnvelope}
            disabled={isOpen}
            className="relative px-8 py-3.5 rounded-full gold-gradient-btn text-[#FCFAF6] font-serif-luxury text-xs sm:text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-[#B89047]/40 flex items-center gap-2 group mx-auto border border-[#FFF3D6]/70"
          >
            <Sparkles className="w-4 h-4 text-[#FFF3D6] group-hover:rotate-45 transition-transform" />
            <span>{isAr ? "اضغط لفتح الدعوة" : "Tap to open"}</span>
            <Sparkles className="w-4 h-4 text-[#FFF3D6] group-hover:-rotate-45 transition-transform" />
          </button>
          <p className="text-[11px] text-[#7A6F66] mt-3 tracking-wider font-medium">
            {isAr ? "أغنية «ادخلي عمري» وتفاصيل الحفل بانتظاركم" : "Hussain Al Jassmi's «Edkhely Omri» awaits"}
          </p>
        </motion.div>

      </div>
    </div>
  );
}

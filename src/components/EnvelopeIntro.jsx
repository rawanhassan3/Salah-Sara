import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function EnvelopeIntro({ onOpen, lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const isAr = lang === 'ar';

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Burst confetti in gold and rose champagne colors
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C5A059', '#FAF7F2', '#E8C5C8', '#4A0E17']
    });

    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF7F2] paper-texture px-4">
      <div className="relative w-full max-w-md flex flex-col items-center">
        
        {/* Subtle Ambient Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="text-[#9B7838] tracking-[0.3em] uppercase text-xs font-serif-luxury font-semibold block mb-2">
            {isAr ? "دعوة زفاف خاصة" : "A Special Wedding Invitation"}
          </span>
          <h1 className="text-4xl md:text-5xl font-script text-[#4A0E17] leading-tight">
            {weddingConfig.groom[lang]} &amp; {weddingConfig.bride[lang]}
          </h1>
          <p className="text-[#7A6A65] text-xs tracking-widest uppercase mt-1 font-serif-luxury">
            {weddingConfig.displayDate.shortDay} &bull; {weddingConfig.venue.city[lang]}
          </p>
        </motion.div>

        {/* 3D Envelope Container */}
        <div 
          onClick={handleOpenEnvelope}
          className="relative w-full max-w-[360px] h-[240px] cursor-pointer group select-none"
          style={{ perspective: '1200px' }}
        >
          {/* Card Inside Envelope (Slides Up on click) */}
          <motion.div
            className="absolute left-4 right-4 top-2 h-[210px] bg-[#FDFBF7] rounded-t-lg border border-[#E2D6C3] card-luxury-shadow p-4 flex flex-col items-center justify-center text-center overflow-hidden z-10"
            initial={{ y: 0 }}
            animate={isOpen ? { y: -130, opacity: 1 } : { y: 0, opacity: 0.9 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top Striped Burgundy Ribbon */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-[repeating-linear-gradient(45deg,#4A0E17,#4A0E17_6px,#FAF7F2_6px,#FAF7F2_12px)] opacity-85" />
            
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#9B7838] font-serif-luxury mt-2">
              {isAr ? "احفظوا التاريخ" : "SAVE THE DATE"}
            </p>
            <h2 className="text-3xl font-script text-[#4A0E17] my-1">
              {weddingConfig.groom[lang]} &amp; {weddingConfig.bride[lang]}
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A059] my-1" />
            <p className="text-xs font-serif-luxury text-[#4A0E17] font-semibold tracking-wider">
              {weddingConfig.displayDate.dayMonth}
            </p>
            <p className="text-[10px] text-[#7A6A65] tracking-widest mt-1">
              {weddingConfig.venue.name[lang]}
            </p>
          </motion.div>

          {/* Envelope Pocket Base (Burgundy Velvet) */}
          <div 
            className="absolute inset-0 bg-[#4A0E17] rounded-xl overflow-hidden envelope-shadow z-20 flex items-end"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #58111A 0%, #4A0E17 70%, #350A10 100%)'
            }}
          >
            {/* Envelope Pocket Cutout lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 360 240" 
              preserveAspectRatio="none"
            >
              {/* Left flap */}
              <polygon points="0,0 180,120 0,240" fill="#3E0B12" opacity="0.6" />
              {/* Right flap */}
              <polygon points="360,0 180,120 360,240" fill="#380910" opacity="0.5" />
              {/* Bottom pocket */}
              <polygon points="0,240 180,110 360,240" fill="#4A0E17" />
              {/* Delicate gold border line */}
              <polyline points="0,240 180,110 360,240" fill="none" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.4" />
            </svg>
          </div>

          {/* Envelope Flap (Top triangle that folds open) */}
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
              <polygon points="0,0 360,0 180,125" fill="#4A0E17" />
              <polyline points="0,0 180,125 360,0" fill="none" stroke="#C5A059" strokeWidth="1.2" strokeOpacity="0.45" />
            </svg>
          </motion.div>

          {/* Wax Seal Centered over Flap */}
          <motion.div
            className="absolute left-1/2 top-[108px] -translate-x-1/2 -translate-y-1/2 z-40"
            initial={{ scale: 1 }}
            animate={isOpen ? { scale: 1.25, opacity: 0, y: -20 } : { scale: [1, 1.04, 1] }}
            transition={isOpen ? { duration: 0.5 } : { repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#EFE5D3] via-[#DFD1B8] to-[#C9B89C] border-2 border-[#BFA98A] shadow-xl flex items-center justify-center p-1 relative overflow-hidden group-hover:shadow-[#C5A059]/40 transition-shadow">
              {/* Wax embossed ring */}
              <div className="w-13 h-13 rounded-full border border-dashed border-[#A89173] flex flex-col items-center justify-center text-[#4A0E17]">
                <span className="font-serif-luxury text-[9px] font-bold tracking-tighter">S &amp; S</span>
                <Heart className="w-2.5 h-2.5 fill-[#4A0E17] text-[#4A0E17] mt-0.5" />
              </div>
              {/* Subtle wax highlight */}
              <div className="absolute top-1 left-2 w-4 h-2 bg-white/40 rounded-full blur-[1px]" />
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
            className="relative px-8 py-3 rounded-full bg-[#4A0E17] text-[#FAF7F2] font-serif-luxury text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#681522] hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#4A0E17]/30 flex items-center gap-2 group mx-auto border border-[#C5A059]/50"
          >
            <Sparkles className="w-4 h-4 text-[#DFCA98] group-hover:rotate-45 transition-transform" />
            <span>{isAr ? "اضغط لفتح الدعوة" : "Tap to open"}</span>
            <Sparkles className="w-4 h-4 text-[#DFCA98] group-hover:-rotate-45 transition-transform" />
          </button>
          <p className="text-[11px] text-[#8C7A75] mt-3 tracking-wider font-light">
            {isAr ? "موسيقى هادئة وتفاصيل الحفل بانتظاركم" : "Soft music and celebration details await"}
          </p>
        </motion.div>

      </div>
    </div>
  );
}

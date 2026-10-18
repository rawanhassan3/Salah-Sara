import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Crown } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function EnvelopeIntro({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);

    if (onOpen) {
      onOpen();
    }

    confetti({
      particleCount: 75,
      spread: 80,
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
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-[1px] w-8 bg-[#C5A059]/60" />
            <Crown className="w-4 h-4 text-[#B89047]" />
            <span className="h-[1px] w-8 bg-[#C5A059]/60" />
          </div>

          <span className="text-[#8E6A2B] tracking-[0.35em] text-xs font-serif-luxury font-bold block mb-1">
            دعوة زفاف
          </span>
          <h1 className="text-4xl md:text-5xl font-script text-[#2D241E] leading-tight drop-shadow-sm">
            {weddingConfig.groom.ar} &amp; {weddingConfig.bride.ar}
          </h1>
          <p className="text-[#7A6F66] text-xs tracking-widest mt-1 font-serif-luxury font-medium">
            {weddingConfig.displayDate.shortDay} &bull; {weddingConfig.venue.city.ar}
          </p>
        </motion.div>

        {/* Custom Embossed Textured Envelope Container */}
        <div
          onClick={handleOpenEnvelope}
          className="relative w-full max-w-[370px] h-[260px] cursor-pointer group select-none flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          {/* Card Inside Envelope (Slides Up upon unsealing) */}
          <motion.div
            className="absolute left-6 right-6 top-3 h-[210px] bg-[#FCFAF6] rounded-t-xl border border-[#E8DFCF] card-royal-shadow p-4 flex flex-col items-center justify-center text-center overflow-hidden z-10"
            initial={{ y: 0 }}
            animate={isOpen ? { y: -130, opacity: 1 } : { y: 0, opacity: 0.9 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Elegant Double Gold Hairline Border */}
            <div className="absolute inset-2 border border-[#C5A059]/50 rounded-lg pointer-events-none" />

            <p className="text-[11px] tracking-[0.25em] text-[#8E6A2B] font-bold mt-2">
              احفظوا التاريخ
            </p>
            <h2 className="text-3xl font-script text-[#2D241E] my-1">
              {weddingConfig.groom.ar} &amp; {weddingConfig.bride.ar}
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A059] my-1" />
            <p className="text-xs font-serif-luxury text-[#8E6A2B] font-bold tracking-wider">
              {weddingConfig.displayDate.dayMonth}
            </p>
            <p className="text-[11px] text-[#7A6F66] tracking-wide mt-1 font-medium">
              {weddingConfig.venue.name.ar}
            </p>
          </motion.div>

          {/* Authentic Embossed Ivory Envelope */}
          <motion.div
            className="relative w-full h-full z-20 flex items-center justify-center drop-shadow-2xl"
            initial={{ scale: 1 }}
            animate={isOpen ? { scale: 0.98, opacity: 0.95 } : { scale: [1, 1.015, 1] }}
            transition={isOpen ? { duration: 0.5 } : { repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            <img
              src="/envelope-custom.png"
              alt="ظرف دعوة الزفاف الملكي"
              className="w-full h-full object-contain filter contrast-[1.02] drop-shadow-lg rounded-lg"
            />

            {/* Custom S&S Metallic Antique Gold Wax Seal */}
            <motion.div
              className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
              initial={{ scale: 1 }}
              animate={isOpen ? { scale: 1.3, opacity: 0, y: -20 } : { scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/gold-wax-seal.png"
                alt="ختم شمعي مذهب لصلاح وسارة"
                className="w-20 h-20 sm:w-22 sm:h-22 object-contain drop-shadow-2xl filter brightness-[1.02] contrast-[1.05]"
              />
            </motion.div>
          </motion.div>

        </div>

        {/* Tap to Open CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 text-center"
        >
          <button
            onClick={handleOpenEnvelope}
            disabled={isOpen}
            className="relative px-8 py-3.5 rounded-full gold-gradient-btn text-[#FCFAF6] font-serif-luxury text-sm tracking-[0.15em] font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-[#B89047]/40 flex items-center gap-2 group mx-auto border border-[#FFF3D6]/70"
          >
            <Sparkles className="w-4 h-4 text-[#FFF3D6] group-hover:rotate-45 transition-transform" />
            <span>اضغط لفتح الدعوة</span>
            <Sparkles className="w-4 h-4 text-[#FFF3D6] group-hover:-rotate-45 transition-transform" />
          </button>

        </motion.div>

      </div>
    </div>
  );
}

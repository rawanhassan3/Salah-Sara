import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function HeroCard({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section className="relative pt-24 pb-12 px-4 flex flex-col items-center">
      
      {/* Visual Composition Container (Recreating the Video Masterpiece) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[420px] mx-auto"
      >
        
        {/* Envelope Base Behind (Deep Rich Burgundy) */}
        <div className="relative bg-[#4A0E17] rounded-2xl p-4 pt-12 pb-14 envelope-shadow overflow-visible border border-[#C5A059]/30">
          
          {/* Subtle textured velvet gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#58111A] via-[#4A0E17] to-[#30070D] rounded-2xl pointer-events-none" />

          {/* Main Invitation Card (Cream with Gold Foil Border) */}
          <div className="relative bg-[#FDFBF7] rounded-xl p-5 pt-0 pb-8 card-luxury-shadow border border-[#E4D8C5] overflow-hidden z-10 text-center">
            
            {/* Top Striped Ribbon Border (Exact match to video) */}
            <div className="w-full h-5 bg-[repeating-linear-gradient(45deg,#4A0E17,#4A0E17_7px,#FAF7F2_7px,#FAF7F2_14px)] mb-5 shadow-inner" />

            <div className="px-2">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#9B7838] font-serif-luxury font-semibold block mb-2">
                {isAr ? "احفظوا التاريخ" : "SAVE THE DATE"}
              </span>

              {/* Couple Names in Script Font */}
              <h1 className="text-4xl sm:text-5xl font-script text-[#4A0E17] leading-tight my-2">
                {weddingConfig.groom[lang]}
              </h1>
              
              <span className="font-serif-luxury text-sm italic text-[#C5A059] block my-0.5">
                {isAr ? "و" : "&"}
              </span>
              
              <h1 className="text-4xl sm:text-5xl font-script text-[#4A0E17] leading-tight my-2">
                {weddingConfig.bride[lang]}
              </h1>

              {/* Decorative Floral Sprig */}
              <div className="flex items-center justify-center gap-3 my-4">
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
                <Heart className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#C5A059] to-transparent" />
              </div>

              {/* Wedding Date */}
              <p className="font-serif-luxury text-sm font-semibold tracking-widest text-[#4A0E17] uppercase">
                {weddingConfig.displayDate[lang]}
              </p>
            </div>
          </div>

          {/* Overlapping Oval Vintage Lace Frame with Couple Photo (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -3 }}
            animate={{ opacity: 1, x: 0, rotate: -4 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute -left-3 sm:-left-6 top-8 w-36 h-48 sm:w-44 sm:h-56 z-20"
          >
            {/* Vintage Embossed Lace Frame */}
            <div className="relative w-full h-full bg-[#FAF7F2] p-2.5 rounded-[50%] shadow-2xl border-4 border-[#E2D5BF] flex items-center justify-center overflow-hidden">
              {/* Inner Scalloped Gold Ring */}
              <div className="absolute inset-1 rounded-[50%] border-2 border-dashed border-[#C5A059]/60 pointer-events-none z-10" />
              
              {/* Couple Portrait Photo */}
              <img
                src="/couple.jpg"
                alt="Salah & Sara"
                className="w-full h-full object-cover rounded-[50%] filter saturate-[0.95] contrast-[1.05]"
              />

              {/* Embossed Floral Ornament on top corner */}
              <div className="absolute top-1 left-2 text-[#C5A059] opacity-80 z-20">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12,2 C13,5 16,6 18,4 C17,7 19,9 22,9 C19,11 18,14 19,17 C16,16 14,18 12,21 C11,18 8,17 5,19 C6,16 4,14 2,12 C5,11 6,8 5,5 C8,6 10,4 12,2 Z" />
                </svg>
              </div>
            </div>

            {/* Heart Lace Badge with 15.11 Date (Overlapping the bottom of the photo frame) */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#FDFBF7] px-3.5 py-1.5 rounded-full border-2 border-[#D5C2A2] shadow-lg flex items-center justify-center whitespace-nowrap z-30"
            >
              <div className="flex items-center gap-1.5 text-[#4A0E17]">
                <Calendar className="w-3 h-3 text-[#C5A059]" />
                <span className="font-serif-luxury text-xs font-bold tracking-wider">
                  {weddingConfig.displayDate.shortDay}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hanging Floral Bouquet on Right Side (Calla Lilies & Cascading Amaranthus) */}
          <div className="absolute -right-3 sm:-right-5 top-12 z-20 pointer-events-none drop-shadow-xl">
            <svg width="60" height="180" viewBox="0 0 60 180" fill="none">
              {/* White Calla Lily Petals */}
              <path d="M25 15 C35 5, 55 10, 50 35 C45 45, 30 50, 20 40 C10 30, 15 25, 25 15 Z" fill="#FDFBF7" stroke="#E2D5BF" strokeWidth="1" />
              <path d="M30 35 C32 20, 42 22, 38 40" stroke="#DFCA98" strokeWidth="2" strokeLinecap="round" />
              
              {/* Green Anthurium / Leaf */}
              <path d="M15 45 C30 40, 50 60, 35 75 C20 85, 10 65, 15 45 Z" fill="#8CA481" opacity="0.9" />

              {/* Cascading Amaranthus Pearls hanging down */}
              <g stroke="#7D9970" strokeWidth="3" strokeLinecap="round" opacity="0.85">
                <path d="M28 75 Q32 100, 26 125 T30 160 T25 175" strokeDasharray="1 7" />
                <path d="M34 80 Q38 110, 32 135 T36 165" strokeDasharray="1 6" />
                <path d="M22 85 Q18 105, 23 130 T20 150" strokeDasharray="1 8" />
              </g>
            </svg>
          </div>

          {/* Wax Seal at the bottom of the envelope flap */}
          <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 z-30">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EFE5D3] via-[#DFD1B8] to-[#BFA98A] border border-[#A89173] shadow-lg flex items-center justify-center p-0.5">
              <div className="w-10 h-10 rounded-full border border-dashed border-[#A89173]/80 flex items-center justify-center">
                <span className="font-serif-luxury text-[9px] font-bold text-[#4A0E17]">S&amp;S</span>
              </div>
            </div>
          </div>

        </div>

        {/* Video Typography Section Below Envelope */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 space-y-3"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#8C7A75] font-serif-luxury font-medium block">
            {isAr ? "نلتقي في" : "MEET US IN"}
          </span>

          <h2 className="text-3xl sm:text-4xl font-script text-[#4A0E17]">
            {weddingConfig.venue.city[lang]}
          </h2>

          <div className="pt-2 text-[#4A0E17] font-serif-luxury tracking-widest text-xs uppercase space-y-1">
            <p className="font-semibold">{weddingConfig.displayDate[lang]}</p>
            <p className="text-[#7A6A65]">{weddingConfig.displayTime[lang]}</p>
          </div>

          <p className="text-[11px] tracking-[0.2em] text-[#9B7838] uppercase pt-2 font-serif-luxury">
            {isAr ? "الدعوة عامة للأهل والأحباب" : "FORMAL INVITATION TO FOLLOW."}
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

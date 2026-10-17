import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Crown, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function HeroCard({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section className="relative pt-24 pb-14 px-4 flex flex-col items-center">
      
      {/* Royal Card Composition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[460px] mx-auto"
      >
        
        {/* Royal Burgundy Envelope Backing */}
        <div className="relative bg-[#4A0E17] rounded-3xl p-4 sm:p-5 pt-10 pb-12 envelope-shadow overflow-visible border border-[#C5A059]/40">
          
          {/* Subtle textured velvet gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#58111A] via-[#4A0E17] to-[#2C070D] rounded-3xl pointer-events-none" />

          {/* Main Royal Invitation Card (Clean, Prestigious Ivory Paper with Double Gold Border) */}
          <div className="relative bg-[#FDFBF7] rounded-2xl p-6 sm:p-8 pt-7 pb-10 card-luxury-shadow border-2 border-[#E5DAC8] overflow-hidden z-10 text-center">
            
            {/* Elegant Double Hairline Gold Border */}
            <div className="absolute inset-3 border border-[#C5A059]/50 rounded-xl pointer-events-none" />
            <div className="absolute inset-4 border border-[#C5A059]/25 rounded-lg pointer-events-none" />

            {/* Corner Ornaments */}
            <div className="absolute top-4 left-4 text-[#C5A059] opacity-70 text-xs select-none">❦</div>
            <div className="absolute top-4 right-4 text-[#C5A059] opacity-70 text-xs select-none">❧</div>
            <div className="absolute bottom-4 left-4 text-[#C5A059] opacity-70 text-xs select-none">❧</div>
            <div className="absolute bottom-4 right-4 text-[#C5A059] opacity-70 text-xs select-none">❦</div>

            {/* Royal Crest / Monogram Emblem */}
            <div className="relative z-10 flex flex-col items-center mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FAF7F2] to-[#F1E8D8] border border-[#C5A059] flex items-center justify-center shadow-sm relative mb-2">
                <Crown className="w-4 h-4 text-[#C5A059] absolute -top-2 fill-[#C5A059]/30" />
                <span className="font-serif-luxury text-xs font-bold text-[#4A0E17] tracking-tighter">
                  S &amp; S
                </span>
                {/* Monogram Laurel Wreath SVG */}
                <svg className="absolute inset-0 w-full h-full text-[#C5A059]/60" viewBox="0 0 100 100">
                  <path d="M 20,50 C 20,25 45,15 50,15 C 55,15 80,25 80,50 C 80,75 55,85 50,85 C 45,85 20,75 20,50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Quranic Bismillah or Royal Header */}
              {isAr ? (
                <p className="font-arabic-title text-sm text-[#4A0E17] opacity-90 my-1 font-semibold tracking-wide">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
              ) : (
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#9B7838] font-serif-luxury font-semibold block my-1">
                  SAVE THE DATE
                </span>
              )}

              <p className="text-[11px] font-serif-luxury tracking-[0.25em] text-[#8C7A75] uppercase mt-1">
                {isAr ? "احفظوا التاريخ لمشاركتنا فرحة العمر" : "TOGETHER WITH THEIR FAMILIES"}
              </p>
            </div>

            {/* Couple Names in Luxurious Script Calligraphy */}
            <div className="relative z-10 my-4 space-y-1">
              <h1 className="text-4xl sm:text-5xl font-script text-[#4A0E17] leading-relaxed drop-shadow-sm">
                {weddingConfig.groom[lang]}
              </h1>

              <div className="flex items-center justify-center gap-3 my-1">
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
                <span className="font-serif-luxury text-sm italic text-[#C5A059] font-semibold">
                  {isAr ? "و" : "&"}
                </span>
                <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#C5A059] to-transparent" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-script text-[#4A0E17] leading-relaxed drop-shadow-sm">
                {weddingConfig.bride[lang]}
              </h1>
            </div>

            {/* "Are getting married" line */}
            <p className="relative z-10 text-xs font-serif-luxury tracking-[0.2em] uppercase text-[#7A6A65] font-medium my-3">
              {isAr ? "يتشرفان بدعوتكم لحضور حفل زفافهما المبارك" : "ARE GETTING MARRIED"}
            </p>

            {/* Prestigious Date Pill */}
            <div className="relative z-10 mt-5 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#FAF7F2] border border-[#C5A059] shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="font-serif-luxury text-xs font-bold tracking-widest text-[#4A0E17] uppercase">
                {weddingConfig.displayDate.dayMonth} &bull; {weddingConfig.displayDate[lang]}
              </span>
            </div>

          </div>

          {/* Royal Wax Seal resting cleanly at bottom */}
          <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 z-20">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EFE5D3] via-[#DFD1B8] to-[#BFA98A] border border-[#A89173] shadow-xl flex items-center justify-center p-0.5">
              <div className="w-10 h-10 rounded-full border border-dashed border-[#A89173]/80 flex items-center justify-center text-[#4A0E17]">
                <span className="font-serif-luxury text-[9px] font-bold">S &amp; S</span>
              </div>
            </div>
          </div>

        </div>

        {/* Video Typography Section Below Envelope */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 space-y-2.5"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#8C7A75] font-serif-luxury font-medium block">
            {isAr ? "المكان" : "MEET US IN"}
          </span>

          <h2 className="text-3xl sm:text-4xl font-script text-[#4A0E17]">
            {weddingConfig.venue.city[lang]}
          </h2>

          <div className="pt-2 text-[#4A0E17] font-serif-luxury tracking-widest text-xs uppercase space-y-1">
            <p className="font-semibold">{weddingConfig.venue.name[lang]}</p>
            <p className="text-[#7A6A65]">{weddingConfig.displayTime[lang]}</p>
          </div>

          <p className="text-[11px] tracking-[0.2em] text-[#9B7838] uppercase pt-2 font-serif-luxury font-medium">
            {isAr ? "يسعدنا ويشرفنا حضوركم جميعاً" : "FORMAL INVITATION TO FOLLOW."}
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

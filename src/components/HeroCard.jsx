import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Crown } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function HeroCard() {
  return (
    <section className="relative pt-24 pb-12 px-4 flex flex-col items-center">
      
      {/* Royal Card Composition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[460px] mx-auto"
      >
        
        {/* Embossed Paper Envelope Backing */}
        <div className="relative bg-[#FCFAF6] rounded-3xl p-4 sm:p-5 pt-8 pb-10 card-royal-shadow overflow-visible border-2 border-[#E8DFCF]">
          
          {/* Top Embossed Ornament Header */}
          <div className="w-full flex justify-center mb-3 opacity-90">
            <svg className="w-36 h-10 text-[#B89047]" viewBox="0 0 160 40" fill="none">
              <path d="M 80,5 Q 85,15 95,12 Q 105,9 110,18 Q 120,20 135,16 Q 150,12 155,25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 80,5 Q 75,15 65,12 Q 55,9 50,18 Q 40,20 25,16 Q 10,12 5,25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="80" cy="18" r="3" fill="currentColor" />
              <path d="M 75,25 C 78,21 82,21 85,25" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>

          {/* Main Royal Invitation Card (Clean, Prestigious Ivory Paper with Double Gold Border) */}
          <div className="relative bg-[#FDFBF7] rounded-2xl p-6 sm:p-8 pt-6 pb-10 border border-[#E0C78D]/60 overflow-hidden text-center shadow-inner">
            
            {/* Elegant Double Hairline Gold Border */}
            <div className="absolute inset-3 border border-[#C5A059]/60 rounded-xl pointer-events-none" />
            <div className="absolute inset-4 border border-[#C5A059]/30 rounded-lg pointer-events-none" />

            {/* Corner Ornaments */}
            <div className="absolute top-4 left-4 text-[#B89047] opacity-75 text-xs select-none">❦</div>
            <div className="absolute top-4 right-4 text-[#B89047] opacity-75 text-xs select-none">❧</div>
            <div className="absolute bottom-4 left-4 text-[#B89047] opacity-75 text-xs select-none">❧</div>
            <div className="absolute bottom-4 right-4 text-[#B89047] opacity-75 text-xs select-none">❦</div>

            {/* Royal Crest / Monogram Emblem */}
            <div className="relative z-10 flex flex-col items-center mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFF5DE] to-[#EBD8B0] border border-[#B89047] flex items-center justify-center shadow-sm relative mb-2">
                <Crown className="w-4 h-4 text-[#8E6A2B] absolute -top-2 fill-[#C5A059]/40" />
                <span className="font-serif-luxury text-xs font-bold text-[#8E6A2B] tracking-tighter">
                  S &amp; S
                </span>
                <svg className="absolute inset-0 w-full h-full text-[#B89047]/70" viewBox="0 0 100 100">
                  <path d="M 20,50 C 20,25 45,15 50,15 C 55,15 80,25 80,50 C 80,75 55,85 50,85 C 45,85 20,75 20,50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Quranic Bismillah */}
              <p className="font-arabic-title text-base sm:text-lg text-[#8E6A2B] my-1 font-bold tracking-wide">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>

              <p className="text-xs text-[#7A6F66] mt-1 font-medium">
                احفظوا التاريخ لمشاركتنا فرحة العمر
              </p>
            </div>

            {/* Couple Names in Luxurious Script Calligraphy */}
            <div className="relative z-10 my-4 space-y-1">
              <h1 className="text-4xl sm:text-5xl font-script text-[#2D241E] leading-relaxed drop-shadow-sm">
                {weddingConfig.groom.ar}
              </h1>

              <div className="flex items-center justify-center gap-3 my-1">
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
                <span className="font-serif-luxury text-base text-[#B89047] font-bold">
                  و
                </span>
                <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#C5A059] to-transparent" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-script text-[#2D241E] leading-relaxed drop-shadow-sm">
                {weddingConfig.bride.ar}
              </h1>
            </div>

            {/* "Are getting married" line in Arabic */}
            <p className="relative z-10 text-xs text-[#7A6F66] font-medium my-3">
              يتشرفان بدعوتكم لحضور حفل زفافهما المبارك
            </p>

            {/* Prestigious Date Pill */}
            <div className="relative z-10 mt-5 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#F8F5EE] border border-[#C5A059] shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-[#B89047]" />
              <span className="text-xs font-bold text-[#8E6A2B]">
                {weddingConfig.displayDate.ar}
              </span>
            </div>

          </div>

          {/* Royal Wax Seal resting cleanly at bottom */}
          <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 z-20">
            <img
              src="/gold-wax-seal.png"
              alt="ختم صلاح وسارة"
              className="w-16 h-16 sm:w-18 sm:h-18 object-contain drop-shadow-xl"
            />
          </div>

        </div>

        {/* Video Typography Section Below Envelope in Arabic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 space-y-2.5"
        >
          <span className="text-xs text-[#8E6A2B] font-bold block">
            مكان الحفل
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D241E]">
            {weddingConfig.venue.name.ar}
          </h2>

          <div className="pt-1 text-[#2D241E] text-xs space-y-1">
            <p className="font-bold text-[#8E6A2B]">{weddingConfig.venue.city.ar}</p>
            <p className="text-[#7A6F66]">{weddingConfig.displayTime.ar}</p>
          </div>

          <p className="text-xs text-[#8E6A2B] pt-2 font-medium">
            يسعدنا ويشرفنا حضوركم جميعاً
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

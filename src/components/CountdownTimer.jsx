import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingData';

export default function CountdownTimer({ lang, onScrollToRsvp }) {
  const isAr = lang === 'ar';
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(weddingConfig.date).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section className="py-10 px-4 text-center">
      <div className="max-w-md mx-auto">
        
        {/* Elegant Serif Countdown Display (As seen in video screenshot) */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 font-serif-luxury text-[#4A0E17] text-2xl sm:text-3xl font-light tracking-wider">
          <div className="flex flex-col items-center min-w-[50px]">
            <span className="font-normal">{formatNumber(timeLeft.days)}</span>
            <span className="text-[9px] uppercase tracking-widest text-[#8C7A75] mt-1 font-sans">
              {isAr ? "يوم" : "DAYS"}
            </span>
          </div>

          <span className="text-[#C5A059] opacity-70 -mt-3">:</span>

          <div className="flex flex-col items-center min-w-[50px]">
            <span className="font-normal">{formatNumber(timeLeft.hours)}</span>
            <span className="text-[9px] uppercase tracking-widest text-[#8C7A75] mt-1 font-sans">
              {isAr ? "ساعة" : "HOURS"}
            </span>
          </div>

          <span className="text-[#C5A059] opacity-70 -mt-3">:</span>

          <div className="flex flex-col items-center min-w-[50px]">
            <span className="font-normal">{formatNumber(timeLeft.minutes)}</span>
            <span className="text-[9px] uppercase tracking-widest text-[#8C7A75] mt-1 font-sans">
              {isAr ? "دقيقة" : "MINUTES"}
            </span>
          </div>

          <span className="text-[#C5A059] opacity-70 -mt-3">:</span>

          <div className="flex flex-col items-center min-w-[50px]">
            <span className="font-normal">{formatNumber(timeLeft.seconds)}</span>
            <span className="text-[9px] uppercase tracking-widest text-[#8C7A75] mt-1 font-sans">
              {isAr ? "ثانية" : "SECONDS"}
            </span>
          </div>
        </div>

        {/* Burgundy Pill Button (Exact match from video) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <button
            onClick={onScrollToRsvp}
            className="w-full max-w-[320px] mx-auto py-3.5 px-6 rounded-full bg-[#4A0E17] text-[#FAF7F2] font-serif-luxury text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 hover:bg-[#681522] hover:shadow-lg hover:shadow-[#4A0E17]/25 active:scale-98 border border-[#C5A059]/40"
          >
            {isAr ? "تأكيد الحضور وتهنئة العروسين" : "KINDLY RSVP / SHARE WISHES"}
          </button>
        </motion.div>

        {/* Warm Closing Note */}
        <p className="text-[11px] font-serif-luxury tracking-[0.18em] text-[#7A6A65] uppercase mt-5">
          {isAr ? "نتطلع لمشاركتكم أجمل لحظات العمر" : "WE LOOK FORWARD TO CELEBRATING TOGETHER."}
        </p>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function CountdownTimer({ onScrollToDetails }) {
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
        
        {/* Elegant Serif Countdown Display in Arabic */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 text-[#2D241E] text-2xl sm:text-3xl font-light tracking-wider">
          <div className="flex flex-col items-center min-w-[50px]">
            <span className="font-semibold text-[#8E6A2B]">{formatNumber(timeLeft.days)}</span>
            <span className="text-[11px] text-[#7A6F66] mt-1 font-medium">
              يوم
            </span>
          </div>

          <span className="text-[#C5A059] opacity-70 -mt-3">:</span>

          <div className="flex flex-col items-center min-w-[50px]">
            <span className="font-semibold text-[#8E6A2B]">{formatNumber(timeLeft.hours)}</span>
            <span className="text-[11px] text-[#7A6F66] mt-1 font-medium">
              ساعة
            </span>
          </div>

          <span className="text-[#C5A059] opacity-70 -mt-3">:</span>

          <div className="flex flex-col items-center min-w-[50px]">
            <span className="font-semibold text-[#8E6A2B]">{formatNumber(timeLeft.minutes)}</span>
            <span className="text-[11px] text-[#7A6F66] mt-1 font-medium">
              دقيقة
            </span>
          </div>

          <span className="text-[#C5A059] opacity-70 -mt-3">:</span>

          <div className="flex flex-col items-center min-w-[50px]">
            <span className="font-semibold text-[#8E6A2B]">{formatNumber(timeLeft.seconds)}</span>
            <span className="text-[11px] text-[#7A6F66] mt-1 font-medium">
              ثانية
            </span>
          </div>
        </div>

        {/* Gold Pill Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <button
            onClick={onScrollToDetails}
            className="w-full max-w-[300px] mx-auto py-3.5 px-6 rounded-full gold-gradient-btn text-[#FCFAF6] text-xs font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#B89047]/30 border border-[#FFF3D6]/60 flex items-center justify-center gap-2"
          >
            <MapPin className="w-3.5 h-3.5 text-[#FFF5DE]" />
            <span>موقع الحفل والتفاصيل</span>
          </button>
        </motion.div>

        {/* Warm Closing Note */}
        <p className="text-xs text-[#7A6F66] mt-5 font-medium">
          نتطلع لمشاركتكم أجمل لحظات العمر
        </p>

      </div>
    </section>
  );
}

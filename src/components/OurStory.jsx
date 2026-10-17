import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function OurStory({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section className="py-16 px-4">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9 }}
          className="bg-[#FDFBF7] rounded-2xl p-8 sm:p-10 card-luxury-shadow border border-[#E5DAC8] relative text-center"
        >
          {/* Corner flourish ornaments */}
          <div className="absolute top-3 left-3 text-[#C5A059] opacity-40 text-xl font-serif">❧</div>
          <div className="absolute top-3 right-3 text-[#C5A059] opacity-40 text-xl font-serif">☙</div>
          <div className="absolute bottom-3 left-3 text-[#C5A059] opacity-40 text-xl font-serif">☙</div>
          <div className="absolute bottom-3 right-3 text-[#C5A059] opacity-40 text-xl font-serif">❧</div>

          <span className="text-xs uppercase tracking-[0.3em] text-[#9B7838] font-serif-luxury font-semibold block mb-2">
            {weddingConfig.story.title[lang]}
          </span>

          <h2 className="text-3xl sm:text-4xl font-script text-[#4A0E17] mb-6">
            {isAr ? "حكايتنا وبداية رحلتنا" : "Two Hearts, One Journey"}
          </h2>

          {/* Meaningful Verse / Quote */}
          <blockquote className="font-serif-luxury text-sm italic text-[#4A0E17] leading-relaxed mb-6 px-4 py-3 bg-[#FAF7F2] rounded-xl border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#C5A059]">
            {weddingConfig.story.quote[lang]}
          </blockquote>

          {/* Heartfelt narrative */}
          <p className="text-[#5A4D48] text-sm sm:text-base leading-relaxed font-light">
            {weddingConfig.story.message[lang]}
          </p>

          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="h-[1px] w-8 bg-[#C5A059]/50" />
            <Heart className="w-3.5 h-3.5 fill-[#4A0E17] text-[#4A0E17]" />
            <span className="h-[1px] w-8 bg-[#C5A059]/50" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function OurStory({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section className="py-14 px-4">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9 }}
          className="bg-[#FCFAF6] rounded-2xl p-8 sm:p-10 card-royal-shadow border border-[#E8DFCF] relative text-center"
        >
          {/* Corner flourish ornaments */}
          <div className="absolute top-3 left-3 text-[#B89047] opacity-60 text-xl font-serif">❧</div>
          <div className="absolute top-3 right-3 text-[#B89047] opacity-60 text-xl font-serif">☙</div>
          <div className="absolute bottom-3 left-3 text-[#B89047] opacity-60 text-xl font-serif">☙</div>
          <div className="absolute bottom-3 right-3 text-[#B89047] opacity-60 text-xl font-serif">❧</div>

          <span className="text-xs uppercase tracking-[0.3em] text-[#8E6A2B] font-serif-luxury font-bold block mb-2">
            {weddingConfig.story.title[lang]}
          </span>

          <h2 className="text-3xl sm:text-4xl font-script text-[#2D241E] mb-6">
            {isAr ? "حكايتنا وبداية رحلتنا" : "Two Hearts, One Journey"}
          </h2>

          {/* Meaningful Verse / Quote */}
          <blockquote className="font-serif-luxury text-sm italic text-[#8E6A2B] leading-relaxed mb-6 px-4 py-3 bg-[#F8F5EE] rounded-xl border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#B89047] font-medium">
            {weddingConfig.story.quote[lang]}
          </blockquote>

          {/* Heartfelt narrative */}
          <p className="text-[#5A4F46] text-sm sm:text-base leading-relaxed font-light">
            {weddingConfig.story.message[lang]}
          </p>

          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="h-[1px] w-8 bg-[#C5A059]/60" />
            <Heart className="w-3.5 h-3.5 fill-[#B89047] text-[#B89047]" />
            <span className="h-[1px] w-8 bg-[#C5A059]/60" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}

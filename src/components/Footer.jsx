import React from 'react';
import { Heart, ArrowUp, Share2 } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function Footer({ lang }) {
  const isAr = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    const text = isAr ? weddingConfig.whatsappShareText.ar : weddingConfig.whatsappShareText.en;
    const url = window.location.href;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="pt-12 pb-16 px-4 text-center border-t border-[#E8DFCF] bg-[#F8F5EE] relative">
      <div className="max-w-md mx-auto space-y-6">
        
        {/* Wax Seal Monogram in Gold & Beige */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFF5DE] via-[#EBD8B0] to-[#C5A059] border-2 border-[#B89047] shadow-lg flex items-center justify-center p-1 mx-auto">
          <div className="w-11 h-11 rounded-full border border-dashed border-[#8E6A2B] flex flex-col items-center justify-center text-[#8E6A2B]">
            <span className="font-serif-luxury text-[9px] font-bold">S &amp; S</span>
            <Heart className="w-2.5 h-2.5 fill-[#8E6A2B] text-[#8E6A2B] mt-0.5" />
          </div>
        </div>

        {/* Closing phrase */}
        <div>
          <p className="text-xs font-serif-luxury uppercase tracking-[0.25em] text-[#8E6A2B] font-bold mb-1">
            {isAr ? "بكل الحب والتقدير" : "WITH LOVE"}
          </p>
          <h3 className="text-4xl font-script text-[#2D241E]">
            {weddingConfig.groom[lang]} &amp; {weddingConfig.bride[lang]}
          </h3>
        </div>

        <p className="text-xs text-[#7A6F66] font-serif-luxury tracking-widest uppercase font-medium">
          {weddingConfig.displayDate.shortDay} &bull; {weddingConfig.venue.city[lang]}
        </p>

        {/* Action buttons */}
        <div className="flex justify-center items-center gap-3 pt-2">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#D5C7B0] text-xs font-serif-luxury text-[#8E6A2B] hover:bg-[#B89047] hover:text-[#FCFAF6] transition-colors shadow-sm font-semibold"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{isAr ? "للأعلى" : "Back to top"}</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full gold-gradient-btn text-[#FCFAF6] text-xs font-serif-luxury hover:scale-105 transition-all shadow-md font-semibold border border-[#FFF3D6]/60"
          >
            <Share2 className="w-3.5 h-3.5 text-[#FFF5DE]" />
            <span>{isAr ? "مشاركة الدعوة" : "Share Invitation"}</span>
          </button>
        </div>

      </div>
    </footer>
  );
}

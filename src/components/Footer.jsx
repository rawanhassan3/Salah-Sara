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
    <footer className="pt-12 pb-16 px-4 text-center border-t border-[#E5DAC8] bg-[#FAF7F2] relative">
      <div className="max-w-md mx-auto space-y-6">
        
        {/* Wax Seal Monogram */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#EFE5D3] via-[#DFD1B8] to-[#BFA98A] border-2 border-[#A89173] shadow-lg flex items-center justify-center p-1 mx-auto">
          <div className="w-11 h-11 rounded-full border border-dashed border-[#A89173] flex flex-col items-center justify-center text-[#4A0E17]">
            <span className="font-serif-luxury text-[9px] font-bold">S &amp; S</span>
            <Heart className="w-2.5 h-2.5 fill-[#4A0E17] text-[#4A0E17] mt-0.5" />
          </div>
        </div>

        {/* Closing phrase */}
        <div>
          <p className="text-xs font-serif-luxury uppercase tracking-[0.25em] text-[#9B7838] mb-1">
            {isAr ? "بكل الحب والتقدير" : "WITH LOVE"}
          </p>
          <h3 className="text-4xl font-script text-[#4A0E17]">
            {weddingConfig.groom[lang]} &amp; {weddingConfig.bride[lang]}
          </h3>
        </div>

        <p className="text-xs text-[#8C7A75] font-serif-luxury tracking-widest uppercase">
          {weddingConfig.displayDate.shortDay} &bull; {weddingConfig.venue.city[lang]}
        </p>

        {/* Action buttons */}
        <div className="flex justify-center items-center gap-3 pt-2">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#D5C5AE] text-xs font-serif-luxury text-[#4A0E17] hover:bg-[#4A0E17] hover:text-[#FAF7F2] transition-colors shadow-sm"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{isAr ? "للأعلى" : "Back to top"}</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#4A0E17] text-[#FAF7F2] text-xs font-serif-luxury hover:bg-[#681522] transition-colors shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5 text-[#DFCA98]" />
            <span>{isAr ? "مشاركة الدعوة" : "Share Invitation"}</span>
          </button>
        </div>

      </div>
    </footer>
  );
}

import React from 'react';
import { ArrowUp, Share2 } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    const text = weddingConfig.whatsappShareText.ar;
    const url = window.location.href;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="pt-12 pb-16 px-4 text-center border-t border-[#E8DFCF] bg-[#F8F5EE] relative">
      <div className="max-w-md mx-auto space-y-6">
        
        {/* Custom Metallic Antique Gold Wax Seal */}
        <div className="flex justify-center">
          <img
            src="/gold-wax-seal.png"
            alt="ختم صلاح وسارة"
            className="w-16 h-16 object-contain drop-shadow-xl"
          />
        </div>

        {/* Closing phrase */}
        <div>
          <p className="text-xs text-[#8E6A2B] font-bold mb-1">
            بكل الحب والتقدير
          </p>
          <h3 className="text-4xl font-script text-[#2D241E]">
            {weddingConfig.groom.ar} &amp; {weddingConfig.bride.ar}
          </h3>
        </div>

        <p className="text-xs text-[#7A6F66] font-medium">
          {weddingConfig.displayDate.shortDay} &bull; {weddingConfig.venue.city.ar}
        </p>

        {/* Action buttons */}
        <div className="flex justify-center items-center gap-3 pt-2">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#D5C7B0] text-xs text-[#8E6A2B] hover:bg-[#B89047] hover:text-[#FCFAF6] transition-colors shadow-sm font-semibold"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>للأعلى</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full gold-gradient-btn text-[#FCFAF6] text-xs hover:scale-105 transition-all shadow-md font-semibold border border-[#FFF3D6]/60"
          >
            <Share2 className="w-3.5 h-3.5 text-[#FFF5DE]" />
            <span>مشاركة الدعوة</span>
          </button>
        </div>

      </div>
    </footer>
  );
}

import React from 'react';
import { Volume2, VolumeX, Share2 } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';
import { useMusic } from '../context/MusicContext';

export default function Navbar() {
  const { isPlaying, toggleMusic, hasError } = useMusic();

  const handleShare = () => {
    const text = weddingConfig.whatsappShareText.ar;
    const url = window.location.href;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-40 px-4 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto bg-[#FCFAF6]/90 backdrop-blur-md border border-[#E8DFCF] shadow-lg rounded-full px-4 py-2 flex items-center gap-3 text-xs tracking-wider transition-all duration-300 hover:shadow-xl hover:border-[#C5A059]/60">
        
        {/* Audio Player Toggle */}
        {!hasError && (
          <>
            <button
              onClick={toggleMusic}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[#8E6A2B] hover:bg-[#B89047]/10 transition-colors"
              title={isPlaying ? "كتم الموسيقى" : "تشغيل الموسيقى"}
              aria-label="التحكم بالموسيقى"
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#B89047] animate-pulse" />
                  <span className="font-semibold text-[#8E6A2B]">
                    ادخلي عمري ♫
                  </span>
                  <span className="flex gap-0.5 items-end h-3">
                    <span className="w-0.5 h-3 bg-[#B89047] animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-0.5 h-2 bg-[#B89047] animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-0.5 h-2.5 bg-[#B89047] animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#8C7E74]" />
                  <span className="text-[#8C7E74]">
                    تشغيل الموسيقى
                  </span>
                </>
              )}
            </button>
            <span className="w-[1px] h-4 bg-[#E0D7C6]" />
          </>
        )}

        {/* WhatsApp Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[#8E6A2B] hover:bg-[#B89047]/10 transition-colors font-bold"
          title="مشاركة الدعوة على واتساب"
        >
          <Share2 className="w-3.5 h-3.5 text-[#25D366]" />
          <span>مشاركة الدعوة</span>
        </button>
      </nav>
    </header>
  );
}

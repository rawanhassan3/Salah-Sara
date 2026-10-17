import React from 'react';
import { Volume2, VolumeX, Globe, Share2 } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';
import { useMusic } from '../context/MusicContext';

export default function Navbar({ lang, setLang }) {
  const isAr = lang === 'ar';
  const { isPlaying, toggleMusic, hasError } = useMusic();

  const handleShare = () => {
    const text = isAr ? weddingConfig.whatsappShareText.ar : weddingConfig.whatsappShareText.en;
    const url = window.location.href;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-40 px-4 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto bg-[#FAF7F2]/90 backdrop-blur-md border border-[#E0D7C6] shadow-lg rounded-full px-4 py-2 flex items-center gap-3 text-xs tracking-wider transition-all duration-300 hover:shadow-xl hover:border-[#C5A059]/60">
        
        {/* Audio Player Toggle (If not in error) */}
        {!hasError && (
          <>
            <button
              onClick={toggleMusic}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[#4A0E17] hover:bg-[#4A0E17]/10 transition-colors"
              title={isPlaying ? (isAr ? "كتم الصوت" : "Mute Music") : (isAr ? "تشغيل الموسيقى" : "Play Music")}
              aria-label="Toggle Music"
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#4A0E17] animate-pulse" />
                  <span className="hidden sm:inline font-medium">
                    {isAr ? "ادخلي عمري ♫" : "Music On"}
                  </span>
                  <span className="flex gap-0.5 items-end h-3">
                    <span className="w-0.5 h-3 bg-[#4A0E17] animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-0.5 h-2 bg-[#4A0E17] animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-0.5 h-2.5 bg-[#4A0E17] animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#7A6A65]" />
                  <span className="hidden sm:inline text-[#7A6A65]">
                    {isAr ? "موسيقى" : "Music"}
                  </span>
                </>
              )}
            </button>
            <span className="w-[1px] h-4 bg-[#DCCDB4]" />
          </>
        )}

        {/* WhatsApp Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[#4A0E17] hover:bg-[#4A0E17]/10 transition-colors font-medium"
          title={isAr ? "مشاركة الدعوة على واتساب" : "Share on WhatsApp"}
        >
          <Share2 className="w-3.5 h-3.5 text-[#25D366]" />
          <span className="hidden sm:inline">
            {isAr ? "مشاركة" : "Share"}
          </span>
        </button>

        <span className="w-[1px] h-4 bg-[#DCCDB4]" />

        {/* Language Toggle */}
        <button
          onClick={() => setLang(isAr ? 'en' : 'ar')}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#4A0E17] text-[#FAF7F2] hover:bg-[#6B1723] transition-all shadow-sm font-semibold"
          title={isAr ? "Switch to English" : "التبديل إلى العربية"}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{isAr ? "English" : "العربية"}</span>
        </button>
      </nav>
    </header>
  );
}

import React from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { useMusic } from '../context/MusicContext';
import { weddingConfig } from '../config/weddingData';

export default function FloatingMusicButton({ lang }) {
  const { isPlaying, toggleMusic, hasError, hasStarted } = useMusic();
  const isAr = lang === 'ar';

  // If there's an error or embedding blocked, gracefully hide the button
  if (hasError) return null;

  return (
    <div className="fixed bottom-5 ltr:right-5 rtl:left-5 z-40 select-none">
      <button
        onClick={toggleMusic}
        className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-[#4A0E17] text-[#FAF7F2] shadow-2xl border border-[#C5A059] transition-all duration-300 hover:scale-110 active:scale-95"
        title={isPlaying ? (isAr ? "كتم الموسيقى" : "Mute Music") : (isAr ? "تشغيل الموسيقى" : "Play Music")}
        aria-label="Toggle Wedding Music"
      >
        {/* Subtle Pulse Ripple Ring when Playing */}
        {isPlaying && (
          <>
            <span className="absolute inset-0 rounded-full border-2 border-[#C5A059]/60 animate-ping opacity-75 pointer-events-none" />
            <span className="absolute -inset-1 rounded-full bg-[#C5A059]/20 blur-sm pointer-events-none" />
          </>
        )}

        {/* Music Notes Animation / Equalizer icon */}
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-[#DFCA98]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
          </div>
        ) : (
          <VolumeX className="w-5 h-5 text-[#FAF7F2]/70" />
        )}

        {/* Tooltip on hover */}
        <span className="absolute bottom-full mb-2 ltr:right-0 rtl:left-0 whitespace-nowrap px-3 py-1 bg-[#2C070D]/90 text-[#FAF7F2] text-[10px] font-serif-luxury tracking-wider rounded-md border border-[#C5A059]/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          {isPlaying 
            ? (isAr ? "حسين الجسمي - ادخلي عمري ♫" : "Edkhely Omri - Hussain Al Jassmi ♫") 
            : (isAr ? "تشغيل الموسيقى" : "Play Music")}
        </span>
      </button>
    </div>
  );
}

import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useMusic } from '../context/MusicContext';

export default function FloatingMusicButton() {
  const { isPlaying, toggleMusic, hasError } = useMusic();

  if (hasError) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 select-none">
      <button
        onClick={toggleMusic}
        className="relative group flex items-center justify-center w-13 h-13 rounded-full gold-gradient-btn text-[#FCFAF6] shadow-2xl border-2 border-[#EBD8B0] transition-all duration-300 hover:scale-110 active:scale-95"
        title={isPlaying ? "كتم الموسيقى" : "تشغيل الموسيقى"}
        aria-label="التحكم بالموسيقى"
      >
        {/* Subtle Pulse Ripple Ring when Playing */}
        {isPlaying && (
          <>
            <span className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/80 animate-ping opacity-75 pointer-events-none" />
            <span className="absolute -inset-1.5 rounded-full bg-[#D4AF37]/25 blur-md pointer-events-none" />
          </>
        )}

        {/* Music Icon */}
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-[#FFF5DE]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FFF5DE] animate-pulse" />
          </div>
        ) : (
          <VolumeX className="w-5 h-5 text-[#FCFAF6]/80" />
        )}

        {/* Tooltip on hover */}
        <span className="absolute bottom-full mb-2 left-0 whitespace-nowrap px-3 py-1 bg-[#2D231E]/95 text-[#FFF5DE] text-xs tracking-wider rounded-md border border-[#C5A059]/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          {isPlaying ? "حسين الجسمي - ادخلي عمري ♫" : "تشغيل الموسيقى"}
        </span>
      </button>
    </div>
  );
}

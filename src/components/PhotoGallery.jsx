import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function PhotoGallery({ lang }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const isAr = lang === 'ar';

  const photos = weddingConfig.gallery;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#9B7838] font-serif-luxury font-semibold block mb-2">
            {isAr ? "لحظات لا تُنسى" : "MEMORIES"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-script text-[#4A0E17]">
            {isAr ? "معرض الصور" : "Captured Moments"}
          </h2>
        </div>

        {/* Featured Photo Frame (Vintage Polaroid Style) */}
        <div className="relative bg-[#FDFBF7] p-4 sm:p-6 pb-8 rounded-2xl card-luxury-shadow border border-[#E5DAC8]">
          <div 
            className="relative aspect-[4/5] sm:aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group bg-[#FAF7F2]"
            onClick={() => setSelectedPhoto(photos[currentIndex])}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={photos[currentIndex].url}
                alt="Salah & Sara Wedding Moment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 text-white">
              <span className="text-xs font-serif-luxury tracking-wider">
                {isAr ? "اضغط للتكبير" : "Click to expand"}
              </span>
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-[#E2D6C3] flex items-center justify-center text-[#4A0E17] hover:bg-[#4A0E17] hover:text-[#FAF7F2] transition-colors shadow-md z-10"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-[#E2D6C3] flex items-center justify-center text-[#4A0E17] hover:bg-[#4A0E17] hover:text-[#FAF7F2] transition-colors shadow-md z-10"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <p className="font-script text-2xl text-[#4A0E17]">
              {isAr ? photos[currentIndex].captionAr : photos[currentIndex].captionEn}
            </p>
          </div>

          {/* Thumbnails Row */}
          <div className="flex justify-center gap-2 mt-5">
            {photos.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  currentIndex === idx ? 'border-[#4A0E17] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={photo.url} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

        </div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-6 right-6 text-white hover:text-[#DFCA98] p-2 transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-7 h-7" />
              </button>
              <motion.img
                src={selectedPhoto.url}
                alt="Enlarged Wedding Memory"
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain border border-[#C5A059]/40"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

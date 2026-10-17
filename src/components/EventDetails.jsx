import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function EventDetails({ lang, detailsRef }) {
  const isAr = lang === 'ar';

  const handleAddToCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Salah & Sara//Wedding Invitation//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Wedding of Salah & Sara',
      'DESCRIPTION:You are cordially invited to celebrate the wedding of Salah and Sara.',
      'LOCATION:' + weddingConfig.venue.name.en + ', ' + weddingConfig.venue.city.en,
      'DTSTART:20261115T163000Z',
      'DTEND:20261115T230000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Salah_and_Sara_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={detailsRef} id="event-details-section" className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8E6A2B] font-serif-luxury font-bold block mb-2">
            {isAr ? "تفاصيل اليوم الكبير" : "WHEN & WHERE"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-script text-[#2D241E]">
            {isAr ? "موعدنا ومكان الحفل" : "Celebration Details"}
          </h2>
        </div>

        {/* Venue & Date Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FCFAF6] rounded-2xl p-6 sm:p-8 card-royal-shadow border border-[#E8DFCF]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-[#E8DFCF]">
            
            {/* Date & Time Column */}
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-12 h-12 rounded-full bg-[#F8F5EE] border border-[#B89047] flex items-center justify-center text-[#8E6A2B] mb-3 shadow-inner">
                <Calendar className="w-6 h-6 text-[#8E6A2B]" />
              </div>
              <h3 className="font-serif-luxury text-sm uppercase tracking-wider text-[#8E6A2B] font-bold mb-1">
                {isAr ? "التاريخ والوقت" : "Date & Time"}
              </h3>
              <p className="font-serif-luxury text-lg font-bold text-[#2D241E] mt-1">
                {weddingConfig.displayDate[lang]}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[#7A6F66] mt-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#B89047]" />
                <span>{weddingConfig.displayTime[lang]}</span>
              </div>

              {/* Add to Calendar Button */}
              <button
                onClick={handleAddToCalendar}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F8F5EE] border border-[#B89047] text-xs font-serif-luxury text-[#8E6A2B] hover:bg-[#B89047] hover:text-[#FCFAF6] transition-colors font-bold shadow-sm"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-[#B89047] group-hover:text-white" />
                <span>{isAr ? "إضافة إلى التقويم" : "Add to Calendar"}</span>
              </button>
            </div>

            {/* Venue Column */}
            <div className="flex flex-col items-center text-center p-2 pt-6 md:pt-2">
              <div className="w-12 h-12 rounded-full bg-[#F8F5EE] border border-[#B89047] flex items-center justify-center text-[#8E6A2B] mb-3 shadow-inner">
                <MapPin className="w-6 h-6 text-[#8E6A2B]" />
              </div>
              <h3 className="font-serif-luxury text-sm uppercase tracking-wider text-[#8E6A2B] font-bold mb-1">
                {isAr ? "مكان الحفل" : "The Venue"}
              </h3>
              <p className="font-serif-luxury text-lg font-bold text-[#2D241E] mt-1">
                {weddingConfig.venue.name[lang]}
              </p>
              <p className="text-xs text-[#7A6F66] mt-1">
                {weddingConfig.venue.address[lang]}
              </p>

              {/* Open in Google Maps Button */}
              <a
                href={weddingConfig.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full gold-gradient-btn text-[#FCFAF6] text-xs font-serif-luxury tracking-wider font-bold hover:scale-105 active:scale-95 transition-all shadow-md hover:shadow-lg border border-[#FFF3D6]/60"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FFF5DE]" />
                <span>{isAr ? "الموقع على خرائط جوجل" : "Open in Google Maps"}</span>
                <ExternalLink className="w-3 h-3 opacity-90" />
              </a>
            </div>

          </div>

          {/* Dress Code Note */}
          <div className="mt-8 pt-6 border-t border-[#E8DFCF] text-center">
            <span className="text-xs uppercase tracking-widest text-[#8E6A2B] font-serif-luxury font-bold block mb-1">
              {weddingConfig.dressCode.title[lang]}
            </span>
            <p className="text-xs text-[#5A4F46] italic font-serif-luxury">
              {weddingConfig.dressCode.palette[lang]}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

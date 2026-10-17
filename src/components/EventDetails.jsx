import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus, CheckCircle2 } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function EventDetails({ lang }) {
  const isAr = lang === 'ar';

  const handleAddToCalendar = () => {
    // Generate .ics calendar invite
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
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#9B7838] font-serif-luxury font-semibold block mb-2">
            {isAr ? "تفاصيل اليوم الكبير" : "WHEN & WHERE"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-script text-[#4A0E17]">
            {isAr ? "موعدنا ومكان الحفل" : "Celebration Details"}
          </h2>
        </div>

        {/* Venue & Date Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-8 card-luxury-shadow border border-[#E5DAC8] mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-[#E2D6C3]">
            
            {/* Date & Time Column */}
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C5A059] flex items-center justify-center text-[#4A0E17] mb-3 shadow-inner">
                <Calendar className="w-6 h-6 text-[#4A0E17]" />
              </div>
              <h3 className="font-serif-luxury text-sm uppercase tracking-wider text-[#9B7838] font-bold mb-1">
                {isAr ? "التاريخ والوقت" : "Date & Time"}
              </h3>
              <p className="font-serif-luxury text-lg font-bold text-[#4A0E17] mt-1">
                {weddingConfig.displayDate[lang]}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[#7A6A65] mt-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{weddingConfig.displayTime[lang]}</span>
              </div>

              {/* Add to Calendar Button */}
              <button
                onClick={handleAddToCalendar}
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#C5A059] text-xs font-serif-luxury text-[#4A0E17] hover:bg-[#4A0E17] hover:text-[#FAF7F2] transition-colors font-medium shadow-sm"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{isAr ? "إضافة إلى التقويم" : "Add to Calendar"}</span>
              </button>
            </div>

            {/* Venue Column */}
            <div className="flex flex-col items-center text-center p-2 pt-6 md:pt-2">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C5A059] flex items-center justify-center text-[#4A0E17] mb-3 shadow-inner">
                <MapPin className="w-6 h-6 text-[#4A0E17]" />
              </div>
              <h3 className="font-serif-luxury text-sm uppercase tracking-wider text-[#9B7838] font-bold mb-1">
                {isAr ? "مكان الحفل" : "The Venue"}
              </h3>
              <p className="font-serif-luxury text-lg font-bold text-[#4A0E17] mt-1">
                {weddingConfig.venue.name[lang]}
              </p>
              <p className="text-xs text-[#7A6A65] mt-1">
                {weddingConfig.venue.address[lang]}
              </p>

              {/* Open in Google Maps Button */}
              <a
                href={weddingConfig.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4A0E17] text-[#FAF7F2] text-xs font-serif-luxury tracking-wider hover:bg-[#681522] transition-all shadow-md hover:shadow-lg active:scale-95 border border-[#C5A059]/40"
              >
                <MapPin className="w-3.5 h-3.5 text-[#DFCA98]" />
                <span>{isAr ? "الموقع على خرائط جوجل" : "Open in Google Maps"}</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>

          </div>
        </motion.div>

        {/* Wedding Itinerary / Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-8 card-luxury-shadow border border-[#E5DAC8]"
        >
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9B7838] font-serif-luxury font-semibold block">
              {isAr ? "جدول الحفل" : "WEDDING TIMELINE"}
            </span>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-4 rtl:before:left-auto rtl:before:right-4 before:w-[1px] before:bg-[#E2D5BF]">
            {weddingConfig.itinerary.map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-4 pl-8 rtl:pl-0 rtl:pr-8">
                {/* Timeline node marker */}
                <div className="absolute left-2.5 rtl:left-auto rtl:right-2.5 top-1 -translate-x-1/2 rtl:translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FAF7F2] border-2 border-[#4A0E17] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                    <h4 className="font-serif-luxury font-bold text-sm text-[#4A0E17]">
                      {isAr ? item.titleAr : item.titleEn}
                    </h4>
                    <span className="text-xs font-serif-luxury text-[#9B7838] font-semibold bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#E2D5BF]">
                      {isAr ? item.timeAr : item.timeEn}
                    </span>
                  </div>
                  <p className="text-xs text-[#7A6A65] leading-relaxed">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dress Code Note */}
          <div className="mt-8 pt-5 border-t border-[#E5DAC8] text-center">
            <span className="text-xs uppercase tracking-widest text-[#9B7838] font-serif-luxury font-bold block mb-1">
              {weddingConfig.dressCode.title[lang]}
            </span>
            <p className="text-xs text-[#5A4D48] italic font-serif-luxury">
              {weddingConfig.dressCode.palette[lang]}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

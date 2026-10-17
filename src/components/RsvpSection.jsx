import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { HeartHandshake, Send, Users, User, MessageSquareHeart, Eye, Download, X } from 'lucide-react';
import { weddingConfig } from '../config/weddingData';

export default function RsvpSection({ lang, rsvpRef }) {
  const isAr = lang === 'ar';
  
  const [formData, setFormData] = useState({
    name: '',
    guestsCount: 1,
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [rsvpList, setRsvpList] = useState([]);

  // Load RSVPs from localStorage
  const loadRsvps = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('salah_sara_rsvps') || '[]');
      setRsvpList(stored);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadRsvps();
  }, [isSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setLoading(true);

    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('salah_sara_rsvps') || '[]');
        const newRsvp = {
          id: Date.now(),
          name: formData.name.trim(),
          attending: 'yes',
          guestsCount: formData.guestsCount,
          notes: formData.notes.trim(),
          submittedAt: new Date().toLocaleString(isAr ? 'ar-EG' : 'en-US')
        };
        const updated = [...existing, newRsvp];
        localStorage.setItem('salah_sara_rsvps', JSON.stringify(updated));
        setRsvpList(updated);
        console.log('New RSVP Saved:', newRsvp);
      } catch (err) {
        console.error('Storage error:', err);
      }

      setLoading(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#4A0E17', '#C5A059', '#FAF7F2', '#E8C5C8']
      });
    }, 600);
  };

  // Export RSVPs to CSV for Excel
  const exportToCsv = () => {
    if (rsvpList.length === 0) return;
    const headers = ['Name', 'Guests Count', 'Wishes / Notes', 'Date'];
    const rows = rsvpList.map(r => [
      `"${r.name.replace(/"/g, '""')}"`,
      r.guestsCount,
      `"${(r.notes || '').replace(/"/g, '""')}"`,
      `"${r.submittedAt}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `Salah_Sara_Guest_RSVPs.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const totalAttendingGuests = rsvpList.reduce((sum, r) => sum + (parseInt(r.guestsCount) || 1), 0);

  return (
    <section ref={rsvpRef} id="rsvp-section" className="py-16 px-4">
      <div className="max-w-xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#9B7838] font-serif-luxury font-semibold block mb-2">
            {isAr ? "يسعدنا حضوركم" : "JOIN OUR CELEBRATION"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-script text-[#4A0E17]">
            {isAr ? "تأكيد الحضور والتهنئة" : "Confirm Attendance"}
          </h2>
          <p className="text-xs text-[#7A6A65] font-serif-luxury uppercase tracking-widest mt-1">
            {isAr ? "يرجى تأكيد الحضور لمشاركتنا فرحة العمر" : "Kindly confirm your presence with us"}
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#FDFBF7] rounded-2xl p-6 sm:p-8 card-luxury-shadow border border-[#E5DAC8] relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                {/* Guest Name */}
                <div>
                  <label className="block text-xs font-serif-luxury uppercase tracking-wider text-[#4A0E17] font-semibold mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{isAr ? "الاسم الكريم *" : "Your Full Name *"}</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isAr ? "مثال: م. أحمد عبد الله" : "e.g. Mr. & Mrs. John Doe"}
                    className="w-full px-4 py-3 rounded-xl border border-[#D8C7B0] bg-[#FAF7F2] text-sm text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#4A0E17]/30 focus:border-[#4A0E17] transition-all"
                  />
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-xs font-serif-luxury uppercase tracking-wider text-[#4A0E17] font-semibold mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{isAr ? "عدد الأفراد *" : "Number of Guests *"}</span>
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setFormData({ ...formData, guestsCount: num })}
                        className={`flex-1 py-2.5 rounded-xl border text-xs font-serif-luxury font-bold transition-all ${
                          formData.guestsCount === num
                            ? 'bg-[#4A0E17] text-[#FAF7F2] border-[#4A0E17] shadow-sm'
                            : 'bg-[#FAF7F2] text-[#4A0E17] border-[#D8C7B0] hover:bg-[#EAE2D5]'
                        }`}
                      >
                        {num} {isAr ? (num === 1 ? 'فرد' : 'أفراد') : (num === 1 ? 'Guest' : 'Guests')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message / Heartfelt Wishes */}
                <div>
                  <label className="block text-xs font-serif-luxury uppercase tracking-wider text-[#4A0E17] font-semibold mb-1.5 flex items-center gap-1.5">
                    <MessageSquareHeart className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{isAr ? "كلمة أو تهنئة للعروسين (اختياري)" : "Wishes for Salah & Sara (Optional)"}</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={isAr ? "بارك الله لكما وبارك عليكما وجمع بينكما في خير..." : "Wishing you a lifetime of endless love and happiness..."}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8C7B0] bg-[#FAF7F2] text-sm text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#4A0E17]/30 focus:border-[#4A0E17] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-full bg-[#4A0E17] text-[#FAF7F2] font-serif-luxury text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#681522] transition-all shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 border border-[#C5A059]/40 disabled:opacity-50"
                >
                  {loading ? (
                    <span>{isAr ? "جاري الإرسال..." : "Submitting..."}</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-[#DFCA98]" />
                      <span>{isAr ? "تأكيد الحضور وإرسال التهنئة" : "Confirm Attendance & Send Wishes"}</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              /* Success State */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border-2 border-[#C5A059] flex items-center justify-center mx-auto text-[#4A0E17] shadow-lg">
                  <HeartHandshake className="w-8 h-8 text-[#4A0E17]" />
                </div>
                
                <h3 className="text-3xl font-script text-[#4A0E17]">
                  {isAr ? "شكراً جزيلاً لكم!" : "Thank You Sincerely!"}
                </h3>

                <p className="font-serif-luxury text-sm text-[#4A0E17] font-semibold">
                  {formData.name}
                </p>

                <p className="text-xs text-[#7A6A65] max-w-sm mx-auto leading-relaxed">
                  {isAr 
                    ? "تم استلام تأكيد حضوركم وتهنئتكم الجميلة بنجاح. نتطلع لمشاركتكم هذه الليلة الاستثنائية!" 
                    : "Your attendance and kind wishes have been received with joy. We cannot wait to celebrate with you!"}
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-serif-luxury text-[#9B7838] underline underline-offset-4 hover:text-[#4A0E17]"
                >
                  {isAr ? "تعديل التأكيد أو إرسال تهنئة أخرى" : "Edit RSVP or send another note"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Discreet Admin / Couple View Button */}
          <div className="mt-6 pt-4 border-t border-[#E8DCC9] flex items-center justify-between text-[11px] text-[#8C7A75]">
            <span>{isAr ? `إجمالي الحضور المسجل: ${totalAttendingGuests} فرد` : `Total Guests: ${totalAttendingGuests}`}</span>
            <button
              onClick={() => { loadRsvps(); setShowAdminModal(true); }}
              className="inline-flex items-center gap-1 text-[#9B7838] hover:text-[#4A0E17] font-medium transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{isAr ? "عرض قائمة المدعوين (للعروسين)" : "View Responses (Couple)"}</span>
            </button>
          </div>

        </div>

      </div>

      {/* Admin / Couple RSVP Drawer Modal */}
      <AnimatePresence>
        {showAdminModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#FAF7F2] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#C5A059]/40 overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="p-5 border-b border-[#E2D5BF] bg-[#FDFBF7] flex items-center justify-between">
                <div>
                  <h3 className="font-serif-luxury text-base font-bold text-[#4A0E17]">
                    {isAr ? "قائمة تأكيدات الحضور والتهاني" : "Guest RSVPs & Wishes"}
                  </h3>
                  <p className="text-xs text-[#7A6A65]">
                    {isAr 
                      ? `حضور مؤكد: ${totalAttendingGuests} فرد (${rsvpList.length} بطاقة تأكيد)` 
                      : `Confirmed Attendance: ${totalAttendingGuests} guests (${rsvpList.length} RSVPs)`}
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  {rsvpList.length > 0 && (
                    <button
                      onClick={exportToCsv}
                      className="px-3 py-1.5 rounded-lg bg-[#4A0E17] text-[#FAF7F2] text-xs font-serif-luxury flex items-center gap-1.5 hover:bg-[#681522] transition-colors"
                      title={isAr ? "تصدير إلى Excel" : "Export to Excel/CSV"}
                    >
                      <Download className="w-3.5 h-3.5 text-[#DFCA98]" />
                      <span className="hidden sm:inline">{isAr ? "تصدير Excel" : "Export CSV"}</span>
                    </button>
                  )}
                  <button
                    onClick={() => setShowAdminModal(false)}
                    className="p-1.5 rounded-full hover:bg-[#EAE2D5] text-[#7A6A65]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 overflow-y-auto space-y-3 flex-1">
                {rsvpList.length === 0 ? (
                  <p className="text-center py-8 text-sm text-[#7A6A65]">
                    {isAr ? "لا توجد تأكيدات حضور مسجلة حتى الآن." : "No RSVPs recorded yet."}
                  </p>
                ) : (
                  rsvpList.map((item, idx) => (
                    <div
                      key={item.id || idx}
                      className="bg-white p-4 rounded-xl border border-[#E5DAC8] shadow-sm flex flex-col gap-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#4A0E17] text-sm">
                          {item.name}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-emerald-100 text-emerald-800 border border-emerald-300">
                          {isAr ? `${item.guestsCount} فرد` : `${item.guestsCount} Guest(s)`}
                        </span>
                      </div>

                      {item.notes && (
                        <p className="text-xs text-[#5A4D48] italic bg-[#FAF7F2] p-2.5 rounded-lg border border-[#EDE4D5]">
                          “{item.notes}”
                        </p>
                      )}

                      <span className="text-[10px] text-[#A3928E]">
                        {item.submittedAt}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

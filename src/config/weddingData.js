/**
 * Wedding Configuration File
 * Easily customize all details, dates, translations, and links here.
 */

export const weddingConfig = {
  // Couple Information
  groom: {
    en: "Salah",
    ar: "صلاح",
    fullNameEn: "Salah El-Din",
    fullNameAr: "صلاح الدين"
  },
  bride: {
    en: "Sara",
    ar: "سارة",
    fullNameEn: "Sara Ahmed",
    fullNameAr: "سارة أحمد"
  },

  // Wedding Date & Time
  // Format: YYYY-MM-DDTHH:mm:ss for countdown
  date: "2026-11-15T18:30:00",
  displayDate: {
    en: "Sunday, 15 November 2026",
    ar: "الأحد، ١٥ نوفمبر ٢٠٢٦",
    dayMonth: "15.11.2026",
    shortDay: "15.11"
  },
  displayTime: {
    en: "Six Thirty in the Evening (06:30 PM)",
    ar: "في تمام الساعة السادسة والنصف مساءً"
  },

  // Venue & Location
  venue: {
    name: {
      en: "Le Grand Garden & Ballroom",
      ar: "جراند بالروم & جاردن"
    },
    city: {
      en: "Cairo, Egypt",
      ar: "القاهرة، مصر"
    },
    address: {
      en: "Katamya Road, New Cairo, Egypt",
      ar: "طريق القطامية، التجمع الخامس، القاهرة"
    },
    mapsUrl: "https://share.google/8nomksZgpfR8YmJSo"
  },

  // Background Music
  // Audio will automatically play via Web Audio gentle piano arpeggio if externalUrl is null,
  // or you can put your own mp3 audio link here!
  music: {
    enabled: true,
    title: "Canon in D / Romantic Piano Melody",
    externalUrl: null // Set to "/music.mp3" or any online audio url if you have a file
  },

  // Our Story / Heartfelt Message
  story: {
    title: {
      en: "Our Story",
      ar: "قصتنا"
    },
    quote: {
      en: "“Two souls with but a single thought, two hearts that beat as one.”",
      ar: "«ومن آياته أن خلق لكم من أنفسكم أزواجاً لتسكنوا إليها وجعل بينكم مودة ورحمة»"
    },
    message: {
      en: "From our first meeting to this beautiful milestone, every moment led us here. We cannot imagine beginning this new chapter without the laughter, warmth, and love of our closest family and cherished friends.",
      ar: "من أول لحظة جمعتنا وحتى هذه الخطوة المباركة، كانت كل خطوة تقربنا من هذا اليوم المنتظر. لا تكتمل بهجتنا ولا تطيب فرحتنا إلا بوجود أهلنا وأحبابنا ليشاركونا أجمل ذكريات العمر."
    }
  },

  // Wedding Program / Itinerary
  itinerary: [
    {
      timeEn: "06:30 PM",
      timeAr: "٠٦:٣٠ م",
      titleEn: "Guest Welcome & Drinks",
      titleAr: "استقبال الضيوف والمشروبات",
      descEn: "Arrival and welcome refreshments in the outdoor courtyard.",
      descAr: "الاستقبال والترحيب بالضيوف في الحديقة الخارجية."
    },
    {
      timeEn: "07:30 PM",
      timeAr: "٠٧:٣٠ م",
      titleEn: "The Zaffe & Grand Entrance",
      titleAr: "الزفة والدخول الملكي",
      descEn: "Celebrating the arrival of the bride and groom.",
      descAr: "بدء مراسم الزفة ودخول العروسين."
    },
    {
      timeEn: "09:00 PM",
      timeAr: "٠٩:٠٠ م",
      titleEn: "Dinner Celebration",
      titleAr: "بوفيه العشاء الفاخر",
      descEn: "Open buffet dinner with selected cuisines and live music.",
      descAr: "عشاء فاخر على أنغام الموسيقى الحية."
    },
    {
      timeEn: "10:30 PM",
      timeAr: "١٠:٣٠ م",
      titleEn: "Cake Cutting & Dancing",
      titleAr: "تقطيع التورتة والاحتفال",
      descEn: "Celebrating the night away with family and friends.",
      descAr: "تقطيع كعكة الزفاف والرقص مع الأصدقاء والأحباب."
    }
  ],

  // Dress Code
  dressCode: {
    title: {
      en: "Dress Code",
      ar: "الزي المقترح"
    },
    palette: {
      en: "Formal & Elegant Evening Wear (Black Tie / Burgundy & Earth Tones welcome)",
      ar: "ملابس رسمية أنيقة ومسائية (بدل رسمية وفساتين سواريه)"
    }
  },

  // Photo Gallery
  gallery: [
    {
      url: "/couple.jpg",
      captionEn: "The beginning of forever",
      captionAr: "بداية رحلة العمر"
    },
    {
      url: "/rings.jpg",
      captionEn: "Forever & Always",
      captionAr: "وعد بالبقاء معاً"
    },
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      captionEn: "Pure Joy",
      captionAr: "فرحة اللقاء"
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
      captionEn: "Love in Bloom",
      captionAr: "قلوب يملؤها الحب"
    }
  ],

  // Contact / WhatsApp
  whatsappShareText: {
    en: "You're invited to celebrate Salah & Sara's Wedding on November 15! Check our invitation:",
    ar: "يسعدنا ويشرفنا دعوتكم لحضور حفل زفاف صلاح وسارة يوم ١٥ نوفمبر! تفاصيل الدعوة والموقع عبر الرابط:"
  }
};

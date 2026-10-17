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
      en: "Regency Pyramids Hotel - Marvella Ballroom",
      ar: "فندق ريجنسي بيراميدز - قاعة مارڤيلا"
    },
    city: {
      en: "Al Haram, Giza",
      ar: "الهرم، الجيزة"
    },
    address: {
      en: "Kafr Nassar, Al Haram, Giza Governorate",
      ar: "كفر نصار، شارع الهرم، محافظة الجيزة"
    },
    mapsUrl: "https://www.google.com/maps/place/Regency+Pyramids+Hotel,+Al+Shams,+Kafr+Nassar,+Al+Haram,+Giza+Governorate+3514811/@29.9875201,31.1325774,15z/data=!4m6!3m5!1s0x1458459cc1aa58dd:0x60dbcbfde068fc67!8m2!3d29.9875201!4d31.1325774!16s%2Fg%2F11h59s095d?hl=en&g_ep=Eg1tbF8yMDI2MTAxM18wIOC7DCoASAJQAg%3D%3D"
  },


  /**
   * Background Music Configuration:
   * - Song: "Edkhely Omri" by Hussain Al Jassmi (ادخلي عمري - حسين الجسمي)
   * - YouTube Video ID: Hp8WTVqR_0U (from https://youtu.be/Hp8WTVqR_0U)
   * 
   * HOW TO SWITCH TO LOCAL MP3:
   * 1. Place your mp3 file in: /public/music/song.mp3
   * 2. Set `useLocalAudio: true` below.
   */
  music: {
    enabled: true,
    title: "Edkhely Omri - Hussain Al Jassmi | ادخلي عمري - حسين الجسمي",
    youtubeVideoId: "Hp8WTVqR_0U",  // YouTube Video ID (change anytime to switch the song)
    useLocalAudio: false,           // Set to true to use local /music/song.mp3 instead of YouTube
    localAudioPath: "/music/song.mp3"
  },

  // Our Story / Heartfelt Message
  story: {
    title: {
      en: "Our Story",
      ar: "قصتنا"
    },
    quote: {
      en: "“Two souls with but a single thought, two hearts that beat as one.”",
      ar: "«وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً»"
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
      en: "Formal & Royal Evening Wear (Black Tie / Burgundy & Gold tones)",
      ar: "ملابس رسمية أنيقة ومسائية (بدل رسمية وفساتين سواريه)"
    }
  },

  // Contact / WhatsApp Share Text
  whatsappShareText: {
    en: "You're invited to celebrate Salah & Sara's Wedding on November 15! Check our royal invitation:",
    ar: "يسعدنا ويشرفنا دعوتكم لحضور حفل زفاف صلاح وسارة يوم ١٥ نوفمبر! تفاصيل الدعوة والموقع عبر الرابط:"
  }
};

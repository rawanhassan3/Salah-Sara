# 💍 Salah & Sara Luxury Wedding Invitation

A cinematic, interactive wedding invitation website crafted with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**, inspired by vintage royal burgundy envelopes and calligraphy invitations.

---

## ✨ Features

1. **3D Sealed Envelope Intro**:
   - Deep burgundy velvet envelope with gold foil borders and embossed pearlescent wax seal (`S&S`).
   - "Tap to open" / "اضغط لفتح الدعوة" interactive unsealing animation with gold confetti burst.
2. **Atmospheric Background Music**:
   - Integrated Web Audio romantic piano arpeggiator (plays automatically on user tap without 404s).
   - Can also play any custom MP3 by placing the file in `public/` and configuring `weddingData.js`.
   - Audio mute/unmute control in the floating navbar.
3. **Hero Composition**:
   - Matches the reference design with burgundy & cream vertical stripes header.
   - Vintage lace oval frame with couple portrait.
   - Scalloped lace heart badge displaying the wedding date `15.11`.
   - Calla lily and hanging amaranthus botanical illustration.
4. **Live Countdown Timer**:
   - Real-time countdown (Days : Hours : Minutes : Seconds) to November 15.
   - Burgundy pill action button ("KINDLY RSVP / تأكيد الحضور").
5. **Heartfelt Story & Quranic / Romantic Verse**:
   - Fade-in-on-scroll message.
6. **Event Details & Interactive Maps**:
   - Direct link to Google Maps (`https://share.google/8nomksZgpfR8YmJSo`).
   - "Add to Calendar" button that instantly downloads a `.ics` event file for Apple / Google Calendar.
   - Wedding timeline / itinerary (Reception, Zaffe, Dinner, Cake Cutting).
7. **Photo Gallery & Lightbox**:
   - Polaroid-style photo carousel with full-screen zoom preview on tap.
8. **RSVP Section**:
   - Interactive attendance confirmation (Joyfully Accept / Regretfully Decline).
   - Guest count selector and personal wishes note.
   - Confetti celebration animation & localStorage persistence.
9. **Full Bilingual Support (Arabic + English)**:
   - Floating toggle switch with complete RTL (Right-to-Left) layout support for Arabic typography (`Amiri`, `Reem Kufi`) and English calligraphy (`Great Vibes`, `Cinzel`).
10. **Mobile-First & WhatsApp Optimized**:
    - Open Graph tags and WhatsApp preview card (`og:image`, `og:title`, `og:description`).
    - One-click "Share on WhatsApp" button.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev
```

Open `http://localhost:5174/` (or the port shown in your terminal) in your browser.

---

## ⚙️ How to Edit Details (`src/config/weddingData.js`)

All details are stored in one single file: [`src/config/weddingData.js`](src/config/weddingData.js):
- **Names**: Salah & Sara (Arabic & English)
- **Date & Time**: `date: "2026-11-15T18:30:00"`
- **Venue Name & City**: Cairo, Egypt
- **Google Maps Link**: `https://share.google/8nomksZgpfR8YmJSo`
- **Background Music**: Set `externalUrl: "/your-song.mp3"` to use an MP3 file, or leave as `null` for built-in gentle romantic piano melody.

---

## 🌐 How to Deploy (Free & Instant on Vercel or Netlify)

### Option 1: Vercel (Recommended - Takes 1 minute)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Salah & Sara Wedding Invitation"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository.
4. Click **Deploy**. Vercel will build it in 30 seconds and give you a free `https://salah-sara-wedding.vercel.app` link.

### Option 2: Netlify Drop (No Git needed!)
1. Run the build command in terminal:
   ```bash
   npm run build
   ```
   This creates a production folder called `dist/`.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist` folder directly onto the page.
4. Netlify gives you an instant live URL to share on WhatsApp!

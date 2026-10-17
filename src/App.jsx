import React, { useState, useEffect, useRef } from 'react';
import { MusicProvider, useMusic } from './context/MusicContext';
import Navbar from './components/Navbar';
import FloatingPetals from './components/FloatingPetals';
import EnvelopeIntro from './components/EnvelopeIntro';
import HeroCard from './components/HeroCard';
import CountdownTimer from './components/CountdownTimer';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import RsvpSection from './components/RsvpSection';
import Footer from './components/Footer';
import FloatingMusicButton from './components/FloatingMusicButton';

function WeddingInvitationApp() {
  const [hasOpened, setHasOpened] = useState(false);
  const [lang, setLang] = useState('ar');
  const rsvpRef = useRef(null);

  const { startMusicOnUserGesture } = useMusic();

  // Sync document direction (RTL / LTR)
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleOpenEnvelope = () => {
    // 1. Immediately trigger audio in user touch handler (Required for mobile browsers)
    try {
      startMusicOnUserGesture();
    } catch (e) {
      console.log('Music start note:', e);
    }

    // 2. Transition into main invitation
    setTimeout(() => {
      setHasOpened(true);
    }, 1200);
  };

  const scrollToRsvp = () => {
    if (rsvpRef.current) {
      rsvpRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#FAF7F2] text-[#2C2420] paper-texture relative ${lang === 'ar' ? 'font-arabic-body' : ''}`}>
      
      {/* Falling Romantic Petals & Gold Shimmer */}
      <FloatingPetals />

      {/* Floating Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Floating Bottom Music Control Button (Visible across all sections) */}
      <FloatingMusicButton lang={lang} />

      {/* Sealed Wax Envelope Intro Screen */}
      {!hasOpened ? (
        <EnvelopeIntro onOpen={handleOpenEnvelope} lang={lang} />
      ) : (
        <main className="relative z-20 transition-opacity duration-1000 ease-out">
          {/* Royal Invitation Card (Clean, prestigious typography & monogram) */}
          <HeroCard lang={lang} />

          {/* Countdown Clock */}
          <CountdownTimer lang={lang} onScrollToRsvp={scrollToRsvp} />

          {/* Our Story & Heartfelt Message */}
          <OurStory lang={lang} />

          {/* Event Details, Interactive Google Maps & Wedding Itinerary */}
          <EventDetails lang={lang} />

          {/* RSVP Section & Wishes */}
          <RsvpSection lang={lang} rsvpRef={rsvpRef} />

          {/* Footer */}
          <Footer lang={lang} />
        </main>
      )}

    </div>
  );
}

export default function App() {
  return (
    <MusicProvider>
      <WeddingInvitationApp />
    </MusicProvider>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { MusicProvider, useMusic } from './context/MusicContext';
import Navbar from './components/Navbar';
import FloatingPetals from './components/FloatingPetals';
import EnvelopeIntro from './components/EnvelopeIntro';
import HeroCard from './components/HeroCard';
import CountdownTimer from './components/CountdownTimer';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';
import FloatingMusicButton from './components/FloatingMusicButton';

function WeddingInvitationApp() {
  const [hasOpened, setHasOpened] = useState(false);
  const [lang, setLang] = useState('ar');
  const detailsRef = useRef(null);

  const { startMusicOnUserGesture } = useMusic();

  // Sync document direction (RTL / LTR)
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleOpenEnvelope = () => {
    // 1. Immediately trigger Hussain Al Jassmi song in user tap handler (Required for mobile browsers)
    try {
      startMusicOnUserGesture();
    } catch (e) {
      console.log('Music gesture notice:', e);
    }

    // 2. Transition into main invitation
    setTimeout(() => {
      setHasOpened(true);
    }, 1200);
  };

  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#F8F5EE] text-[#2D241E] paper-texture relative ${lang === 'ar' ? 'font-arabic-body' : ''}`}>
      
      {/* Falling Romantic Golden Particles */}
      <FloatingPetals />

      {/* Floating Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Floating Bottom Music Control Button ("ادخلي عمري") */}
      <FloatingMusicButton lang={lang} />

      {/* Sealed Wax Envelope Intro Screen */}
      {!hasOpened ? (
        <EnvelopeIntro onOpen={handleOpenEnvelope} lang={lang} />
      ) : (
        <main className="relative z-20 transition-opacity duration-1000 ease-out">
          {/* Royal Invitation Card in Gold & Beige */}
          <HeroCard lang={lang} />

          {/* Countdown Clock with Quick Jump to Venue */}
          <CountdownTimer lang={lang} onScrollToDetails={scrollToDetails} />

          {/* Our Story & Heartfelt Message */}
          <OurStory lang={lang} />

          {/* Event Details, Interactive Google Maps & Add to Calendar */}
          <EventDetails lang={lang} detailsRef={detailsRef} />

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

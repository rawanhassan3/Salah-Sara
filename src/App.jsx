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
  const detailsRef = useRef(null);

  const { startMusicOnUserGesture } = useMusic();

  // Always enforce Arabic and RTL
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }, []);

  const handleOpenEnvelope = () => {
    try {
      startMusicOnUserGesture();
    } catch (e) {
      console.log('Music gesture notice:', e);
    }

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
    <div className="min-h-screen bg-[#F8F5EE] text-[#2D241E] paper-texture relative font-arabic-body" dir="rtl">
      
      {/* Falling Romantic Golden Particles */}
      <FloatingPetals />

      {/* Floating Navbar (Arabic) */}
      <Navbar />

      {/* Floating Bottom Music Control Button ("ادخلي عمري") */}
      <FloatingMusicButton />

      {/* Sealed Wax Envelope Intro Screen */}
      {!hasOpened ? (
        <EnvelopeIntro onOpen={handleOpenEnvelope} />
      ) : (
        <main className="relative z-20 transition-opacity duration-1000 ease-out">
          {/* Royal Invitation Card in Gold & Beige */}
          <HeroCard />

          {/* Countdown Clock with Quick Jump to Venue */}
          <CountdownTimer onScrollToDetails={scrollToDetails} />

          {/* Our Story & Heartfelt Message */}
          <OurStory />

          {/* Event Details, Interactive Google Maps & Add to Calendar */}
          <EventDetails detailsRef={detailsRef} />

          {/* Footer */}
          <Footer />
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

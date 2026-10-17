import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import FloatingPetals from './components/FloatingPetals';
import EnvelopeIntro from './components/EnvelopeIntro';
import HeroCard from './components/HeroCard';
import CountdownTimer from './components/CountdownTimer';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import PhotoGallery from './components/PhotoGallery';
import RsvpSection from './components/RsvpSection';
import Footer from './components/Footer';
import { romanticAudio } from './utils/audioPlayer';
import { weddingConfig } from './config/weddingData';

export default function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const [lang, setLang] = useState('ar'); // Default to Arabic as requested in chat
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const rsvpRef = useRef(null);

  // Sync document RTL/LTR with selected language
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleOpenEnvelope = () => {
    setHasOpened(true);
    // Start background music automatically upon user interaction
    if (weddingConfig.music.enabled) {
      try {
        romanticAudio.start(weddingConfig.music.externalUrl);
        setIsAudioPlaying(true);
      } catch (err) {
        console.log('Audio init notice:', err);
      }
    }
  };

  const handleToggleAudio = () => {
    const isPlaying = romanticAudio.toggle(weddingConfig.music.externalUrl);
    setIsAudioPlaying(isPlaying);
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

      {/* Floating Navbar with Music & Language Switches */}
      <Navbar
        lang={lang}
        setLang={setLang}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      {/* Sealed Wax Envelope Intro Screen */}
      {!hasOpened ? (
        <EnvelopeIntro onOpen={handleOpenEnvelope} lang={lang} />
      ) : (
        <main className="relative z-20 transition-opacity duration-1000 ease-out">
          {/* Main Invitation Card matching Video Composition */}
          <HeroCard lang={lang} />

          {/* Countdown Clock */}
          <CountdownTimer lang={lang} onScrollToRsvp={scrollToRsvp} />

          {/* Our Story & Romantic Quote */}
          <OurStory lang={lang} />

          {/* Event Details, Google Maps & Timeline */}
          <EventDetails lang={lang} />

          {/* Photo Gallery with Lightbox */}
          <PhotoGallery lang={lang} />

          {/* RSVP Section */}
          <RsvpSection lang={lang} rsvpRef={rsvpRef} />

          {/* Footer */}
          <Footer lang={lang} />
        </main>
      )}

    </div>
  );
}

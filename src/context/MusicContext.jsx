import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { weddingConfig } from '../config/weddingData';

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  const playerRef = useRef(null);
  const localAudioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const wasPlayingBeforeHidden = useRef(false);

  const { youtubeVideoId, useLocalAudio, localAudioPath } = weddingConfig.music;

  // Initialize YouTube API & Player
  useEffect(() => {
    if (useLocalAudio) {
      // Use HTML5 audio
      const audio = new Audio(localAudioPath);
      audio.loop = true;
      audio.volume = 0.7;
      localAudioRef.current = audio;
      setIsReady(true);
      return;
    }

    // Load YouTube Iframe API
    let tag = document.getElementById('youtube-iframe-api');
    if (!tag) {
      tag = document.createElement('script');
      tag.id = 'youtube-iframe-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      try {
        if (!window.YT || !window.YT.Player) return;

        playerRef.current = new window.YT.Player('yt-music-player', {
          height: '1',
          width: '1',
          videoId: youtubeVideoId,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            playlist: youtubeVideoId, // Required for loop in YouTube iframe
            playsinline: 1,
            modestbranding: 1,
            rel: 0,
            origin: window.location.origin
          },
          events: {
            onReady: (event) => {
              setIsReady(true);
              try {
                event.target.setVolume(0);
              } catch (e) {
                console.log('YT volume init notice:', e);
              }
            },
            onError: (err) => {
              console.warn('YouTube Player error (falling back if needed):', err);
              // If YouTube fails to play or is blocked, try local audio if configured or mark error
              setHasError(true);
            },
            onStateChange: (event) => {
              // 1 = playing, 2 = paused, 0 = ended
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2 || event.data === 0) {
                setIsPlaying(false);
              }
            }
          }
        });
      } catch (err) {
        console.error('Error creating YouTube player:', err);
        setHasError(true);
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
      }
      if (localAudioRef.current) {
        localAudioRef.current.pause();
      }
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, [youtubeVideoId, useLocalAudio, localAudioPath]);

  // Page Visibility API: pause when tab hidden, resume when tab active
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (isPlaying) {
          wasPlayingBeforeHidden.current = true;
          pauseMusic();
        }
      } else {
        if (wasPlayingBeforeHidden.current) {
          wasPlayingBeforeHidden.current = false;
          playMusic();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying]);

  // Smooth Volume Fade In (over 2.5s to 70%)
  const fadeInVolume = () => {
    if (useLocalAudio && localAudioRef.current) {
      localAudioRef.current.volume = 0;
      let vol = 0;
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = setInterval(() => {
        vol += 0.05;
        if (vol >= 0.7) {
          vol = 0.7;
          clearInterval(fadeIntervalRef.current);
        }
        if (localAudioRef.current) localAudioRef.current.volume = vol;
      }, 150);
      return;
    }

    if (!playerRef.current || !playerRef.current.setVolume) return;

    try {
      playerRef.current.unMute();
      playerRef.current.setVolume(0);
      let currentVol = 0;
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

      fadeIntervalRef.current = setInterval(() => {
        currentVol += 5;
        if (currentVol >= 70) {
          currentVol = 70;
          clearInterval(fadeIntervalRef.current);
        }
        try {
          if (playerRef.current && playerRef.current.setVolume) {
            playerRef.current.setVolume(currentVol);
          }
        } catch (e) {
          clearInterval(fadeIntervalRef.current);
        }
      }, 150);
    } catch (e) {
      console.log('Fade error:', e);
    }
  };

  // Called directly INSIDE user touch / click handler (iOS & Android requirement)
  const startMusicOnUserGesture = () => {
    setHasStarted(true);

    if (useLocalAudio && localAudioRef.current) {
      localAudioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          fadeInVolume();
        })
        .catch(err => console.log('Local audio play error:', err));
      return;
    }

    if (playerRef.current && playerRef.current.playVideo) {
      try {
        playerRef.current.unMute();
        playerRef.current.playVideo();
        setIsPlaying(true);
        fadeInVolume();
      } catch (e) {
        console.log('YT play error on gesture:', e);
      }
    }
  };

  const playMusic = () => {
    if (useLocalAudio && localAudioRef.current) {
      localAudioRef.current.play().catch(e => console.log(e));
      setIsPlaying(true);
      return;
    }

    if (playerRef.current && playerRef.current.playVideo) {
      try {
        playerRef.current.playVideo();
        setIsPlaying(true);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const pauseMusic = () => {
    if (useLocalAudio && localAudioRef.current) {
      localAudioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    if (playerRef.current && playerRef.current.pauseVideo) {
      try {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  const toggleMute = () => {
    if (useLocalAudio && localAudioRef.current) {
      localAudioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      return;
    }

    if (playerRef.current) {
      try {
        if (isMuted) {
          playerRef.current.unMute();
          setIsMuted(false);
        } else {
          playerRef.current.mute();
          setIsMuted(true);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        isMuted,
        hasStarted,
        isReady,
        hasError,
        startMusicOnUserGesture,
        playMusic,
        pauseMusic,
        toggleMusic,
        toggleMute
      }}
    >
      {/* Off-screen hidden YouTube player (Must NOT use display:none so iOS/Android won't block it) */}
      {!useLocalAudio && (
        <div
          id="yt-music-player-wrapper"
          style={{
            position: 'fixed',
            top: '-200px',
            left: 0,
            width: '1px',
            height: '1px',
            opacity: 0.001,
            pointerEvents: 'none',
            zIndex: -9999
          }}
          aria-hidden="true"
        >
          <div id="yt-music-player"></div>
        </div>
      )}

      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}

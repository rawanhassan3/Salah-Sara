/**
 * Audio Engine: Plays either an external mp3 or generates a warm romantic acoustic music loop using Web Audio API
 */

class RomanticAudioPlayer {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.intervalId = null;
    this.audioElement = null;
  }

  init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
  }

  playExternal(url) {
    if (!this.audioElement) {
      this.audioElement = new Audio(url);
      this.audioElement.loop = true;
    }
    this.audioElement.play().catch(e => console.log('Audio autoplay prevented:', e));
    this.isPlaying = true;
  }

  // Romantic acoustic chime & piano arpeggiator (Canon in D / Romance inspired progression)
  playSynthesizedMelody() {
    this.init();
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    this.isPlaying = true;

    // Chords: D - A - Bm - F#m - G - D - G - A (Romantic wedding harmony in D major)
    const chords = [
      [293.66, 369.99, 440.00, 587.33], // D maj (D4, F#4, A4, D5)
      [220.00, 277.18, 329.63, 440.00], // A maj (A3, C#4, E4, A4)
      [246.94, 293.66, 369.99, 493.88], // B min (B3, D4, F#4, B4)
      [185.00, 220.00, 277.18, 369.99], // F# min (F#3, A3, C#4, F#4)
      [196.00, 246.94, 293.66, 392.00], // G maj (G3, B3, D4, G4)
      [146.83, 220.00, 293.66, 440.00], // D maj low
      [196.00, 293.66, 392.00, 493.88], // G maj
      [220.00, 329.63, 440.00, 554.37]  // A maj high
    ];

    let chordIdx = 0;
    let noteIdx = 0;

    const playTone = (freq, duration = 1.6, gainLevel = 0.04) => {
      if (!this.isPlaying || !this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      // Soft warm sine/triangle wave for romantic music-box feel
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(gainLevel, this.audioCtx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    };

    const step = () => {
      if (!this.isPlaying) return;
      const currentChord = chords[chordIdx];
      const freq = currentChord[noteIdx];

      playTone(freq, 1.4, noteIdx === 0 ? 0.06 : 0.04);

      noteIdx++;
      if (noteIdx >= currentChord.length) {
        noteIdx = 0;
        chordIdx = (chordIdx + 1) % chords.length;
      }
    };

    // Trigger note every 450ms
    step();
    this.intervalId = setInterval(step, 460);
  }

  start(externalUrl = null) {
    if (externalUrl) {
      this.playExternal(externalUrl);
    } else {
      this.playSynthesizedMelody();
    }
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.audioElement) {
      this.audioElement.pause();
    }
  }

  toggle(externalUrl = null) {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start(externalUrl);
      return true;
    }
  }
}

export const romanticAudio = new RomanticAudioPlayer();

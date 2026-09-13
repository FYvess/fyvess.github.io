import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { MusicContextValue } from '../types';

/**
 * MusicContext - Manages background music player state
 *
 * Features:
 * - Provides isPlaying state and toggleMusic function
 * - Controls HTMLAudioElement with play/pause
 * - Handles autoplay blocking gracefully (catch promise rejection)
 * - Persists preference to localStorage
 * - Sets volume to 0.4 (40%)
 * - Uses useRef for audio element reference
 *
 * Requirements: 19.1, 19.2, 19.3, 19.4, 19.5, 19.6, 19.7, 19.8
 */

const MusicContext = createContext<MusicContextValue | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useLocalStorage<boolean>('musicPlaying', false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Sync audio element play/pause state when isPlaying changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // Attempt to play, but handle autoplay blocking gracefully
      audio.play().catch(() => {
        // Browser blocked autoplay (common on first interaction), reset state
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, setIsPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      {/* Hidden audio element - controlled by this context */}
      <audio
        ref={audioRef}
        src="/assets/music/background.mp3"
        loop
        preload="none"
        volume={0.4}
      />
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic(): MusicContextValue {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within MusicProvider');
  }
  return context;
}

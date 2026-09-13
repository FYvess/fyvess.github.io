import { useState, useEffect } from 'react';

/**
 * useMediaQuery - Tracks media query matches using native window.matchMedia API
 * Returns boolean state that updates on resize and media query changes
 * Cleans up listeners on unmount
 *
 * Requirements: 2.7, 14.1
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    // Server-side check returns false (safe default)
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // Handler for media query changes
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Set initial state
    setMatches(mediaQuery.matches);

    // Use addEventListener for better browser compatibility
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

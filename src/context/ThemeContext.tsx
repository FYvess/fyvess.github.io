import { createContext, useContext, useEffect, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Theme, ThemeContextValue } from '../types';

/**
 * ThemeContext - Manages dark/light theme state
 *
 * Features:
 * - Provides theme state and toggleTheme function
 * - Initializes from localStorage or system preference (prefers-color-scheme)
 * - Sets data-theme attribute on document.documentElement
 * - Persists selection to localStorage
 *
 * Requirements: 18.1, 18.2, 18.3, 18.4, 18.5
 */

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', getSystemTheme());

  // Set data-theme attribute on root element whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

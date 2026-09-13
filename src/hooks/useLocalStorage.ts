import { useState, useCallback } from 'react';

/**
 * useLocalStorage - Syncs React state with localStorage
 * Handles JSON serialization/deserialization with graceful fallback to in-memory state
 * if localStorage is unavailable (private browsing, quota exceeded, etc.)
 *
 * Requirements: 18.4, 19.5
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      // ponytail: localStorage unavailable (private mode, quota exceeded), fallback to memory
      return initialValue;
    }
  });

  const setValue = useCallback((value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Silent fail: continue with in-memory state only
      setStoredValue(value);
    }
  }, [key]);

  return [storedValue, setValue];
}

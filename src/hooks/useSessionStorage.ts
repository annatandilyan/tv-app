import { useState, useEffect } from 'react';

export function useSessionStorage<T>(key: string, initialValue: T) {
  const getStoredValue = () => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const stored = sessionStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : initialValue;
    } catch (error) {
      console.error('Failed to parse sessionStorage item:', error);
      return initialValue;
    }
  };

  const [value, setValue] = useState<T>(getStoredValue);

  useEffect(() => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Failed to set sessionStorage item:', error);
    }
  }, [key, value]);

  return [value, setValue] as const;
}

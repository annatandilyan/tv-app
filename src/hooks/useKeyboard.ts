import { useEffect } from 'react';

type KeyHandler = (event: KeyboardEvent) => void;

interface UseKeyboardOptions {
  key: string; // e.g. "Escape", "Enter", "Tab"
  handler: KeyHandler;
  enabled?: boolean; // Optional flag to enable/disable the listener
}

export function useKeyboard({
  key,
  handler,
  enabled = true,
}: UseKeyboardOptions) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        handler(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [key, handler, enabled]);
}

import { useCallback } from 'react';
import { useKeyboard } from '@/hooks/useKeyboard.ts';
import { ANIMATION_DURATION } from '@/consts';

export const useEscapeHandler = (
  setIsExpanded: (expanded: boolean) => void,
  setEscapeClosed: (closed: boolean) => void
) => {
  useKeyboard({
    key: 'Escape',
    handler: useCallback(() => {
      setIsExpanded(false);
      setEscapeClosed(true);
      setTimeout(() => setEscapeClosed(false), ANIMATION_DURATION.ESCAPE_RESET);
    }, [setIsExpanded, setEscapeClosed]),
  });
};

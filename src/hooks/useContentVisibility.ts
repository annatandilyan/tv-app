import { useEffect } from 'react';

import { ANIMATION_DURATION } from '@/consts';

export const useContentVisibility = (
  isExpanded: boolean,
  setShowContent: (show: boolean) => void
) => {
  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(
        () => setShowContent(true),
        ANIMATION_DURATION.CONTENT_DELAY
      );
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isExpanded, setShowContent]);
};

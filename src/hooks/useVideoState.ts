import { useState, useEffect } from 'react';

export const useVideoState = (isPlayingVideo: boolean, delay: number) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (isPlayingVideo) {
      const timer = setTimeout(() => {
        setVideoLoaded(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setVideoLoaded(false);
    }
  }, [isPlayingVideo, delay]);

  return videoLoaded;
};

import { useState, useCallback } from 'react';
import { Movie } from '@/components/types';
import CategoryLabel from '@/components/featuredMovie/CategoryLabel.tsx';
import MovieLogo from '@/components/featuredMovie/MovieLogo.tsx';
import MovieInfo from '@/components/featuredMovie/MovieInfo.tsx';
import MovieDescription from '@/components/featuredMovie/MovieDescription.tsx';
import ActionButtons from '@/components/featuredMovie/ActionButtons.tsx';

const CONTAINER_STYLES = {
  wrapper: 'relative w-full',
  content: 'relative z-10 h-full flex items-center pt-20 pl-20 max-w-4xl',
  layout: 'space-y-6',
} as const;

interface FeaturedMovieProps {
  movie: Movie;
  isPlayingVideo?: boolean;
  onPlayClick?: () => void;
  onMoreInfoClick?: () => void;
}

// Main component
export function FeaturedMovie({
  movie,
  isPlayingVideo,
  onPlayClick,
  onMoreInfoClick,
}: FeaturedMovieProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  const handlePlayClick = useCallback(() => {
    onPlayClick?.();
  }, [onPlayClick]);

  const handleMoreInfoClick = useCallback(() => {
    onMoreInfoClick?.();
  }, [onMoreInfoClick]);

  return (
    <div className={CONTAINER_STYLES.wrapper}>
      <div className={CONTAINER_STYLES.content}>
        <div className={CONTAINER_STYLES.layout}>
          <CategoryLabel category={movie.category} />
          <MovieLogo
            movie={movie}
            imageError={imageError}
            onImageError={handleImageError}
          />
          <MovieInfo movie={movie} />
          <MovieDescription description={movie.description} />
          <ActionButtons
            onPlayClick={handlePlayClick}
            onMoreInfoClick={handleMoreInfoClick}
          />
        </div>
      </div>
    </div>
  );
}

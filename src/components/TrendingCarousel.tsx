import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSessionStorage } from '@/hooks/useSessionStorage';
import { Movie } from '@/components/types';
import { CAROUSEL_CONSTANTS } from '@/consts';

interface TrendingCarouselProps {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
  maxItems?: number;
  itemsPerScroll?: number;
}

interface LastViewedMovie {
  id: string | number;
  timestamp: string;
}

interface ScrollState {
  canScrollLeft: boolean;
  canScrollRight: boolean;
}

export function TrendingCarousel({
  movies,
  onMovieClick,
  maxItems = CAROUSEL_CONSTANTS.MAX_ITEMS_DEFAULT,
  itemsPerScroll = CAROUSEL_CONSTANTS.ITEMS_PER_SCROLL_DEFAULT,
}: TrendingCarouselProps) {
  const [scrollState, setScrollState] = useState<ScrollState>({
    canScrollLeft: false,
    canScrollRight: true,
  });

  const [, setLastViewedMovie] = useSessionStorage<LastViewedMovie | null>(
    'lastViewedMovie',
    null
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const checkScrollability = useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const canScrollLeft = scrollLeft > 0;
    const canScrollRight = scrollLeft < scrollWidth - clientWidth - 1;

    setScrollState(prev => {
      if (
        prev.canScrollLeft !== canScrollLeft ||
        prev.canScrollRight !== canScrollRight
      ) {
        return { canScrollLeft, canScrollRight };
      }
      return prev;
    });
  }, []);

  const scroll = useCallback(
    (direction: 'left' | 'right') => {
      if (!scrollRef.current) return;

      const scrollAmount = CAROUSEL_CONSTANTS.ITEM_WIDTH * itemsPerScroll;
      const currentScrollLeft = scrollRef.current.scrollLeft;

      const newScrollPosition =
        direction === 'left'
          ? Math.max(0, currentScrollLeft - scrollAmount)
          : currentScrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });

      setTimeout(checkScrollability, CAROUSEL_CONSTANTS.SCROLL_CHECK_DELAY);
    },
    [checkScrollability, itemsPerScroll]
  );

  const handleMovieClick = useCallback(
    (movie: Movie) => {
      onMovieClick(movie);
      setLastViewedMovie({
        id: movie.id,
        timestamp: new Date().toISOString(),
      });
    },
    [onMovieClick, setLastViewedMovie]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, movie: Movie) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleMovieClick(movie);
      }
    },
    [handleMovieClick]
  );

  useEffect(() => {
    if (movies.length === 0) return;

    const timeout = setTimeout(
      checkScrollability,
      CAROUSEL_CONSTANTS.INITIAL_CHECK_DELAY
    );
    return () => clearTimeout(timeout);
  }, [movies, checkScrollability]);

  useEffect(() => {
    const handleResize = () => checkScrollability();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [checkScrollability]);

  const displayedMovies = movies.slice(0, maxItems);

  if (displayedMovies.length === 0) {
    return (
      <div className="relative px-5 pb-4 top-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Trending Now
        </h2>
        <p className="text-muted-foreground">No movies available</p>
      </div>
    );
  }

  return (
    <div className="relative px-5 pb-4 top-20">
      <h2 className="text-2xl font-bold text-foreground mb-4">Trending Now</h2>

      <div className="relative group top-30">
        {scrollState.canScrollLeft && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white border-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </Button>
        )}

        {scrollState.canScrollRight && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white border-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        )}

        {/* Movie Grid */}
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-hidden scroll-smooth"
          onScroll={checkScrollability}
          role="list"
          aria-label="Trending movies"
        >
          {displayedMovies.map(movie => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-23 cursor-pointer group/item transition-transform hover:scale-105 focus-within:scale-105"
              role="listitem"
            >
              <div
                className="relative overflow-hidden rounded-lg bg-card focus:outline-none  focus:ring-primary focus:ring-offset-2"
                onClick={() => handleMovieClick(movie)}
                onKeyDown={e => handleKeyDown(e, movie)}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${movie.title} (${movie.year})`}
              >
                <img
                  src={`/assets/${movie.coverImage}`}
                  alt=""
                  className="w-full h-60 object-cover transition-transform group-hover/item:scale-110 group-focus-within/item:scale-110"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/item:opacity-100 group-focus-within/item:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center space-y-2 p-4">
                    <h3 className="text-white font-semibold text-lg line-clamp-2">
                      {movie.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {movie.year} • {movie.rating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState, useCallback } from 'react';
import { TrendingCarousel } from '@/components/TrendingCarousel';
import { Movie } from '@/components/types';
import { VIDEO_LOAD_DELAY, VIDEO_START_DELAY } from '@/consts';
import { useVideoState } from '@/hooks/useVideoState.ts';
import { useMoviesData } from '@/hooks/useMoviesData.ts';
import { FeaturedMovie } from '@/components/featuredMovie/FeaturedMovie.tsx';

const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-foreground">Loading...</h1>
    </div>
  </div>
);

const BackgroundMedia = ({
  videoLoaded,
  featuredMovie,
}: {
  videoLoaded: boolean;
  featuredMovie: Movie;
}) => {
  if (videoLoaded) {
    return (
      <video
        className="absolute inset-0 w-full object-cover"
        src={'https://www.w3schools.com/html/mov_bbb.mp4'}
        // video url you provided doesn't work
        //src={featuredMovie.videoUrl}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <div
      className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/assets/${featuredMovie.coverImage})` }}
    />
  );
};

const BackgroundOverlay = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
  </>
);

// Main component
const Index = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const { featuredMovie, trendingMovies, setFeaturedMovie } = useMoviesData();
  const videoLoaded = useVideoState(isPlayingVideo, VIDEO_LOAD_DELAY);

  const handleMovieClick = useCallback(
    (movie: Movie) => {
      setFeaturedMovie(movie);
      setIsPlayingVideo(false);

      setTimeout(() => {
        setIsPlayingVideo(true);
      }, VIDEO_START_DELAY);
    },
    [setFeaturedMovie]
  );

  if (!featuredMovie) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-no-repeat bg-cover bg-center h-screen">
      {/* Background Media */}
      <BackgroundMedia
        videoLoaded={videoLoaded}
        featuredMovie={featuredMovie}
      />

      {/* Background Overlay */}
      <BackgroundOverlay />

      {/* Featured Movie Section */}
      <div className="-ml-16">
        <FeaturedMovie movie={featuredMovie} />
      </div>

      {/* Trending Section */}
      <div className="relative top-20 z-20">
        <TrendingCarousel
          movies={trendingMovies}
          onMovieClick={handleMovieClick}
        />
      </div>
    </div>
  );
};

export default Index;

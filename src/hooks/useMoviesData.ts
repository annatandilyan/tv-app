import { useState, useEffect } from 'react';
import { Movie } from '@/components/types';
import {
  getLastViewedMovie,
  sortMoviesByDate,
  transformApiData,
} from '@/utils';
import moviesData from '@/data/movies.json';

export const useMoviesData = () => {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Transform data
    const transformedFeatured = transformApiData(moviesData.Featured);
    transformedFeatured.featured = true;

    const transformedTrending = moviesData.TendingNow.map(transformApiData);
    const sortedMovies = sortMoviesByDate(transformedTrending);

    // Handle last viewed movie
    const lastViewedData = getLastViewedMovie();

    if (lastViewedData) {
      const lastViewedMovie = sortedMovies.find(
        m => m.id === lastViewedData.id
      );

      if (lastViewedMovie) {
        const reorderedMovies = [
          lastViewedMovie,
          ...sortedMovies.filter(item => item.id !== lastViewedData.id),
        ];
        setTrendingMovies(reorderedMovies);
        setFeaturedMovie(lastViewedMovie);
      } else {
        setFeaturedMovie(transformedFeatured);
        setTrendingMovies(sortedMovies);
      }
    } else {
      setFeaturedMovie(transformedFeatured);
      setTrendingMovies(sortedMovies);
    }
  }, []);

  return { featuredMovie, trendingMovies, setFeaturedMovie };
};

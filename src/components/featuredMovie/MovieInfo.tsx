import { Movie } from '@/components/types';

const MovieInfo = ({ movie }: { movie: Movie }) => (
  <div className="flex items-center space-x-4 text-sm">
    <span>{movie.year}</span>
    <span className="px-2 py-1 border border-muted-foreground/30 rounded">
      {movie.rating}
    </span>
    <span>{movie.duration}</span>
  </div>
);

export default MovieInfo;

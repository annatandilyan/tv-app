import { Movie } from '@/components/types';

const ASSETS_PATH = 'assets/';

const getImagePath = (imageName: string): string =>
  `${ASSETS_PATH}${imageName}`;

const MovieLogo = ({
  movie,
  imageError,
  onImageError,
}: {
  movie: Movie;
  imageError: boolean;
  onImageError: () => void;
}) => (
  <div className="">
    {!imageError && (
      <img
        src={getImagePath(movie.logoImage)}
        alt={movie.title}
        className="max-w-md max-h-32 object-contain"
        onError={onImageError}
      />
    )}
    {imageError && (
      <h1 className="text-6xl font-bold text-foreground">{movie.title}</h1>
    )}
  </div>
);

export default MovieLogo;

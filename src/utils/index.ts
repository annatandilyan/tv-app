import { Movie } from '@/components/types';
import {
  ANIMATION_DURATION,
  LAST_VIEWED_KEY,
  MAX_TRENDING_MOVIES,
  menuItems,
} from '@/consts';

export const formatDuration = (milliseconds: string): string => {
  const ms = parseInt(milliseconds, 10);
  const totalMinutes = Math.floor(ms / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export const transformApiData = (apiItem: Record<string, string>): Movie => ({
  id: parseInt(apiItem.Id, 10),
  title: apiItem.Title,
  category: apiItem.Category,
  year: parseInt(apiItem.ReleaseYear, 10),
  rating: apiItem.MpaRating,
  duration: formatDuration(apiItem.Duration),
  description: apiItem.Description,
  coverImage: apiItem.CoverImage,
  logoImage: apiItem.TitleImage,
  videoUrl: apiItem.VideoUrl || '',
  trending: true,
  featured: false,
  createdAt: apiItem.Date,
});

export const sortMoviesByDate = (movies: Movie[]): Movie[] =>
  movies
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, MAX_TRENDING_MOVIES);

export const getLastViewedMovie = (): Movie | null => {
  try {
    const lastViewed = sessionStorage.getItem(LAST_VIEWED_KEY);
    return lastViewed ? JSON.parse(lastViewed) : null;
  } catch {
    return null;
  }
};

export const getAnimationDelay = (
  index: number,
  showContent: boolean,
  isBottomMenu = false
): string => {
  if (!showContent) return '0ms';

  const baseDelay = isBottomMenu
    ? (index + menuItems.length) * ANIMATION_DURATION.STAGGER_BASE +
      ANIMATION_DURATION.BOTTOM_MENU_DELAY
    : index * ANIMATION_DURATION.STAGGER_BASE;

  return `${baseDelay}ms`;
};

export const getSidebarBackgroundColor = (isExpanded: boolean): string => {
  const opacity = isExpanded ? '0.95' : '1';
  return `hsl(var(--sidebar-background) / ${opacity})`;
};

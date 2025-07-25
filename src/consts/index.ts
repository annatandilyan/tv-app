import Search from '/assets/icons/search-icon.png';
import Home from '/assets/icons/home-icon.png';
import TvShows from '/assets/icons/tv-shows-icon.png';
import Movies from '/assets/icons/movies-icon.png';
import Genres from '/assets/icons/genres-icon.png';
import WatchLater from '/assets/icons/watch-later-icon.png';

export const menuItems = [
  { icon: Search, label: 'Search', path: '/search' },
  { icon: Home, label: 'Home', path: '/' },
  { icon: TvShows, label: 'TV Shows', path: '/tv-shows' },
  { icon: Movies, label: 'Movies', path: '/movies' },
  { icon: Genres, label: 'Genres', path: '/genres' },
  { icon: WatchLater, label: 'Watch Later', path: '/watch-later' },
];

export const bottomMenuItems = [
  { label: 'Language' },
  { label: 'Get Help' },
  { label: 'Exit' },
];

export const VIDEO_LOAD_DELAY = 2000;
export const VIDEO_START_DELAY = 2000;
export const MAX_TRENDING_MOVIES = 50;
export const LAST_VIEWED_KEY = 'lastViewedMovie';

export const SIDEBAR_WIDTH = {
  COLLAPSED: 'w-16',
  EXPANDED: 'w-64',
} as const;

export const ANIMATION_DURATION = {
  CONTENT_DELAY: 50,
  ESCAPE_RESET: 300,
  STAGGER_BASE: 30,
  BOTTOM_MENU_DELAY: 150,
} as const;

export const USER_NAME = 'Daniel';

export const CAROUSEL_CONSTANTS = {
  ITEM_WIDTH: 280,
  SCROLL_CHECK_DELAY: 300,
  INITIAL_CHECK_DELAY: 1000,
  MAX_ITEMS_DEFAULT: 50,
  ITEMS_PER_SCROLL_DEFAULT: 4,
} as const;

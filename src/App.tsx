import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import Index from './pages/Index';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';
import Genres from './pages/Genres';
import WatchLater from './pages/WatchLater';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;

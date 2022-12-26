import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Cast from './Cast/Cast';
import Revievs from './Reviews/Reviews';
import AppBar from '../components/AppBar/AppBar';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Movies from '../components/Movies/Movies';
// import Home from '../components/Home/Home';
import NotFound from 'pages/NotFound';

const Home = lazy(() => import('components/Home/Home'));
const Movies = lazy(() => import('components/Movies/Movies'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Revievs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

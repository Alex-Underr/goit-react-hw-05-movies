import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import { fetchMovieDetails } from 'components/services/API';
import s from './MovieDetails.module.css';
export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => {
        setFilm(data);
      })
      .catch(console.log);
  }, [movieId]);

  return (
    <div className={s.section}>
      {film?.id && (
        <>
          <div className={s.header}>
            <Link className={s.back} to={location?.state?.from ?? '/'}>
              BACK
            </Link>
          </div>
          <>
            <div className={s.secTwo}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                alt={film.title}
                width="600"
              />
              <h2>{film.title}</h2>
              <p>
                User score:{' '}
                <span className={s.text}>{film.vote_average.toFixed(2)}</span>
              </p>
            </div>
            <div>
              <b>Overview</b>
              <p>{film.overview}</p>
              <b>Genres</b>
              <p>{film.genres.map(({ name }) => `${name} `)}</p>
            </div>
          </>

          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast" state={{ from: location?.state?.from }}>
                  <b>Cast</b>
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from: location?.state?.from }}>
                  <b>Reviews</b>
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
}

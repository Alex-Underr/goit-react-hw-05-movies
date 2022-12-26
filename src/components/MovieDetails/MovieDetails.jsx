import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import { fetchMovieDetails } from 'components/services/API';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  // const locationBack = useRef(location.state);
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => {
        setFilm(data);
      })
      .catch(console.log);
  }, [movieId]);

  return (
    <div>
      {film?.id && (
        <>
          <div>
            <Link to={location?.state?.from ?? '/'}>BACK</Link>
          </div>
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt={film.title}
              width="300"
            />
            <div>
              <h2>{film.title}</h2>
              <p>
                User score: <span>{film.vote_average.toFixed(2)}</span>
              </p>
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
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from: location?.state?.from }}>
                  Reviews
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

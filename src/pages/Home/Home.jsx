import { fetchTrendingFilms } from 'components/services/API';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';
export default function TrendMovies() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchTrendingFilms().then(setEvents);
  }, []);

  return (
    <>
      <div className={style.section}>
        <h1 className={style.text}>Trending today!</h1>
        {events && (
          <ul className={style.preview}>
            {events.map(({ id, title, poster_path }) => (
              <li key={id}>
                <Link to={`movies/${id}`}>
                  <img
                    className={style.image}
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={events.title}
                    width="300"
                  />
                  <h3>{title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

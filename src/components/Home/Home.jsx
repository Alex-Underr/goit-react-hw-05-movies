import { fetchTrendingFilms } from '../services/API';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function TrendMovies() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchTrendingFilms().then(setEvents);
  }, []);

  return (
    <>
      <h1>Trending today!</h1>
      {events && (
        <ul>
          {events.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

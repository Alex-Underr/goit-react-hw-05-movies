import { searchFilms } from '../services/API';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Movies({ onChange, searchFilms, value }) {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    searchFilms(searchQuery).then(setEvents);
  }, [searchFilms, searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const param = e.target.elements.param.value;
    setSearchParams({ name: param });
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="param"
          placeholder="Search movies"
          required
          autoFocus
          value={value}
          onChange={e => {
            onChange(e.target.value.toLowerCase());
          }}
        />
        <button type="submit">Search</button>
      </form>
      {events && (
        <ul>
          {events.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

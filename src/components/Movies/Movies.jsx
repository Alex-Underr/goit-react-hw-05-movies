import { searchFilms } from '../services/API';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Movies.module.css';

export default function Movies() {
  const [events, setEvents] = useState([]);
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = searchParams.get('name');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    searchFilms(searchQuery).then(setEvents);
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    // const value = e.target.elements.param.value;
    setSearchParams(value ? { name: value } : {});
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          className={style.input}
          type="text"
          // name="value"
          placeholder="Search movies"
          required
          autoFocus
          value={value}
          onChange={e => {
            setValue(e.target.value.toLowerCase());
          }}
        />
        <button type="submit" className={style.Button}>
          Search
        </button>
      </form>
      {events && (
        <div className={style.section}>
          <ul className={style.preview}>
            {events.map(({ id, title, poster_path }) => (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    width="300"
                  />
                  <h3>{title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'components/services/API';
import s from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(data => {
        setCast(data);
      })
      .catch(console.log);
  }, [movieId]);

  return (
    <>
      {cast?.length > 0 && (
        <ul className={s.section}>
          {cast.map(e => (
            <li key={e.id} className={s.card}>
              {e.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${e.profile_path}`}
                  alt={e.character}
                  width="200"
                />
              ) : (
                <img
                  src="https://i.stack.imgur.com/YaL3s.jpg"
                  alt={e.character}
                  width="200"
                />
              )}
              <p>
                <span className={s.name}> Original name: </span>
                {e.original_name}
              </p>
              <p>
                <span className={s.name}> Character: </span> {e.character}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

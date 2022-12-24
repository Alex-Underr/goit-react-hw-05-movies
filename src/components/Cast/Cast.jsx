import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'components/services/API';

export default function Cast() {
  const [cast, setCast] = useState();
  const { id: movieId } = useParams();

  useEffect(() => {
    movieId &&
      fetchMovieCredits(movieId)
        .then(({ data }) => {
          setCast(data.cast);
        })
        .catch(console.log);
  }, [movieId]);

  return (
    <>
      {cast && cast.length > 0} ?
      <ul>
        {cast.map(e => (
          <li key={e.id}>
            {e.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${e.profile_path}`}
                alt={e.character}
                width="100"
              />
            ) : (
              <img
                src="https://i.stack.imgur.com/YaL3s.jpg"
                alt={e.character}
                width="100"
              />
            )}
            <p>Original name: {e.original_name}</p>
            <p>Character: {e.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

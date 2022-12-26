import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'components/services/API';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => {
        setReviews(data);
      })
      .catch(console.log);
  }, [movieId]);
  return (
    <>
      {reviews?.length > 0 && (
        <ul>
          {reviews.map(e => (
            <li key={e.id}>
              <p>Author: {e.author}</p>
              <p>Review</p>
              <p>{e.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

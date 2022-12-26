import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'components/services/API';
import style from './Reviews.module.css';

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
        <ul className={style.section}>
          {reviews.map(e => (
            <li key={e.id}>
              <p className={style.header}>Author: {e.author}</p>
              <p className={style.header}>Review</p>
              <p>{e.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

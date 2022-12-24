import axios from 'axios';
const KEY = 'ecdc0bede86c5d627d8e7926f2be8d3a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const searchMovie = 'search/movie';
const trendingFilms = 'trending/movie/day';

export const fetchTrendingFilms = async () => {
  const result = await axios(`${trendingFilms}`, { params: { api_key: KEY } });
  return result.data.results;
};

export const searchFilms = async query => {
  const result = await axios(`${searchMovie}`, {
    params: { api_key: KEY },
    query,
  });
  return result.data.results;
};

export const fetchMovieDetails = async id => {
  const result = await axios(`movie/${id}`, {
    params: { api_key: KEY },
    id,
  });
  return result.data.results;
};
// console.log(fetchMovieDetails());

export const fetchMovieCredits = async id => {
  const result = await axios(`movie/${id}/credits`, {
    params: { api_key: KEY },
  });
  return result.data;
};

export const fetchMovieReviews = async id => {
  const result = await axios(`movie/${id}/reviews`, {
    params: { api_key: KEY },
  });
  return result;
};

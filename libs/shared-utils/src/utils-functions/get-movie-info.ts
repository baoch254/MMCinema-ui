import { client } from '@mmcinema-ui/api';

const getMovieInfo = async () => {
  const movies = await client.api.getMovies.$get()
  const data = await movies.json()
  return data
};

export default getMovieInfo;

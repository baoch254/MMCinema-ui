import { client } from '../../../../apps/web/app/api/[[...route]]/hono';

const getMovieInfo = async () => {
  const movies = await client.api.getMovies.$get()
  const data = await movies.json()
  return data
};

export default getMovieInfo;

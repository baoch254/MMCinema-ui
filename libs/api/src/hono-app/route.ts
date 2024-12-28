import { Hono } from 'hono';
import { movies } from '@mmcinema-ui/api';

export const app = new Hono().basePath('/api')
  .route('/getMovies', movies)

export type AppType = typeof app

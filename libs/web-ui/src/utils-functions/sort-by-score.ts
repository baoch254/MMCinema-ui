import { MovieType } from '../constants/constants-and-types';

export const sortByScore = (array: MovieType[], sortOpt: 'desc' | 'asc') => {
  return sortOpt === 'desc'
    ? array.sort((a, b) => b.vote_average - a.vote_average)
    : array.sort((a, b) => a.vote_average - b.vote_average);
};

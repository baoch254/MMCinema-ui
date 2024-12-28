import { MovieType } from '@mmcinema-ui/shared-common';

const sortByScore = (array: MovieType[], sortOpt: 'desc' | 'asc') => {
  return sortOpt === 'desc'
    ? array.sort((a, b) => b.vote_average - a.vote_average)
    : array.sort((a, b) => a.vote_average - b.vote_average);
};

export default sortByScore

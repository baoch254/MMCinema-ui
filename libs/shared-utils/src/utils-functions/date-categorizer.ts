import { MovieType } from '@mmcinema-ui/shared-common'

export const getNowShowingMoviews = (array : MovieType[]) => {
    const currentDate = new Date();
    return array.filter((item) => new Date(item.release_date) <= currentDate);
};

export const getUpcomingMovies = (array : MovieType[]) => {
    const currentDate = new Date();
    return array.filter((item) => new Date(item.release_date) > currentDate);
};

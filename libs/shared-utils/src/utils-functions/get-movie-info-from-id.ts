import {MovieType} from '@mmcinema-ui/shared-common'

const getMovieInfoFromId = (moviesList : MovieType[], id : number) => {
    return moviesList.find((movie) => movie.id === id)
};

export default getMovieInfoFromId;

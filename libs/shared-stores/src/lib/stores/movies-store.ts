import {create} from 'zustand';
import { MovieType } from '@mmcinema-ui/shared-common'

interface MoviesStore {
  moviesList : MovieType[] | undefined,
  setMoviesList : (moviesList : MovieType[]) => void
}

const useMoviesStore = create<MoviesStore>((set) => ({
  moviesList: undefined,
  setMoviesList: (moviesList : MovieType[]) => {
    set({ moviesList: moviesList });
  }
}))

export default useMoviesStore;

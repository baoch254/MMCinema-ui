import {create} from 'zustand';

interface MovieFormatStore {
  selectedFormat : string,
  setSelectedFormat : (selectedFormat : string) => void
}

const useMovieFormatStore = create<MovieFormatStore>((set) => ({
  selectedFormat: '',
  setSelectedFormat: (selectedFormat) => {
    set({ selectedFormat: selectedFormat });
  }
}))

export default useMovieFormatStore;

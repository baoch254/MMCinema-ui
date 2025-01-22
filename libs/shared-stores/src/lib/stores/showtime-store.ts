import {create} from 'zustand';

interface ShowtimeStore {
  selectedShowtime : string,
  setSelectedShowtime : (selectedShowtime : string) => void
}

const useShowtimeStore = create<ShowtimeStore>((set) => ({
  selectedShowtime: '',
  setSelectedShowtime: (selectedShowtime) => {
    set({ selectedShowtime: selectedShowtime });
  }
}))

export default useShowtimeStore;

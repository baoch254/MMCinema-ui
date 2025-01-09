import {create} from 'zustand';

interface SelectedDateStore {
  selectedDate : number | undefined,
  setSelectedDate : (selectedDate : number) => void
}

const useSelectedDateStore = create<SelectedDateStore>((set) => ({
  selectedDate: 10,
  setSelectedDate: (selectedDate : number) => {
    set({ selectedDate: selectedDate });
  }
}))

export default useSelectedDateStore;

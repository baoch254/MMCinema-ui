import {create} from 'zustand';

interface SelectedDateStore {
  selectedDate : Date | undefined,
  setSelectedDate : (selectedDate : Date) => void
}

const useSelectedDateStore = create<SelectedDateStore>((set) => ({
  selectedDate: new Date('2025-12-10'),
  setSelectedDate: (selectedDate : Date) => {
    set({ selectedDate: selectedDate });
  }
}))

export default useSelectedDateStore;

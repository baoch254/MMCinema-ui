import {create} from 'zustand';

interface CinemaBrandStore {
  selectedBrand : string,
  setSelectedBrand : (selectedBrand : string) => void
}

const useCinemaBrandStore = create<CinemaBrandStore>((set) => ({
  selectedBrand: 'All',
  setSelectedBrand: (selectedBrand : string) => {
    set({ selectedBrand: selectedBrand });
  }
}))

export default useCinemaBrandStore;

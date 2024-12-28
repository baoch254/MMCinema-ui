import {create} from 'zustand';
import { CinemaBrandKey } from '@mmcinema-ui/shared-common';

interface CinemaBrandStore {
  selectedBrand : CinemaBrandKey,
  setSelectedBrand : (selectedBrand : CinemaBrandKey) => void
}

const useCinemaBrandStore = create<CinemaBrandStore>((set) => ({
  selectedBrand: 'All',
  setSelectedBrand: (selectedBrand : CinemaBrandKey) => {
    set({ selectedBrand: selectedBrand });
  }
}))

export default useCinemaBrandStore;

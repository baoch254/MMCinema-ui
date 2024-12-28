import {create} from 'zustand';

interface ProvinceStore {
  selectedProvince : string,
  setSelectedProvince : (selectedProvince : string) => void
}

const useProvinceStore = create<ProvinceStore>((set) => ({
  selectedProvince: 'Hồ Chí Minh',
  setSelectedProvince: (selectedProvince : string) => {
    set({ selectedProvince: selectedProvince });
  }
}))

export default useProvinceStore;

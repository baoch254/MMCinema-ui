import {create} from 'zustand';

interface CinemaBranchStore {
  selectedBranch : string,
  setSelectedBranch : (selectedBranch : string) => void
}

const useCinemaBranchStore = create<CinemaBranchStore>((set) => ({
  selectedBranch: '',
  setSelectedBranch: (selectedBranch : string) => {
    set({ selectedBranch: selectedBranch });
  }
}))

export default useCinemaBranchStore;

import {create} from 'zustand';
import { CinemaBranch } from '@mmcinema-ui/shared-common';

interface CinemaBranchStore {
  selectedBranch : CinemaBranch | undefined,
  setSelectedBranch : (selectedBranch : CinemaBranch) => void
}

const useCinemaBranchStore = create<CinemaBranchStore>((set) => ({
  selectedBranch: undefined,
  setSelectedBranch: (selectedBranch : CinemaBranch) => {
    set({ selectedBranch: selectedBranch });
  }
}))

export default useCinemaBranchStore;

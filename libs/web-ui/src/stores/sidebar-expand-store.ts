import {create} from 'zustand';

interface SidebarExpandStore {
    isSidebarExpanded : boolean,
    setSidebarExpand : (isSidebarExpanded : boolean) => void
}

const useSidebarExpandStore = create<SidebarExpandStore>((set) => ({
    isSidebarExpanded: false,
    setSidebarExpand: (isSidebarExpanded) => {
      set({ isSidebarExpanded: isSidebarExpanded });
      console.log(isSidebarExpanded)
    }
}))

export default useSidebarExpandStore;

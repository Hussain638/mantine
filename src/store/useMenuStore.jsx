import { create } from 'zustand';

const useMenuStore = create((set) => ({
  activeMenu: 'Dashboard',
  activeSubMenu: '',
  setActiveMenu: (menu) => set({ activeMenu: menu }),
  setActiveSubMenu: (subMenu) => set({ activeSubMenu: subMenu }),
}));

export default useMenuStore;

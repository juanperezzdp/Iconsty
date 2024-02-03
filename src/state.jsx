import { create } from "zustand";

const useGobalStore = create((set) => ({
  booleanValue: false,
  selectedIcon: null,
  navValue: null,

  setSelectedIcon: (icon) => set({ selectedIcon: icon }),
  setBooleanValue: (value) => set({ booleanValue: value }),
  setNavValue: (value) => set({ navValue: value }),
}));

export default useGobalStore;

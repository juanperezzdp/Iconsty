import { create } from "zustand";

const useIconStore = create((set) => ({
  booleanValue: false,
  selectedIcon: null,
  setSelectedIcon: (icon) => set({ selectedIcon: icon }),
  setBooleanValue: (value) => set({ booleanValue: value }),
}));

export default useIconStore;

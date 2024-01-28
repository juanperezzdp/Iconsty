import { create } from "zustand";

const useIconStore = create((set) => ({
  selectedIcon: null,
  isModalOpen: false,

  setSelectedIcon: (icon) => set({ selectedIcon: icon }),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export default useIconStore;

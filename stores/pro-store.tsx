import { create } from "zustand";

export interface ProState {
  isOpen: boolean;
  handleOpenOrCloseProModal: () => void;
  handleCloseProModal: () => void;
}

export const useProStore = create<ProState>()((set) => ({
  isOpen: false,
  handleOpenOrCloseProModal: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
  handleCloseProModal: () => set((state) => ({ ...state, isOpen: false })),
}));

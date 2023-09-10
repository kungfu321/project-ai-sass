import { create } from "zustand";

export interface SidebarState {
  isOpen: boolean;
  isMinimal: boolean;
  handleOpenOrClose: () => void;
  handleClose: () => void;
  handleChangeSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>()((set) => ({
  isOpen: false,
  isMinimal: false,
  handleOpenOrClose: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
  handleClose: () => set((state) => ({ ...state, isOpen: false })),
  handleChangeSidebar: () => set((state) => ({ ...state, isMinimal: !state.isMinimal })),
}));

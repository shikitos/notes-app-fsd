import { create } from "zustand";

type Store = {
  isShrinked: boolean;
  toggleSidebar: () => void;
};

export const useSidebarStore = create<Store>((set) => ({
  isShrinked: false,
  toggleSidebar: () => set((state) => ({ isShrinked: !state.isShrinked })),
}));
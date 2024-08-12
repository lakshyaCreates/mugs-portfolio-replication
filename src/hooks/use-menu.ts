import { create } from "zustand";

type State = {
    isMenuOpen: boolean;
};

type Action = {
    open: () => void;
    close: () => void;
    setIsMenuOpen: (state: boolean) => void;
};

type UseMenuType = State & Action;

export const useMenu = create<UseMenuType>((set) => ({
    isMenuOpen: false,
    open: () => set({ isMenuOpen: false }),
    close: () => set({ isMenuOpen: true }),
    setIsMenuOpen: (state) => set({ isMenuOpen: state }),
}));

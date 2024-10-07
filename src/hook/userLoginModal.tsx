import { create } from "zustand";

interface loginProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const userLoginModal = create<loginProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
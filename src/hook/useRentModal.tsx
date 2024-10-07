import { create } from "zustand";

interface rentProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useRentModal = create<rentProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
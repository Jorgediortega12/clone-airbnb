import { create } from "zustand";

interface languajeProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const modalLanguaje = create<languajeProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
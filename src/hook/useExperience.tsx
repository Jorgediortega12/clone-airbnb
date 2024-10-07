import { create } from "zustand";

interface experienceProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useExperience = create<experienceProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
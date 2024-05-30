import { create } from 'zustand'

type MenuState = {
    isOpen: boolean
    toggleAnimSectionOpen: (isOpen: boolean) => void
}

export const useAnimSectionTransition = create<MenuState>((set) => ({
    isOpen: false,
    toggleAnimSectionOpen: (isOpen) => set({ isOpen }),
}))

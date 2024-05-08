import { create } from 'zustand'

type MenuState = {
    isOpen: boolean
    toggleOpen: (isOpen: boolean) => void
}

export const useMenu = create<MenuState>((set) => ({
    isOpen: false,
    toggleOpen: (isOpen) => set({ isOpen }),
}))

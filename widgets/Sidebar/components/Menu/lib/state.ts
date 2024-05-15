import { create } from 'zustand'

type MenuState = {
    isOpen: boolean | undefined
    toggleOpen: (isOpen: boolean) => void
    activeIndex: number
    setActiveIndex: (index: number) => void
}

export const useMenu = create<MenuState>((set) => ({
    isOpen: undefined,
    toggleOpen: (isOpen) =>
        set({ isOpen: isOpen === undefined ? true : isOpen }),
    activeIndex: -1,
    setActiveIndex: (index) => {
        set({ activeIndex: index })
    },
}))

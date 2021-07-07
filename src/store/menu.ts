import create from 'zustand'

interface MenuState {
    activeIndex: number | null
    onSelect: (selectIndex: number | undefined) => void
}

const useStore = create<MenuState>((set, get) => ({
    activeIndex: null,
    onSelect: (selectIndex) => {
        set({
            activeIndex: selectIndex || 0
        })
    }
}))

export default useStore
 


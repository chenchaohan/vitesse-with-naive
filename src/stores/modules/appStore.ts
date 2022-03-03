import { store } from '~/stores';

export interface IMenu {
    name: string
    menu:boolean
    title: string
    path: string
    children?: IMenu[]
}

interface store {
    collapsed: boolean
    menus: IMenu[]
}

export const useAppStore = defineStore({
    id:"app",
    state: (): store => ({
        collapsed: false,
        menus: [] 
    }),
    actions:{
        toggleCollapsed() {
            this.collapsed = !this.collapsed
        },
        setMenus(menus: IMenu[]) {
            this.menus = menus
        }   
    }
})

// Need to be used outside the setup
export function useAppStoreWithOut() {
    return useAppStore(store);
}
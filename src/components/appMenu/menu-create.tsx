import { defineComponent, Slots } from "vue"
import { IMenu } from "~/stores/modules/appStore"
import { RouterObj } from '~/types'
export default defineComponent({
    props: {
        router: {
            type: Object,
            required: true
        }
    },
    render() {
        const menuSub = (router:any) => {
            const subSlots: Slots = {
                title: () => [<span>{router.title}</span>],
                icon: () => [<aIcon type={router.icon || 'FolderOutlined'} />]
            }
            return (
                <a-sub-menu v-slots={subSlots} key={router.name}>
                    {
                        router.children && router.children.map((item: any) => (
                            menuCreate(item)
                        ))
                    }
                </a-sub-menu>
            )
        }

        const menuItem = (router:any) => {
            const itemSlots: Slots = {
                icon: () => router.icon ? [<aIcon type={router.icon || ''} />] : []
            }
            return (
                <a-menu-item v-slots={itemSlots} key={router.name}>
                    <router-link to={router.path}>{router.title}</router-link>
                </a-menu-item>
            )
        }

        const menuCreate = (router: IMenu) => {
            if (router.children && router.menu && router.title) {
                console.log('menuSub', router)

                return menuSub(router)
            } else if (router.menu && router.title) {
                console.log('menuItem', router)

                return menuItem(router)
            }
        }

        return menuCreate(this.router as IMenu)
    }
})
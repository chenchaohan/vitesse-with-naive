<template>
  <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <router-view />
    </a-config-provider>
</template>

<script lang="ts" setup>
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { useToggleDark } from './composables';
import { useAppStore } from './stores/modules/appStore';


const {locale} = useI18n()

const { isDark } = useToggleDark()
provide('isDark',isDark)


// 根据路由获取侧边栏
const router = useRouter()
const fullRouters = router.getRoutes()


const store = useAppStore()
const menuRouter = fullRouters.filter(item => item.name !== undefined && item.meta.menu)
    store.setMenus(menuRouter.map(item=>{
        return {
            menu: item.meta.menu as boolean,
            title: item.meta.title as string,
            path: item.path,
            name: item.name as string
        }
}))


</script>
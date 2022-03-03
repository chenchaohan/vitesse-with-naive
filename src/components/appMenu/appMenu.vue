<template>
    <a-menu
        :theme="isDark ? 'dark' : 'light'"
        mode="vertical"
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
    >
        <create :router="item" v-for="item in appStore.menus" />
    </a-menu>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/stores/modules/appStore';
import create from './menu-create'

const isDark = inject('isDark')
const appStore = useAppStore()

const selectedKeys = ref<string[]>([])
const openKeys = ref<string[]>([])

const route = useRoute()
const setMenuKey = () => {
    if (!route.meta.hidden) {
        selectedKeys.value = [route.name as string]
        // openKeys.value = []
        // route.matched.forEach(item => {
        //     openKeys.value.push(route.name as string)
        // })
        // 设置顶部tab(栏目)切换
        // store.commit('menu/setId', route.matched[0]['meta']['id'])
    }
}
onBeforeMount(setMenuKey)
watch(route, setMenuKey)
</script>
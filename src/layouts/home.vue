<template>
    <div
        class="layout w-full min-h-full flex flex-col bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 overflow-hidden"
        :theme="isDark ? 'dark' : 'light'"
    >
        <!-- 头部 -->
        <HomeHeader />

        <!-- 内容 -->
        <div class="container lg:container lg:mx-auto flex">
            <div class="flex-1 flex min-h-0 mt-16">
                <article class="overflow-auto w-full py-4 px-18">
                    <router-view v-slot="{ Component,route }">
                        <transition
                            name="fade"
                            enter-active-class="transition easing-entrance duration-250"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition easing-exit duration-150"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95"
                        >
                            <component :is="Component"  :key="route" />
                        </transition>
                    </router-view>
                </article>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '~/stores/modules/appStore';
import TheHeader from '../components/defaultHeader.vue'
import TheMenu from './baseLayout/menu/menu.vue'

const appStore = useAppStore()

const toggle = () => {
    appStore.toggleCollapsed()
}
const isDark = inject('isDark')

</script>

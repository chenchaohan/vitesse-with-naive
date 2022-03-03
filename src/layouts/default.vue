<template>
 <a-layout>
    <a-layout-sider :theme="theme">
        <AppMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="bg-light-50 dark:bg-black h-auto">
           <!-- 头部 -->
           <DefaultHeader />
      </a-layout-header>
      <a-layout-content>
           <!-- 内容 -->
                <div class="container lg:container lg:mx-auto flex">
                    <!-- 侧边 -->
                    <div class="flex-1 flex min-h-0 mt-16">
                        <article class="overflow-auto w-full py-4 px-18 ">
                            <router-view v-slot="{ Component }">
                                <transition
                                    name="fade"
                                    enter-active-class="transition easing-entrance duration-250"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition easing-exit duration-150"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95"
                                >
                                    <component :is="Component" />
                                </transition>
                            </router-view>
                        </article>
                    </div>
                </div>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
    <!-- <div  class="w-full min-h-full flex flex-col bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 overflow-hidden" :theme="isDark?'dark':'light'">
               
               
    </div> -->
</template>

<script lang="ts" setup>
import { useAppStore } from '~/stores/modules/appStore';
import Menu1 from '../components/appMenu/appMenu.vue';
import AppMenu from '../components/appMenu/appMenu.vue';
import DefaultHeader1 from '../components/defaultHeader.vue';

const appStore = useAppStore()

const toggle = ()=>{
appStore.toggleCollapsed()
}
const isDark = inject('isDark')

const theme = computed(()=>{
    return (isDark as any).value ? 'dark': 'light'
})
</script>

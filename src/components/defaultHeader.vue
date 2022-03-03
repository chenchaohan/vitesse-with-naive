<template>
    <header class="h-20 w-full px-5 flex justify-between items-center bg-light-50 dark:bg-black">
        <div>
            PINKGUN
        </div>
        <div class="inline-flex items-center">
            <a-button type="text" @click="isDark = !isDark" class="dark:text-light-200">{{'切换主题'}}</a-button>

             <!-- <div class="header__avatar-name">{{ name.length > 0 ? name : 'admin' }}</div> -->
                    <div class="header__avatar-name">name</div>

            <a-dropdown :trigger="['click', 'hover']">
                     <a-avatar>
                        <template #icon>
                            <!-- <img src alt /> -->
                            <!-- <img :src="avatar" v-if="avatar.length > 0" />
                            <img src="@/assets/layout/avatar.png" v-else />-->
                        </template>
                    </a-avatar>
                <template #overlay>
                    <a-menu>
                        <a-menu-item key="1" @click="logout()">
                            <template #icon>
                                <a-icon type="PoweroffOutlined" />
                            </template>
                            退出登录
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>
    </header>
</template>

<script lang="ts" setup>
const {t} = useI18n()
const {isDark} = useToggleDark()

// 退出登录
const logout = () => {
    console.log('logout')
}

</script>

<script lang="ts">
import { useToggleDark } from '~/composables';

export default defineComponent({
    name: 'layoutHeader'
})
</script>

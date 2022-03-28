<template>
    <n-config-provider :theme="nTheme" :locale="nLocale" :date-locale="nDateLocale">
        <router-view />
    </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { zhCN, dateZhCN } from 'naive-ui'

const { t, locale } = useI18n()
const { isDark, toggleDark } = useDarks()

const nLocale = computed(() =>
    locale.value === 'zh-CN' ? zhCN : null
)

const nDateLocale = computed(() =>
    locale.value === 'zh-CN' ? dateZhCN : null
)

const nTheme = computed(() =>
    isDark.value ? darkTheme : null
)
</script>

<style>
* {
    box-sizing: border-box;
}
</style>

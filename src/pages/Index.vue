<script setup lang="ts">
const { t, locale } = useI18n()
const { isDark, toggleDark } = useDarks()

const toggleLocale = () => {
	locale.value = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
}

const language = computed(() =>
	locale.value === 'zh-CN' ? '中文' : 'English'
)

const theme = computed(() =>
	isDark.value ? 'dark' : 'light'
)
</script>

<template>
	<div class="w-full h-full box-border p-6">
		<n-card title="Hello，This is the vitesse template！！">
			<div>
				<n-switch v-model:value="isDark" />
				<span>theme: {{ theme }}</span>
			</div>

			<div>language: {{ language }}</div>

			<n-radio-group v-model:value="locale" name="radiogroup">
				<n-radio value="en" name="en">en</n-radio>

				<n-radio value="zh-CN" name="zh-CN">zh-CN</n-radio>
			</n-radio-group>

			<n-date-picker />
		</n-card>
	</div>
</template>


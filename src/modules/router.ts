import { App } from 'vue'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { useAppStoreWithOut } from '~/stores/modules/appStore'

const routes = setupLayouts(generatedRoutes)

export const router = createRouter({
	routes,
	history: createWebHistory()
})

// 此处书写各种路由守卫
router.beforeEach(v => {
    console.log(v)
})

export default (app: App) => app.use(router)

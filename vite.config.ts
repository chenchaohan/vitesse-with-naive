import { resolve } from 'path'
import Pre from './presets/preset'
import { defineConfig } from 'vite'

export default defineConfig({
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`
		}
	},
	plugins: [Pre()]
})

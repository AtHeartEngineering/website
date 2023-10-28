import { sveltekit } from '@sveltejs/kit/vite'
import { purgeCss } from 'vite-plugin-tailwind-purgecss'
const config = {
	plugins: [sveltekit(), purgeCss()]
}

export default config

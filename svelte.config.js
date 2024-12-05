import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			strict: false
		}),
		paths: {
			base: ''
		},
		prerender: {
			handleHttpError: ({ path, message }) => {
				if (path.startsWith('/static/')) {
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
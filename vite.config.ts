import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0',
		port: 1173,
		strictPort: true,
		watch: {
			usePolling: true
		}
	},
	preview: {
		host: '0.0.0.0',
		port: 1173
	}
});
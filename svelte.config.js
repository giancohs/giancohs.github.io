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
				// Ignore 404s from project pages
				if (path.startsWith('/projects/')) {
					return;
				}
				
				throw new Error(message);
			},
			handleEntryGeneratorMismatch: ({ generatedFromId, matchedById }) => {
				// Ignore all entry generator mismatches in the projects directory
				if (generatedFromId?.includes('/projects/')) {
					return;
				}
				throw new Error('Entry generator mismatch');
			},
			entries: [
				'*',
				'/projects',
				'/projects/*'
			]
		}
	}
};

export default config;
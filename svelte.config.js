import netlify from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import image from 'svelte-image';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess(),
		image({
			quality: 100,
			sizes: [400, 800, 1200, 2048],
			breakpoints: [375, 768, 1024, '1980'],
			placeholder: 'blur'
		})
	],
	kit: {
		adapter: netlify(),
		target: '#svelte',
		vite: {
			optimizeDeps: {
				include: ['blurhash']
			},
			ssr: {
				noExternal: ['svelte-image']
			}
		}
	}
};

export default config;

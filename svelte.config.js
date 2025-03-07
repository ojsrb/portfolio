import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			},
			platformProxy: {
				configPath: 'wrangler.toml',
				environment: undefined,
				experimentalJsonConfig: false,
				persist: false
			}
		}),
		alias: {
			$lib: './src/lib',
		}
	}
};

// export default {
// 	kit: {
// 		adapter: adapter({
// 			// See below for an explanation of these options
// 			routes: {
// 				include: ['/*'],
// 				exclude: ['<all>']
// 			},
// 			platformProxy: {
// 				configPath: 'wrangler.toml',
// 				environment: undefined,
// 				experimentalJsonConfig: false,
// 				persist: false
// 			}
// 		})
// 	}
// };

export default config;

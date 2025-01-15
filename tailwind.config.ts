import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		colors: {
			'owen-gray': '#36454Fff',
			'owen-white': '#F2F3F4ff',
			'owen-blue': '#245C94ff',
			'owen-orange': '#FF8F00ff',
		}
	},

	plugins: [typography]
} satisfies Config;

import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation: {
				fadeIn: "fadeIn 2s ease-in forwards"
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 }
				}
			},
			variants: {
				animation: ["motion-safe"]
			}
		},
		colors: {
			'owen-gray': '#333',
			'owen-white': '#F2F3F4ff',
			'owen-light-gray': '#C3C3C4ff',
			'owen-blue': '#245C94ff',
			'owen-orange': '#FF8F00ff',
			'owen-black': '#1A1A1Aff'
		}
	},

	plugins: [typography]
} satisfies Config;



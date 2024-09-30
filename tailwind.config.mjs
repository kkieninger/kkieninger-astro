/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gray: {
					100: '#fdfdfc', // light-bg
					200: '#f9f9f8', // light-bg-hover
					300: '#f1f0ef',
					400: '#eeeeec', // dark-text-primary
					500: '#b5b3ad', // dark-text-secondary
					600: '#63635e', // light-text-secondary
					700: '#21201c', // light-text-primary

					800: '#191918', // dark-bg-hover
					900: '#111110', // dark-bg
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}

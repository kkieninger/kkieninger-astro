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
				// --color-gray-100: #fdfdfc; -- bg
				// --color-gray-200: #f9f9f8; -- hover
				// --color-gray-300: #f1f0ef;
				// --color-gray-400: #e9e9e7;
				// --color-gray-500: #e2e1de;
				// --color-gray-600: #dad9d6;
				// --color-gray-700: #cfceca;
				// --color-gray-800: #bcbbb5;
				// --color-gray-900: #8d8d86;
				// --color-gray-1000: #82827c;
				// --color-gray-1100: #63635e; -- text
				// --color-gray-1200: #21201c; -- text

				// --color-gray-100: #111110; -- bg
				// --color-gray-200: #191918; -- hover
				// --color-gray-300: #222221;
				// --color-gray-400: #2a2a28;
				// --color-gray-500: #31312e;
				// --color-gray-600: #3b3a37;
				// --color-gray-700: #494844;
				// --color-gray-800: #62605b;
				// --color-gray-900: #6f6d66;
				// --color-gray-1000: #7c7b74;
				// --color-gray-1100: #b5b3ad; -- text
				// --color-gray-1200: #eeeeec; -- text

				// ---
				// --gray1: #1a1a1a; -- bg
				// --gray2: #1c1c1c;
				// --gray3: #232323;
				// --gray4: #282828;
				// --gray5: #2e2e2e;
				// --gray6: #343434;
				// --gray7: #3e3e3e;
				// --gray8: #505050;
				// --gray9: #707070;
				// --gray10: #7e7e7e;
				// --gray11: #a0a0a0;
				// --gray12: #ededed;
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}

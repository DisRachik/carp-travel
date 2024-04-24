import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			light: '#D9D9D9',
			error: '#FF5757',
		},
		screens: {
			xs: '320px',
			...defaultTheme.screens,
			sm: '480px',
		},
		extend: {
			backgroundImage: {},
		},
	},
	plugins: [],
};
export default config;

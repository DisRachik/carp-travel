import type { Config } from 'tailwindcss';

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
			errorColor: '#FF5757',
			mobMenu: '#010A05',
			bgColor: '#020F08',
		},
		screens: {
			sm: '480px',
			md: '768px',
			xl: '1280px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '20px',
				md: '32px',
				xl: '24px',
			},
		},
		extend: {
			backgroundImage: {},
		},
	},
	plugins: [],
};
export default config;

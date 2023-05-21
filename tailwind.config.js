/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./constants/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {},
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#ED1E27',
				'primary-dark': '#C11921',
			}
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		base: false
	}
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'welth': ['Welth Catritz', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

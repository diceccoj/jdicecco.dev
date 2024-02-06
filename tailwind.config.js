/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ["Quicksand", 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['jetbrains mono'],
      'display': ['Oswald'],
      'body': ['roboto'],
    }
  },
  plugins: [],

}
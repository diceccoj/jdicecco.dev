/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        'darkbg' : "url('/src/assets/bg-dark.png')",
        'lightbg' : "url('/src/assets/bg-light.png')",
      },
    },
    fontFamily: {
      'sans': ["Quicksand", 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['jetbrains mono'],
      'display': ["Quicksand"],
      'body': ["Quicksand"],
    }
  },
  plugins: [],

}
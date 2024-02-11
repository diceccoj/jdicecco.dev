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

      keyframes: {
        'phase-in' : {
          '0%, 50%': {opacity: '0%', transform: 'translate(0%, 5%)',},
          '100%': {opacity: '100%', transform: 'translate(0%, 0%)',}
        },
      },
      animation: {
        'phase-in': 'phase-in 0.75s ease-in',
        'title-animation': 'title-animation 1.5s ease-in',
      }

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
import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors:{
        text_color:"#132D51",
        p_color:"#9FA0A2",
        label_color:"#2B374E",
        button_color:"#17498D"
      }
    },
  },
  plugins: [
    daisyui
  ],
}
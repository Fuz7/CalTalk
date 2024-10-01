/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Belanosima:['Belanosima'],
        ComingSoon:['ComingSoon'],
        Inter:['Inter'],
        Righteous:['Righteous'],
        'Roboto-Black':['Roboto'],
        }
    },
  },
  plugins: [],
}
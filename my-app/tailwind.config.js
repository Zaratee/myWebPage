/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'android-logo': "url('../public/androidLogo.png')",
        'java-logo': "url('../public/java-logo.png')",
      },
      colors: {
        'yo-color-1': '#931621',
        'yo-color-2': '#010400',
        'yo-color-3': '#30332E',
        'yo-color-4': '#FFFBFC',
        'yo-color-5': '#62BBC1',
      }
    },

  },
  plugins: [],
}


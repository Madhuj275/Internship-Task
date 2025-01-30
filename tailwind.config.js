/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['DM Serif Text', 'serif'], // Define a custom name for 'DM Serif Text'
        merriweather: ['Merriweather', 'serif'], // Define a custom name for 'Merriweather'
      },
      colors: {
        "custom-blue": "#B9D9EB",
        "Blush": "FEC5E5"
      },
    },
  },
  plugins: [],
}


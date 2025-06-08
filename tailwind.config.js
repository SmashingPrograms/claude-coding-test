/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beach-sand': '#f4d03f',
        'ocean-blue': '#3498db',
        'seafoam': '#1abc9c',
        'coral': '#e74c3c',
        'shell': '#f5f5f5',
        'deep-sea': '#2c3e50',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 
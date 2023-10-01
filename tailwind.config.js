/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mooli: ["Mooli", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"]
      },
      searchBar: {
        backgroundColor: 'gray-800',
        textColor: 'white',
        borderRadius: 'full',
        padding: '2',
        width: 'full',
        margin: '2',
      },
      filters: {
        backgroundColor: 'gray-800',
        textColor: 'white',
        borderRadius: 'full',
        padding: '2',
        width: 'full',
        margin: '2',
      }
    },
  },
  plugins: [],
}


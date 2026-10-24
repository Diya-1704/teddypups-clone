export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#faf5ec',         // Main background
        'cream-dark': '#f5ebd9',  // Section background
        charcoal: '#2b1d14',      // Dark brown text
        'charcoal-light': '#5c4a3d',
        accent: '#c85a17',        // Orange/Brown button
        'accent-dark': '#a34711',
        'arch-brown': '#8b5a2b',
        whatsapp: '#1f7a4d',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'], // Premium serif font
      },
    },
  },
  plugins: [],
}
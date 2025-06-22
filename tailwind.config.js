module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],

  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 0 15px rgba(212, 175, 55, 0.4)',
      },
      keyframes: {
        waveLoop: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        waveLoop: 'waveLoop 20s linear infinite',
      },
    },
  },

  plugins: [],
};

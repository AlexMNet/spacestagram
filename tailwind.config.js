module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        heartPulse: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.1)' },
          '40%': { transform: 'scale(1.3)' },
          '50%': { transform: 'scale(1.1)' },
          '60%': { transform: 'scale(1)' },
          '70%': { transform: 'scale(1.2)' },
          '80%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        heartPulse: 'heartPulse 1s ease-in-out',
      },
    },
  },
  plugins: [],
};

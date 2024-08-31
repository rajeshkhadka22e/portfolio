/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        signika: ['Signika Negative', 'sans-serif'],
      },
      colors: {
        purple: '#9B5DE5',
        gray: {
          700: '#4A5568',
          400: '#A0AEC0',
        },
        black: '#000000',
      },
    },
  },
};

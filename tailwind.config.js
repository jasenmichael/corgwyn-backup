module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        padding: {
          "18": '6rem'
        },
        colors: {
          'corgiblue': '#2F7AC0'
        },
      },
    },
    variants: {
      extend: {},
    },
  plugins: [
    require('tailwind-hamburgers'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  }

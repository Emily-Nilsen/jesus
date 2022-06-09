/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          300: '#A9663C',
          500: '#8A504E',
        },
      },
      backgroundImage: {
        about: "url('/static/about.jpg')",
        about_md: "url('/static/about-md.jpg')",
        about_sm: "url('/static/about-sm.jpg')",
        dropdown: "url('/static/dropdown.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

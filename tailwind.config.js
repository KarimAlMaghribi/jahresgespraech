/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0060C0',
        secondary: '#004A96',
        surface: '#F6F8FB'
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

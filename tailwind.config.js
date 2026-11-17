/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue'
  ],
  theme: {
    extend: {
      colors: {
        // new palette
        palladian: '#EEE9DF',
        oatmeal: '#C9C1B1',
        fantastic: '#2C3B4D',
        flame: '#FFB162',
        truffle: '#A35139',
        abyssal: '#1B2632',

        // old names remapped to the new palette
        paper: '#EEE9DF',
        ink: '#1B2632',
        pine: '#2C3B4D',
        rust: '#A35139',
        sand: '#C9C1B1'
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
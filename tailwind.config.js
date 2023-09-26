/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        "efGreen": '#256224',
        "efGreenBright": '#389738',
        "bodyBg": "#121212",
        "bodyBgAccent": "#1a1a1a",
        "efAmber": "#d97706",
        "starYellow": "#ffd43b"
      },
    }
  },
  plugins: []
}

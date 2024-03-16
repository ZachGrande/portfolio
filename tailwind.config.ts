import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#d0e8f2',
        'pastel-green': '#bde4a7',
        'pastel-yellow': '#ffe156',
        'pastel-pink': '#ffadc6',
        'muted-blue': '#7395AE',
        'card-brown': '#B1A296',
      },
    },
  },
  plugins: [],
}
export default config

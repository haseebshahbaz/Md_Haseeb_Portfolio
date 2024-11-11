import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Navy Blue
        secondary: '#3B82F6', // Light Blue
        accent: '#F59E0B', // Gold
      },
    },
  },
  plugins: [],
}

export default config
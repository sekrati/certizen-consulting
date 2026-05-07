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
        cz: {
          green: '#39B54A',
          'green-dark': '#2D9139',
          'green-light': '#6DD475',
          'green-pale': '#F0FBF2',
          black: '#111111',
          'gray-dark': '#374151',
          gray: '#6B7280',
          'gray-light': '#F9FAFB',
          'gray-border': '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        body: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cz': 'linear-gradient(135deg, #39B54A 0%, #2D9139 100%)',
        'gradient-hero': 'linear-gradient(135deg, #F0FBF2 0%, #FFFFFF 50%, #F0FBF2 100%)',
      },
      boxShadow: {
        'green-sm': '0 4px 15px rgba(57, 181, 74, 0.2)',
        'green-md': '0 8px 30px rgba(57, 181, 74, 0.3)',
        'green-lg': '0 15px 50px rgba(57, 181, 74, 0.4)',
        'card': '0 2px 20px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(57, 181, 74, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(57, 181, 74, 0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

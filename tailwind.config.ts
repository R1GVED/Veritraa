/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        veritraa: {
          'green': '#2D5016',
          'gold': '#C9A962',
          'terracotta': '#D4745E',
          'cream': '#F7F4ED',
          'warm-white': '#FDFBF7',
          'charcoal': '#2C2C2C',
          'medium-gray': '#6B6B6B',
          'light-gray': '#E8E8E8',
          'success': '#4CAF50',
          'error': '#D32F2F',
          'warning': '#F57C00',
        },
      },
      fontFamily: {
        serif: ['"Crimson Pro"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

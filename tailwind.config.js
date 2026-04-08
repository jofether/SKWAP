/** @type {import('tailwindcss').Config} */
const colors = {
  cyan: '#00bcd4',
  lightCyan: '#e0f7fa',
  darkCyanOpacity: 'rgba(0, 188, 212, 0.08)',
  lightText: '#f8fafc',
  darkBg: '#0f172a',
  cardBg: '#1e293b',
  borderDark: '#334155',
};

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'skwap-primary': colors.lightText,
        'skwap-bg': colors.darkBg,
        'skwap-card': colors.cardBg,
        'skwap-border': colors.borderDark,
        'skwap-accent': colors.cyan,
        'skwap-accent-light': colors.lightCyan,
        'skwap-accent-bg': colors.darkCyanOpacity,
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  theme: {
    fontFamily: {
      spline: ['spline', 'sans-serif'],
    },
    colors: {
      'dark-brown': '#1E0A0A',
      'green-main': '#00d2af',
      'red-main': '#960019',
      'yellow-main': '#ffe6a0',
      'gray-blue-secondary': '#32737D',
      'yellow-secondary': '#e6b482',
      'pink-secondary': '#ff645a',
      'red-secondary': '#d23c19',
      'aubergine-secondary': '#64414b',
      'green-secondary': '#c3e1b4',
      'black': '#000000',
      'white': '#ffffff',
      'gray-50': '#f8fafb',
      'gray-100': "#f3f4f6",
      'gray-200': '#e5e7eb',
      'gray-300': '#d1d5db',
      'gray-400': '#9ca3af',
      'gray-500': '#6b7280',
      'gray-600': '#4b5563',
      'gray-700': '#374151',
      'gray-800': '#1f2937',
      'gray-900': '#111827',
    },
    screens: {
      'md': '1280px',
      // => @media (min-width: 640px) { ... }
      'xl': '1920px',
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


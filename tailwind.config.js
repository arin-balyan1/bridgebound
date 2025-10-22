/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        /* Link Tailwind's 'sans' to your CSS variable */
        sans: ['var(--font-sans)'], 
        /* Create a new 'heading' utility */
        heading: ['var(--font-heading)'],
      },
      letterSpacing: {
        /* Create custom spacing utilities */
        'body': '0.5px',
        'heading': '1px',
      }
    },
  },
  plugins: [],
}
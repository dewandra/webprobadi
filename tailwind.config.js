/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#0a0a0a',
        'card': '#332419',
        'primary-accent': '#a3562a',
        'secondary-accent': '#fc7f32',
        'muted-text': '#4d4a38',
        'text-light': '#F3F4F6', 
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      // --- BAGIAN PENTING UNTUK ANIMASI ---
      animation: {
        marquee: 'marquee 30s linear infinite', // Durasi bisa diatur (misal: 20s, 40s)
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          // Duplikasi teks membuat loop mulus tanpa perlu animasi yang kompleks
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      // ---------------------------------
    },
  },
  plugins: [],
};
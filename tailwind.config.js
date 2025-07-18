/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#000000',      // Hitam pekat untuk latar belakang
        'card': '#404040',            // Abu-abu gelap untuk elemen kartu
        'primary-accent': '#c0c0c0',  // Abu-abu terang sebagai aksen utama
        'secondary-accent': '#808080',// Abu-abu sebagai aksen sekunder
        'muted-text': '#808080',      // Abu-abu untuk sub-teks
        'text-light': '#ffffff',       // Putih untuk teks utama
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
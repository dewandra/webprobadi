/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#1a1a1a',      // Abu-abu sangat gelap, lebih nyaman di mata
        'card': '#2c2c2c',            // Warna kartu yang sedikit lebih terang
        'primary-accent': '#ff76d8',  // Pink cerah untuk elemen utama (tombol, judul)
        'secondary-accent': '#ffa6fc',// Pink lebih muda untuk hover atau aksen sekunder
        'muted-text': '#a3a3a3',      // Abu-abu muda untuk sub-teks
        'text-light': '#f5f5f5',       // Putih gading untuk teks utama, kontras tinggi
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
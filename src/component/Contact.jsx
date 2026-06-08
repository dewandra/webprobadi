export default function Contact() {
  return (
    <section id="kontak" className="py-32 md:py-40 border-t border-ink/5 text-center space-y-12 max-w-6xl mx-auto px-6">
      <div className="space-y-5">
        <p className="text-sm font-mono uppercase tracking-widest text-brand">04 &middot; Ayo Ngobrol</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto text-balance">Punya ide project? Mari eksekusi bareng.</h2>
        <p className="text-lg text-ink/60 max-w-md mx-auto">Email saya terbuka lebar &mdash; buat kerja sama, freelance, atau sekadar nanya.</p>
      </div>
      <a href="mailto:email.anda@contoh.com" className="inline-block text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter hover:text-brand transition-colors break-all">dewandrarb@gmail.com</a>
      <div className="flex justify-center gap-8 text-sm font-mono uppercase tracking-widest text-ink/60">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">LinkedIn</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">Instagram</a>
      </div>
    </section>
  );
}
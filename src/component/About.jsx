export default function About() {
  return (
    <section id="tentang" className="py-24 md:py-32 grid md:grid-cols-2 gap-16 max-w-6xl mx-auto px-6">
      <div className="space-y-6">
        <p className="text-sm font-mono uppercase tracking-widest text-brand">01 &middot; Tentang</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Bukan cuma soal ngetik kode.</h2>
        <div className="space-y-4 text-lg text-ink/60 leading-relaxed">
          <p>Lulusan Sistem Informasi yang hobi ngoding sejak semester dua. Saya nggak cuma bikin web yang sekadar jadi &mdash; tapi juga mikirin performa dan struktur kode biar gampang di-maintain.</p>
          <p>Suka eksplorasi ekosistem React, dan kalau lagi nggak di depan VS Code, biasanya lagi ngoprek UI di Figma atau cari inspirasi visual di luar.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 self-center">
        <div className="p-6 bg-subtle rounded-2xl">
          <div className="text-4xl font-extrabold text-brand mb-1">15+</div>
          <div className="text-xs font-mono uppercase text-ink/50 tracking-wider">Project Selesai</div>
        </div>
        <div className="p-6 bg-subtle rounded-2xl">
          <div className="text-4xl font-extrabold text-brand mb-1">3.9</div>
          <div className="text-xs font-mono uppercase text-ink/50 tracking-wider">IPK Terakhir</div>
        </div>
        <div className="p-6 bg-subtle rounded-2xl">
          <div className="text-4xl font-extrabold text-brand mb-1">S.Kom</div>
          <div className="text-xs font-mono uppercase text-ink/50 tracking-wider">Sistem Informasi</div>
        </div>
        <div className="p-6 bg-subtle rounded-2xl">
          <div className="text-4xl font-extrabold text-brand mb-1">Full</div>
          <div className="text-xs font-mono uppercase text-ink/50 tracking-wider">Stack Focus</div>
        </div>
      </div>
    </section>
  );
}
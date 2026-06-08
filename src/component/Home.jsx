export default function Home() {
  return (
    <>
      <section id="home" className="py-20 md:py-32 grid md:grid-cols-12 gap-12 items-end max-w-6xl mx-auto px-6">
        <div className="md:col-span-8 space-y-8 reveal-up">
          <p className="text-sm font-mono uppercase tracking-widest text-brand">Halo, saya Dewandra</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-balance leading-[0.95]">Bikin web rapi, kencang, dan siap kerja.</h1>
          <p className="text-lg md:text-xl text-ink/60 max-w-[42ch] leading-relaxed text-pretty">Web developer fresh graduate Sistem Informasi. Fokus bikin interface yang tajam dengan kode yang gampang dirawat.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#karya" className="bg-brand text-surface px-7 py-4 rounded-xl font-semibold hover:ring-4 ring-brand/20 transition-all">Lihat Karya</a>
            <a href="https://drive.google.com/file/d/1kAlY8Pi72Zh9S1bkqeR09PbwuPhc5Apd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-subtle text-ink px-7 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all">Download CV</a>
          </div>
        </div>
        <div className="md:col-span-4 reveal-up" style={{ animationDelay: '150ms' }}>
          <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-ink/5 bg-subtle">
            <img src="/3d_coder_stickman.png" alt="3D Stickman Coding" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>
      <section className="py-10 border-y border-ink/5 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 max-w-6xl mx-auto px-6">
        <span className="text-[11px] font-mono uppercase tracking-widest text-ink/40 whitespace-nowrap">Tools &amp; Stack</span>
        <div className="flex flex-wrap gap-y-3 gap-x-8 text-lg font-semibold text-ink/30">
          <span className="hover:text-brand transition-colors cursor-default">Laravel</span>
          <span className="hover:text-brand transition-colors cursor-default">Vue</span>
          <span className="hover:text-brand transition-colors cursor-default">WordPress</span>
          <span className="hover:text-brand transition-colors cursor-default">Tailwind</span>
          <span className="hover:text-brand transition-colors cursor-default">TypeScript</span>
          <span className="hover:text-brand transition-colors cursor-default">MySQL</span>
          <span className="hover:text-brand transition-colors cursor-default">PostgreSQL</span>
          <span className="hover:text-brand transition-colors cursor-default">Figma</span>
        </div>
      </section>
    </>
  );
}
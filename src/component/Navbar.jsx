import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.png" alt="Dewandra Logo" className="h-8 w-8 rounded-md object-cover" />
          <span className="font-extrabold tracking-tighter text-lg">DEWANDRA<span className="text-brand">.</span></span>
        </a>
        <div className="flex items-center gap-4 md:gap-6">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-ink/60">Freelance dibuka</span>
          </div>
          <a href="#kontak" className="bg-ink text-surface px-4 py-1.5 rounded-full text-sm font-medium hover:bg-brand transition-colors">Kontak</a>
        </div>
      </div>
    </nav>
  );
}
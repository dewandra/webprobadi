export default function Footer() {
  return (
    <footer className="py-10 border-t border-ink/5 bg-subtle">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-ink/50">&copy; 2026 Dewandra. Dibikin pake niat.</p>
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-mono uppercase text-ink/60 tracking-wider">Status: Siap Kerja</span>
        </div>
      </div>
    </footer>
  );
}

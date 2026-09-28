export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-inkFaint md:flex-row">
        <span>© {new Date().getFullYear()} Kent Daniel De Moreta.</span>
        <span className="tag">Built with Next.js, Tailwind CSS, and Motion</span>
      </div>
    </footer>
  );
}

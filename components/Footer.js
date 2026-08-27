export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-inkFaint">
        <span>© {new Date().getFullYear()} Kent Daniel De Moreta.</span>
        <span className="tag">Built with Next.js, Tailwind CSS & Motion</span>
      </div>
    </footer>
  );
}

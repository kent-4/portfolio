"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
      <nav className="mx-auto max-w-content flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-semibold text-ink tracking-tight">
          Kent Daniel <span className="text-teal">De Moreta</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-inkSoft hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm font-medium bg-ink text-paper px-4 py-2 rounded-md hover:bg-teal transition-colors"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}

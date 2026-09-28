"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <nav aria-label="Primary navigation" className="mx-auto flex min-h-[72px] max-w-content items-center justify-between gap-6 px-6">
        <a
          href="#top"
          onClick={closeMenu}
          className="shrink-0 font-display font-semibold tracking-tight text-ink"
        >
          Kent Daniel <span className="text-accent">De Moreta</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-inkSoft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-ink hover:text-canvas"
          >
            Email me
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-line px-3 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-line bg-surface px-6 py-5 lg:hidden">
          <ul className="mx-auto grid max-w-content gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-sm text-inkSoft transition-colors hover:bg-surfaceElevated hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-canvas transition-colors hover:bg-ink hover:text-canvas"
              >
                Email me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

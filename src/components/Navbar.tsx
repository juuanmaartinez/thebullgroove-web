'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Qué Hacemos', href: '/#que-hacemos' },
  { label: 'Quiénes Somos', href: '/#quienes-somos' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none gap-0.5">
          <span className="text-2xl font-black tracking-tight text-white">
            TBG
          </span>
          <span className="text-[9px] font-medium tracking-[0.45em] text-white/40 uppercase">
            THEBULLGROOVE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-widest text-white/70 uppercase transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-white transition-opacity ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/10 bg-black/80 px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium tracking-widest text-white/70 uppercase transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const items = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10 text-white">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-white">Mohit Agrawal</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="hover:text-white transition">
              {it.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-cyan-400/90 hover:bg-cyan-300 text-black font-medium px-4 py-2 transition"
          >
            Hire Me
          </a>
        </nav>
        <button
          className="md:hidden p-2 rounded-lg bg-white/10 border border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <nav className="mx-auto w-full max-w-6xl px-6 md:px-10 py-3 flex flex-col gap-3">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="py-2 text-white/90"
              >
                {it.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Puppies', path: '/puppies' },
    { name: 'Happy Families', path: '/happy-families' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-cream-dark">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="text-2xl font-heading font-bold text-charcoal">
          TeddyPups
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-charcoal' : 'text-charcoal-light hover:text-charcoal'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp text-sm px-4 py-2"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-cream border-b border-cream-dark">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? 'text-charcoal' : 'text-charcoal-light'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="https://wa.me/971541676733"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
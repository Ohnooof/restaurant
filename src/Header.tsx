import React, { useState, useEffect } from 'react';
import MagneticLink from './MagneticLink';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-primary shadow-lg' : 'bg-transparent'}`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="font-serif text-2xl font-bold text-white tracking-tighter">
            Confluence
          </a>
          <ul className="hidden md:flex items-center space-x-8">
            <li><MagneticLink href="#about">About</MagneticLink></li>
            <li><MagneticLink href="#menu">Menu</MagneticLink></li>
            <li><MagneticLink href="#legacy">Legacy</MagneticLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

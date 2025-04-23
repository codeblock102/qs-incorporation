import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <nav
        className={`relative w-full transition-all duration-500 ${
          isScrolled || isOpen
            ? 'bg-white/80 backdrop-blur-xl text-gray-900 shadow-lg'
            : 'bg-black/20 backdrop-blur-lg text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center space-x-2 rounded-3xl hover:bg-white/10 p-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Logo className={isScrolled || isOpen ? 'text-[#0A74DA]' : 'text-white'} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-3 lg:space-x-4 bg-white/5 backdrop-blur-md rounded-3xl p-3 border border-white/10">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`${
                      isActive(link.path)
                        ? isScrolled
                          ? 'bg-[#0A74DA] text-white shadow-lg shadow-[#0A74DA]/20'
                          : 'bg-secondary text-white shadow-lg shadow-secondary/20'
                        : isScrolled
                        ? 'text-gray-900 hover:bg-gray-100'
                        : 'text-white hover:bg-white/10'
                    } transition-all duration-300 font-medium rounded-2xl px-6 py-3 text-sm lg:text-base backdrop-blur-sm`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden inline-flex items-center justify-center p-3 rounded-2xl ${
                isScrolled || isOpen ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              } focus:outline-none transition-all duration-300 backdrop-blur-sm`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute top-full left-0 right-0 transition-all duration-300 md:hidden ${
            isOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          <div className="bg-white/90 backdrop-blur-2xl shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    isActive(link.path)
                      ? 'bg-[#0A74DA] text-white shadow-lg shadow-[#0A74DA]/20'
                      : 'text-gray-900 hover:bg-gray-50/80'
                  } flex items-center justify-between px-6 py-4 text-base font-medium rounded-2xl backdrop-blur-sm transition-all duration-300 mb-2 last:mb-0`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.name}</span>
                  {isActive(link.path) && (
                    <div className="h-2 w-2 rounded-full bg-white/80" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-lg md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: -1 }}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
};

export default Navbar;
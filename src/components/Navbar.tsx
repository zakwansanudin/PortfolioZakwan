"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md text-white px-6 py-4 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo / Brand */}
        <div className="text-xl font-bold tracking-wide">
          <Link href="#" onClick={closeMenu}>
            Zakwan Sanudin
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-6 pt-4 pb-6 mt-4 space-y-4">
          <ul className="flex flex-col space-y-4 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
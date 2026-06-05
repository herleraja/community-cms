"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { siteConfig } from "@/lib/content";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <Link href="/" className="navigation__logo">
          <div className="navigation__logo-icon">
            <span>C</span>
          </div>
          <div className="navigation__logo-text">
            <div className="navigation__site-name">{siteConfig.name}</div>
            <div className="navigation__site-name-kannada">
              {siteConfig.nameKannada}
            </div>
          </div>
        </Link>

        <div className="navigation__links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="navigation__link">
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navigation__mobile-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="navigation__mobile-menu">
          <div className="navigation__mobile-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="navigation__mobile-link"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

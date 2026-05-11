"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "GitHub", href: "#github" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="sm:hidden flex flex-col gap-1.5 p-2 rounded-md transition-colors hover:bg-blue-500/10"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span
          className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="mobile-nav-panel absolute left-0 right-0 top-full z-50 border-b sm:hidden">
          <nav className="flex flex-col gap-4 px-5 py-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition hover:text-blue-500"
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

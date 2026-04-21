import { useState } from "react";
import { NavLink } from "react-router";
import AppLogo from "./AppLogo";

const navLinkClass = ({ isActive }) =>
  `relative inline-flex items-center px-2 py-2 text-sm font-medium tracking-wide transition-colors ${
    isActive
      ? "text-white after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:rounded-full after:bg-emerald-400 after:content-['']"
      : "text-slate-300 hover:text-white"
  }`;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-slate-950/55 via-slate-950/25 to-slate-950/0">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <NavLink to="/" className="flex shrink-0 items-center overflow-visible">
          <AppLogo className="h-10 w-auto origin-left scale-[1] object-contain sm:h-12 sm:scale-[1] md:h-14 md:scale-[1]" />
        </NavLink>

        <div className="ml-auto flex min-w-0 items-center">
          <nav className="hidden items-center gap-4 md:flex">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/features" className={navLinkClass}>
              Features
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <div className="relative md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-sm transition hover:bg-white/15"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>

            {isMobileMenuOpen && (
              <div className="absolute right-0 top-14 w-56 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-lg backdrop-blur-xl">
                <div className="flex flex-col gap-2">
                  <NavLink
                    to="/"
                    className={navLinkClass}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/features"
                    className={navLinkClass}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={navLinkClass}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={navLinkClass}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

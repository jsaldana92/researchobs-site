import { useEffect, useRef, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { NavLink } from "react-router";
import AppLogo from "./AppLogo";

const navLinkClass = ({ isActive }) =>
  `relative inline-flex items-center px-2 py-2 text-sm font-medium tracking-wide transition-colors ${
    isActive
      ? "text-white after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:rounded-full after:bg-emerald-400 after:content-['']"
      : "text-slate-300 hover:text-white"
  }`;

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 5px)",
    },
  },
};

function AnimatedHamburgerButton({ active, onClick }) {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        type="button"
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={onClick}
        aria-label={active ? "Close menu" : "Open menu"}
        aria-expanded={active}
        className="relative h-10 w-10 rounded-full bg-white/0 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80"
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className="absolute h-0.5 w-5 rounded-full bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className="absolute h-0.5 w-5 rounded-full bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute h-0.5 w-2.5 rounded-full bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 5px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      setIsScrolled(currentScrollY > 12);

      if (isMobileMenuOpen) {
        setIsNavbarVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      if (currentScrollY <= 16) {
        setIsNavbarVisible(true);
      } else if (scrollDelta > 8) {
        setIsNavbarVisible(false);
      } else if (scrollDelta < -8) {
        setIsNavbarVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    lastScrollYRef.current = window.scrollY || 0;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-slate-950/80 backdrop-blur-md"
            : "bg-gradient-to-b from-slate-950/55 via-slate-950/25 to-slate-950/0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
          <NavLink
            to="/"
            className="flex shrink-0 items-center overflow-visible"
          >
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
              <AnimatedHamburgerButton
                active={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((open) => !open)}
              />

              {isMobileMenuOpen && (
                <div className="absolute right-0 top-11 w-48 rounded-xl bg-slate-950/85 px-3 py-2 backdrop-blur-md">
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
      </div>
    </header>
  );
}

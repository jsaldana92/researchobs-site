import { Link } from "react-router";

export default function BottomBar() {
  return (
    <footer className="border-t border-white/10 bg-[#071b1d] px-6 py-6 text-sm text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-medium text-slate-300">ResearchObs © 2024</p>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a
            href="/#/privacy-policy/"
            className="transition-colors hover:text-white"
          >
            Privacy Policy
          </a>

          <a
            href="/#/terms-conditions/"
            className="transition-colors hover:text-white"
          >
            Terms & Conditions
          </a>

          <Link to="/contact" className="transition-colors hover:text-white">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b 
      border-slate-200 dark:border-slate-800 
      bg-white dark:bg-slate-950"
    >
      {/*  MAIN BAR */}
      <div className="w-full px-4 md:px-6 py-4 flex justify-between items-center">

        {/* LEFT: Logo */}
        <h1
          className="text-xl md:text-2xl font-bold 
          text-indigo-600 dark:text-indigo-400 
          hover:scale-105 transition cursor-pointer"
        >
          DSA Visualizer
        </h1>

        {/* RIGHT: Desktop */}
        <div className="hidden md:flex items-center gap-10 text-base md:text-lg font-medium">

          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/topics" className="nav-link">
            Topics
          </Link>

          <Link to="/about" className="nav-link">
            About
          </Link>

          <button
            onClick={() => setDark((prev) => !prev)}
            className="p-2 rounded-lg 
              bg-slate-100 dark:bg-slate-800
              hover:bg-indigo-100 dark:hover:bg-indigo-900
              active:scale-95 transition"
          >
            {dark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600" />
            )}
          </button>
        </div>

        {/* MOBILE BUTTON (unchanged) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-2 rounded-lg 
            bg-slate-100 dark:bg-slate-800
            hover:bg-indigo-100 dark:hover:bg-indigo-900
            active:scale-95 transition"
        >
          <Menu size={22} className="text-slate-800 dark:text-slate-200" />
        </button>
      </div>

      {/* 🔥 MOBILE MENU (UNCHANGED) */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end 
          bg-black/60 backdrop-blur-sm"
        >
          <div
            className="w-full 
            bg-white dark:bg-slate-900 
            border-t border-slate-200 dark:border-slate-700
            rounded-t-2xl p-6 animate-slideUp shadow-2xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-slate-800 dark:text-white">
                Menu
              </h2>

              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg 
                  hover:bg-slate-200 dark:hover:bg-slate-800 transition"
              >
                <X className="text-slate-700 dark:text-slate-300" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3 text-base font-medium">

              <Link to="/" onClick={() => setMenuOpen(false)} className="mobile-link">
                Home
              </Link>

              <Link to="/topics" onClick={() => setMenuOpen(false)} className="mobile-link">
                Topics
              </Link>

              <Link to="/about" onClick={() => setMenuOpen(false)} className="mobile-link">
                About
              </Link>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDark((prev) => !prev)}
                className="flex items-center gap-3 mt-4 px-4 py-3 rounded-xl 
                  bg-slate-100 dark:bg-slate-800
                  text-slate-800 dark:text-slate-200
                  hover:bg-indigo-100 dark:hover:bg-indigo-900
                  active:scale-95 transition"
              >
                {dark ? (
                  <>
                    <Sun className="text-yellow-400" size={18} />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="text-indigo-500" size={18} />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔥 STYLES */}
      <style>{`
        .nav-link {
          position: relative;
          color: #475569;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: #6366f1;
          transition: width 0.25s ease;
        }

        .nav-link:hover {
          color: #6366f1;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .dark .nav-link {
          color: #cbd5f5;
        }

        .mobile-link {
          padding: 14px 16px;
          border-radius: 12px;
          color: #1e293b;
          background: #f8fafc;
          transition: all 0.2s ease;
        }

        .mobile-link:hover {
          background: #e0e7ff;
          transform: translateX(4px);
        }

        .dark .mobile-link {
          color: #e2e8f0;
          background: #0f172a;
          border: 1px solid #1e293b;
        }

        .dark .mobile-link:hover {
          background: #1e293b;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0.6;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.25s ease-out;
        }
      `}</style>
    </nav>
  );
}
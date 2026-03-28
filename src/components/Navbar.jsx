import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-700 text-white px-6 py-5 flex justify-between items-center shadow-md">

      {/* Logo / Title */}
      <h1 className="text-xl font-bold">
        DSA Visualizer
      </h1>

      {/* Links */}
      <div className="flex gap-6">

        <Link
          to="/"
          className="hover:text-yellow-400 transition"
        >
          Home
        </Link>

        <Link
          to="/topics"
          className="hover:text-yellow-400 transition"
        >
          Topic List
        </Link>

        <Link
          to="/about"
          className="hover:text-yellow-400 transition"
        >
          About
        </Link>

      </div>

    </nav>
  );
}
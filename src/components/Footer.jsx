import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 
      border-t border-gray-200 dark:border-slate-700 
      px-6 py-8 sm:px-12 sm:py-10 
      flex flex-col md:flex-row justify-between items-center gap-6">

      {/* 🔹 Left - Branding */}
      <div className="text-center md:text-left">
        <p className="text-slate-800 dark:text-slate-100 font-semibold text-lg">
          © {new Date().getFullYear()} Anuj Pathak
        </p>

        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Learn DSA visually 🚀
        </p>
      </div>

      {/* 🔹 Center - Email */}
      <div className="flex items-center gap-3 
        text-slate-700 dark:text-slate-300 
        bg-slate-100 dark:bg-slate-800 
        px-4 py-2 rounded-lg">

        <FaEnvelope size={16} />
        <a
          href="mailto:anuj@123gmail.com"
          className="text-sm hover:text-indigo-500 transition"
        >
          anujpathakanuj371@gmail.com
        </a>
      </div>

      {/* 🔹 Right - Social */}
      <div className="flex gap-4">

        <a
          href="https://github.com/AnujPathak205"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 
          text-white bg-gray-800 dark:bg-gray-200 dark:text-gray-800 
          px-4 py-2 rounded-lg 
          hover:bg-gray-700 dark:hover:bg-gray-300 
          transition transform hover:scale-105"
        >
          <FaGithub size={18} /> GitHub
        </a>

        <a
          href="https://linkedin.com/in/anuj-pathak-22876835b"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 
          text-white bg-blue-600 dark:bg-blue-400 
          px-4 py-2 rounded-lg 
          hover:bg-blue-500 dark:hover:bg-blue-300 
          transition transform hover:scale-105"
        >
          <FaLinkedin size={18} /> LinkedIn
        </a>

      </div>
    </footer>
  );
}
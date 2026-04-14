import { FaGithub, FaLinkedin } from "react-icons/fa";
import pp from "../assets/MyProfilePic.jpeg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 px-4 py-10">

      <div className="max-w-5xl mx-auto space-y-12">

        {/* 🔥 PROFILE SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-8 
          bg-white dark:bg-slate-800 
          p-6 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700">

          {/* Profile Image */}
          <img
            src={pp} 
            alt="Anuj Pathak"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow"
          />

          {/* Info */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
              Anuj Pathak
            </h1>

            <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
              B.Tech CSE student passionate about Data Structures, Algorithms,
              and building interactive learning tools.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mt-4">

              <a
                href="https://github.com/AnujPathak205"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg 
                bg-slate-100 dark:bg-slate-700 
                hover:bg-slate-200 dark:hover:bg-slate-600 transition"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/anuj-pathak-22876835b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg 
                bg-blue-100 dark:bg-blue-900/40 
                text-blue-700 dark:text-blue-300
                hover:bg-blue-200 dark:hover:bg-blue-900 transition"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>

            </div>
          </div>
        </div>

        {/* 🔥 PROJECT INTRO */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow border border-slate-200 dark:border-slate-700">

          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
            About This Project
          </h2>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            DSA Visualizer is an interactive platform designed to simplify the
            understanding of Data Structures and Algorithms through step-by-step
            visualization and clear theoretical explanations.

            The goal is to bridge the gap between theory and implementation,
            helping students truly understand how algorithms work internally
            rather than just memorizing them.
          </p>
        </div>

        {/* 🔥 COVERED TOPICS */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow border border-slate-200 dark:border-slate-700">

          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
            Topics Covered
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

            {[
              "Array",
              "Linked List",
              "Stack",
              "Queue",
              "Sorting Algorithms",
              "Backtracking",
            ].map((topic, i) => (
              <div
                key={i}
                className="px-3 py-2 rounded-lg text-sm text-center
                bg-indigo-50 dark:bg-indigo-900/30
                text-indigo-700 dark:text-indigo-300
                border border-indigo-100 dark:border-indigo-800"
              >
                {topic}
              </div>
            ))}

          </div>
        </div>

        {/* 🔥 FEATURES */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow border border-slate-200 dark:border-slate-700">

          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
            Key Features
          </h2>

          <ul className="space-y-2 text-slate-600 dark:text-slate-300">

            <li>• Step-by-step visualization of operations</li>
            <li>• Code synchronization with execution</li>
            <li>• Interactive controls (play, pause, speed)</li>
            <li>• Practice questions & quizzes</li>
            <li>• Real-life examples for better understanding</li>

          </ul>
        </div>

        {/* 🔥 FUTURE PLANS */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow border border-slate-200 dark:border-slate-700">

          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
            Future Plans 🚀
          </h2>

          <p className="text-slate-600 dark:text-slate-300">
            I plan to expand this platform by adding more advanced topics such as:
          </p>

          <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
            <li>• Trees and Graphs</li>
            <li>• Dynamic Programming</li>
            <li>• Greedy Algorithms</li>
            <li>• Advanced Visualizations</li>
          </ul>
        </div>

        {/* 🔥 FOOTER */}
        <div className="text-center text-sm text-slate-500 dark:text-slate-400">
          Built with ❤️ by <span className="font-semibold">Anuj Pathak</span>
        </div>

      </div>
    </div>
  );
}
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function ArrayDisplay({ array }) {
  const navigate = useNavigate();

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="relative w-full">

      {/* TOP LEFT CONTROLS */}
      <div className="
        fixed top-8 left-8 z-10
        flex items-center gap-2
        px-2 py-2 rounded-xl
        backdrop-blur-md
      ">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="
            px-3 py-1.5 rounded-lg text-sm font-medium
            bg-slate-500 text-white
            hover:bg-slate-600
            active:scale-95 transition
          "
        >
          ← Back
        </button>

        {/* Theme */}
       <button
          onClick={() => setDark((prev) => !prev)}
          className="
            p-2 rounded-lg
            border border-slate-400 dark:border-slate-600
            hover:border-indigo-500 dark:hover:border-indigo-400
            active:scale-95 transition
          "
        >
          {dark ? (
            <Sun className="w-5 h-5 text-yellow-300" />
          ) : (
            <Moon className="w-5 h-5 text-slate-800 dark:text-white" />
          )}
        </button>

      </div>
      
      {/* ARRAY */}
      <div className="flex flex-wrap justify-center gap-2 mt-20">
        {array.map((element, index) => (
          <motion.div
            layout
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20
            }}
            className="flex flex-col items-center"
            key={element.id}
          >
            <motion.div
              layout
              className={`h-12 w-12 flex items-center justify-center rounded-lg border font-semibold transition-all duration-300
                ${element.state === "unvisible" ? "opacity-0" : ""}
                ${element.state === "inserted" ? "bg-green-500 text-white scale-110" : ""}
                ${element.state === "deleted" ? "bg-red-500 text-white scale-110" : ""}
                ${element.state === "normal" ? "bg-white dark:bg-slate-700 text-black dark:text-white" : ""}
                ${element.state === "searching" ? "bg-purple-500 text-white scale-110" : ""}
                ${element.state === "found" ? "bg-green-500 text-white scale-110" : ""}
                ${element.state === "created" ? "bg-indigo-100 text-indigo-800" : ""}
                ${element.state === "selected" ? "bg-yellow-400 text-black scale-110" : ""}
              `}
            >
              {element.value != null ? element.value : ""}
            </motion.div>

            <div className="text-sm mt-1 text-gray-600 dark:text-gray-300">
              {index}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
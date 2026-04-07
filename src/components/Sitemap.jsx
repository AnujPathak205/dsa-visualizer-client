import React, { useEffect, useState } from "react";

export default function Sitemap() {
  const sections = ["Description", "Visual", "Code", "Questions", "Quiz"];

  const [active, setActive] = useState("Description");

  useEffect(() => {
   const handleScroll = () => {
  const offset = 120; // adjust if needed

  let current = sections[0];

  for (let i = 0; i < sections.length; i++) {
    const el = document.getElementById(sections[i]);
    if (!el) continue;

    const rect = el.getBoundingClientRect();

    if (rect.top - offset <= 0) {
      current = sections[i];
    } else {
      break; // IMPORTANT: stop once we pass visible area
    }
  }

  setActive(current);
};

    window.addEventListener("scroll", handleScroll);

    // run once initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-15 z-40 w-full">
      <div className="bg-white/80 dark:bg-slate-900/80 
                      backdrop-blur-md
                      border-b border-slate-200 dark:border-slate-700">

        <nav className="max-w-4xl mx-auto px-4 py-3
                        flex gap-2 overflow-x-auto no-scrollbar">

          <span className="hidden md:flex font-semibold  mr-8 ml-16 text-black dark:text-white dark:hover:bg-slate-700 whitespace-nowrap px-6 py-2 text-sm  ">
            ON THIS PAGE
          </span>

          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`whitespace-nowrap px-2 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${
                  active === id
                    ? "bg-indigo-500 text-white shadow-md"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }
              `}
            >
              {id}
            </a>
          ))}

        </nav>
      </div>
    </div>
  );
}
import React from 'react'

export default function Output({output,setOutput}) {
  return (
    <div>
      <div
              className="
                mt-4 w-full flex-1 flex flex-col overflow-hidden
                rounded-2xl
                border border-slate-200 dark:border-slate-700
                bg-white dark:bg-slate-900
                shadow-lg shadow-slate-200/40 dark:shadow-black/20
              "
            >

              {/* HEADER */}
              <div
                className="
                  flex items-center justify-between
                  px-4 py-2.5
                  rounded-t-2xl
                  border-b border-slate-200 dark:border-slate-700
                  bg-slate-100 dark:bg-slate-800
                "
              >
                <span className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-200">
                  OUTPUT
                </span>

                <button
                  onClick={() => setOutput("")}
                  className="
                    flex items-center justify-center
                    w-7 h-7 rounded-lg
                    text-slate-500 dark:text-slate-300
                    hover:bg-red-100 dark:hover:bg-red-500/20
                    hover:text-red-600 dark:hover:text-red-400
                    transition-all duration-200
                    active:scale-90
                  "
                >
                  ✕
                </button>
              </div>

              {/* BODY */}
              <div
                className="
                  flex-1 overflow-auto
                  px-4 py-5
                  flex items-center justify-center
                  text-center
                "
              >
                <span
                  className="
                    text-xl font-mono font-semibold
                    text-emerald-600 dark:text-emerald-400
                    break-words
                  "
                >
                  {output || "No Output"}
                </span>
              </div>

            </div>
    </div>
  )
}

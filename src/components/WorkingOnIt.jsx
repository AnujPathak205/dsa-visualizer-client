import React from 'react'

export default function WorkingOnIt() {
  return (
    <div className="
      min-h-screen w-full 
      flex flex-col items-center justify-center 
      text-center px-4
      bg-slate-50 dark:bg-slate-900
    ">

      {/* Title */}
      <h1 className="
        text-3xl sm:text-4xl font-bold 
        text-slate-800 dark:text-white mb-3
      ">
        Working on it
      </h1>

      {/* Subtitle */}
      <p className="
        text-sm sm:text-base 
        text-slate-500 dark:text-slate-400 
        max-w-md
      ">
        This feature is currently under development.  
        It will be available soon.
      </p>

      {/* Divider */}
      <div className="
        mt-6 w-16 h-[2px] 
        bg-slate-300 dark:bg-slate-600 
        rounded-full
      "></div>

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="
          mt-6 px-5 py-2 rounded-lg text-sm font-medium
          bg-indigo-500 text-white hover:bg-indigo-600
          active:scale-95 transition
        "
      >
        Go Back
      </button>

    </div>
  )
}
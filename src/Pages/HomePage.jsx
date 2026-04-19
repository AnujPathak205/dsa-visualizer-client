import React, { useRef } from "react";
import { Link } from "react-router-dom";

import {
  Rocket,
  PlayCircle,
  Brain,
  Gamepad2,
  HelpCircle,
  FlaskConical,
  ChevronDown
} from "lucide-react";

export default function HomePage() {
  const exploreRef = useRef(null);

  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden 
      bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

        {/* Glow Background */}
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Understand{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
              DSA Visually
            </span>{" "}
            — Not Just Memorize it
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8">
            Learn Data Structures & Algorithms through interactive visualizations,
            step-by-step explanations, and real-time code execution.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">

            <Link
              to="/topics"
              className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold 
              bg-indigo-500 hover:bg-indigo-600 
              text-white rounded-xl shadow-lg 
              transition-all duration-300 hover:scale-105"
            >
              <Rocket className="w-5 h-5" />
              Start Learning
            </Link>

            <button
              onClick={scrollToExplore}
              className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold 
              bg-white/10 hover:bg-white/20 
              text-white rounded-xl border border-white/20
              backdrop-blur-md
              transition-all duration-300 hover:scale-105"
            >
              <PlayCircle className="w-5 h-5" />
              Explore Visualizers
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm sm:text-base">

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-lg text-slate-200">
              <Gamepad2 className="w-5 h-5 text-indigo-400" />
              <span>Interactive Visuals</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-lg text-slate-200">
              <Brain className="w-5 h-5 text-purple-400" />
              <span>Deep Intuition</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-lg text-slate-200">
              <HelpCircle className="w-5 h-5 text-pink-400" />
              <span>Interview Prep</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-lg text-slate-200">
              <FlaskConical className="w-5 h-5 text-green-400" />
              <span>Practice Problems</span>
            </div>

          </div>
        </div>

        {/* FIXED SCROLL INDICATOR */}
        <div onClick={scrollToExplore} className="absolute bottom-24 left-1/2 -translate-x-1/2 
        flex flex-col items-center text-slate-400 opacity-80">

          <span className="text-xs mb-1">Scroll</span>

          <ChevronDown className="w-5 h-5 animate-bounce" />

        </div>
      </div>

      {/* TRANSITION */}
      <div  ref={exploreRef} className="mb-10"></div>

      {/* VISUALIZER SECTION */}
      <div
       
        className="min-h-screen px-4 py-16 bg-slate-100 dark:bg-slate-900 flex flex-col items-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-slate-800 dark:text-white">
          Learn with Real-Time Algorithm Execution
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl w-full">

          <Link
            to="/topics/data-structures/array/visual"
            className="group p-6 rounded-2xl bg-white dark:bg-slate-800 
            border border-slate-200 dark:border-slate-700 
            shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">
              Array Visualizer
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Perform insert, delete, search, reverse with step-by-step logic.
            </p>

            <div className="mt-4 text-indigo-500 text-sm font-medium">
              Try Now →
            </div>
          </Link>

          <Link
            to="/topics/algorithms/sorting/visual"
            className="group p-6 rounded-2xl bg-white dark:bg-slate-800 
            border border-slate-200 dark:border-slate-700 
            shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">
              Sorting Visualizer
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Understand Bubble, Selection and Insertion sort with live animations.
            </p>

            <div className="mt-4 text-indigo-500 text-sm font-medium">
              Try Now →
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
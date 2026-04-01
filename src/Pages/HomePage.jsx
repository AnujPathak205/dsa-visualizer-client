import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/BackgroundImg.png";
import BubbleSortVisual from "../features/algorithm/sorting/BubbleSortVisual";

import {
  Rocket,
  PlayCircle,
  Brain,
  Gamepad2,
  HelpCircle,
  FlaskConical
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Understand{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
            DSA Visually
          </span>{" "}
          — Not Just Memorize it
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-slate-300 mb-8">
          Learn Data Structures & Algorithms through interactive visualizations,
          step-by-step explanations, and interview-focused practice.
        </p>

        {/* CTA Buttons */}
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

          <Link
            to="/visualizer"
            className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold 
            bg-white/10 hover:bg-white/20 
            text-white rounded-xl border border-white/20
            backdrop-blur-md
            transition-all duration-300 hover:scale-105"
          >
            <PlayCircle className="w-5 h-5" />
            Try Visualizer
          </Link>
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
    </div>
  );
}
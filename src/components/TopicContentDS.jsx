import Code from "./Code";
import Sitemap from "./Sitemap";
import Quiz from "./Quiz";

import {
  BookOpen,
  Brain,
  Rocket,
  PlayCircle,
  Settings,
  Clock,
  Globe
} from "lucide-react";

import { Link } from "react-router-dom";

export default function TopicContentDS({ data, visualPath }) {
  return (
    <>
      <Sitemap />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-14 min-h-screen">

        {/* 🔥 TITLE */}
        <div id="Description" className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            {data.title}
          </h1>

          <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto text-lg">
            {data.description}
          </p>
        </div>

        {/* 🔥 MERGED CONCEPT BOX */}
        <section
          className="rounded-2xl p-8 md:p-10 
          bg-white/80 dark:bg-slate-800/70 
          backdrop-blur-md
          border border-slate-200 dark:border-slate-700
          shadow-md space-y-10"
        >
          {/* Header */}
          <div className="flex items-center gap-3 text-2xl font-semibold text-slate-800 dark:text-white">
            <BookOpen className="w-6 h-6 text-indigo-500" />
            Concept Overview
          </div>

          {/* Explanation */}
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line text-[15px] md:text-base">
            {data.explanation}
          </p>

          <div className="border-t border-slate-200 dark:border-slate-700" />

          {/* Operations */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-800 dark:text-white mb-4">
              <Settings className="w-5 h-5 text-indigo-500" />
              Key Operations
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {data.operations.map((op, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl 
                  bg-slate-50 dark:bg-slate-900/50
                  border border-slate-200 dark:border-slate-700
                  hover:shadow-sm transition"
                >
                  <p className="font-semibold text-slate-800 dark:text-white">
                    {op.name}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {op.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-700" />

          {/* Complexity + Real Life */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Time Complexity */}
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-800 dark:text-white mb-4">
                <Clock className="w-5 h-5 text-indigo-500" />
                Time Complexity
              </h3>

              <div className="space-y-3">
                {data.complexity.map((op, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center 
                    px-4 py-3 rounded-lg
                    bg-indigo-50 dark:bg-indigo-900/30
                    border border-indigo-100 dark:border-indigo-800
                    text-sm"
                  >
                    <span className="text-slate-700 dark:text-slate-200">
                      {op.opName}
                    </span>

                    <span className="font-semibold text-indigo-600 dark:text-indigo-300">
                      {op.TC}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Life */}
            <div id="Visual">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-800 dark:text-white mb-4">
                <Globe className="w-5 h-5 text-indigo-500" />
                Real-Life Use
              </h3>

              <div
                className="p-5 rounded-xl 
                bg-slate-50 dark:bg-slate-900/50
                border border-slate-200 dark:border-slate-700
                text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                {data.realLifeExample}
              </div>
            </div>

          </div>
        </section>

        {/* 🔥 VISUAL CTA */}
        <section className="rounded-2xl p-8 text-center 
          bg-gradient-to-r from-indigo-500 to-indigo-600 
          text-white shadow-lg">

          <PlayCircle className="mx-auto mb-4 w-9 h-9" />

          <h2 className="text-2xl font-semibold mb-2">
            Visualize This Concept
          </h2>

          <p className="text-sm opacity-90 mb-5">
            Watch step-by-step execution and understand deeply
          </p>

          <Link
            id="Code"
            to={`/topics/data-structures/${visualPath}/visual`}
            className="inline-block px-6 py-2 rounded-lg 
            bg-white text-indigo-600 font-medium 
            hover:bg-gray-100 transition"
          >
            Start Visualization
          </Link>
        </section>

        {/* 🔥 CODE */}
        <section id="Questions">
          <Code code={data.code.basic} />
        </section>

        {/* 🔥 QUESTIONS */}
        <section className="space-y-5">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800 dark:text-white">
            <Brain className="w-5 h-5 text-indigo-500" />
            Practice Questions
          </h2>

          {data.questions.map((q, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-5">
              <p className="font-medium text-slate-800 dark:text-white">
                {q.question}
              </p>
              <p id="Quiz" className="text-slate-500 dark:text-slate-300">
                👉 {q.answer}
              </p>
            </div>
          ))}
        </section>

        {/* 🔥 QUIZ */}
        <Quiz questions={data.quiz} />

        {/* 🔥 PRACTICE LINKS */}
        <section className="space-y-5">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800 dark:text-white">
            <Rocket className="w-5 h-5 text-indigo-500" />
            Practice Problems
          </h2>

          {data.practiceLink.map((link, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center 
              p-5 rounded-xl border 
              bg-slate-50 dark:bg-slate-800
              hover:bg-indigo-50 dark:hover:bg-slate-700 transition"
            >
              <div>
                <p className="font-medium text-slate-800 dark:text-white">
                  Problem {idx + 1}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Practice this concept
                </p>
              </div>

              <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                Solve →
              </span>
            </a>
          ))}
        </section>

      </div>
    </>
  );
}
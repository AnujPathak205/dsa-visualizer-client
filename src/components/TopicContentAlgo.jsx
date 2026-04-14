import Code from "./Code";
import Quiz from "./Quiz";
import { Link } from "react-router-dom";

import {
  Zap,
  Puzzle,
  Lightbulb,
  ListOrdered,
  Clock,
  PlayCircle,
  Brain,
  Link as LinkIcon,
  HelpCircle
} from "lucide-react";

export default function TopicContentAlgo({ data,algoName,visualPath }) {
  return (
    <div className="flex justify-center mt-6 px-4">
      <div className="w-full max-w-4xl flex flex-col gap-6">

        {/* Title (FREE, no box) */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
            <Zap className="w-6 h-6 text-indigo-500" />
            {data.title}
          </h1>
        </div>

        {/* Problem (Special Styling) */}
        <section className="relative bg-gradient-to-r from-indigo-500/10 to-purple-500/10 
        border border-indigo-200 dark:border-indigo-700 
        rounded-2xl p-6 shadow-sm">

          <h2 className="text-xl font-semibold mb-3 
          text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Puzzle className="w-5 h-5 text-indigo-500" />
            Problem
          </h2>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {data.problem}
          </p>
        </section>

        {/* Intuition */}
        <section className="bg-white dark:bg-slate-800 
        border border-slate-200 dark:border-slate-700
        rounded-2xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="text-xl font-semibold mb-3 
          text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            Intuition
          </h2>

          <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">
            {data.intuition}
          </p>
        </section>

        {/* Steps (INTERACTIVE) */}
        <section className="bg-white dark:bg-slate-800 
        border border-slate-200 dark:border-slate-700
        rounded-2xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="text-xl font-semibold mb-4 
          text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <ListOrdered className="w-5 h-5 text-indigo-500" />
            Steps
          </h2>

          <ul className="flex flex-col gap-3">
            {data.steps.map((step, index) => (
              <li
                key={index}
                className="group flex items-start gap-3 
                bg-slate-100 dark:bg-slate-700 
                px-4 py-3 rounded-lg 
                hover:bg-indigo-100 dark:hover:bg-indigo-900
                transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Step Number Circle */}
                <div className="min-w-[32px] h-8 flex items-center justify-center 
                rounded-full bg-indigo-500 text-white font-semibold text-sm 
                group-hover:scale-110 transition">
                  {index + 1}
                </div>

                {/* Step Text */}
                <p className="text-slate-700 dark:text-slate-200">
                  {step}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <Code code={data.code} />

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
            to={`/topics/algorithms/${algoName}/${visualPath}/visual`}
            className="inline-block px-6 py-2 rounded-lg 
            bg-white text-indigo-600 font-medium 
            hover:bg-gray-100 transition"
          >
            Start Visualization
          </Link>
        </section>

        {/* Complexity */}
        <section className="bg-white dark:bg-slate-800 
        border border-slate-200 dark:border-slate-700
        rounded-2xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="text-xl font-semibold mb-4 
          text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-500" />
            Complexity
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">

            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-xl">
              <h3 className="font-semibold mb-4 text-slate-800 dark:text-white">
                Time Complexity
              </h3>

              <div className="flex flex-col gap-3 text-sm">

                {/* Best */}
                <div className="flex justify-between items-center">
                  <span className="px-2 py-1 rounded-md bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 font-medium">
                    Best
                  </span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    {data.complexity.time.best}
                  </span>
                </div>

                {/* Average */}
                <div className="flex justify-between items-center">
                  <span className="px-2 py-1 rounded-md bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 font-medium">
                    Average
                  </span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    {data.complexity.time.average}
                  </span>
                </div>

                {/* Worst */}
                <div className="flex justify-between items-center">
                  <span className="px-2 py-1 rounded-md bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 font-medium">
                    Worst
                  </span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    {data.complexity.time.worst}
                  </span>
                </div>

              </div>
            </div>

            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-xl">
              <h3 className="font-semibold mb-4 text-slate-800 dark:text-white">
                Space Complexity
              </h3>

              <div className="flex justify-between items-center">
                <span className="px-2 py-1 rounded-md bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 font-medium">
                  Space
                </span>

                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  {data.complexity.space}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section className="bg-white dark:bg-slate-800 
        border border-slate-200 dark:border-slate-700
        rounded-2xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="text-xl font-semibold mb-4 
          text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-500" />
            Practice
          </h2>

          <div className="flex flex-col gap-3">
            {data.practiceLink.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 
                bg-indigo-100 dark:bg-indigo-900 
                text-indigo-700 dark:text-indigo-300 
                px-4 py-2 rounded-lg 
                hover:scale-105 transition"
              >
                <LinkIcon className="w-4 h-4" />
                Practice Problem {index + 1}
              </a>
            ))}
          </div>
        </section>

        {/* Questions */}
        <section className="bg-white dark:bg-slate-800 
        border border-slate-200 dark:border-slate-700
        rounded-2xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="text-xl font-semibold mb-4 
          text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-500" />
            Interview Questions
          </h2>

          <div className="flex flex-col gap-4">
            {data.questions.map((q, index) => (
              <div
                key={index}
                className="bg-slate-100 dark:bg-slate-700 
                p-4 rounded-xl border-l-4 border-indigo-500"
              >
                <p className="font-medium text-slate-800 dark:text-white">
                  {index + 1}. {q.question}
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  <span className="text-indigo-500 font-medium">Answer:</span> {q.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Quiz questions={data.quiz} />

      </div>
    </div>
  );
}
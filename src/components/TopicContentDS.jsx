import Code from "./Code";
import Sitemap from "./Sitemap";
import Quiz from "./Quiz";

import {
  BookOpen,
  Settings,
  Clock,
  Globe,
  Brain,
  Rocket
} from "lucide-react";

import { Link } from "react-router-dom";

export default function TopicContentDS({ data,visualPath}) {
  return (
    <>
      <Sitemap />
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10 min-h-screen">

        {/* Title */}
        <div id="Description" className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            {data.title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            {data.description}
          </p>
        </div>

        {/* Explanation */}
        <section className="bg-white dark:bg-slate-800 
        border border-slate-200 dark:border-slate-700
        rounded-xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="text-xl font-semibold mb-4 
          text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-500" />
            Explanation
          </h2>

          <p className="text-slate-600 dark:text-slate-300 
          whitespace-pre-line leading-relaxed">
            {data.explanation}
          </p>
        </section>

        {/* Operations */}
        <section className="bg-white dark:bg-slate-800 
        border border-slate-200 dark:border-slate-700
        rounded-xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="text-xl font-semibold mb-4 
          text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Settings className="w-5 h-5 text-indigo-500" />
            Operations
          </h2>

          <ul className="space-y-3">
            {data.operations.map((op, index) => (
              <li
                key={index}
                className="bg-slate-100 dark:bg-slate-700 
                p-3 rounded-lg hover:bg-slate-200 
                dark:hover:bg-slate-600 transition"
              >
                <strong className="text-slate-800 dark:text-white">
                  {op.name}:
                </strong>{" "}
                <span className="text-slate-600 dark:text-slate-300">
                  {op.description}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Complexity */}
        <section className="bg-white dark:bg-slate-800 
        border border-slate-200 dark:border-slate-700
        rounded-xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="text-xl font-semibold mb-4 
          text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-500" />
            Complexity
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {data.complexity.map((op, index) => (
              <div
                key={index}
                className="bg-slate-100 dark:bg-slate-700 
                p-4 rounded-lg text-center 
                hover:scale-105 transition"
              >
                <p className="text-sm text-slate-500 dark:text-slate-300">
                  {op.opName}
                </p>
                <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                  {op.TC}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Real Life Example */}
        <section className="bg-white dark:bg-slate-800 
        border border-slate-200 dark:border-slate-700
        rounded-xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="text-xl font-semibold mb-4 
          text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Globe className="w-5 h-5 text-indigo-500" />
            Real Life Example
          </h2>

          <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line">
            {data.realLifeExample}
          </p>
        </section>

        <hr id="Visual" className="mb-20 mt-20 dark:text-white" />


        <section className="bg-white dark:bg-slate-800 
            border border-slate-200 dark:border-slate-700
            rounded-xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1
            flex flex-col items-center justify-center gap-4">

          {/* Optional icon or emoji for visual cue */}
          <div className="text-4xl">🖥️</div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 text-center">
            Visualize Algorithm
          </h2>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 text-sm text-center">
            Step through your algorithm with real-time visualization.
          </p>

          {/* Link styled as a button */}
          <Link
            to={`/topics/data-structures/${visualPath}/visual`}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700
              transition text-sm font-medium shadow-md"
          >
            Open Visual
          </Link>
        </section>

        <hr id="Code" className="mb-20 mt-20 dark:text-white" />

        <Code code={data.code} />

        <hr id="Questions" className="mb-20 mt-20 dark:text-white" />

        {/* Questions */}
        <section className="bg-white dark:bg-slate-800 
        border border-slate-200 dark:border-slate-700
        rounded-xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="text-xl font-semibold mb-4 
          text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-500" />
            Practice Questions
          </h2>

          <div className="space-y-4">
            {data.questions.map((q, index) => (
              <div
                key={index}
                className="border-l-4 border-indigo-500 pl-4"
              >
                <p className="font-medium text-slate-800 dark:text-white">
                  {q.question}
                </p>
                <p className="text-slate-500 dark:text-slate-300">
                  👉 {q.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr id="Quiz" className="mb-20 mt-20 dark:text-white" />

        <Quiz questions={data.quiz} />

        {/* Practice Links */}
       <section className="bg-white dark:bg-slate-800 
  border border-slate-200 dark:border-slate-700
  rounded-xl p-6 shadow-sm hover:shadow-md transition mt-6">

  {/* Title */}
  <h2 className="text-xl font-semibold mb-2 
    text-slate-800 dark:text-slate-100 flex items-center gap-2">
    <Rocket className="w-5 h-5 text-indigo-500" />
    Practice Problems
  </h2>

  {/* Description */}
  <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
    Apply concepts with real problems
  </p>

  {/* Links List */}
  <div className="space-y-4">
    {data.practiceLink.map((link, idx) => (
      
      <a
        key={idx}
        href={link}
        target="_blank"
        rel="noreferrer"
        className="group flex justify-between items-center 
        border-l-4 border-indigo-500 
        bg-slate-50 dark:bg-slate-900
        hover:bg-indigo-50 dark:hover:bg-slate-700
        px-4 py-3 rounded-lg transition"
      >
        
        {/* Left */}
        <div className="flex flex-col">
          <span className="font-medium text-slate-800 dark:text-white">
            Problem {idx + 1}
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Practice this concept
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 
          text-indigo-600 dark:text-indigo-400 
          group-hover:translate-x-1 transition">
          
          <span className="text-sm font-medium">Solve</span>
          <Rocket className="w-4 h-4" />
        </div>

      </a>
    ))}
  </div>
</section>
      </div>
    </>
  );
}
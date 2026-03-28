import Code from "./Code";

export default function TopicContent({ data }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10 
    bg-slate-50 dark:bg-slate-900 min-h-screen">

      {/* Title */}
      <div className="text-center space-y-2">
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
          📘 Explanation
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
        text-slate-800 dark:text-slate-100">
          ⚙️ Operations
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
        text-slate-800 dark:text-slate-100">
          ⏱ Complexity
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

      {/* Code */}
      <section className="bg-white dark:bg-slate-800 
      border border-slate-200 dark:border-slate-700
      rounded-xl p-6 shadow-sm hover:shadow-md transition">

        <h2 className="text-xl font-semibold mb-4 
        text-slate-800 dark:text-slate-100">
          💻 Code
        </h2>

        <Code code={data.code} />
      </section>

      {/* Real Life Example */}
      <section className="bg-white dark:bg-slate-800 
      border border-slate-200 dark:border-slate-700
      rounded-xl p-6 shadow-sm hover:shadow-md transition">

        <h2 className="text-xl font-semibold mb-4 
        text-slate-800 dark:text-slate-100">
          🌍 Real Life Example
        </h2>

        <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line">
          {data.realLifeExample}
        </p>
      </section>

      {/* Questions */}
      <section className="bg-white dark:bg-slate-800 
      border border-slate-200 dark:border-slate-700
      rounded-xl p-6 shadow-sm hover:shadow-md transition">

        <h2 className="text-xl font-semibold mb-4 
        text-slate-800 dark:text-slate-100">
          🧠 Practice Questions
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

      {/* Practice Link */}
      <section className="text-center">
        <a
          href={data.practiceLink}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 
          text-white px-6 py-2 rounded-lg 
          shadow-md hover:shadow-lg transition"
        >
          🚀 Solve on LeetCode
        </a>
      </section>

    </div>
  );
}
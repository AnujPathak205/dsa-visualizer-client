import { useParams, Link } from "react-router-dom";
import { topics } from "../data/algorithm/topics";
import PageNotFoundPage from "./PageNotFoundPage";

export default function TopicPageAlgo() {
  const { topicId } = useParams();

  const filteredTopics = topics.filter((t) => t.type === topicId);

  if (!filteredTopics.length) {
    return <PageNotFoundPage />;
  }

  return (
    <div className="min-h-screen px-4 py-10 bg-slate-50 dark:bg-[#020617]">

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6
        text-slate-800 dark:text-cyan-300 tracking-wide">
        {topicId.replaceAll("-", " ").replace(/^./, (c) => c.toUpperCase())}
      </h1>

      {/* Visualize Button (ONLY HERE) */}
      <div className="text-center mb-10">
        <Link
          to={`/topics/algorithms/${topicId}/visual`}
          className="
            inline-block px-6 py-2 rounded-lg font-medium transition
            bg-indigo-500 text-white hover:bg-indigo-600
            dark:bg-cyan-500 dark:hover:bg-cyan-600
            shadow-md hover:shadow-lg
          "
        >
          Visualize {topicId.replaceAll("-", " ")}
        </Link>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {filteredTopics.map((t, i) => (
          <Link
            key={i}
            to={t.path}
            className="group relative overflow-hidden rounded-2xl p-6
            transition duration-300 transform hover:-translate-y-1"
          >
            {/* Background */}
            <div className="
              absolute inset-0 rounded-2xl
              bg-white border border-slate-200
              shadow-md group-hover:shadow-xl
              dark:bg-slate-800 dark:border-slate-700
              dark:shadow-lg dark:group-hover:shadow-cyan-500/20
            "></div>

            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 
              group-hover:opacity-20 blur-2xl
              bg-cyan-400 transition"></div>

            {/* Content */}
            <div className="relative z-10">

              {/* Name */}
              <h2 className="
                text-xl font-bold mb-2
                text-slate-800 dark:text-white
              ">
                {t.name}
              </h2>

              {/* Type */}
              <p className="
                text-sm
                text-slate-500
                dark:text-slate-400
              ">
                {t.type.replaceAll("-", " ")}
              </p>

              {/* CTA */}
              <div className="
                mt-4 text-sm font-semibold
                text-indigo-600
                dark:text-cyan-400
              ">
                Explore →
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* Back Button */}
      <div className="text-center mt-12">
        <Link
          to="/topics/algorithms"
          className="
            px-6 py-2 rounded-lg font-medium transition
            bg-slate-200 text-slate-800 hover:bg-slate-300
            dark:bg-slate-800 dark:text-cyan-300 
            dark:hover:bg-slate-700
          "
        >
          ← Back to Algorithms
        </Link>
      </div>

    </div>
  );
}
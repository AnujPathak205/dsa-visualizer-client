import { Link } from "react-router-dom";
import { topics } from "../data/topics.js";
import { BookOpen } from "lucide-react";

export default function TopicListPage({ filter }) {
  let filteredTopics = [];
  let title = "";

  if (filter === "ds") {
    filteredTopics = topics.filter((t) => t.type === "data-structure");
    title = "Explore Data Structures";
  } else if (filter === "al") {
    filteredTopics = topics.filter((t) => t.type === "algorithm");
    title = "Explore Algorithms";
  } else {
    filteredTopics = topics;
    title = "Explore DSA Topics";
  }

  // 🔹 Type Tag
  const typeTag = (type) => {
    if (type === "data-structure")
      return (
        <span className="text-xs bg-green-100 dark:bg-green-700 text-green-700 dark:text-green-200 px-2 py-1 rounded-full font-semibold">
          Data Structure
        </span>
      );

    if (type === "algorithm")
      return (
        <span className="text-xs bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-200 px-2 py-1 rounded-full font-semibold">
          Algorithm
        </span>
      );

    return null;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      
      {/* 🔥 MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* 🔥 TITLE */}
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-white flex items-center justify-center gap-2">
          <BookOpen className="w-6 h-6 text-indigo-500" />
          {title}
        </h1>

        {/* 🔥 FILTERS */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap items-center max-w-xl mx-auto">
          
          <Link
            to="/topics"
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white
              hover:bg-indigo-200 dark:hover:bg-indigo-600
              ${filter === "all" ? "ring-2 ring-indigo-500" : ""}
            `}
          >
            All
          </Link>

          <Link
            to="/topics/data-structures"
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              bg-green-100 dark:bg-green-700 text-green-800 dark:text-white
              hover:bg-green-200 dark:hover:bg-green-600
              ${filter === "ds" ? "ring-2 ring-green-500" : ""}
            `}
          >
            Data Structures
          </Link>

          <Link
            to="/topics/algorithms"
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white
              hover:bg-blue-200 dark:hover:bg-blue-600
              ${filter === "al" ? "ring-2 ring-blue-500" : ""}
            `}
          >
            Algorithms
          </Link>
        </div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTopics.map((topic, index) => {
            const Icon = topic.icon;

            return (
              <Link
                key={index}
                to={topic.path}
                className="
                  group h-full flex flex-col justify-between
                  bg-white dark:bg-slate-800
                  border border-slate-200 dark:border-slate-700
                  rounded-xl p-6
                  shadow-sm hover:shadow-lg
                  hover:-translate-y-1
                  transition duration-300
                "
              >
                {/* 🔹 Icon */}
                <div className="mb-3">
                  <Icon className="w-8 h-8 text-indigo-500 group-hover:scale-110 transition" />
                </div>

                {/* 🔹 Title */}
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                  {topic.name}
                </h2>

                {/* 🔹 Type */}
                <div className="mt-2">{typeTag(topic.type)}</div>

                {/* 🔹 Description */}
                <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm leading-relaxed">
                  {topic.desc}
                </p>

                {/* 🔹 CTA */}
                <div className="mt-4 text-indigo-600 dark:text-indigo-400 text-sm font-medium group-hover:translate-x-1 transition">
                  View Topic →
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
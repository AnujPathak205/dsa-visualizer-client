import React from "react";
import { Link } from "react-router-dom";

const topics = [
  {
    name: "Array",
    path: "/topics/array",
    desc: "Collection of elements stored in contiguous memory.",
    icon: "📊",
  },
  {
    name: "Linked List",
    path: "/topics/linkedlist",
    desc: "Nodes connected using pointers.",
    icon: "🔗",
  },
  {
    name: "Stack",
    path: "/topics/stack",
    desc: "Follows LIFO (Last In First Out).",
    icon: "📚",
  },
  {
    name: "Queue",
    path: "/topics/queue",
    desc: "Follows FIFO (First In First Out).",
    icon: "🚶",
  },
];

export default function TopicListPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 px-4 py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-10 
      text-slate-800 dark:text-slate-100">
        📚 Explore DSA Topics
      </h1>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid gap-6 
      sm:grid-cols-2 lg:grid-cols-3">

        {topics.map((topic, index) => (
          <Link
            key={index}
            to={topic.path}
            className="group bg-white dark:bg-slate-800 
            border border-slate-200 dark:border-slate-700 
            rounded-xl p-6 shadow-sm 
            hover:shadow-md hover:-translate-y-1 
            transition duration-300"
          >
            {/* Icon */}
            <div className="text-3xl mb-3">{topic.icon}</div>

            {/* Title */}
            <h2 className="text-xl font-semibold 
            text-slate-800 dark:text-slate-100 
            group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              {topic.name}
            </h2>

            {/* Description */}
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              {topic.desc}
            </p>

            {/* CTA */}
            <div className="mt-4 text-indigo-600 dark:text-indigo-400 
            text-sm font-medium">
              View Topic →
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}
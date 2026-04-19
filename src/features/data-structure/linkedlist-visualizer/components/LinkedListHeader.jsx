import React from "react";

export default function LinkedListHeader({ setCreateLL }) {
  return (
    <>
      <div className="h-full flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3 mt-3">
          Linked List Visualizer
        </h1>

        <p className="text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">

          Visualize how <span className="text-indigo-500 font-semibold">linked lists</span> work using 
          <span className="text-blue-500 font-semibold"> nodes</span> and 
          <span className="text-purple-500 font-semibold"> pointers</span>.

          <br /><br />

          Understand 
          <span className="text-indigo-500 font-semibold"> core operations</span> like
          <span className="text-green-500 font-semibold"> insertion</span>,
          <span className="text-red-500 font-semibold"> deletion</span>, and
          <span className="text-purple-500 font-semibold"> search</span>.

          <br />

          Learn how 
          <span className="text-blue-500 font-semibold"> traversal</span> works and how
          <span className="text-orange-500 font-semibold"> pointers shift</span> dynamically.

        </p>

        <p className="text-lg text-slate-400 mt-4">
          Select an operation to begin
        </p>

        <button
          onClick={() => setCreateLL(true)}
          className="
            px-5 py-2.5 rounded-xl
            bg-indigo-500 text-white font-semibold
            shadow-md mt-2
            hover:bg-indigo-600 hover:shadow-lg hover:-translate-y-[1px]
            active:scale-95
            transition-all duration-200
          "
        >
          Create Your Own Linked List
        </button>

      </div>
    </>
  );
}
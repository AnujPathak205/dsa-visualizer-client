import React, { useState } from "react";
import LinkedListCreator from "./LinkedListCreator";

export default function LinkedListHeader({
  linkedlist,
  setLinkedList,
  setMessage,
}) {
  const [createLL, setCreateLL] = useState(false);

  return (
    <>
      {!createLL ? (
        <div className="h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10">

          {/* Title */}
          <h1 className="
            text-xl sm:text-2xl md:text-3xl 
            font-bold 
            text-slate-800 dark:text-white 
            mb-2 sm:mb-3 mt-3
          ">
            Linked List Visualizer
          </h1>

          {/* Mobile Short Description */}
          <p className="
            text-slate-600 dark:text-slate-300 
            text-sm sm:hidden 
            max-w-xs leading-relaxed
          ">
            Learn how <span className="text-indigo-500 font-semibold">linked lists</span> work 
            with <span className="text-blue-500 font-semibold">nodes</span> and 
            <span className="text-purple-500 font-semibold">pointers</span>.
          </p>

          {/* Desktop Full Description */}
          <p className="
            hidden sm:block 
            text-slate-600 dark:text-slate-300 
            max-w-md leading-relaxed mt-2
          ">
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

          {/* Subtitle */}
          <p className="
            text-sm sm:text-base 
            text-slate-400 
            mt-3 sm:mt-4
          ">
            Select an operation to begin
          </p>

          {/* Button */}
          <button
            onClick={() => setCreateLL(true)}
            className="
              mt-3 sm:mt-4
              px-4 sm:px-5 py-2 sm:py-2.5 
              text-sm sm:text-base
              rounded-xl
              bg-indigo-500 text-white font-semibold
              shadow-md
              hover:bg-indigo-600 hover:shadow-lg hover:-translate-y-[1px]
              active:scale-95
              transition-all duration-200
            "
          >
            Create Linked List
          </button>

        </div>
      ) : (
        <LinkedListCreator
          linkedlist={linkedlist}
          setLinkedList={setLinkedList}
          setMessage={setMessage}
          setCreateLL={setCreateLL}
        />
      )}
    </>
  );
}
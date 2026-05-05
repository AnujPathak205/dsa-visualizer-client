import React from 'react'
import MessageBox from '../../../../components/MessageBox';

export default function Operations({
  linkedlist,
  operation,
  setOperation,
  message,
  inputValue,
  setInputValue,
  inputIndex,
  setInputIndex,
  handleStart,
  onQuit,
  isRunning,
  output,
  setOutput,
  showIndexes,
  setShowIndexes
}) {

  let isDisabled = isRunning;[]

  return (
    <div className="h-full flex flex-col">

      {/* TOP CONTENT */}
      <div className="flex-1 overflow-y-auto">

        <div className="w-full space-y-4">

          <MessageBox message={message} algorithm={operation} />

          {/* OUTPUT */}
          {output && (
            <div className="mt-4 w-full flex-1 rounded-xl border
                border-slate-300 dark:border-slate-600 
                bg-white dark:bg-slate-900 shadow-md overflow-hidden flex flex-col">

                {/* Header */}
                <div className="px-3 py-2 bg-slate-200 dark:bg-slate-800 
                  border-b border-slate-300 dark:border-slate-600
                  text-xs font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
                  <span>OUTPUT</span>
                  <button onClick={() => setOutput("")}>X</button>
                </div>

                {/* Body */}
                <div className="px-4 py-3 text-center text-lg font-mono
                    text-green-600 dark:text-green-400 break-words flex-1 overflow-auto">
                    {output}
                </div>

            </div>
          )}

          {/* ================= OPERATION SELECT ================= */}
          {
            operation === "none" ? (

              <div className="space-y-4">

                <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">
                  Choose Operation (size = {linkedlist.length-1})
                </h2>

                {/* CORE */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-slate-500 dark:text-slate-400">
                    CORE OPERATIONS
                  </label>

                  <select
                    value={[
                      "addFirst","addLast","add","removeFirst","removeLast",
                      "remove","traverse"
                    ].includes(operation) ? operation : ""}
                    onChange={(e) => setOperation(e.target.value)}
                    className="px-3 py-2 rounded-xl text-sm font-medium
                      bg-white dark:bg-slate-800 border
                      border-slate-200 dark:border-slate-700
                      text-slate-700 dark:text-slate-200
                      focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select Core Operation</option>
                    <option value="addFirst">Add First</option>
                    <option value="addLast">Add Last</option>
                    <option value="add">Add at any index</option>
                    <option value="removeFirst">Remove First</option>
                    <option value="removeLast">Remove Last</option>
                    <option value="remove">Remove at any index</option>
                    <option value="traverse">Traverse</option>
                  </select>
                </div>

                {/* UTILITY */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-slate-500 dark:text-slate-400">
                    UTILITY OPERATIONS
                  </label>

                  <select
                    value={[
                      "get","update","search","isEmpty","size"
                    ].includes(operation) ? operation : ""}
                    onChange={(e) => setOperation(e.target.value)}
                    className="px-3 py-1 rounded-xl text-sm font-medium
                      bg-white dark:bg-slate-800 border
                      border-slate-200 dark:border-slate-700
                      text-slate-700 dark:text-slate-200
                      focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select Utility Operation</option>
                    <option value="get">Get</option>
                    <option value="update">Update</option>
                    <option value="search">Search</option>
                    <option value="isEmpty">Is Empty</option>
                    <option value="size">Size</option>
                  </select>
                </div>

                {/* ADVANCED */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-slate-500 dark:text-slate-400">
                    ADVANCED OPERATIONS
                  </label>

                  <select
                    value={["midNode","reverse","min","max"].includes(operation) ? operation : ""}
                    onChange={(e) => setOperation(e.target.value)}
                    className="px-3 py-2 rounded-xl text-sm font-medium
                      bg-white dark:bg-slate-800 border
                      border-slate-200 dark:border-slate-700
                      text-slate-700 dark:text-slate-200
                      focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select Advanced Operation</option>
                    <option value="midNode">Find mid node (Slow-fast approach)</option>
                    <option value="reverse">Reverse</option>
                    <option value="min">Min</option>
                    <option value="max">Max</option>
                  </select>
                </div>

              </div>

            ) : (

              
                !output && (<div>

                      {/* BACK + QUIT */}
                      <div className="flex flex-wrap justify-between items-center gap-3 w-full">
                          {/* LEFT */}
                          <button
                            onClick={() => setOperation("none")}
                            className={`
                              px-3 py-1.5 rounded-lg text-sm font-medium
                              text-white transition
                              ${isDisabled 
                                ? "bg-gray-400 cursor-not-allowed" 
                                : "bg-slate-500 hover:bg-slate-600 active:scale-95"}
                            `}
                          >
                            ← Back
                          </button>

                          {/* RIGHT */}
                          <div className="flex items-center gap-2 flex-wrap">

                            {/* Toggle Index */}
                            <button
                              onClick={() => setShowIndexes(!showIndexes)}
                              className="
                                px-3 py-1.5 rounded-lg text-sm font-medium
                                border border-slate-300 dark:border-slate-600
                                bg-white dark:bg-slate-800
                                text-slate-700 dark:text-slate-200
                                hover:bg-slate-100 dark:hover:bg-slate-700
                                transition active:scale-95
                              "
                            >
                              {showIndexes ? "Hide Index" : "Show Index"}
                            </button>

                            {/* Quit */}
                            <button
                              disabled={!isDisabled}
                              onClick={onQuit}
                              className={`
                                px-3 py-1.5 rounded-lg text-sm font-medium text-white
                                transition
                                ${!isDisabled
                                  ? "bg-gray-400 cursor-not-allowed"
                                  : "bg-red-500 hover:bg-red-600 active:scale-95"}
                              `}
                            >
                              Quit
                            </button>

                          </div>
                        </div>

                      {/* TITLE */}
                      <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-10">
                        Operation: {operation} (size = {linkedlist.length-1})
                      </h2>

                      {/* INPUTS */}
                      <div className="flex gap-6 flex-wrap">

                        {(operation === "addFirst" || operation === "addLast" || operation === "add" || operation === "update" || operation === "search") && (
                          <div>
                            <label className="text-xs text-slate-500 dark:text-slate-400">
                              Input Value {" "}
                            </label>
                            <input
                              type="number"
                              value={inputValue}
                              onChange={(e) => setInputValue(Number(e.target.value))}
                              className="w-16 px-3 py-1 rounded border bg-gray-50 dark:bg-slate-700 dark:text-white"
                            />
                          </div>
                        )}

                        {(operation === "add" || operation === "remove" || operation === "get" || operation === "update") && (
                          <div>
                            <label className="text-xs text-slate-500 dark:text-slate-400">
                              Target Index {" "}
                            </label>
                            <input
                              type="number"
                              value={inputIndex}
                              onChange={(e) => setInputIndex(Number(e.target.value))}
                              className="w-16 px-3 py-1 rounded border bg-gray-50 dark:bg-slate-700 dark:text-white"
                            />
                          </div>
                        )}

                      </div>

                    </div>
                    
              )
              

              

            )
          }
        </div>
      </div>

      {/* 🔥 FIXED BOTTOM BUTTON */}
      {operation !== "none" && (
        <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={handleStart}
            disabled={isDisabled}
            className={`w-full py-2 rounded-lg text-white ${
              isDisabled ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isDisabled ? "Running..." : "Start Visualization"}
          </button>
        </div>
      )}

    </div>
  )
}
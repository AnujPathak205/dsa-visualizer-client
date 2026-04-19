import React from 'react'
import MessageBox from '../../../../components/MessageBox';

export default function Operations({linkedlist,operation,setOperation,message}) {
  return (
    <div>
      {/* OPERATION SELECTORS */}
        <div className="w-full space-y-4">
            <div className="space-y-4">

            <MessageBox message={message} algorithm={operation} />

            {
                operation === "none" ? 

                (<div className="space-y-4">

                    <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-10">
                        Choose Operation
                        &nbsp; (size = {linkedlist.length-1})
                    </h2>

                    {/* Core Operations */}
                    <div className="flex flex-col gap-1">
                    <label className="text-xs text-slate-500 dark:text-slate-400 tracking-wide">
                        CORE OPERATIONS
                    </label>

                    <select
                        value={
                        ["addFirst", "addLast", "add"].includes(operation)
                            ? operation
                            : ""
                        }
                        onChange={(e) => {
                        setOperation(e.target.value);
                        }}
                        className="px-3 py-2 rounded-xl text-sm font-medium
                        bg-white dark:bg-slate-800
                        border border-slate-200 dark:border-slate-700
                        text-slate-700 dark:text-slate-200
                        focus:outline-none focus:ring-2 focus:ring-indigo-500
                        transition"
                    >
                        <option value="">Select Core Operation</option>
                        <option value="addFirst">Add First</option>
                        <option value="addLast">Add Last</option>
                        <option value="add">Add at any index</option>
                    </select>
                    </div>

                    {/* Advanced Operations */}
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-slate-500 dark:text-slate-400 tracking-wide">
                            ADVANCED OPERATIONS
                        </label>

                        <select
                            value={
                            ["reverse", "min", "max"].includes(operation)
                                ? operation
                                : ""
                            }
                            onChange={(e) => {
                            setOperation(e.target.value);
                            setCurrentLine(-1);
                            }}
                            className="px-3 py-2 rounded-xl text-sm font-medium
                            bg-white dark:bg-slate-800
                            border border-slate-200 dark:border-slate-700
                            text-slate-700 dark:text-slate-200
                            focus:outline-none focus:ring-2 focus:ring-indigo-500
                            transition"
                        >
                            <option value="">Select Advanced Operation</option>
                            <option value="reverse">Reverse</option>
                            <option value="min">Min</option>
                            <option value="max">Max</option>
                        </select>
                    </div>
                    
                </div>)
                :
                        
                (
                    <div>
                        <button
                            onClick={() => setOperation("none")}
                            className={`
                                px-3 py-1.5 rounded-lg text-sm font-medium text-white
                                transition-all duration-200 mb-3
                                ${
                                false
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-slate-500 hover:bg-slate-600 active:scale-95"
                                }
                            `}
                        >
                             ← Back
                        </button>
                        <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-10">
                            Operation: {operation}
                            &nbsp; (size = {linkedlist.length-1})
                        </h2>
                    </div>
                )
            }
          </div>
        </div>
    </div>
  )
}

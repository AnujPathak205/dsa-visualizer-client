import React from 'react'
import MessageBox from '../../../../components/MessageBox';
import { h1 } from 'framer-motion/client';

export default function Operations({linkedlist,operation,setOperation,message,inputValue,setInputValue,inputIndex,setInputIndex,handleStart,onQuit,isRunning,output}) {
    let isDisabled = isRunning;



  return (
    <div>
      {/* OPERATION SELECTORS */}
        <div className="w-full space-y-4">
            <div className="space-y-4">

            <MessageBox message={message} algorithm={operation} />

            {output && (
                <div className="
                    mt-4 w-full max-w-xl
                    rounded-xl border
                    border-slate-300 dark:border-slate-600
                    bg-white dark:bg-slate-900
                    shadow-md
                    overflow-hidden
                ">
                    
                    {/* Header */}
                    <div className="
                    px-3 py-2
                    bg-slate-200 dark:bg-slate-800
                    border-b border-slate-300 dark:border-slate-600
                    text-xs font-semibold
                    text-slate-700 dark:text-slate-300
                    flex justify-between items-center
                    ">
                    <span>OUTPUT</span>
                    </div>

                    {/* Body */}
                    <div className="
                    px-4 py-3
                    text-center
                    text-lg font-mono
                    text-green-600 dark:text-green-400
                    break-words
                    ">
                    {output}
                    </div>

                </div>
            )}
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
                        ["addFirst", "addLast", "add", "removeFirst","removeLast","remove","traverse"].includes(operation)
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
                        <option value="removeFirst">Remove First</option>
                        <option value="removeLast">Remove Last</option>
                        <option value="remove">Remove at any index</option>
                        <option value="traverse">Traverse</option>
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
                        <div className='flex justify-between items-center w-full'>
                            <button
                                onClick={() => setOperation("none")}
                                className={`
                                    px-3 py-1.5 rounded-lg text-sm font-medium text-white
                                    transition-all duration-200 mb-3
                                    ${
                                    isDisabled
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-slate-500 hover:bg-slate-600 active:scale-95"
                                    }
                                `}
                            >
                                ← Back
                            </button>

                            <button
                                disabled={!isDisabled}
                                onClick={onQuit}
                                className={`
                                    px-3 py-1.5 rounded-lg text-sm font-medium text-white
                                    transition-all duration-200
                                    ${
                                    !isDisabled
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-red-500 hover:bg-red-600 active:scale-95 shadow-sm hover:shadow-md"
                                    }
                                `}
                            >
                                Quit
                            </button>
                        </div>

                        <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-10">
                            Operation: {operation}
                            &nbsp; (size = {linkedlist.length-1})
                        </h2>
                        {/* INPUTS */}
                        <div className="flex gap-6 flex-wrap">

                        {(operation === "addFirst" || operation === "addLast" || operation === "add") && (
                            <div>
                                <label className="text-xs text-slate-500 dark:text-slate-400">
                                    Input Value &nbsp;
                                </label>
                                <input
                                    type="number"
                                    value={inputValue}
                                    // disabled={isDisabled}
                                    onChange={(e) => setInputValue(Number(e.target.value))}
                                    className="w-16 px-3 py-1 rounded border bg-gray-50 dark:bg-slate-700 dark:text-white
                                    disabled:opacity-50"
                                />
                            </div>
                        )}

                        {(operation === "add") && (
                            <div>
                            <label className="text-xs text-slate-500 dark:text-slate-400">
                                Target Index &nbsp;
                            </label>
                            <input
                                type="number"
                                value={inputIndex}
                                // disabled={isDisabled}
                                onChange={(e) => setInputIndex(Number(e.target.value))}
                                className="w-16 px-3 py-1 rounded border bg-gray-50 dark:bg-slate-700 dark:text-white
                                disabled:opacity-50"
                            />
                            </div>
                        )}
                        </div>
                        <button
                            onClick={handleStart}
                            disabled={isDisabled}
                            className={`w-full py-2  rounded-lg text-white mt-2  ${
                            isDisabled ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
                            }`}
                        >
                            {isDisabled ? "Running..." : "Start Visualization"}
                        </button>
                    </div>
                )
            }
          </div>
        </div>
    </div>
  )
}

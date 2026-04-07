import { useEffect, useState } from "react";
import ArrayDisplay from "./components/ArrayDisplay";
import { arrayData } from "../../../data/data-structure/ArrayData";
import CodeVisual from "../../../components/CodeVisual";

import { handleInsertion } from "./logic/insertion";
import { handleDeletion } from "./logic/deletion";
import { handleSearch } from "./logic/search";

import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw,
  X,
} from "lucide-react";
import { sleep } from "./logic/helperFunctions";
import { steps } from "framer-motion";

export default function Array() {
  const initialArr = [
    { id: 0, value: 12, state: "normal" },
    { id: 1, value: 5, state: "normal" },
    { id: 2, value: 1, state: "normal" },
    { id: 3, value: 7, state: "normal" },
    { id: 4, value: null, state: "normal" },
    { id: 5, value: null, state: "normal" },
    { id: 6, value: null, state: "normal" },
    { id: 7, value: null, state: "normal" },
     { id: 8, value: null, state: "normal" },
    // { id: 9, value: null, state: "normal" },
    // { id: 10, value: null, state: "normal" },
    // { id: 11, value: null, state: "normal" },
    // { id: 12, value: null, state: "normal" },
    // { id: 13, value: null, state: "normal" },

  ];

  const [array, setArray] = useState(initialArr);
  const [stepArr, setStepArr] = useState([]);
  const [inputValue, setInputValue] = useState(22);
  const [inputIndex, setInputIndex] = useState(1);
  const [n,setN] = useState(4);
  const [output,setOutput] = useState("");

  const [operation, setOperation] = useState("none");


  const [message, setMessage] = useState(
    "Choose an operation to start visualization"
  );

  const [tasking, setTasking] = useState(false);
  const [currentLine, setCurrentLine] = useState(-1);

  const [speed, setSpeed] = useState(1000);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (step >= stepArr.length) return;

    const timer = setTimeout(() => {
      setArray(stepArr[step]);
      setStep((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  },[step, stepArr]);

  function onQuit(){

  }



  // totalSteps,

  const isDisabled = tasking;

  const totalSteps =
    arrayData.code[operation]?.java?.split("\n").length || 1;

  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-slate-900">

      {/* 🔥 MAIN CONTENT */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 overflow-hidden">

        {/* 🔹 LEFT */}
        <div className="flex flex-col justify-center items-center bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4">

          <ArrayDisplay array={array} />

          <div className="mt-4 w-full text-center px-4 py-2 rounded-lg 
            bg-blue-100 dark:bg-slate-700 
            text-blue-800 dark:text-blue-300 text-sm">
            {message}
          </div>
          <div>{output.length != 0 && output}</div>
        </div>

        {/* 🔹 RIGHT */}
        <div className="flex flex-col gap-4 overflow-hidden">

          {/* 🔥 CODE / INTRO */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 flex-1 overflow-auto">

            {operation !== "none" ? (
              <CodeVisual
                code={arrayData.code[operation]}
                currentLine={currentLine}
              />
            ) : (
              <div className="h-full flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                  Array Visualizer
                </h1>

                <p className="text-slate-600 dark:text-slate-300 max-w-md">
                  Visualize how arrays work internally. Observe
                  <span className="text-green-500 font-semibold"> insertion</span>,
                  <span className="text-red-500 font-semibold"> deletion</span>, and
                  <span className="text-purple-500 font-semibold"> search </span> 
                  step by step.
                </p>

                <p className="text-xs text-slate-400 mt-3">
                  Select an operation to begin 🚀
                </p>
              </div>
            )}
          </div>

          {/* 🔥 CONTROLS */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 flex flex-col gap-4">

            {operation !== "none" && !tasking && (
              <button
                onClick={() => setOperation("none")}
                className="w-fit px-3 py-1 rounded bg-slate-500 text-white hover:bg-slate-600"
              >
                ← Back
              </button>
            )}

            <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
              {operation === "none"
                ? "Choose Operation"
                : `Operation: ${operation}`}
                 &nbsp; (capacity = {array.length} , n = {n})
            </h2>

            

            {/* INPUTS */}
            <div className="flex gap-6 flex-wrap">

              {(operation === "insertion" || operation === "search") && (
                <div>
                  <label className="text-xs text-slate-500 dark:text-slate-400">
                    Input Value &nbsp;
                  </label>
                  <input
                    type="number"
                    value={inputValue}
                    disabled={isDisabled}
                    onChange={(e) => setInputValue(Number(e.target.value))}
                    className="w-28 px-3 py-2 rounded border bg-gray-50 dark:bg-slate-700 dark:text-white
                    disabled:opacity-50"
                  />
                </div>
              )}

              {(operation === "insertion" || operation === "deletion") && (
                <div>
                  <label className="text-xs text-slate-500 dark:text-slate-400">
                    Target Index &nbsp;
                  </label>
                  <input
                    type="number"
                    value={inputIndex}
                    disabled={isDisabled}
                    onChange={(e) => setInputIndex(Number(e.target.value))}
                    className="w-28 px-3 py-2 rounded border bg-gray-50 dark:bg-slate-700 dark:text-white
                    disabled:opacity-50"
                  />
                </div>
              )}
            </div>

            {/* BUTTONS */}
            {operation === "none" ? (
              <div className="flex gap-3">
                <button onClick={() => setOperation("insertion")} className="flex-1 py-2 bg-green-500 text-white rounded-lg">
                  Insertion
                </button>
                <button onClick={() => setOperation("deletion")} className="flex-1 py-2 bg-red-500 text-white rounded-lg">
                  Deletion
                </button>
                <button onClick={() => setOperation("search")} className="flex-1 py-2 bg-purple-500 text-white rounded-lg">
                  Search
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  if (operation === "insertion") return handleInsertion(array,setArray,setStepArr,n,setN,inputIndex,inputValue,setMessage,setTasking,speed,setCurrentLine,setOutput);
                  if (operation === "deletion")
                    return handleDeletion(array, setArray, inputIndex, setMessage, setTasking, speed);
                  if (operation === "search")
                    return handleSearch(array, setArray, inputValue, setMessage, setTasking, speed);
                }}
                disabled={isDisabled}
                className={`w-full py-2 rounded-lg text-white ${
                  isDisabled ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {isDisabled ? "Running..." : "Start Visualization"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 🔥 PLAYER BAR (SLIM & COMPACT FOR ALL SCREENS) */}
<div className="
  border-t border-slate-200/70 dark:border-slate-700/60
  bg-white/80 dark:bg-slate-900/80
  backdrop-blur-md
  px-3 py-2
">

  {/* 🔹 Progress Bar */}
  <input
    type="range"
    min={0}
    max={Math.max(totalSteps - 1, 0)}
    value={step}
    onChange={(e) => {
      setIsPlaying(false);
      setStep(Number(e.target.value));
    }}
    className="
      w-full h-1 rounded-lg appearance-none cursor-pointer
      bg-slate-300 dark:bg-slate-700
      accent-indigo-500 mb-2
    "
  />

  {/* 🔹 Controls Row (Single Line Always) */}
  <div className="flex items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-300">

    {/* 🔸 LEFT: Speed */}
    <div className="flex items-center gap-2 min-w-[90px]">
      <span className="text-[11px] whitespace-nowrap">
        {(2000 / speed).toFixed(1)}x
      </span>

      <input
        type="range"
        min={200}
        max={2000}
        step={100}
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
        className="
          w-16 h-1 rounded-lg appearance-none cursor-pointer
          bg-slate-300 dark:bg-slate-700
          accent-indigo-500
        "
      />
    </div>

    {/* 🔸 CENTER: Controls */}
    <div className="flex items-center gap-1">

      <button
        onClick={() => {
          setIsPlaying(false);
          setStep(0);
        }}
        className="icon-btn-sm"
      >
        <RotateCcw size={14} />
      </button>

      <button
        onClick={() => {
          setIsPlaying(false);
          setStep((s) => Math.max(s - 1, 0));
        }}
        className="icon-btn-sm"
      >
        <SkipBack size={14} />
      </button>

      <button
        onClick={() => setIsPlaying((p) => !p)}
        className="
          flex items-center justify-center
          w-8 h-8 rounded-full
          bg-indigo-500 text-white
          hover:bg-indigo-600 active:scale-95
          transition
        "
      >
        {isPlaying ? <Pause size={14} /> : <Play size={14} />}
      </button>

      <button
        onClick={() => {
          setIsPlaying(false);
          setStep((s) =>
            Math.min(s + 1, totalSteps - 1)
          );
        }}
        className="icon-btn-sm"
      >
        <SkipForward size={14} />
      </button>
    </div>

    {/* 🔸 RIGHT: Step + Close */}
    <div className="flex items-center gap-2 min-w-[80px] justify-end">

      <span className="text-[11px] whitespace-nowrap">
        {step + 1}/{totalSteps}
      </span>

      <button
        className="
          flex items-center justify-center
          w-7 h-7 rounded-md
          bg-slate-200 dark:bg-slate-700
          hover:bg-red-500 hover:text-white
          transition
        "
      >
        <X size={14} />
      </button>
    </div>
  </div>
</div>
    </div>
  );
}
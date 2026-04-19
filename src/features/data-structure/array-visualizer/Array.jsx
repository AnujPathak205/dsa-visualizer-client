import { useEffect, useState } from "react";
import ArrayDisplay from "../../../components/ArrayDisplay";
import { arrayData } from "../../../data/data-structure/ArrayData";
import CodeVisual from "../../../components/CodeVisual";
import PlayBar from "../../../components/PlayBar";

import { handleInsertion } from "./logic/insertion";
import { handleDeletion } from "./logic/deletion";
import { handleSearch } from "./logic/search";
import { handleReverse } from "./logic/reverse";
import { handleMax } from "./logic/max";
import { handleMin } from "./logic/min";
import ArrayHeader from "./components/ArrayHeader";
import OperationSelector from "./components/OperationSelector";
import ArrayCreator from "./components/ArrayCreator";
import { div } from "framer-motion/client";
import MessageBox from "../../../components/MessageBox";
import OutputBox from "../../../components/OutputBox";

export default function Array() {
  const initialArr = [
    { id: 0, value: 12, state: "normal" },
    { id: 1, value: 5, state: "normal" },
    { id: 2, value: 1, state: "normal" },
    { id: 3, value: 7, state: "normal" },
    { id: 4, value: 8, state: "normal" },
    { id: 5, value: 21, state: "normal" },
    { id: 6, value: 10, state: "normal" },
    { id: 7, value: 4, state: "normal" },
    { id: 8, value: null, state: "normal" },
    { id: 9, value: null, state: "normal" },
    { id: 10, value: null, state: "normal" },
    { id: 11, value: null, state: "normal" },
  ];

  const [array, setArray] = useState(initialArr);
  const [stepArr, setStepArr] = useState([]);
  const [inputValue, setInputValue] = useState(22);
  const [inputIndex, setInputIndex] = useState(1);
  const [n,setN] = useState(8);
  const [output,setOutput] = useState("");
  const [outputValue,setOutputValue] = useState("");

  const [operation, setOperation] = useState("none");

  const [message, setMessage] = useState("Choose an operation to start visualization");
  const [messageArr, setMessageArr] = useState("Choose an operation to start visualization");


  const [tasking, setTasking] = useState(false);
  const [currentLine, setCurrentLine] = useState(-1);
  const [currentLineArr,setCurrentLineArr] = useState([]);

  const [speed, setSpeed] = useState(1000);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [createArr,setCreateArr] = useState(false);

  useEffect(() => {
    if(isPlaying){
      if (step >= stepArr.length){ 
        setStep(0);
        setIsPlaying(false);
        return;
      }

      if(step == stepArr.length-1){
        setOutputValue(output);
        setTimeout(() => setOutputValue(""),6000);
      }

      const timer = setTimeout(() => {
        setArray(stepArr[step]);
        setCurrentLine(currentLineArr[step]);
        if(messageArr[step]) setMessage(messageArr[step]);
        setStep((prev) => prev + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    }else{
      if(step == 0) return;

      if (step >= stepArr.length){ 
        setStep(0);
        setIsPlaying(false);
        return;
      }

      if(step == stepArr.length-1){
        setOutputValue(output);
        setTimeout(() => setOutputValue(""),5000);
      }

        setArray(stepArr[step]);
        setCurrentLine(currentLineArr[step]);
        if(messageArr[step]) setMessage(messageArr[step]);
    }
  },[step, stepArr,isPlaying]);

  function onQuit(){
    if(stepArr.length){ 
      setArray([...stepArr[0]])
      setStepArr([]);
      if(operation == "insertion") setN(prev => prev-1);
      if(operation == "deletion") setN(prev => prev+1);
    };
    setCurrentLine(-1);
    setOutput("");
    setIsPlaying(false);
  }

  const handleStart = () => {
    setIsPlaying(true);
    setOutput("");
    const ARRAY = stepArr.length? [...stepArr[stepArr.length-1]]: [...array];

    if (operation === "insertion") 
      return handleInsertion(ARRAY,setStepArr,n,setN,inputIndex,inputValue,setOutput,setCurrentLineArr,setMessage,setMessageArr);
    if (operation === "deletion")
      return handleDeletion(ARRAY,setStepArr,n,setN,inputIndex,setOutput,setCurrentLineArr,setMessage,setMessageArr);
    if (operation === "search")
      return handleSearch(ARRAY,setArray,stepArr,setStepArr,n,setN,inputValue,setOutput,setCurrentLineArr,setMessage,setMessageArr);
    if (operation === "reverse")
      return handleReverse(ARRAY,setStepArr,n,setOutput,setCurrentLineArr,setMessage,setMessageArr);
    if (operation === "min")
      return handleMin(ARRAY,setStepArr,n,setOutput,setCurrentLineArr,setMessage,setMessageArr);
    if (operation === "max")
      return handleMax(ARRAY,setStepArr,n,setOutput,setCurrentLineArr,setMessage,setMessageArr);
  }

  const isDisabled = isPlaying;
  const totalSteps = stepArr.length;

  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-slate-900">

      {/*  MAIN CONTENT */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr] gap-4 p-4 overflow-hidden">
        

        {/*  LEFT */}
        <div className="flex flex-col justify-center items-center bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4">
          <ArrayDisplay array={array} />

         <MessageBox message={message} />

          {outputValue.length !== 0 && (
            <OutputBox outputValue={outputValue} />
          )}
        </div>

        {/* 🔹 RIGHT */}
        <div className="flex flex-col gap-4 overflow-hidden">

          {/*  CODE / INTRO */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-1 flex-1 overflow-auto">

            {operation !== "none" ? (
              <CodeVisual
                code={arrayData.code[operation]}
                currentLine={currentLine}
              />
            ) :
              !createArr ? 
                <ArrayHeader setCreateArr={setCreateArr} />
                :
                <ArrayCreator setArray={setArray} setN = {setN} setCreateArr={setCreateArr} setMessage={setMessage}/>
              }
            
          </div>

          {/* CONTROLS */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 flex flex-col gap-4">

            {operation !== "none" && !tasking && (
              <div className="w-full flex justify-between items-center">

                {/* LEFT - Back */}
                <button
                  disabled={isDisabled}
                  onClick={() => setOperation("none")}
                  className={`
                    px-3 py-1.5 rounded-lg text-sm font-medium text-white
                    transition-all duration-200
                    ${
                      isDisabled
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-slate-500 hover:bg-slate-600 active:scale-95"
                    }
                  `}
                >
                  ← Back
                </button>

                {/* RIGHT - Quit */}
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
                    className="w-16 px-3 py-1 rounded border bg-gray-50 dark:bg-slate-700 dark:text-white
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
                    className="w-16 px-3 py-1 rounded border bg-gray-50 dark:bg-slate-700 dark:text-white
                    disabled:opacity-50"
                  />
                </div>
              )}
            </div>

            {/* BUTTONS */}
            {operation === "none" ? (
              <OperationSelector operation={operation} setOperation={setOperation} setCurrentLine={setCurrentLine} />
            ) : (
              <button
                onClick={handleStart}
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

      {/* PLAYER BAR (SLIM & COMPACT FOR ALL SCREENS) */}
      <PlayBar isPlaying={isPlaying} setIsPlaying={setIsPlaying} step={step} setStep={setStep} speed={speed} setSpeed={setSpeed} totalSteps={totalSteps} onQuit={onQuit}/>
      
    </div>
  );
}
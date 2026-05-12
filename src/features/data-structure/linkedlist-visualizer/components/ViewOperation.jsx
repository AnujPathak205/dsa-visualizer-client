import { useState } from "react";

function getRandomValue(){
  return Math.floor(Math.random() * 20) + 1;
}

export const firstHalf = [
    {id:1, value:getRandomValue() , state : "normal", arrow:"forward", tag:null},
    {id:2, value:getRandomValue() ,state : "normal", arrow:"forward", tag:null},
    {id:3, value:getRandomValue() ,state : "normal", arrow:"forward", tag:null},
    {id:4, value:getRandomValue() ,state : "normal", arrow:"forward", tag:null},
    {id:5, value:getRandomValue() ,state : "normal", arrow:"forward", tag:null},
    {id:6, value:getRandomValue() ,state : "normal", arrow:"up", tag:null},
    {id:7, value:null ,state : "unvisible", arrow:"forward", tag:null},
];

export const secondHalf = [
    {id:1, value:null ,state : "unvisible", arrow:"forward", tag:null},
    {id:2, value:null ,state : "unvisible", arrow:"forward", tag:null},
    {id:3, value:null ,state : "unvisible", arrow:"forward", tag:null},
    {id:4, value:getRandomValue() ,state : "normal", arrow:"down", tag:null},
    {id:5, value:getRandomValue() ,state : "normal", arrow:"backward", tag:null},
    {id:6, value:getRandomValue() ,state : "normal", arrow:"backward", tag:null},
    {id:7, value:null ,state : "unvisible", arrow:"forward", tag:null},
];


export default function ViewOperation({operation,setOperation,linkedlist,stepArr,setStepArr,setMessage,inputIndex,setInputIndex,inputValue,setInputValue,setLinkedlist,visualNodesArr,setVisualNodes,showIndexes,setShowIndexes,onQuit,isDisabled,cycle,setCycle,step}) {
  const [prevLL,setPrevLL] = useState([]);
  
    function createCycle(){
      onQuit();
      setPrevLL([...linkedlist]);
  
      setLinkedlist(firstHalf);
      setVisualNodes(secondHalf);
  
      setCycle(true);
    }
  
    function deleteCycle(){
      onQuit();
      setLinkedlist([...prevLL]);
      setVisualNodes([]);
  
      setCycle(false);
    }

  return (
    <>
       <>
            {/* BACK + CONTROLS */}
            <div className="flex flex-wrap justify-between items-center gap-3 w-full">

            {/* LEFT */}
            <button
                onClick={() => {
                setOperation("none");
                setMessage("Choose an operation to start visualization");
                if(stepArr.length>0) setLinkedlist(stepArr[stepArr.length-1]);
                if(visualNodesArr.length>0) setVisualNodes(visualNodesArr[visualNodesArr.length-1]);
                if(cycle){
                    deleteCycle();
                }
                setStepArr([]);
            
                }}
                disabled={isDisabled}
                className={`
                px-3 py-1.5 rounded-lg text-sm font-medium text-white transition
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
                
                {
                    operation != "detectCycle" ? 
                        (
                            <button
                                disabled={isDisabled}
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
                                {showIndexes ? "Hide Indexes" : "Show Indexes"}
                            </button>
                        )
                        :
                        (
                            <button
                                disabled={(isDisabled || step !== 0)}
                                
                                onClick={() => {
                                    if (cycle) deleteCycle();
                                    else createCycle();
                                }}
                                className={`
                                    px-4 py-2 rounded-xl
                                    text-sm font-semibold
                                    shadow-sm border
                                    transition-all duration-200
                                    active:scale-95

                                    ${(isDisabled || step !== 0)
                                    ? `
                                        cursor-not-allowed
                                        bg-slate-300 dark:bg-slate-700
                                        border-slate-300 dark:border-slate-700
                                        text-slate-500 dark:text-slate-400
                                    `
                                    : cycle
                                        ? `
                                        bg-red-500 hover:bg-red-600
                                        border-red-500 hover:border-red-600
                                        text-white shadow-red-500/20
                                        `
                                        : `
                                        bg-indigo-500 hover:bg-indigo-600
                                        border-indigo-500 hover:border-indigo-600
                                        text-white shadow-indigo-500/20
                                        `
                                    }
                                `}
                                >
                                {cycle ? "Remove Cycle" : "Create Cycle"}
                                </button>
                        )
                }
                        
                

                {/* Quit */}
                <button
                disabled={!isDisabled}
                onClick={onQuit}
                className={`
                    px-3 py-1.5 rounded-lg text-sm font-medium text-white transition
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
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white mt-2 mb-2">
            Operation:{" "}
            <span className="text-indigo-500">
                {operation.replace(/([A-Z])/g, " $1")}
            </span>{" "}
            (size = {(operation === "detectCycle" && cycle)? "9":(linkedlist.length - 1)})
            </h2>

            {/* INPUTS */}
            <div className="flex gap-6 flex-wrap">

            {(operation === "addFirst" ||
                operation === "addLast" ||
                operation === "add" ||
                operation === "update" ||
                operation === "search") && (
                <div>
                <label className="text-xs text-slate-500 dark:text-slate-400">
                    Input Value &nbsp;
                </label>
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(Number(e.target.value))}
                    className="w-20 mt-1 px-3 py-1 rounded border 
                    bg-gray-50 dark:bg-slate-700 dark:text-white"
                />
                </div>
            )}

            {(operation === "add" ||
                operation === "remove" ||
                operation === "get" ||
                operation === "update") && (
                <div>
                <label className="text-xs text-slate-500 dark:text-slate-400">
                    Target Index &nbsp;
                </label>
                <input
                    type="number"
                    value={inputIndex}
                    onChange={(e) => setInputIndex(Number(e.target.value))}
                    className="w-20 mt-1 px-3 py-1 rounded border 
                    bg-gray-50 dark:bg-slate-700 dark:text-white"
                />
                </div>
            )}

            </div>

            {/* COMPLEXITY */}

            {/*

        {operation !== "none" &&
            linkedListData.complexityForOperations[operation] && (
            <div
                className="
                mt-3 px-3 py-2.5 rounded-lg
                bg-slate-50 dark:bg-slate-700/40
                border border-slate-200 dark:border-slate-700
                text-sm space-y-2
                "
            >

                <div className="flex items-center justify-between">

                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                    <Timer size={16} className="text-indigo-500" />
                    <span>
                    Time:
                    <span className="ml-1 font-semibold text-indigo-500">
                        {linkedListData.complexityForOperations[operation].TC}
                    </span>
                    </span>
                </div>

                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                    <Database size={16} className="text-green-500" />
                    <span>
                    Space:
                    <span className="ml-1 font-semibold text-green-500">
                        {linkedListData.complexityForOperations[operation].SC}
                    </span>
                    </span>
                </div>

                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                {linkedListData.complexityForOperations[operation].reason}
                </p>

            </div> 
        )}*/}
        </>
    </>
  )
}

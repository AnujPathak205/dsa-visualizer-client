import React, { useState } from 'react'
import MessageBox from '../../../../components/MessageBox';
import { linkedListData } from '../../../../data/data-structure/LinkedListData';

import { Timer, Database } from "lucide-react";
import Output from './Output';
import OperationSelector from './OperationSelector';
import { h1 } from 'framer-motion/client';
import ViewOperation from './ViewOperation';
import { getKey } from '../../array-visualizer/logic/helperFunctions';

export default function Operations({
  linkedlist,
  setLinkedlist,
  setMessage,
  setVisualNodes,
  stepArr,
  visualNodesArr,
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
  setShowIndexes,
  cycle,
  setCycle,
  step
}) {
  let isDisabled = isRunning;

    return (
    <div className="h-full flex flex-col">

      {/* TOP CONTENT */}
      <div className="flex-1 overflow-y-auto">

        <div className="w-full space-y-4">

          <MessageBox message={message} algorithm={operation} />

          {/* OUTPUT */}
          {output && (
            <Output output={output} setOutput={setOutput} />
          )}

          {/* ================= OPERATION SELECT ================= */}
          {
            operation === "none" ? (
              <OperationSelector 
                  linkedlist={linkedlist} 
                  operation={operation} 
                  setOperation={setOperation} />
            ) : (

              
              !output && (
                <ViewOperation 
                  operation={operation} 
                  setOperation={setOperation} 
                  linkedlist={linkedlist} 
                  stepArr={stepArr}
                  setMessage={setMessage} 
                  inputIndex={inputIndex} 
                  setInputIndex={setInputIndex} 
                  inputValue={inputValue} 
                  setInputValue={setInputValue} 
                  setLinkedlist={setLinkedlist} 
                  visualNodesArr={visualNodesArr} 
                  setVisualNodes={setVisualNodes} 
                  showIndexes={showIndexes} 
                  setShowIndexes={setShowIndexes} 
                  onQuit={onQuit} 
                  isDisabled={isDisabled}
                  cycle={cycle}
                  setCycle={setCycle}
                  step={step} />
            )
            )
          }
        </div>
      </div>

      {/* FIXED BOTTOM BUTTON */}
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
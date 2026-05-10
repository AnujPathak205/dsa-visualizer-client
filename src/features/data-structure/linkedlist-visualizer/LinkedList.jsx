import { useState, useEffect } from "react";

import { linkedListData } from "../../../data/data-structure/linkedlist/index";

import LinkedListDisplay from "./components/LinkedListDisplay";
import PlayBar from "../../../components/PlayBar";
import LinkedListHeader from "./components/LinkedListHeader";
import Operations from "./components/Operations";
import CodeVisual from "../../../components/CodeVisual";

import { handleAddFirst } from "./logic/core operations/addFirst";
import { handleAddLast } from "./logic/core operations/addLast";
import { handleRemoveFirst } from "./logic/core operations/removeFirst";
import { handleRemoveLast } from "./logic/core operations/removeLast";
import { handleAdd } from "./logic/core operations/add";
import { handleRemove } from "./logic/core operations/remove";
import { handleTraverse } from "./logic/core operations/traverse";

import { handleGet } from "./logic/utility operations/get";
import { handleUpdate } from "./logic/utility operations/update";
import { handleSearch } from "./logic/utility operations/search";
import { handleIsEmpty } from "./logic/utility operations/isEmpty";
import { handleSize } from "./logic/utility operations/size";

import { handleMidNode } from "./logic/advance operations/midNode";
import { handleReverse } from "./logic/advance operations/reverse";
import { handleDetectCycle } from "./logic/advance operations/detectCycle";

export default function LinkedList() {

  const initialLL = [
    { id: 0, value: 1, state: "normal", arrow: "forward", tag: null },
    { id: 1, value: 12, state: "normal", arrow: "forward", tag: null },
    { id: 2, value: 2, state: "normal", arrow: "forward", tag: null },
    { id: 3, value: 5, state: "normal", arrow: "forward", tag: null },
    { id: 4, value: 5, state: "null", arrow: "forward", tag: null },
  ];

  const [linkedlist, setLinkedList] = useState(initialLL);
  const [visualNodes, setVisualNodes] = useState([]);

  const [inputValue, setInputValue] = useState(5);
  const [inputIndex, setInputIndex] = useState(2);

  const [operation, setOperation] = useState("none");
  const [message, setMessage] = useState("Choose an operation to start visualization");
  const [output, setOutput] = useState("");

  const [currentLine, setCurrentLine] = useState(-1);

  const [speed, setSpeed] = useState(2000);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [stepArr, setStepArr] = useState([]);
  const [currentLineArr, setCurrentLineArr] = useState([]);
  const [messageArr, setMessageArr] = useState([]);
  const [outputArr, setOutputArr] = useState([]);
  const [visualNodesArr, setVisualNodesArr] = useState([]);

  const [showIndexes, setShowIndexes] = useState(false);

  const [cycle,setCycle] = useState(false);

  const totalSteps = stepArr.length;


  // ================= PLAY ENGINE =================
  useEffect(() => {
    if (step >= stepArr.length) {
      setStep(0);
      setIsPlaying(false);
      return;
    }

    if(output && step === stepArr.length-1) setTimeout(() => setOutput(false),5000); 

    if (isPlaying) {
      const timer = setTimeout(() => {
        setLinkedList(stepArr[step]);
        setCurrentLine(currentLineArr[step]);
        if (messageArr[step]) setMessage(messageArr[step]);
        if (visualNodesArr[step]) setVisualNodes(visualNodesArr[step]);
        if (outputArr[step]) setOutput(outputArr[step]);
        setStep((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      if (step === 0) return;

      setLinkedList(stepArr[step]);
      setCurrentLine(currentLineArr[step]);
      if (messageArr[step]) setMessage(messageArr[step]);
      if (visualNodesArr[step]) setVisualNodes(visualNodesArr[step]);
      if (outputArr[step]) setOutput(outputArr[step]);
    }
  }, [step, isPlaying, stepArr]);

  // ================= OPERATIONS =================
  function handleStart() {
    setIsPlaying(true);
    setVisualNodesArr([]);
    if(!cycle) setVisualNodes(false);
    setOutputArr([]);
    setStep(0);

    const operationMap = {
      addFirst: () =>
        handleAddFirst(linkedlist, inputValue, setStepArr, setMessageArr, setCurrentLineArr, setVisualNodesArr),

      addLast: () =>
        handleAddLast(linkedlist, inputValue, setStepArr, setMessageArr, setCurrentLineArr, setVisualNodesArr),

      add: () =>
        handleAdd(linkedlist, inputValue, inputIndex, setStepArr, setMessageArr, setCurrentLineArr, setVisualNodesArr, setOutputArr),

      removeFirst: () =>
        handleRemoveFirst(linkedlist, inputValue, setStepArr, setMessageArr, setCurrentLineArr, setOutputArr),

      removeLast: () =>
        handleRemoveLast(linkedlist, inputValue, setStepArr, setMessageArr, setCurrentLineArr, setOutputArr),

      remove: () =>
        handleRemove(linkedlist, inputIndex, setStepArr, setMessageArr, setCurrentLineArr, setOutputArr),

      traverse: () =>
        handleTraverse(linkedlist, setStepArr, setMessageArr, setCurrentLineArr, setOutputArr),

      get: () =>
        handleGet(linkedlist, inputIndex, setStepArr, setMessageArr, setCurrentLineArr, setOutputArr),

      update: () =>
        handleUpdate(linkedlist, inputIndex, inputValue, setStepArr, setMessageArr, setCurrentLineArr, setOutputArr),

      search: () =>
        handleSearch(linkedlist, inputValue, setStepArr, setMessageArr, setCurrentLineArr, setOutputArr),

      isEmpty: () =>
        handleIsEmpty(linkedlist, setStepArr, setMessageArr, setCurrentLineArr, setOutputArr),

      size: () =>
        handleSize(linkedlist, setStepArr, setMessageArr, setCurrentLineArr, setOutputArr),

      midNode: () =>
        handleMidNode(linkedlist, setStepArr, setMessageArr, setCurrentLineArr, setOutputArr),

      reverse: () => 
        handleReverse(linkedlist, setStepArr, setMessageArr, setCurrentLineArr, setOutputArr),
      
      detectCycle: () =>
          handleDetectCycle(linkedlist,setStepArr,setVisualNodesArr, setMessageArr,setCurrentLineArr,setOutputArr,cycle),

    };

    operationMap[operation]?.();
  }

  function onQuit() {
    if (stepArr.length) setLinkedList([...stepArr[0]]);
    setStepArr([]);
    setCurrentLine(-1);
    setIsPlaying(false);
    setVisualNodes(false);
  }

  // ================= UI =================
  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-slate-900">

      {/* TOP: 50% VISUAL */}
      <div className="h-[45%] flex items-center justify-center px-2">
        <LinkedListDisplay
          linkedlist={linkedlist}
          visualNodes={visualNodes}
          showIndexes={showIndexes}
          operation={operation}
          cycle={setCycle}
        />
      </div>

      {/* MIDDLE: REMAINING */}
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-3 p-3">

        {/* LEFT PANEL */}
        <div className="flex flex-col min-h-0 bg-white dark:bg-slate-800 rounded-xl shadow overflow-hidden">
          <div className="flex-1 overflow-y-auto p-3">
            {operation !== "none" ? (
              <CodeVisual
                code={linkedListData.code[operation]}
                currentLine={currentLine}
              />
            ) : (
              <LinkedListHeader
                linkedlist={linkedlist}
                setLinkedList={setLinkedList}
                setMessage={setMessage}
              />
            )}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col min-h-0 bg-white dark:bg-slate-800 rounded-xl shadow overflow-hidden">
          <div className="flex-1 overflow-y-auto p-3">
            <Operations
              linkedlist={linkedlist}
              setLinkedlist={setLinkedList}
              setMessage={setMessage}
              setVisualNodes={setVisualNodes}
              stepArr={stepArr}
              visualNodesArr={visualNodesArr}
              operation={operation}
              setOperation={setOperation}
              message={message}
              inputValue={inputValue}
              setInputValue={setInputValue}
              inputIndex={inputIndex}
              setInputIndex={setInputIndex}
              handleStart={handleStart}
              onQuit={onQuit}
              isRunning={isPlaying}
              output={output}
              setOutput={setOutput}
              showIndexes={showIndexes}
              setShowIndexes={setShowIndexes}
              cycle={cycle}
              setCycle={setCycle}
              step={step}
            />
          </div>
        </div>
      </div>

      {/* PLAYBAR */}
      <div className="shrink-0">
        <PlayBar
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          step={step}
          setStep={setStep}
          speed={speed}
          setSpeed={setSpeed}
          totalSteps={totalSteps}
          onQuit={onQuit}
        />
      </div>
    </div>
  );
}
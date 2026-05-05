import { useState,useEffect } from "react";

import { linkedListData } from "../../../data/data-structure/LinkedListData";

import LinkedListDisplay from "./components/LinkedListDisplay";
import PlayBar from "../../../components/PlayBar";
import LinkedListHeader from "./components/LinkedListHeader";
import Operations from "./components/Operations";
import CodeVisual from "../../../components/CodeVisual";

import { handleAddFirst } from "./logic/addFirst";
import { handleAddLast } from "./logic/addLast";
import { handleRemoveFirst } from "./logic/removeFirst";
import { handleRemoveLast } from "./logic/removeLast";
import { handleAdd } from "./logic/add";
import { handleRemove } from "./logic/remove";
import { handleTraverse } from "./logic/traverse";
import { handleGet } from "./logic/get";
import { handleUpdate } from "./logic/update";
import { handleSearch } from "./logic/search";
import { handleIsEmpty } from "./logic/isEmpty";
import { handleSize } from "./logic/size";

export default function LinkedList() {
  const initialLL = [
    { id: 0, value: 1, state: "normal", arrow: "forward" , tag:null},
    { id: 1, value: 12, state: "normal", arrow: "forward" , tag:null},
    { id: 2, value: 5, state: "normal", arrow: "forward" , tag:null},
    { id: 3, value: 0, state: "null", arrow: "forward" , tag:null},
  ];

  const [linkedlist, setLinkedList] = useState(initialLL);
  const [visualNodes, setVisualNodes] = useState([]);

  const [inputValue, setInputValue] = useState(5);
  const [inputIndex, setInputIndex] = useState(2);

  const [operation, setOperation] = useState("none");
  const [message, setMessage] = useState("Choose an operation to start visualization");
  const [output,setOutput] = useState("");

  const [tasking, setTasking] = useState(false);
  const [currentLine, setCurrentLine] = useState(-1);

  const [speed, setSpeed] = useState(2000);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [stepArr,setStepArr] = useState([]);
  const [currentLineArr,setCurrentLineArr] = useState([]);
  const [messageArr, setMessageArr] = useState([]);
  const [outputArr,setOutputArr] = useState([]);
  const [visualNodesArr,setVisualNodesArr] = useState("");

  let totalSteps = stepArr.length;
  
   useEffect(() => {
      if(isPlaying){
        if (step >= stepArr.length){ 
          setStep(0);
          setIsPlaying(false);
          return;
        }

        if(outputArr[step]){
          setOutput(outputArr[step]);
        }

        if (outputArr.length > 0 && step == stepArr.length-1){
          setTimeout(() => setOutput(""),6000);
          // setOutputArr([]);
        }
  
        const timer = setTimeout(() => {
          setLinkedList(stepArr[step]);
          setCurrentLine(currentLineArr[step]);
          if(messageArr[step]) setMessage(messageArr[step]);
          if(visualNodesArr[step]) setVisualNodes(visualNodesArr[step]);
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

        if (outputArr[step]){
          setOutput(outputArr[step]);
        }

        if (outputArr.length > 0 && output && step == stepArr.length-1){
          setTimeout(() => setOutput(""),6000);
          // setOutputArr([]);
        }

          setLinkedList(stepArr[step]);
          setCurrentLine(currentLineArr[step]);
          if(messageArr[step]) setMessage(messageArr[step]);
          if(visualNodesArr[step]) setVisualNodes(visualNodesArr[step]);
      }

    },[step, stepArr,isPlaying]);

    function handleStart() {
      setIsPlaying(true);
      setVisualNodesArr(false);
      setOutputArr([]);

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
          handleIsEmpty({ linkedlist, setStepArr, setMessageArr, setCurrentLineArr, setOutputArr }),

        size: () =>
          handleSize(linkedlist, setStepArr, setMessageArr, setCurrentLineArr, setOutputArr),
      };

      operationMap[operation]?.(); 
  }

    function onQuit(){
    if(stepArr.length){ 
      setLinkedList([...stepArr[0]])
      setStepArr([]);
    };


    setCurrentLine(-1);
    setIsPlaying(false);
  }

  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-slate-900">

      {/* TOP: LinkedList Display (40%) */}
      <div className="h-[40%] w-full flex items-center justify-center overflow-visible">
        <LinkedListDisplay
          linkedlist={linkedlist}
          visualNodes={visualNodes}
        />
      </div>

      {/* MIDDLE: Left + Right Panel (remaining space except playbar) */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-hidden">

        {/* LEFT: Code / Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-2 overflow-hidden">
          {operation !== "none" ? (
            <div className="h-full overflow-auto">
              <CodeVisual code={linkedListData.code[operation]}  currentLine={currentLine}/>
            </div>
          ) : (
            <LinkedListHeader  linkedlist={linkedlist} setLinkedList={setLinkedList} setMessage={setMessage} />
          )}
        </div>

        {/* RIGHT: Operation Panel */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 overflow-auto">
          {/* Operation List */}
          <Operations 
            linkedlist={linkedlist} 
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
          />
        </div>
      </div>

      {/* BOTTOM: PlayBar (fixed height) */}
      <div className="shrink-0">
        <PlayBar  isPlaying={isPlaying} setIsPlaying={setIsPlaying} step={step} setStep={setStep} speed={speed} setSpeed={setSpeed} totalSteps={totalSteps} onQuit={onQuit} />
      </div>

    </div>
  );
}
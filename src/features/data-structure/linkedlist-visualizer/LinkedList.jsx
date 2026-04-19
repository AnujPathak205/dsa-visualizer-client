import { useState,useEffect } from "react";
import LinkedListDisplay from "./components/LinkedListDisplay";
import CodeVisual from "../../../components/CodeVisual";
import { linkedListData } from "../../../data/data-structure/LinkedListData";
import PlayBar from "../../../components/PlayBar";
import LinkedListHeader from "./components/LinkedListHeader";
import Operations from "./components/Operations";


export default function LinkedList() {
  const initialLL = [
    { id: 0, value: 12, state: "normal", arrow: "forward" },
    { id: 2, value: 1, state: "normal", arrow: "forward" },
    { id: 3, value: 7, state: "normal", arrow: "forward" },
    { id: 4, value: 8, state: "normal", arrow: "forward" },
    { id: 5, value: 8, state: "normal", arrow: "forward" },
    { id: 6, value: 8, state: "normal", arrow: "forward" },
    { id: 7, value: 8, state: "null", arrow: "forward" },
  ];

  const initialVisualNodes = [
    { id: 0, value: 12, state: "normal", arrow: "down" },
    { id: 2, value: 1, state: "unvisible", arrow: "forward" },
    { id: 3, value: 7, state: "unvisible", arrow: "forward" },
    { id: 4, value: 8, state: "unvisible", arrow: "forward" },
    { id: 5, value: 8, state: "unvisible", arrow: "forward" },
    { id: 6, value: 8, state: "unvisible", arrow: "forward" },
    { id: 7, value: 8, state: "unvisible", arrow: "forward" },
  ];

  const [linkedlist, setLinkedList] = useState(initialLL);
  const [visualNodes, setVisualNodes] = useState(initialVisualNodes);

  const [inputValue, setInputValue] = useState(5);
  const [inputIndex, setInputIndex] = useState(2);

  const [operation, setOperation] = useState("none");
  const [message, setMessage] = useState("Choose an operation to start visualization # i = 0");

  const [tasking, setTasking] = useState(false);
  const [currentLine, setCurrentLine] = useState(-1);

  const [speed, setSpeed] = useState(1000);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [stepArr,setStepArr] = useState([]);
  const [currentLineArr,setCurrentLineArr] = useState([]);
  const [messageArr, setMessageArr] = useState("Choose an operation to start visualization");
  

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
              <CodeVisual code={linkedListData.code[operation]} />
            </div>
          ) : (
            <LinkedListHeader />
          )}
        </div>

        {/* RIGHT: Operation Panel */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 overflow-auto">
          {/* Operation List */}
          <Operations linkedlist={linkedlist} operation={operation} setOperation={setOperation} message={message} />
        </div>
      </div>

      {/* BOTTOM: PlayBar (fixed height) */}
      <div className="shrink-0">
        <PlayBar />
      </div>

    </div>
  );
}
import { line } from "framer-motion/client";
import { sleep,getKey } from "./helperFunctions";

function generateInsertionSteps(array,n,setN,inputIndex,inputValue,setOutput) {
    let steps = [];
    let lines = [];
    let messages = [];
    const capacity = array.length;
    let newArr = [...array];

    if(n >= capacity){
      setOutput("Insertion not possible (Array is full)");
      setTimeout(() => {setOutput("")},5000);
      steps.push([...newArr]);
      steps.push([...newArr]);
      steps.push([...newArr]);
      lines.push(3);
      lines.push(4);
      lines.push(5);
      messages.push(false);
      messages.push(false);
      messages.push("Array is full");
      return {stepsArr:steps,linesArr:lines,messagesArr:messages};
    }

    steps.push([...newArr]);
    lines.push(9);
    messages.push("Shifting elements to right");

    for (let i = n-1; i >= inputIndex; i--) {
      newArr[i+1] = {...newArr[i]};
      newArr[i] = {id: getKey(), state: "unvisible"};
      lines.push(10);
      messages.push(false);
      steps.push([...newArr]);
    }

    newArr[inputIndex] = {
      id: getKey(),
      value: inputValue,
      state: "inserted"
    };

    steps.push([...newArr]);
    lines.push(14);
    messages.push(`Element ${inputValue} is inserted at index ${inputIndex} `);

    newArr[inputIndex] = {
      id: getKey(),
      value:inputValue,
      state: "normal",
    };
    
    steps.push([...newArr]);
    lines.push(14);
    messages.push(false);

    setN(prev => prev+1);

    return {stepsArr:steps,linesArr:lines,messagesArr:messages};
}

  export async function handleInsertion(array,setArray,setStepArr,n,setN,inputIndex,inputValue,setMessage,setTasking,speed,setCurrentLine,setOutput){
    setOutput("");
    if(inputValue == "" || inputIndex == ""){
      setMessage("Please provide both value and index to insert.");
      return;
    };

    if(inputIndex > array.length){
      setMessage("Index out of bounds. Please enter a valid index.");
      return;
    }

    const stepInfo = generateInsertionSteps(array,n,setN,inputIndex,inputValue,setOutput);
    const stepsArr = stepInfo.stepsArr;
    const linesArr = stepInfo.linesArr;
    const messagesArr = stepInfo.messagesArr;
    
    // for(let i = 0;i < stepsArr.length;i++){
    //   if(messagesArr[i]) setMessage(messagesArr[i]);
    //   setArray(stepsArr[i]);
    //   setCurrentLine(linesArr[i]);
    //   await sleep(speed);
    // }

    setStepArr([...stepsArr]);

    setTimeout(() => setCurrentLine(-1),5000); 

}



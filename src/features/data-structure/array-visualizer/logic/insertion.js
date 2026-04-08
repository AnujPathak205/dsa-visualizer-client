import { line } from "framer-motion/client";
import { sleep,getKey } from "./helperFunctions";

function generateInsertionSteps(array,n,setN,inputIndex,inputValue,setOutput) {
    let steps = [];
    let lines = [];
    let messages = [];
    const capacity = array.length;
    let newArr = [...array];

    steps.push([...newArr]);
    lines.push(1);
    messages.push(false);

    if(n >= capacity || inputIndex < 0 || inputIndex > n){
      setOutput("Insertion not possible");
      steps.push([...newArr]);
      steps.push([...newArr]);
      steps.push([...newArr]);
      lines.push(3);
      lines.push(4);
      lines.push(5);
      messages.push(false);
      messages.push(false);
      messages.push("insertion is not possible here,check input index");
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

  export async function handleInsertion(array,setArray,stepArr,setStepArr,n,setN,inputIndex,inputValue,setOutput,setCurrentLineArr,setMessage,setMessageArr){
    setOutput("");
    setStepArr([]);
    if(inputValue == "" || inputIndex == ""){
      setMessage("Please provide both value and index to insert.");
      return;
    };

    // if(stepArr.length) setArray(stepArr[stepArr.length-1]);
    // setArray(...[]);
    // console.log(array);
    // console.log(stepArr[stepArr.length-1]);

    const stepInfo = generateInsertionSteps(array,n,setN,inputIndex,inputValue,setOutput);
    const stepsArr = stepInfo.stepsArr;
    const linesArr = stepInfo.linesArr;
    const messagesArr = stepInfo.messagesArr;
    
    setStepArr([...stepsArr]);
    setCurrentLineArr([...linesArr]);
    setMessageArr([...messagesArr]);

}



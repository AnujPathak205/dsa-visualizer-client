import { sleep,getKey } from "./helperFunctions";

function generateDeletionSteps(array,n,setN,inputIndex,setOutput) {
    let steps = [];
    let lines = [];
    let messages = [];
    const capacity = array.length;
    let newArr = [...array];

    steps.push([...newArr]);
    lines.push(1);
    messages.push(false);

    if(n <= 0|| inputIndex < 0 || inputIndex >= n){
      setOutput("Deletion not possible");
      steps.push([...newArr]);
      steps.push([...newArr]);
      steps.push([...newArr]);
      lines.push(3);
      lines.push(4);
      lines.push(5);
      messages.push(false);
      messages.push(false);
      messages.push("deletion not possible");
      return {stepsArr:steps,linesArr:lines,messagesArr:messages};
    }

    newArr[inputIndex] = {
      id:getKey(),
      value:null,
      state:"deleted"
    }
    lines.push(9);
    messages.push("Shifting elements to left");
    steps.push([...newArr]);


    for (let i = inputIndex;i < n-1;i++) {
      newArr[i] = {...newArr[i+1]};
      newArr[i+1] = {id: getKey(), state: "normal",value:null};
      lines.push(10);
      messages.push(false);
      steps.push([...newArr]);
    }

   if(inputIndex+1 == n){
    newArr[inputIndex] = {
      id:getKey(),
      value:null,
      state:"normal"
    }
    steps.push([...newArr]);
    lines.push(9);
    messages.push(false);
   }

    steps.push([...newArr]);
    lines.push(14);
    messages.push(false);

    setN(prev => prev-1);

    return {stepsArr:steps,linesArr:lines,messagesArr:messages};
}

  export async function handleDeletion(array,setArray,stepArr,setStepArr,n,setN,inputIndex,setOutput,setCurrentLineArr,setMessage,setMessageArr){
    setStepArr([]);
    setOutput("");

    if(inputIndex == ""){
      setMessage("Please provide index to delete.");
      return;
    };

    const stepInfo = generateDeletionSteps(array,n,setN,inputIndex,setOutput);
    const stepsArr = stepInfo.stepsArr;
    const linesArr = stepInfo.linesArr;
    const messagesArr = stepInfo.messagesArr;
    
    setStepArr([...stepsArr]);
    setCurrentLineArr([...linesArr]);
    setMessageArr([...messagesArr]);


}



import { getKey } from "./helperFunctions";

function generateSearchSteps(array,n,setN,inputValue,setOutput){
  let steps = [];
  let lines = [];
  let messages = [];
  let newArr = [...array];

  steps.push([...newArr]);
  lines.push(1);
  messages.push("Performing search operation");

  for(let i = 0;i < n;i++){
    if(array[i].value == inputValue){
      setOutput(`Element found at index: ${i}`);

      newArr[i] = {
        id:getKey(),
        value:newArr[i].value,
        state:"found"
      }

      steps.push([...newArr]);
      lines.push(3);
      messages.push(`Element ${inputValue} found at index ${i}`);

      steps.push([...newArr]);
      lines.push(4);
      messages.push(false);

      newArr[i] = {
        id:newArr[i].id,
        value:newArr[i].value,
        state:"normal"
      }

      steps.push([...newArr]);
      lines.push(5);
      messages.push(false);

      return {stepsArr:steps,linesArr:lines,messagesArr:messages};
    }

    newArr[i] = {
      id:getKey(),
      value:newArr[i].value,
      state:"searching"
    }

    steps.push([...newArr]);
    lines.push(2);
    messages.push(`Searching on index: ${i}...`);

    newArr[i] = {
      id:newArr[i].id,
      value:newArr[i].value,
      state:"normal"
    }

    steps.push([...newArr]);
    lines.push(2);
    messages.push(false);

  }

  setOutput(`Element not found`);

  steps.push([...newArr]);
  lines.push(9);
  messages.push(`Element ${inputValue} not found in array.`);

  return {stepsArr:steps,linesArr:lines,messagesArr:messages};
}

export async function handleSearch(array,setArray,stepArr,setStepArr,n,setN,inputValue,setOutput,setCurrentLineArr,setMessage,setMessageArr) {
  if(inputValue == ""){
    setMessage("Please enter a value to perform linear search");
    return;
  };

  const stepInfo = generateSearchSteps(array,n,setN,inputValue,setOutput);
  const stepsArr = stepInfo.stepsArr;
  const linesArr = stepInfo.linesArr;
  const messagesArr = stepInfo.messagesArr;
  
  setStepArr([...stepsArr]);
  setCurrentLineArr([...linesArr]);
  setMessageArr([...messagesArr]);
  
}
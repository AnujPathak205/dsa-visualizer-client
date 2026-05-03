import { getKey } from "../../array-visualizer/logic/helperFunctions";

export function handleRemoveFirst(linkedlist,inputValue,setStepArr,setMessageArr,setCurrentLineArr,setOutputArr){    
    let steps = [];
    let visualNodesSteps = [];
    let lines = [];
    let messages = [];
    const size = linkedlist.length-1;

    let newLL = linkedlist.map(node => ({...node}));

    steps.push(newLL.map(node => ({...node}) ));
    messages.push("Starting remove first operation");
    lines.push(1);
    outputs.push(false);

    

    
    
    setStepArr([...steps]);
    setVisualNodesArr([...visualNodesSteps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
}
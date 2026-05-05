export function handleSize(linkedlist,setStepArr,setMessageArr,setCurrentLineArr,setOutputArr){
    let steps = [];
    let lines = [];
    let messages = [];
    let outputs = [];
    const size = linkedlist.length-1;

    let newLL = linkedlist.map(node => ({...node}));

    steps.push(newLL.map(node => ({...node})));
    messages.push(`Starting size operation to fetch size variable`);
    lines.push(1);
    outputs.push(false);

    steps.push(newLL.map(node => ({...node})));
    messages.push(`Printing size of linkedlist (size variable)`);
    lines.push(3);
    outputs.push(`${size}`);

    setStepArr([...steps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
    setOutputArr([...outputs]);
}
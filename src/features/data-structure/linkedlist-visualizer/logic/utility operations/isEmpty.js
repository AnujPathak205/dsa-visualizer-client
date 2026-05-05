export function handleIsEmpty({linkedlist,setStepArr,setMessageArr,setCurrentLineArr,setOutputArr}){
    let steps = [];
    let lines = [];
    let messages = [];
    let outputs = [];
    const size = linkedlist.length-1;

    let newLL = linkedlist.map(node => ({...node}));

    steps.push(newLL.map(node => ({...node})));
    messages.push(`Starting isEmpty operation to check linkedlist is empty or not`);
    lines.push(1);
    outputs.push(false);

    steps.push(newLL.map(node => ({...node})));
    messages.push(`Checking size == 0`);
    lines.push(3);
    outputs.push(false);

    if(size === 0){
        steps.push(newLL.map(node => ({...node})));
        messages.push(`size is 0 # linkedlist is empty`);
        lines.push(4);
        outputs.push("true");
    }else{
        steps.push(newLL.map(node => ({...node})));
        messages.push(`size is not 0 # linkedlist is not empty`);
        lines.push(6);
        outputs.push("false");
    }

    setStepArr([...steps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
    setOutputArr([...outputs]);
}
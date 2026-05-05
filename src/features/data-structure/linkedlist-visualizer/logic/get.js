export function handleGet(linkedlist,inputIndex,setStepArr,setMessageArr,setCurrentLineArr,setOutputArr){
    let steps = [];
    let lines = [];
    let messages = [];
    let outputs = [];
    const size = linkedlist.length-1;

    let newLL = linkedlist.map(node => ({...node}));

    steps.push(newLL.map(node => ({...node})));
    messages.push(`Starting Get operation to find value at ${inputIndex}`);
    lines.push(1);
    outputs.push(false);


    if(inputIndex < 0 || inputIndex >= size){
        steps.push(newLL.map(node => ({...node})));
        messages.push("Validating index range # if(index < 0 || index >= size)");
        lines.push(3);
        outputs.push(false);

        steps.push(newLL.map(node => ({...node})));
        messages.push(false);
        lines.push(4);
        outputs.push(false);

        steps.push(newLL.map(node => ({...node})));
        messages.push("Invalid index provided # Index out of bound # return");
        lines.push(5);
        outputs.push("Index out of bound");
    }else{
        newLL[0].state = "traversing";
        newLL[0].tag = "node";

        steps.push(newLL.map((node) => ({ ...node })));
        messages.push("Initializing traversal pointer # Node node = head");
        lines.push(9);
        outputs.push(false);

        steps.push(newLL.map((node) => ({ ...node })));
        messages.push("Traversing to tail node# for loop");
        lines.push(12);
        outputs.push(false);

        let i;
        for (i = 1; i < inputIndex+1; i++) {
            newLL[i - 1].state = "normal";
            newLL[i - 1].tag = null;

            newLL[i].state = "traversing";
            newLL[i].tag = "node";

            steps.push(newLL.map((node) => ({ ...node })));
            messages.push(`Moving to next node # node = node.next (step ${i}) # i = ${i-1}`);
            lines.push(13);
            outputs.push(false);
        }

        newLL[i-1].state = "inserted";

        steps.push(newLL.map((node) => ({ ...node })));
        messages.push(`Reached to index ${inputIndex}`);
        lines.push(17);
        outputs.push(false);

        newLL[i-1].state = "normal";
        newLL[i-1].tag = null;

        steps.push(newLL.map((node) => ({ ...node })));
        messages.push(`Printing node.data which is ${newLL[inputIndex].value}`);
        lines.push(17);
        outputs.push(`${newLL[inputIndex].value}`);

    }


    setStepArr([...steps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
    setOutputArr([...outputs]);
}
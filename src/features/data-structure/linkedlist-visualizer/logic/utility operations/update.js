export function handleUpdate(linkedlist,inputIndex,inputValue,setStepArr,setMessageArr,setCurrentLineArr,setOutputArr){
    let steps = [];
    let lines = [];
    let messages = [];
    let outputs = [];
    const size = linkedlist.length-1;

    let newLL = linkedlist.map(node => ({...node}));

    steps.push(newLL.map(node => ({...node})));
    messages.push(`Starting Update operation to set new data at ${inputIndex}`);
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
        lines.push(12);
        outputs.push(false);

        let i;
        for(i = 1;i < inputIndex+1;i++){
            newLL[i-1].state = "normal";
            newLL[i-1].tag = null;

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

        newLL[i-1].value = inputValue;

        steps.push(newLL.map((node) => ({ ...node })));
        messages.push(`Value is updated # node.data = data`);
        lines.push(17);
        outputs.push(false);

        newLL[i-1].state = "normal";

        steps.push(newLL.map((node) => ({ ...node })));
        messages.push(false);
        lines.push(20);
        outputs.push("Updated successfully");    

    }


    setStepArr([...steps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
    setOutputArr([...outputs]);
}
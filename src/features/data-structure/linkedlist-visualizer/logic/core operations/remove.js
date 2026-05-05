export function handleRemove(linkedlist,inputIndex,setStepArr,setMessageArr,setCurrentLineArr,setOutputArr){
    let steps = [];
    let visualNodesSteps = [];
    let lines = [];
    let messages = [];
    let outputs = [];
    const size = linkedlist.length-1;

    let newLL = linkedlist.map(node => ({...node}));

    steps.push(newLL.map(node => ({...node})));
    messages.push("Starting remove operation");
    lines.push(1);
    outputs.push(false);

    if(inputIndex < 0 || inputIndex >= size){
        steps.push(newLL.map(node => ({...node})));
        messages.push("Validating index range # if(index < 0 || index >= size)");
        lines.push(2);
        outputs.push(false);

        steps.push(newLL.map(node => ({...node})));
        messages.push(false);
        lines.push(3);
        outputs.push(false);

        steps.push(newLL.map(node => ({...node})));
        messages.push("Invalid index provided # Index out of bound");
        lines.push(4);
        outputs.push("Index is out of bound");

        setOutputArr([...outputs]);
    }else if(inputIndex === 0){
        steps.push(newLL.map(node => ({...node})));
        messages.push("Checking if removal is at head position # index == 0");
        lines.push(7);

        newLL[0].state = "deleted";

        steps.push(newLL.map(node => ({...node})));
        messages.push("Removing first node # removeFirst()");
        lines.push(8);

        newLL.shift();

        steps.push(newLL.map(node => ({...node})));
        messages.push("Head updated to next node");
        lines.push(9);
    }else if(inputIndex === size-1){
        steps.push(newLL.map(node => ({...node})));
        messages.push("Checking if removal is at tail position # index == size-1");
        lines.push(12);

        newLL[size-1].state = "deleted";

        steps.push(newLL.map(node => ({...node})));
        messages.push("Removing last node # removeLast()");
        lines.push(13);

        newLL[size-1] = newLL[size];
        newLL.pop();

        steps.push(newLL.map(node => ({...node})));
        messages.push("Tail updated to previous node");
        lines.push(14);
    }else{
        // initialize traversal
        newLL[0].state = "traversing";
        newLL[0].tag = "node";

        steps.push(newLL.map((node) => ({ ...node })));
        messages.push("Initializing traversal pointer # Node node = head");
        lines.push(18);

        steps.push(newLL.map((node) => ({ ...node })));
        messages.push("Traversing to node before target index # for loop");
        lines.push(19);

        let i;
        for (i = 1; i < inputIndex; i++) {
            newLL[i - 1].state = "normal";
            newLL[i - 1].tag = null;

            newLL[i].state = "traversing";
            newLL[i].tag = "node";

            steps.push(newLL.map((node) => ({ ...node })));
            messages.push(`Moving to next node # node = node.next (step ${i})`);
            lines.push(20);
        }

        newLL[inputIndex].state = "deleted";

        steps.push(newLL.map((node) => ({ ...node })));
        messages.push("Bypassing target node # node.next = node.next.next");
        lines.push(24);

        newLL.splice(inputIndex,1);
        newLL[i-1].state = "normal";

        steps.push(newLL.map((node) => ({ ...node })));
        messages.push("Node removed from the list");
        lines.push(24);

        steps.push(newLL.map((node) => ({ ...node })));
        messages.push("Updating size of linked list # size--");
        lines.push(26);
    }

    setStepArr([...steps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
}
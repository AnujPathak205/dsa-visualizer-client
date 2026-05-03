import { getKey } from "../../array-visualizer/logic/helperFunctions";

export function handleRemoveLast(linkedlist,inputValue,setStepArr,setMessageArr,setCurrentLineArr,setOutputArr){    
    let steps = [];
    let visualNodesSteps = [];
    let lines = [];
    let messages = [];
    let outputs = [];
    const size = linkedlist.length-1;

    let newLL = linkedlist.map(node => ({...node}));

    steps.push(newLL.map(node => ({...node})));
    messages.push("Starting remove last operation");
    lines.push(1);
    outputs.push(false);

    if(size === 0){
        steps.push(newLL.map(node => ({...node})));
        messages.push("Checking if list is empty # head == null");
        lines.push(2);
        outputs.push(false);

        steps.push(newLL.map(node => ({...node})));
        messages.push(false);
        lines.push(3);
        outputs.push(false);

        steps.push(newLL.map(node => ({...node})));
        messages.push("Cannot remove element # LinkedList is empty");
        lines.push(4);
        outputs.push("List is already empty");

        setOutputArr([...outputs]);

    }else if(size === 1){
        newLL[0].state = "deleted";

        steps.push(newLL.map(node => ({...node})));
        messages.push("Checking single node case # head == tail");
        lines.push(7);

        newLL.shift();

        steps.push(newLL.map(node => ({...node})));
        messages.push("Removing only node # head = tail = null");
        lines.push(8);

        steps.push(newLL.map(node => ({...node})));
        messages.push("Updating size # size--");
        lines.push(9);

        steps.push(newLL.map(node => ({...node})));
        messages.push(false);
        lines.push(10);

    }else{
        newLL[0].state = "traversing";
        newLL[0].tag = "node";

        steps.push(newLL.map(node => ({...node})));
        messages.push("Initializing traversal pointer # Node node = head");
        lines.push(14);

        steps.push(newLL.map(node => ({...node})));
        messages.push("Traversing to second last node # while(node.next != tail)");
        lines.push(15);

        for(let i = 1;i < size-1;i++){
            newLL[i-1].state = "normal";
            newLL[i-1].tag = null;
            newLL[i].state = "traversing";
            newLL[i].tag = "node"

            steps.push(newLL.map(node => ({...node})));
            if(i == 1) messages.push("Traversing to second last node # node = node.next");
            else messages.push(false);
            lines.push(16);
        }

        newLL[size-2].state = "inserted";

        steps.push(newLL.map(node => ({...node})));
        messages.push("Second last node found");
        lines.push(16);

        newLL[size-2].state = "normal";
        newLL[size-1].state = "deleted";

        steps.push(newLL.map(node => ({...node})));
        messages.push("Disconnecting last node # node.next = null");
        lines.push(20);

        newLL[size-2].tag = null;
        newLL[size-1] = newLL[size];
        newLL.pop();

        steps.push(newLL.map(node => ({...node})));
        messages.push("Updating tail reference # tail = node");
        lines.push(23);

        steps.push(newLL.map(node => ({...node}) ));
        messages.push("Updating size # size--");
        lines.push(25);
    }

    setStepArr([...steps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
}
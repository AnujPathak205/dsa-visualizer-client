export function handleTraverse(
  linkedlist,
  setStepArr,
  setMessageArr,
  setCurrentLineArr,
  setOutputArr
){
    let steps = [];
    let visualNodesSteps = [];
    let lines = [];
    let messages = [];
    let outputs = [];
    const size = linkedlist.length-1;

    let newLL = linkedlist.map(node => ({...node}));

    steps.push(newLL.map((node) => ({...node})));
    messages.push("Starting traversal of linked list");
    lines.push(1);
    outputs.push(false);

    if(size === 0){
        steps.push(newLL.map((node) => ({...node})));
        messages.push("Checking if list is empty # if(head == null)");
        lines.push(2);
        outputs.push(false);

        steps.push(newLL.map((node) => ({...node})));
        messages.push("Linked list is empty");
        lines.push(3);
        outputs.push("LinkedList is empty"); 
    }else{
        newLL[0].state = "traversing";
        newLL[0].tag = "node";

        steps.push(newLL.map((node) => ({ ...node })));
        messages.push("Initializing traversal pointer # Node node = head");
        lines.push(8);
        outputs.push(false);

        steps.push(newLL.map((node) => ({ ...node })));
        messages.push("Iterating through list until null # while(node != null)");
        lines.push(11);
        outputs.push(false);

        let outputStr = "";

        for(let i = 1;i < size;i++){
            outputStr += `${newLL[i-1].value} -> `;

            steps.push(newLL.map((node) => ({ ...node })));
            messages.push("Visiting current node and adding value to output # print(node.data)");
            lines.push(12);
            outputs.push(outputStr);

            newLL[i-1].state = "normal";
            newLL[i-1].tag = null;

            newLL[i].state = "traversing";
            newLL[i].tag = "node";

            steps.push(newLL.map((node) => ({ ...node })));
            messages.push("Moving pointer to next node # node = node.next");
            lines.push(13);
            outputs.push(false);
        }

        newLL[size-1].state = "normal";
        newLL[size-1].tag = null;
        outputStr += "null";

        steps.push(newLL.map((node) => ({ ...node })));
        messages.push("Reached end of list # node becomes null");
        lines.push(16);
        outputs.push(outputStr);
    }

    setStepArr([...steps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
    setOutputArr([...outputs]);
}
import { getKey } from "../../array-visualizer/logic/helperFunctions";

export function handleAddLast(linkedlist,inputValue,setStepArr,setMessageArr,setCurrentLineArr,setVisualNodesArr){
    let steps = [];
    let visualNodesSteps = [];
    let lines = [];
    let messages = [];
    const size = linkedlist.length-1;

    let newLL = linkedlist.map(node => ({...node}));
    let newVisualNodes = linkedlist.map(node => ({ ...node }));

    for(let i = 0;i < newVisualNodes.length;i++){
        newVisualNodes[i].state = "unvisible";
    }

    steps.push(newLL.map(node => ({...node}) ));
    visualNodesSteps.push([]);
    messages.push("Starting add last operation");
    lines.push(1);

    if(size !== 0){
        newVisualNodes[size-1].state = "normal";
        newVisualNodes[size-1].value = inputValue;
        newVisualNodes[size].state = "null";
    }else{
        newVisualNodes[0].state = "normal";
        newVisualNodes[0].value = inputValue;

        newVisualNodes.push({
            id:getKey(),
            inputValue:0,
            state:"null",
            arrow:"forward"
        });

    }

    steps.push(newLL.map(node => ({...node}) ));
    visualNodesSteps.push(newVisualNodes.map(node => ({...node}) ));
    messages.push(`Creating new Node with value ${inputValue} `);
    lines.push(3);

    if(size === 0){
        newVisualNodes[0].state = "unvisible";
        newVisualNodes[1].state = "unvisible";

        newLL.unshift({
            id:getKey(),
            value:inputValue,
            state:"inserted",
            arrow:"forward"
        })

        steps.push(newLL.map((el) => ({...el}) ));
        visualNodesSteps.push([]);
        messages.push(`here head is null # head = tail = newNode`);
        lines.push(6);

        newLL[0].state = "normal";

        steps.push(newLL.map((el) => ({...el}) ));
        visualNodesSteps.push([]);
        messages.push(`Update size of linked list # size++`);
        lines.push(7);
        
    }else{
        newLL[size-1].arrow = "up";
        newLL[size].state = "unvisible";

        steps.push(newLL.map(node => ({...node}) ));
        visualNodesSteps.push(newVisualNodes.map(node => ({...node}) ));
        messages.push(`updating tail.next =  # newNode.next = head`);
        lines.push(12);

        newLL[size-1].arrow = "forward";

        newLL.pop();

        newLL.push({
            id:getKey(),
            value:inputValue,
            state:"inserted",
            arrow:"forward"
        });

        newLL.push({
            id:getKey(),
            value:0,
            state:"null",
            arrow:"forward"
        });

        steps.push(newLL.map((el) => ({...el}) ));
        visualNodesSteps.push([]);
        messages.push(`updating head # head = newNode`);
        lines.push(15);

        newLL[size].state = "normal";

        steps.push(newLL.map((el) => ({...el}) ));
        visualNodesSteps.push([]);
        messages.push(`Increasing size # size++`);
        lines.push(17);
    }

    

    setStepArr([...steps]);
    setVisualNodesArr([...visualNodesSteps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
}
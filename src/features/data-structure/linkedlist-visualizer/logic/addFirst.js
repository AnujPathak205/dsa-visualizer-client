import { getKey } from "../../array-visualizer/logic/helperFunctions";

export function handleAddFirst(linkedlist,inputValue,setStepArr,setMessageArr,setCurrentLineArr,setVisualNodesArr){
    let steps = [];
    let visualNodesSteps = [];
    let lines = [];
    let messages = [];
    const size = linkedlist.length-1;

    let newLL = [...linkedlist];
    let newVisualNodes = linkedlist.map(node => ({ ...node }));

    for(let i = 0;i < newVisualNodes.length;i++){
        newVisualNodes[i].state = "unvisible";
    }

    steps.push([...newLL]);
    visualNodesSteps.push([]);
    messages.push("Starting add first operation");
    lines.push(1);

    newVisualNodes[0].state = "normal";
    newVisualNodes[0].value = inputValue;

    if(size == 0){
        newVisualNodes.push({
            id:getKey(),
            inputValue:0,
            state:"null",
            arrow:"forward"
        });
    }else{
        newVisualNodes[1].state = "null";
    }

    steps.push([...newLL]);
    visualNodesSteps.push(newVisualNodes.map(node => ({...node}) ));
    messages.push(`Creating new node # Node newNode = new Node(${inputValue})`);
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

        newVisualNodes[0].arrow = "down";
        newVisualNodes[1].state = "unvisible";

        steps.push([...newLL]);
        visualNodesSteps.push(newVisualNodes.map(node => ({...node}) ));
        messages.push(`Link new node to head # newNode.next = head`);
        lines.push(12);

        newLL.unshift({
            id:getKey(),
            value:inputValue,
            state:"inserted",
            arrow:"forward"
        });

        newVisualNodes.unshift({
            id:getKey(),
            value:inputValue,
            state:"unvisible",
            arrow:"forward"
        });

        steps.push(newLL.map((el) => ({...el}) ));
        visualNodesSteps.push([]);
        messages.push(`Move head to new node # head = newNode`);
        lines.push(15);

        newLL[0].state = "normal";

        steps.push(newLL.map((el) => ({...el}) ));
        visualNodesSteps.push([]);
        messages.push(`Update size of linked list # size++`);
        lines.push(17);
    }

    setStepArr([...steps]);
    setVisualNodesArr([...visualNodesSteps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
}
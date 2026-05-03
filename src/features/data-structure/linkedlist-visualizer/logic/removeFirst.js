import { getKey } from "../../array-visualizer/logic/helperFunctions";

export function handleRemoveFirst(linkedlist,inputValue,setStepArr,setMessageArr,setCurrentLineArr,setOutputArr){
    let steps = [];
    let visualNodesSteps = [];
    let lines = [];
    let messages = [];
    let outputs = [];
    const size = linkedlist.length-1;

    let newLL = linkedlist.map(node => ({...node}));

    steps.push(newLL.map(node => ({...node}) ));
    messages.push("Starting remove first operation");
    lines.push(1);
    outputs.push(false);

    if(size === 0){
        steps.push(newLL.map(node => ({...node}) ));
        messages.push(`Head is null # LinkedList is empty`);
        lines.push(2);
        outputs.push(false);

        steps.push(newLL.map(node => ({...node}) ));
        messages.push(false);
        lines.push(3);
        outputs.push("List is already empty");

    }else{
        newLL[0].state = "deleted";

        steps.push(newLL.map(node => ({...node}) ));
        messages.push(false);
        lines.push(1);
        outputs.push(false);


        newLL.shift();

        steps.push(newLL.map(node => ({...node}) ));
        messages.push(`updating head # head = head.next`);
        lines.push(8);
        outputs.push(false);

        if(linkedlist.length-1 === 1){
            steps.push(newLL.map(node => ({...node}) ));
            messages.push(`here head = null # tail = null`);
            lines.push(12);
            outputs.push(false);
        }

        steps.push(newLL.map(node => ({...node}) ));
        messages.push(`Decreasing size by 1 # size--`);
        lines.push(15);
        outputs.push(false);


    }

    setStepArr([...steps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
    setOutputArr([...outputs]);
}
export function handleSearch(linkedlist,inputValue,setStepArr,setMessageArr,setCurrentLineArr,setOutputArr){
    let steps = [];
    let lines = [];
    let messages = [];
    let outputs = [];

    const size = linkedlist.length - 1; // exclude NULL node
    let newLL = linkedlist.map(node => ({...node}));

    // ================= START =================
    steps.push(newLL.map(node => ({...node})));
    messages.push(`Starting search for value ${inputValue}`);
    lines.push(1);
    outputs.push(false);

    // ================= INITIALIZE =================
    if(size > 0){
        newLL[0].state = "traversing";
        newLL[0].tag = "node";
    }

    steps.push(newLL.map(node => ({...node})));
    messages.push("Initialize pointer # Node node = head");
    lines.push(3);
    outputs.push(false);

    steps.push(newLL.map(node => ({...node})));
    messages.push("Initialize index # int index = 0");
    lines.push(4);
    outputs.push(false);

    let found = false;

    // ================= WHILE LOOP =================
    for(let i = 0; i < size; i++){

        // while(node != null)
        steps.push(newLL.map(node => ({...node})));
        messages.push("Check condition # while(node != null)");
        lines.push(7);
        outputs.push(false);

        // if(node.data == key)
        steps.push(newLL.map(node => ({...node})));
        messages.push(`Compare values # node.data == ${inputValue}`);
        lines.push(8);
        outputs.push(false);

        if(newLL[i].value === inputValue){
            newLL[i].state = "inserted";

            steps.push(newLL.map(node => ({...node})));
            messages.push(`Element found at index ${i}`);
            lines.push(9);
            outputs.push(`${inputValue} found at index ${i}`);

            newLL[i].state = "normal";
            newLL[i].tag = null;

            steps.push(newLL.map(node => ({...node})));
            messages.push(false);
            lines.push(10);
            outputs.push(false);

            found = true;
            break; // return
        }

        // node = node.next
        newLL[i].state = "normal";
        newLL[i].tag = null;

        if(i + 1 < size){
            newLL[i+1].state = "traversing";
            newLL[i+1].tag = "node";
        }

        steps.push(newLL.map(node => ({...node})));
        messages.push("Move pointer # node = node.next");
        lines.push(12);
        outputs.push(false);

        // index++
        steps.push(newLL.map(node => ({...node})));
        messages.push("Increment index # index++");
        lines.push(13);
        outputs.push(false);
    }

    // ================= NOT FOUND =================
    if(!found){
        steps.push(newLL.map(node => ({...node})));
        messages.push("Element not found in list");
        lines.push(17);
        outputs.push("NOT FOUND");
    }

    // ================= FINAL =================
    setStepArr([...steps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
    setOutputArr([...outputs]);
}
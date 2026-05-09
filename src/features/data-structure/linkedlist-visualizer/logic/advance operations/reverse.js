import { getKey } from "../../../array-visualizer/logic/helperFunctions";

export function handleReverse(
  linkedlist,
  setStepArr,
  setMessageArr,
  setCurrentLineArr,
  setOutputArr
) {

    let steps = [];
    let lines = [];
    let messages = [];

    const size = linkedlist.length - 1; // excluding NULL node

    let newLL = linkedlist.map((node) => ({ ...node }));


    // ================= START =================

    steps.push(newLL.map((node) => ({ ...node })));
    lines.push(1);
    messages.push("Started reversing the linked list using the 3-pointer approach");


    // ================= PREV =================

    newLL.unshift({
        id: getKey(),
        state: "null",
        arrow: "forward",
        tag: "prev",
    });

    steps.push(newLL.map((node) => ({ ...node })));
    lines.push(3);
    messages.push("Initialized prev pointer to null");


    // ================= CURR =================

    newLL[1].tag = "curr";
    newLL[1].state = "state2";

    steps.push(newLL.map((node) => ({ ...node })));
    lines.push(4);
    messages.push("Initialized curr pointer to head node");


    // ================= LOOP START =================

    steps.push(newLL.map((node) => ({ ...node })));
    lines.push(7);
    messages.push("Checking loop condition: curr is not null");


    for(let i = 0; i < size; i++){

        // reset current highlights
        

        // CURR
        newLL[i + 1].state = "state2";
        newLL[i + 1].tag = "curr";

        // NEXT
        if(i + 2 !== linkedlist.length){
            newLL[i + 2].state = "state3";
            newLL[i + 2].tag = "next";
        }

        steps.push(newLL.map((node) => ({ ...node })));
        lines.push(8);
        messages.push("Stored next node so the remaining list is not lost");



        // ================= REVERSE LINK =================

        newLL[i + 1].arrow = "backward";

        steps.push(newLL.map((node) => ({ ...node })));
        lines.push(11);
        messages.push("Reversed current node pointer toward prev");


        // ================= MOVE PREV =================

        newLL[i].tag = null;

        newLL[i + 1].state = "state1";
        newLL[i + 1].tag = "curr, prev";

        if(i !== 0){
            newLL[i].state = "normal";
        }

        steps.push(newLL.map((node) => ({ ...node })));
        lines.push(14);
        messages.push("Moved prev pointer to current node");


        // ================= MOVE CURR =================

        if(i !== 0){
            newLL[i].state = "normal";
        }

        newLL[i + 1].state = "state1";
        newLL[i + 1].tag = "prev";

        if(i + 2 !== linkedlist.length){
            newLL[i + 2].state = "state2";
            newLL[i + 2].tag = "curr, next";
        }

        steps.push(newLL.map((node) => ({ ...node })));
        lines.push(15);
        messages.push("Moved curr pointer to next node");


        // clean next tag
        if(i + 2 !== linkedlist.length){
            newLL[i + 2].tag = "curr";
        }

        steps.push(newLL.map((node) => ({ ...node })));
        lines.push(7);
        messages.push("Checking loop condition again");
    }


    // ================= LOOP END =================

    steps.push(newLL.map((node) => ({ ...node })));
    lines.push(7);
    messages.push("curr became null, loop terminated");


    // ================= UPDATE TAIL =================

    newLL[1].tag = "tail";

    steps.push(newLL.map((node) => ({ ...node })));
    lines.push(19);
    messages.push("Updated tail to original head node");


    // ================= FINAL REVERSE =================

    newLL[1].tag = null;

    if(newLL[linkedlist.length - 1]){
        newLL[linkedlist.length - 1].state = "normal";
    }

    // remove helper prev null node
    newLL.shift();

    // remove original null node
    newLL.pop();

    // reverse actual list
    // newLL.reverse();
    for(let i = 0;i < newLL.length/2;i++){
        newLL[i] = newLL[newLL.length-i-1];
    }
    newLL[0].tag = null;

    // restore forward arrows
    for(let i = 0; i < newLL.length; i++){
        newLL[i].arrow = "forward";
        newLL[i].state = "normal";
    }

    // add NULL node again
    newLL.push({
        id: getKey(),
        value: null,
        state: "null",
        arrow: "forward"
    });

    steps.push(newLL.map((node) => ({ ...node })));
    lines.push(20);
    messages.push("Updated head to prev, reversal completed");


    // ================= FINAL =================

    steps.push(newLL.map((node) => ({ ...node })));
    lines.push(20);
    messages.push("Linked list reversed successfully");


    // ================= SET =================

    setStepArr([...steps]);
    setMessageArr([...messages]);
    setCurrentLineArr([...lines]);
}
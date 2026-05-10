import { firstHalf,secondHalf } from "../../components/ViewOperation";

export function handleDetectCycle(
  linkedlist,
  setStepArr,
  setVisualNodesArr,
  setMessageArr,
  setCurrentLineArr,
  setOutputArr,
  cycle
) {
  let steps = [];
  let lines = [];
  let messages = [];
  let outputs = [];
  let visuals = [];

  const size = linkedlist.length - 1; // last index is NULL

  function updatePointers(newLL,slow,fast){
    for(let i = 0;i <= size;i++){
        // Reset
        if (newLL[i].state !== "null" && newLL[i].state !== "unvisible") {
            newLL[i].state = "normal";
        }
        newLL[i].tag = null;

        // Both on same node (not NULL)
        if (i === slow && i === fast && i < size) {
            newLL[i].state = "state1";
            newLL[i].tag = "slow, fast";
        }

        // Slow
        else if (i === slow && i < size) {
            newLL[i].state = "state1";
            newLL[i].tag = "slow";
        }

        // Fast on normal node
        else if (i === fast && i < size) {
            newLL[i].state = "state2";
            newLL[i].tag = "fast";
        }

        // Fast on NULL (only tag, no state change)
        else if (i === fast && i === size) {
            newLL[i].tag = "fast";
        }
    }
  }
  
  if(cycle){
    let newLL = firstHalf;
    let newVisualNodes = secondHalf;

    let slow = 0;
    let fast = 0;

    steps.push(newLL.map((node) => ({...node})));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    lines.push(1);
    messages.push("Started detect cycle operation # Floyd’s Cycle Detection");
    outputs.push(false);

    updatePointers(newLL,slow,-1);

    steps.push(newLL.map((node) => ({...node})));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    lines.push(3);
    messages.push("Initialized slow pointer with head # Node slow = head");
    outputs.push(false);

    updatePointers(newLL,slow,fast);

    steps.push(newLL.map((node) => ({...node})));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    lines.push(4);
    messages.push("Initialized fast pointer with head # Node fast = head");
    outputs.push(false);

    steps.push(newLL.map((node) => ({...node})));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    lines.push(7);
    messages.push("Traversing to all nodes untill condition is true");
    outputs.push(false);

    for(let i = 0;i < 3;i++){
         steps.push(newLL.map(n => ({ ...n })));
        visuals.push(newVisualNodes.map((node) => ({...node})));
        messages.push("Check: fast and fast.next exist → continue");
        lines.push(7);
        outputs.push(false);

        slow++;

        updatePointers(newLL,slow,fast);

        steps.push(newLL.map((node) => ({...node})));   
        visuals.push(newVisualNodes.map((node) => ({...node  })));    
        lines.push(8);
        messages.push("Move slow → one step");
        outputs.push(false);

        fast++;
        fast++;

        updatePointers(newLL,slow,fast);


        if(i === 2)break;


        steps.push(newLL.map((node) => ({...node})));
        visuals.push(newVisualNodes.map((node) => ({...node})));
        lines.push(9);
        messages.push("Move fast → two step");
        outputs.push(false);

        steps.push(newLL.map((node) => ({...node})));
        visuals.push(newVisualNodes.map((node) => ({...node})));
        lines.push(12);
        messages.push("Checking slow == fast # false");
        outputs.push(false);
    }
    
    newVisualNodes[5].state = "state2";
    newVisualNodes[5].tag = "fast";

    steps.push(newLL.map((node) => ({...node})));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    lines.push(9);
    messages.push("Move fast → two step");
    outputs.push(false);

    steps.push(newLL.map((node) => ({...node})));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    lines.push(12);
    messages.push("Checking slow == fast # false");
    outputs.push(false);

    steps.push(newLL.map(n => ({ ...n })));
    visuals.push(newVisualNodes.map((node) => ({...node  })));    
    messages.push("Check: fast and fast.next exist → continue");
    lines.push(7);
    outputs.push(false);

    newLL[3].state = "normal";
    newLL[3].tag = null;

    newLL[4].state = "state1";
    newLL[4].tag = "slow";

    steps.push(newLL.map((node) => ({...node})));   
    visuals.push(newVisualNodes.map((node) => ({...node  })));    
    lines.push(8);
    messages.push("Move slow → one step");
    outputs.push(false);

    newVisualNodes[5].state = "normal";
    newVisualNodes[5].tag = null;

    newVisualNodes[3].state = "state2";
    newVisualNodes[3].tag = "fast";

    steps.push(newLL.map((node) => ({...node})));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    lines.push(9);
    messages.push("Move fast → two step");
    outputs.push(false);

    steps.push(newLL.map((node) => ({...node})));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    lines.push(12);
    messages.push("Checking slow == fast # false");
    outputs.push(false);

    steps.push(newLL.map(n => ({ ...n })));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    messages.push("Check: fast and fast.next exist → continue");
    lines.push(7);
    outputs.push(false);

    newLL[4].state = "normal";
    newLL[4].tag = null;

    newLL[5].state = "state1";
    newLL[5].tag = "slow";

    steps.push(newLL.map((node) => ({...node})));   
    visuals.push(newVisualNodes.map((node) => ({...node  })));    
    lines.push(8);
    messages.push("Move slow → one step");
    outputs.push(false);


    newVisualNodes[3].state = "normal";
    newVisualNodes[3].tag = null;

    newLL[4].state = "state2";
    newLL[4].tag = "fast";

    steps.push(newLL.map((node) => ({...node})));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    lines.push(9);
    messages.push("Move fast → two step");
    outputs.push(false);

    steps.push(newLL.map((node) => ({...node})));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    lines.push(12);
    messages.push("Checking slow == fast # false");
    outputs.push(false);

    steps.push(newLL.map(n => ({ ...n })));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    messages.push("Check: fast and fast.next exist → continue");
    lines.push(7);
    outputs.push(false);

    newLL[5].state = "normal";
    newLL[5].tag = null;

    newVisualNodes[5].state = "state1";
    newVisualNodes[5].tag = "slow";

    steps.push(newLL.map((node) => ({...node})));   
    visuals.push(newVisualNodes.map((node) => ({...node  })));    
    lines.push(8);
    messages.push("Move slow → one step");
    outputs.push(false);

    newLL[4].state = "normal";
    newLL[4].tag = null;

    newVisualNodes[5].state = "state2";
    newVisualNodes[5].tag = "slow, fast";

    steps.push(newLL.map((node) => ({...node})));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    lines.push(9);
    messages.push("Move fast → two step");
    outputs.push(false);

    newVisualNodes[5].state = "inserted";


    steps.push(newLL.map((node) => ({...node})));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    lines.push(12);
    messages.push("Checking slow == fast # true");
    outputs.push(false);

    for(let i = 3;i <= 5;i++){
        newLL[i].state = "inserted";
    }

    for(let i = 3;i <= 5;i++){
        newVisualNodes[i].state = "inserted";
    }

    steps.push(newLL.map((node) => ({...node})));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    lines.push(13);
    messages.push("slow == false is true # Cycle detected");
    outputs.push("Cycle Detected");

    newVisualNodes[5].tag = null;

    for(let i = 3;i <= 5;i++){
        newLL[i].state = "normal";
    }

    for(let i = 3;i <= 5;i++){
        newVisualNodes[i].state = "normal";
    }

    steps.push(newLL.map((node) => ({...node})));
    visuals.push(newVisualNodes.map((node) => ({...node})));
    lines.push(14);
    messages.push(false);
    outputs.push(false);






  }else{
    let newLL = linkedlist.map((node) => ({ ...node }));

    let slow = 0;
    let fast = 0;

    steps.push(newLL.map((node) => ({...node})));
    lines.push(1);
    messages.push("Started detect cycle operation # Floyd’s Cycle Detection");
    outputs.push(false);

    steps.push(newLL.map((node) => ({...node})));
    lines.push(1);
    messages.push(false);
    outputs.push(false);

    updatePointers(newLL,slow,-1);

    steps.push(newLL.map((node) => ({...node})));
    lines.push(3);
    messages.push("Initialized slow pointer with head # Node slow = head");
    outputs.push(false);

    updatePointers(newLL,slow,fast);

    steps.push(newLL.map((node) => ({...node})));
    lines.push(4);
    messages.push("Initialized fast pointer with head # Node fast = head");
    outputs.push(false);

    steps.push(newLL.map((node) => ({...node})));
    lines.push(7);
    messages.push("Traversing to all nodes untill condition is true");
    outputs.push(false);

    while (fast < size && fast + 1 < size) {

        steps.push(newLL.map(n => ({ ...n })));
        messages.push("Check: fast and fast.next exist → continue");
        lines.push(7);
        outputs.push(false);

        slow++;

        updatePointers(newLL,slow,fast);

        steps.push(newLL.map((node) => ({...node})));
        lines.push(8);
        messages.push("Move slow → one step");
        outputs.push(false);

        fast++;
        fast++;

        updatePointers(newLL,slow,fast);

        steps.push(newLL.map((node) => ({...node})));
        lines.push(9);
        messages.push("Move fast → two step");
        outputs.push(false);

        steps.push(newLL.map((node) => ({...node})));
        lines.push(12);
        messages.push("Checking slow == fast # false");
        outputs.push(false);

    }

    steps.push(newLL.map(n => ({ ...n })));
    messages.push("Check: fast and fast.next exist → continue # false");
    lines.push(7);
    outputs.push(false);

    steps.push(newLL.map(n => ({ ...n })));
    messages.push("Cycle not found");
    lines.push(19);
    outputs.push("No Cycle");

    for(let i = 0;i <= size;i++){
        if(i < size) newLL[i].state = "normal";
        newLL[i].tag = null;
    }

    steps.push(newLL.map(n => ({ ...n })));
    messages.push(false);
    lines.push(19);
    outputs.push(false);
  }

  

  // ================= SET =================
  setStepArr([...steps]);
  setVisualNodesArr([...visuals]);
  setMessageArr([...messages]);
  setCurrentLineArr([...lines]);
  setOutputArr([...outputs]);

}
import { getKey } from "../../../array-visualizer/logic/helperFunctions";

export function handleAdd(
  linkedlist,
  inputValue,
  inputIndex,
  setStepArr,
  setMessageArr,
  setCurrentLineArr,
  setVisualNodesArr,
  setOutputArr
) {
  let steps = [];
  let visualNodesSteps = [];
  let lines = [];
  let messages = [];
  let outputs = [];

  const size = linkedlist.length - 1;

  let newLL = linkedlist.map((node) => ({ ...node }));
  let newVisualNodes = linkedlist.map((node) => ({ ...node }));

  // hide all visual nodes initially
  for (let i = 0; i < newVisualNodes.length; i++) {
    newVisualNodes[i].state = "unvisible";
  }

  // initial state
  steps.push(newLL.map((node) => ({ ...node })));
  visualNodesSteps.push([]);
  messages.push("Starting add operation");
  lines.push(1);
  outputs.push(false);

  let lastLine = 0;

  // ================= INDEX OUT OF BOUND =================
  if (inputIndex < 0 || inputIndex > size) {
    steps.push(newLL.map((node) => ({ ...node })));
    messages.push("Checking index validity # index < 0 || index > size");
    lines.push(2);
    outputs.push(false);

    steps.push(newLL.map((node) => ({ ...node })));
    messages.push("Index is invalid # return");
    lines.push(3);
    outputs.push("Index out of bound");

    steps.push(newLL.map((node) => ({ ...node })));
    messages.push(false);
    lines.push(4);
    outputs.push(false);

    lastLine = 4;
  }

  // ================= ADD FIRST =================
  else if (inputIndex === 0) {
    steps.push(newLL.map((node) => ({ ...node })));
    messages.push("Checking if index is 0");
    lines.push(7);

    newLL.unshift({
      id: getKey(),
      value: inputValue,
      state: "inserted",
      arrow: "forward",
      tag: null,
    });

    steps.push(newLL.map((node) => ({ ...node })));
    messages.push(`Inserting at beginning # addFirst(${inputValue})`);
    lines.push(8);

    newLL[0].state = "normal";

    steps.push(newLL.map((node) => ({ ...node })));
    messages.push("Insertion at head completed");
    lines.push(8);

    lastLine = 8;
  }

  // ================= ADD LAST =================
  else if (inputIndex === size) {
    steps.push(newLL.map((node) => ({ ...node })));
    messages.push("Checking if index equals size (insert at end)");
    lines.push(12);

    newLL[size + 1] = newLL[size];

    newLL[size] = {
      id: getKey(),
      value: inputValue,
      state: "inserted",
      arrow: "forward",
      tag: null,
    };

    steps.push(newLL.map((node) => ({ ...node })));
    messages.push(`Inserting at end # addLast(${inputValue})`);
    lines.push(13);

    newLL[size].state = "normal";

    steps.push(newLL.map((node) => ({ ...node })));
    messages.push("Insertion at tail completed");
    lines.push(14);

    lastLine = 14;
  }

  // ================= INSERT IN BETWEEN =================
  else {
    // create new node visually
    newVisualNodes[inputIndex].state = "normal";
    newVisualNodes[inputIndex].value = inputValue;
    newVisualNodes[inputIndex + 1].state = "null";

    steps.push(newLL.map((node) => ({ ...node })));
    visualNodesSteps.push(newVisualNodes.map((node) => ({ ...node })));
    messages.push(`Creating new node # Node newNode = new Node(${inputValue})`);
    lines.push(18);

    // initialize traversal
    newLL[0].state = "traversing";
    newLL[0].tag = "node";

    steps.push(newLL.map((node) => ({ ...node })));
    visualNodesSteps.push(newVisualNodes.map((node) => ({ ...node })));
    messages.push("Initializing traversal pointer # Node node = head");
    lines.push(21);

    steps.push(newLL.map((node) => ({ ...node })));
    visualNodesSteps.push(newVisualNodes.map((node) => ({ ...node })));
    messages.push("Traversing to node before insertion index # for loop");
    lines.push(22);

    let i;
    for (i = 1; i < inputIndex; i++) {
      newLL[i - 1].state = "normal";
      newLL[i - 1].tag = null;

      newLL[i].state = "traversing";
      newLL[i].tag = "node";

      steps.push(newLL.map((node) => ({ ...node })));
      visualNodesSteps.push(newVisualNodes.map((node) => ({ ...node })));
      messages.push(`Moving to next node # node = node.next (step ${i})`);
      lines.push(23);
    }

    // link newNode.next
    newVisualNodes[inputIndex].arrow = "down";
    newVisualNodes[inputIndex + 1].state = "unvisible";

    steps.push(newLL.map((node) => ({ ...node })));
    visualNodesSteps.push(newVisualNodes.map((node) => ({ ...node })));
    messages.push("Linking new node to next node # newNode.next = node.next");
    lines.push(27);

    // insert into list
    newLL.splice(inputIndex, 0, {
      id: getKey(),
      value: inputValue,
      state: "inserted",
      arrow: "forward",
      tag: "newNode",
    });

    newLL[i - 1].state = "normal";

    steps.push(newLL.map((node) => ({ ...node })));
    visualNodesSteps.push([]);
    messages.push("Connecting previous node to new node # node.next = newNode");
    lines.push(30);

    newLL[inputIndex].state = "normal";

    steps.push(newLL.map((node) => ({ ...node })));
    visualNodesSteps.push([]);
    messages.push("Updating size after insertion # size++");
    lines.push(32);

    lastLine = 32;
  }

  // cleanup tags
  for (let i = 0; i < newLL.length - 1; i++) {
    newLL[i].tag = null;
  }

  steps.push(newLL.map((node) => ({ ...node })));
  visualNodesSteps.push([]);
  messages.push("Add operation completed");
  lines.push(lastLine);
  outputs.push(false);

  // set states
  setStepArr([...steps]);
  setVisualNodesArr([...visualNodesSteps]);
  setMessageArr([...messages]);
  setCurrentLineArr([...lines]);
  setOutputArr([...outputs]);
}
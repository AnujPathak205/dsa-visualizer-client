export function handleMidNode(
  linkedlist,
  setStepArr,
  setMessageArr,
  setCurrentLineArr,
  setOutputArr
) {
  let steps = [];
  let lines = [];
  let messages = [];
  let outputs = [];

  const size = linkedlist.length - 1; // last index is NULL
  let newLL = linkedlist.map((node) => ({ ...node }));

  let slow = 0;
  let fast = 0;

  // ================= HELPER =================
  function updatePointers() {
    for (let i = 0; i < newLL.length; i++) {
      // Reset
      if (newLL[i].state !== "null") {
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

  // ================= START =================
  steps.push(newLL.map(n => ({ ...n })));
  messages.push("Start: Find middle using slow & fast pointers");
  lines.push(1);
  outputs.push(false);

  updatePointers();

  steps.push(newLL.map(n => ({ ...n })));
  messages.push("Initialize slow and fast at head");
  lines.push(3);
  outputs.push(false);

  steps.push(newLL.map(n => ({ ...n })));
  messages.push(false);
  lines.push(4);    
  outputs.push(false);

  // ================= LOOP =================
  while (fast < size && fast + 1 < size) {

    steps.push(newLL.map(n => ({ ...n })));
    messages.push("Check: fast and fast.next exist → continue");
    lines.push(7);
    outputs.push(false);

    // Move slow
    slow += 1;
    updatePointers();

    steps.push(newLL.map(n => ({ ...n })));
    messages.push("Move slow → one step");
    lines.push(8);
    outputs.push(false);

    // Move fast
    fast += 2;
    if (fast > size) fast = size;

    updatePointers();

    steps.push(newLL.map(n => ({ ...n })));
    messages.push("Move fast → two steps");
    lines.push(9);
    outputs.push(false);
  }

  // ================= RESULT =================
  newLL[slow].state = "inserted";
  newLL[slow].tag = "mid";

  // ❗ Remove fast tag if it is on NULL
  if (fast === size) {
    newLL[fast].tag = null;
  } else {
    newLL[fast].state = "normal";
    newLL[fast].tag = null;
  }

  steps.push(newLL.map(n => ({ ...n })));
  messages.push("Middle node found (slow pointer)");
  lines.push(13);
  outputs.push(`${newLL[slow].value}`);

  // Reset
  newLL[slow].state = "normal";
  newLL[slow].tag = null;

  steps.push(newLL.map(n => ({ ...n })));
  messages.push(false);
  lines.push(13);
  outputs.push(false);

  // ================= SET =================
  setStepArr([...steps]);
  setMessageArr([...messages]);
  setCurrentLineArr([...lines]);
  setOutputArr([...outputs]);
}
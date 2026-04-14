export function handleBubble(
  array,
  setStepArr,
  setMessageArr,
  setCurrentLineArr,
) {
  let steps = [];
  let lines = [];
  let messages = [];
  let newArr = [...array];

  setStepArr([]);

  steps.push(newArr.map(item => ({ ...item })));
  lines.push(1);
  messages.push("Starting Bubble Sort...");

  let n = newArr.length;

  for (let i = 0; i < n - 1; i++) {

    steps.push(newArr.map(item => ({ ...item })));
    lines.push(4);
    messages.push(
      `Pass ${i + 1} started # Largest element will settle at position ${n - i - 1}`
    );

    for (let j = 0; j < n - i - 1; j++) {

      newArr[j].state = "searching";
      newArr[j + 1].state = "searching";

      steps.push(newArr.map(item => ({ ...item })));
      lines.push(6);
      messages.push(
        `Comparing # ${newArr[j].value} and ${newArr[j + 1].value}`
      );

      if (newArr[j].value > newArr[j + 1].value) {

        newArr[j].state = "deleted";
        newArr[j + 1].state = "deleted";

        steps.push(newArr.map(item => ({ ...item })));
        lines.push(8);
        messages.push(
          `Swapping # ${newArr[j].value} > ${newArr[j + 1].value}`
        );

        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];

        steps.push(newArr.map(item => ({ ...item })));
        lines.push(9);
        messages.push(`Swap completed #  ${newArr[j].value} and ${newArr[j + 1].value}`);
      } else {
        steps.push(newArr.map(item => ({ ...item })));
        lines.push(6);
        messages.push(
          `No swap needed # ${newArr[j].value} ≤ ${newArr[j + 1].value}`
        );
      }

      // reset
      newArr[j].state = "normal";
      newArr[j + 1].state = "normal";
    }

    newArr[n - i - 1].state = "found";

    steps.push(newArr.map(item => ({ ...item })));
    lines.push(5);
    messages.push(
      `Element ${newArr[n - i - 1].value} is now in correct position`
    );
  }
  newArr[0].state = "found";


  steps.push(newArr.map(item => ({ ...item })));
  lines.push(-1);
  messages.push(false);

  steps.push(newArr.map(item => ({ ...item })));
  lines.push(-1);
  messages.push("Array is fully sorted ");

  for(let i = 0;i < n;i++){
    newArr[i].state = "normal";
  }

  steps.push(newArr.map(item => ({ ...item })));
  lines.push(-1);
  messages.push(false);

  setStepArr([...steps]);
  setCurrentLineArr([...lines]);
  setMessageArr([...messages]);
}
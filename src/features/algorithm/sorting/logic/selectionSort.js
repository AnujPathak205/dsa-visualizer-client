export function handleSelection(
  array,
  setStepArr,
  setMessageArr,
  setCurrentLineArr
) {
  let steps = [];
  let lines = [];
  let messages = [];
  let newArr = [...array];

  setStepArr([]);

  const format = (idx) => `index ${idx} (value ${newArr[idx].value})`;

  // Initial state
  steps.push(newArr.map(item => ({ ...item })));
  lines.push(1);
  messages.push("Starting Selection Sort");

  let n = newArr.length;

  for (let i = 0; i < n - 1; i++) {

    steps.push(newArr.map(item => ({ ...item })));
    lines.push(4);
    messages.push(
      `Finding minimum in unsorted part # i=${i}`
    );

    let minIndex = i;

    newArr[minIndex].state = "selected";

    steps.push(newArr.map(item => ({ ...item })));
    lines.push(5);
    messages.push(
      `Initialize minimum element # i=${i} # minIndex=${minIndex}`
    );

    for (let j = i + 1; j < n; j++) {

      newArr[j].state = "searching";

      steps.push(newArr.map(item => ({ ...item })));
      lines.push(7);
      messages.push(
        `Comparing current element with minimum # i=${i} # j=${j} # minIndex=${minIndex}`
      );

      if (newArr[j].value < newArr[minIndex].value) {

        newArr[minIndex].state = "normal";

        minIndex = j;
        newArr[minIndex].state = "selected";

        steps.push(newArr.map(item => ({ ...item })));
        lines.push(9);
        messages.push(
          `New minimum found # i=${i} # j=${j} # minIndex=${minIndex}`
        );

      } else {
        steps.push(newArr.map(item => ({ ...item })));
        lines.push(8);
        messages.push(
          `Minimum unchanged # i=${i} # j=${j} # minIndex=${minIndex}`
        );
      }

      if (minIndex !== j)
        newArr[j].state = "normal";
    }

    if (minIndex !== i) {

      steps.push(newArr.map(item => ({ ...item })));
      lines.push(14);
      messages.push(
        `Swapping elements # i=${i} # minIndex=${minIndex}`
      );

      [newArr[i], newArr[minIndex]] =
        [newArr[minIndex], newArr[i]];

    } else {
      steps.push(newArr.map(item => ({ ...item })));
      lines.push(14);
      messages.push(
        `No swap needed # i=${i} # minIndex=${minIndex}`
      );
    }

    newArr[i].state = "found";

    steps.push(newArr.map(item => ({ ...item })));
    lines.push(15);
    messages.push(
      `Position fixed # i=${i}`
    );

    if (minIndex !== i)
      newArr[minIndex].state = "normal";
  }

  // Last element
  newArr[n - 1].state = "found";

  steps.push(newArr.map(item => ({ ...item })));
  lines.push(12);
  messages.push(
    `Last element automatically sorted # i=${n - 1}`
  );

  // Reset states
  for (let i = 0; i < n; i++) {
    newArr[i].state = "normal";
  }

  steps.push(newArr.map(item => ({ ...item })));
  lines.push(-1);
  messages.push(false);

  setStepArr([...steps]);
  setCurrentLineArr([...lines]);
  setMessageArr([...messages]);
}
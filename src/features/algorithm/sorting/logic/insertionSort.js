export function handleInsertion(
  array,
  setStepArr,
  setMessageArr,
  setCurrentLineArr
) {
//   let steps = [];
//   let lines = [];
//   let messages = [];
//   let newArr = [...array];

//   setStepArr([]);

//   const format = (idx) => `index ${idx} (value ${newArr[idx].value})`;

//   // Initial state
//   steps.push(newArr.map(item => ({ ...item })));
//   lines.push(1);
//   messages.push("Starting Insertion Sort");

//   let n = newArr.length;

//   for (let i = 1; i < n; i++) {

//     let key = { ...newArr[i] };
//     let j = i - 1;

//     newArr[i].state = "selected";

//     steps.push(newArr.map(item => ({ ...item })));
//     lines.push(4);
//     messages.push(
//       `Selecting current element (key) # i=${i} # key=${key.value}`
//     );

//     // Shift elements
//     while (j >= 0 && newArr[j].value > key.value) {

//       newArr[j].state = "searching";

//       steps.push(newArr.map(item => ({ ...item })));
//       lines.push(7);
//       messages.push(
//         `Comparing and shifting element # j=${j} # comparing ${newArr[j].value} > ${key.value}`
//       );

//       newArr[j + 1] = newArr[j];

//       steps.push(newArr.map(item => ({ ...item })));
//       lines.push(8);
//       messages.push(
//         `Shifted element to right # moved index ${j} to ${j + 1}`
//       );

//       newArr[j].state = "normal";

//       j--;
//     }

//     // Insert key
//     newArr[j + 1] = key;
//     newArr[j + 1].state = "found";

//     steps.push(newArr.map(item => ({ ...item })));
//     lines.push(10);
//     messages.push(
//       `Inserted key at correct position # position=${j + 1} # value=${key.value}`
//     );

//     // Reset previous states except sorted part
//     for (let k = 0; k <= i; k++) {
//       if (newArr[k].state !== "found") {
//         newArr[k].state = "normal";
//       }
//     }
//   }

//   // Mark all sorted
//   for (let i = 0; i < n; i++) {
//     newArr[i].state = "found";
//   }

//   steps.push(newArr.map(item => ({ ...item })));
//   lines.push(12);
//   messages.push("Array fully sorted");

//   // Reset states
//   for (let i = 0; i < n; i++) {
//     newArr[i].state = "normal";
//   }

//   steps.push(newArr.map(item => ({ ...item })));
//   lines.push(-1);
//   messages.push(false);

//   setStepArr([...steps]);
//   setCurrentLineArr([...lines]);
//   setMessageArr([...messages]);
}
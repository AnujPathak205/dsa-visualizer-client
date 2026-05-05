import { useState } from "react";
import { sleep, getKey } from "../../array-visualizer/logic/helperFunctions";

const MAX_NODES = 8;

export default function LinkedListCreator({
  linkedlist,
  setLinkedList,
  setMessage,
  setCreateLL
}) {

  const [noOfElement, setNoOfElement] = useState(5);
  const [takingUserValues, setTakingUserValues] = useState(false);
  const [values, setValues] = useState([]);

  // ================= RANDOM =================
  async function generateRandomLL() {
    let newLL = [];

    // Step 1: create empty nodes
    for (let i = 0; i < noOfElement; i++) {
      newLL.push({
        id: getKey(),
        value: null,
        state: "normal",
        arrow: "forward",
        tag: null
      });
    }

    // Add NULL node
    newLL.push({
      id: getKey(),
      value: null,
      state: "null",
      arrow: "forward",
      tag: null
    });

    setLinkedList([...newLL]);
    await sleep(400);

    // Step 2: fill values
    for (let i = 0; i < noOfElement; i++) {
      newLL[i].value = Math.floor(Math.random() * 100);
      newLL[i].state = "found";

      setLinkedList([...newLL]);
      await sleep(200);
    }

    await sleep(300);

    // Step 3: normalize
    for (let i = 0; i < newLL.length; i++) {
      if (newLL[i].state !== "null") {
        newLL[i].state = "normal";
      }
    }

    setLinkedList([...newLL]);

    setMessage(
      `Choose an operation to start visualization # size(n) = ${noOfElement}`
    );

    setCreateLL(false);
  }

  // ================= MANUAL =================
  async function handleManualSubmit() {
    let newLL = [];

    // Step 1: create empty nodes
    for (let i = 0; i < noOfElement; i++) {
      newLL.push({
        id: getKey(),
        value: null,
        state: "created",
        arrow: "forward",
        tag: null
      });
    }

    newLL.push({
      id: getKey(),
      value: null,
      state: "null",
      arrow: "forward",
      tag: null
    });

    setLinkedList([...newLL]);
    await sleep(300);

    // Step 2: assign user values
    for (let i = 0; i < noOfElement; i++) {
      newLL[i].value = Number(values[i]);
      newLL[i].state = "found";

      setLinkedList([...newLL]);
      await sleep(180);
    }

    await sleep(300);

    // Step 3: normalize
    for (let i = 0; i < newLL.length; i++) {
      if (newLL[i].state !== "null") {
        newLL[i].state = "normal";
      }
    }

    setLinkedList([...newLL]);

    setMessage(
      `Choose an operation to start visualization # size(n) = ${noOfElement}`
    );

    setCreateLL(false);
  }

  return (
    <div className="max-w-2xl mx-auto py-6 
      bg-white/80 dark:bg-slate-800/70 
      backdrop-blur-md rounded-2xl px-4 space-y-6">

      {/* BACK */}
      <button
        onClick={() => setCreateLL(false)}
        className="text-sm px-3 py-1 rounded bg-slate-500 text-white hover:bg-slate-600"
      >
        ← Back
      </button>

      {!takingUserValues ? (
        <>
          {/* TITLE */}
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              Create Linked List
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Define number of nodes in your linked list.
            </p>
          </div>

          {/* INFO */}
          <div className="p-4 rounded-lg 
            bg-indigo-50 dark:bg-slate-900/50
            border border-indigo-100 dark:border-slate-700 text-sm">

            <p className="text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-green-600">n</span> = Number of nodes in linked list
            </p>
            <p className="text-slate-700 dark:text-slate-300 mt-1">
              Last node always points to <span className="text-red-500 font-semibold">NULL</span>
            </p>
          </div>

          {/* INPUT */}
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Number of Nodes (1 - {MAX_NODES})
            </label>

            <input
              type="number"
              value={noOfElement}
              min={1}
              max={MAX_NODES}
              onChange={(e) => {
                let val = Number(e.target.value);
                if (val > MAX_NODES) return;
                setNoOfElement(val);
              }}
              className="ml-2 mt-2 px-3 py-2 rounded-lg border
                bg-slate-50 dark:bg-slate-700 dark:text-white"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">

            <button
              onClick={generateRandomLL}
              className="flex-1 py-2.5 rounded-xl 
                bg-indigo-500 text-white hover:bg-indigo-600"
            >
              Generate Random
            </button>

            <button
              onClick={() => {
                setValues(Array(noOfElement).fill(""));
                setTakingUserValues(true);
              }}
              className="flex-1 py-2.5 rounded-xl 
                bg-green-500 text-white hover:bg-green-600"
            >
              Enter Manually
            </button>

          </div>
        </>
      ) : (
        <>
          {/* TITLE */}
          <h1 className="text-xl font-semibold text-slate-800 dark:text-white">
            Enter Node Values
          </h1>

          <p className="text-sm text-slate-500">
            n = {noOfElement}
          </p>

          {/* INPUT GRID */}
          <div className="grid grid-cols-4 gap-3">

            {values.map((val, idx) => (
              <input
                key={idx}
                type="number"
                value={val}
                onChange={(e) => {
                  let newValues = [...values];
                  newValues[idx] = e.target.value;
                  setValues(newValues);
                }}
                className="px-2 py-2 rounded-lg border text-center 
                  bg-slate-50 dark:bg-slate-700 dark:text-white"
                placeholder={`node ${idx}`}
              />
            ))}

          </div>

          {/* ACTIONS */}
          <div className="flex gap-4">

            <button
              onClick={handleManualSubmit}
              className="flex-1 py-2.5 rounded-xl 
                bg-indigo-500 text-white hover:bg-indigo-600"
            >
              Create Linked List
            </button>

            <button
              onClick={() => setTakingUserValues(false)}
              className="flex-1 py-2.5 rounded-xl 
                bg-slate-500 text-white hover:bg-slate-600"
            >
              Cancel
            </button>

          </div>
        </>
      )}
    </div>
  );
}
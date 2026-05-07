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

    let speed = 100;
    for (let i = 0; i < noOfElement; i++) {
      newLL.push({
        id: getKey(),
        value: Math.floor(Math.random() * 100),
        state: "created",
        arrow: "forward",
        tag: null
      });

      setLinkedList([...newLL]);
      await sleep(speed);
      speed += 25;
    }

    newLL.push({
      id: getKey(),
      value: null,
      state: "null",
      arrow: "forward",
      tag: null
    });

    setLinkedList([...newLL]);
    await sleep(250);

    newLL.forEach(node => {
      if (node.state !== "null") node.state = "normal";
    });

    setLinkedList([...newLL]);
    setMessage(`Choose an operation to start visualization # size(n) = ${noOfElement}`);
    setCreateLL(false);
  }

  // ================= MANUAL =================
  async function handleManualSubmit() {
    let newLL = [];

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

    for (let i = 0; i < noOfElement; i++) {
      newLL[i].value = Number(values[i]);
      newLL[i].state = "found";

      setLinkedList([...newLL]);
      await sleep(180);
    }

    await sleep(300);

    newLL.forEach(node => {
      if (node.state !== "null") node.state = "normal";
    });

    setLinkedList([...newLL]);
    setMessage(`Choose an operation to start visualization # size(n) = ${noOfElement}`);
    setCreateLL(false);
  }

  return (
    <div className="
      w-full max-w-2xl mx-auto
      overflow-y-auto
      py-4 sm:py-6
      px-3 sm:px-4
      bg-white/80 dark:bg-slate-800/70
      backdrop-blur-md rounded-none sm:rounded-2xl
      space-y-5
    ">

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
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
              Create Linked List
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Choose number of nodes
            </p>
          </div>

          {/* INPUT */}
          <div>
            <label className="text-sm text-slate-600 dark:text-slate-300">
              Nodes (1 - {MAX_NODES})
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
              className="
                block mt-2 w-full sm:w-32
                px-3 py-2 rounded-lg border
                bg-slate-50 dark:bg-slate-700 dark:text-white
              "
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-10">

            <button
              onClick={generateRandomLL}
              className="flex-1 py-2.5 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600"
            >
              Random
            </button>

            <button
              onClick={() => {
                setValues(Array(noOfElement).fill(""));
                setTakingUserValues(true);
              }}
              className="flex-1 py-2.5 rounded-xl bg-green-500 text-white hover:bg-green-600"
            >
              Manual
            </button>

          </div>
        </>
      ) : (
        <>
          {/* TITLE */}
          <div>
            <h1 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white">
              Enter Values
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              n = {noOfElement}
            </p>
          </div>

          {/* INPUT GRID */}
          <div className="
            grid grid-cols-2 sm:grid-cols-4 gap-3
          ">
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
                className="
                  px-2 py-2 rounded-lg border text-center
                  bg-slate-50 dark:bg-slate-700 dark:text-white
                "
                placeholder={`#${idx}`}
              />
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-3 ">

            <button
              onClick={handleManualSubmit}
              className="flex-1 py-2.5 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600"
            >
              Create
            </button>

            <button
              onClick={() => setTakingUserValues(false)}
              className="flex-1 py-2.5 rounded-xl bg-slate-500 text-white hover:bg-slate-600"
            >
              Cancel
            </button>

          </div>
        </>
      )}
    </div>
  );
}
import { useState, useEffect } from "react";
import { sleep } from "../features/data-structure/array-visualizer/logic/helperFunctions";

const MAX_CAPACITY = 12;

export default function ArrayCreator({ setArray, setN, setCreateArr, setMessage }) {
  const [capacity, setCapacity] = useState(12);
  const [noOfElement, setNoOfElement] = useState(8);
  const [takingUserValues, setTakingUserValues] = useState(false);
  const [values, setValues] = useState([]);

  // useEffect(() => {
  //   setN(noOfElement);
  // }, [noOfElement]);

  async function generateRandomArray() {
    let newArr = [];

    for (let i = 0; i < capacity; i++) {
      newArr[i] = { id: i, value: null, state: "created" };
    }

    setArray([...newArr]);
    await sleep(400);

    for (let i = 0; i < noOfElement; i++) {
      newArr[i].value = Math.floor(Math.random() * 100);
      newArr[i].state = "found";
      setArray([...newArr]);
      await sleep(200);
    }

    await sleep(400);

    setMessage(
      `Choose an operation to start visualization # capacity = ${capacity} # no of elements(n) = ${noOfElement}`
    );

    for (let i = 0; i < capacity; i++) {
      newArr[i].state = "normal";
    }

    setArray([...newArr]);
    setCreateArr(false);
    setN(noOfElement);

  }

  async function handleManualSubmit() {
    let newArr = [];

    for (let i = 0; i < capacity; i++) {
      newArr[i] = {
        id: i,
        value:null,
        state: "created",
      };
    }

    await sleep(300);
    setArray([...newArr]);

    for (let i = 0; i < noOfElement; i++) {
      newArr[i] = {
        id: i,
        value: Number(values[i]) ,
        state: "found",
      };
    setArray([...newArr]);
    await sleep(180);
    }

    await sleep(300);


    setMessage(
      `Choose an operation to start visualization # capacity = ${capacity} # no of elements(n) = ${noOfElement}`
    );

    for (let i = 0; i < capacity; i++) {
      newArr[i].state = "normal";
    }

    setArray([...newArr]);

    setN(noOfElement);

    setCreateArr(false);
  }

  return (
    <div className="max-w-2xl mx-auto  py-6 
      bg-white/80 dark:bg-slate-800/70 
      backdrop-blur-md rounded-2xl px-2 space-y-6">

      {/* BACK */}
      <button
        onClick={() => setCreateArr(false)}
        className="text-sm px-3 py-1 rounded bg-slate-500 text-white hover:bg-slate-600"
      >
        ← Back
      </button>

      {!takingUserValues ? (
        <>
          {/* TITLE */}
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              Create Array
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Define the size and number of elements for your array.
            </p>
          </div>

          {/* INFO BOX */}
          <div className="p-4 rounded-lg 
            bg-indigo-50 dark:bg-slate-900/50
            border border-indigo-100 dark:border-slate-700 text-sm">

            <p className="text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-indigo-600">Capacity</span> = Total slots available in array  
            </p>
            <p className="text-slate-700 dark:text-slate-300 mt-1">
              <span className="font-semibold text-green-600">n</span> = Number of elements currently stored
            </p>
          </div>

          {/* INPUTS */}
          <div className="space-y-5">

            {/* Capacity */}
            <div>
              <label className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Capacity (use only 1 - {MAX_CAPACITY})
              </label>

              <input
                type="number"
                value={capacity}
                min={1}
                max={MAX_CAPACITY}
                onChange={(e) => {
                  let val = Number(e.target.value);
                  if (val > MAX_CAPACITY) return;
                  setCapacity(val);
                  if (noOfElement > val) setNoOfElement(val);
                }}
                className="ml-2 mt-2 px-3 py-2 rounded-lg border
                  bg-slate-50 dark:bg-slate-700 dark:text-white"
              />

            </div>

            {/* n */}
            <div>
              <label className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Number of Elements  ( n )
              </label>

              <input
                type="number"
                value={noOfElement}
                min={0}
                max={capacity}
                onChange={(e) => {
                  let val = Number(e.target.value);
                  if (val > capacity) return;
                  setNoOfElement(val);
                }}
                className="ml-2 mt-2 px-3 py-2 rounded-lg border
                  bg-slate-50 dark:bg-slate-700 dark:text-white"
              />
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">

            <button
              onClick={generateRandomArray}
              className="flex-1 py-2.5 rounded-xl 
                bg-indigo-500 text-white font-medium
                hover:bg-indigo-600 transition"
            >
              Generate Random
            </button>

            <button
              onClick={() => {
                setValues(Array(noOfElement).fill(""));
                setTakingUserValues(true);
              }}
              className="flex-1 py-2.5 rounded-xl 
                bg-green-500 text-white font-medium
                hover:bg-green-600 transition"
            >
              Enter Manually
            </button>

          </div>
        </>
      ) : (
        <>
          {/* TITLE */}
          <h1 className="text-xl font-semibold text-slate-800 dark:text-white">
            Enter Values
          </h1>

          <p className="text-sm text-slate-500">
            Capacity = {capacity}, n = {noOfElement}
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
                placeholder={`a${idx}`}
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
              Create Array
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
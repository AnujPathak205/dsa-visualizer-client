import React from 'react'

export default function OperationSelector({operation,setOperation,setCurrentLine}) {
    const [createArr,setCreateArr] = useState(false);

  return (
    <>
        {/* OPERATION SELECTORS */}
        <div className="w-full space-y-4">
          <div className="space-y-4">

            {/* Core Operations */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-slate-500 dark:text-slate-400 tracking-wide">
                CORE OPERATIONS
              </label>

              <select
                value={
                  ["insertion", "deletion", "search"].includes(operation)
                    ? operation
                    : ""
                }
                onChange={(e) => {
                  setOperation(e.target.value);
                  setCurrentLine(-1);
                }}
                className="px-3 py-2 rounded-xl text-sm font-medium
                bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                text-slate-700 dark:text-slate-200
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                transition"
              >
                <option value="">Select Core Operation</option>
                <option value="insertion">Insert</option>
                <option value="deletion">Delete</option>
                <option value="search">Search</option>
              </select>
            </div>

            {/* Advanced Operations */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-slate-500 dark:text-slate-400 tracking-wide">
                ADVANCED OPERATIONS
              </label>

              <select
                value={
                  ["reverse", "min", "max"].includes(operation)
                    ? operation
                    : ""
                }
                onChange={(e) => {
                  setOperation(e.target.value);
                  setCurrentLine(-1);
                }}
                className="px-3 py-2 rounded-xl text-sm font-medium
                bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                text-slate-700 dark:text-slate-200
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                transition"
              >
                <option value="">Select Advanced Operation</option>
                <option value="reverse">Reverse</option>
                <option value="min">Min</option>
                <option value="max">Max</option>
              </select>
            </div>

          </div>
        </div>
    </>
  )
}


export default function OperationSelector({linkedlist,operation,setOperation}) {
  return (
    <>
        <div className="space-y-4">

        <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
            Choose Operation (size = {linkedlist.length-1})
        </h2>

        {/* CORE */}
        <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-500 dark:text-slate-400">
            CORE OPERATIONS
            </label>

            <select
            value={[
                "addFirst","addLast","add","removeFirst","removeLast",
                "remove","traverse"
            ].includes(operation) ? operation : ""}
            onChange={(e) => setOperation(e.target.value)}
            className="px-3 py-2 rounded-xl text-sm font-medium
                bg-white dark:bg-slate-800 border
                border-slate-200 dark:border-slate-700
                text-slate-700 dark:text-slate-200
                focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
            <option value="">Select Core Operation</option>
            <option value="addFirst">Add First</option>
            <option value="addLast">Add Last</option>
            <option value="add">Add at any index</option>
            <option value="removeFirst">Remove First</option>
            <option value="removeLast">Remove Last</option>
            <option value="remove">Remove at any index</option>
            <option value="traverse">Traverse</option>
            </select>
        </div>

        {/* UTILITY */}
        <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-500 dark:text-slate-400">
            UTILITY OPERATIONS
            </label>

            <select
            value={[
                "get","update","search","isEmpty","size"
            ].includes(operation) ? operation : ""}
            onChange={(e) => setOperation(e.target.value)}
            className="px-3 py-1 rounded-xl text-sm font-medium
                bg-white dark:bg-slate-800 border
                border-slate-200 dark:border-slate-700
                text-slate-700 dark:text-slate-200
                focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
            <option value="">Select Utility Operation</option>
            <option value="get">Get</option>
            <option value="update">Update</option>
            <option value="search">Search</option>
            <option value="isEmpty">Is Empty</option>
            <option value="size">Size</option>
            </select>
        </div>

        {/* ADVANCED */}
        <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-500 dark:text-slate-400">
            ADVANCED OPERATIONS
            </label>

            <select
            value={["midNode","reverse","min","max"].includes(operation) ? operation : ""}
            onChange={(e) => setOperation(e.target.value)}
            className="px-3 py-2 rounded-xl text-sm font-medium
                bg-white dark:bg-slate-800 border
                border-slate-200 dark:border-slate-700
                text-slate-700 dark:text-slate-200
                focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
            <option value="">Select Advanced Operation</option>

            <option value="midNode">
                Find Middle Node (Slow & Fast Pointer)
            </option>

            <option value="reverse">
                Reverse Linked List (3-Pointer Approach)
            </option>

            <option value="detectCycle">
                Detect Cycle (Floyd’s Cycle Detection)
            </option>

            <option value="findCycleStart">
                Find Cycle Start (Floyd’s Algorithm)
            </option>
            
            <option value="removeCycle">
                Remove Cycle
            </option>

            
            </select>
        </div>

        </div>
    </>
  )
}

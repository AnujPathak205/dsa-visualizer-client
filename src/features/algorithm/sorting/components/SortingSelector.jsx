
export default function SortingSelector({
  algorithm,
  setAlgorithm,
  setCurrentLine,
  setShowLegend
}) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-1">

        <label className="text-xs text-slate-500 dark:text-slate-400 tracking-wide">
          SORTING ALGORITHM
        </label>

        <select  onClick={e => setShowLegend(true)} 
          value={algorithm || ""}
          onChange={(e) => {
            setAlgorithm(e.target.value);
            setCurrentLine(-1);
          }}
          className="px-3 py-2 rounded-xl text-sm font-medium
          bg-white dark:bg-slate-800
          border border-slate-200 dark:border-slate-700
          text-slate-700 dark:text-slate-200
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          transition"
        >
          <option value="">Select Algorithm</option>

          {/* Basic */}
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
        </select>

      </div>
    </div>
  );
}
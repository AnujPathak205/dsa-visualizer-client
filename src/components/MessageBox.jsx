export default function MessageBox({ message, algorithm, showLegend, setShowLegend }) {

  const getLegend = () => {
    if (algorithm === "bubble") {
      return [
        { label: "Comparing", color: "bg-purple-500" },
        { label: "Swapping", color: "bg-red-500" },
        { label: "Sorted (last)", color: "bg-green-500" }
      ];
    }

    if (algorithm === "selection") {
      return [
        { label: "Current Min (minIndex)", color: "bg-yellow-500" },
        { label: "Checking", color: "bg-purple-500" },
        { label: "Sorted (fixed)", color: "bg-green-500" }
      ];
    }

    return [];
  };

  const legend = getLegend();

  return (
    <div
      className="mt-4 w-full px-4 py-3 rounded-md 
      bg-slate-100 dark:bg-slate-700 
      text-slate-700 dark:text-slate-200 text-sm space-y-3"
    >

      {/* MESSAGE BOX */}
      {typeof message === "string" && (() => {
        const parts = message.split("#");

        return (
          <div className="text-center space-y-1">
            <div>{parts[0]}</div>

            {parts.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2">
                {parts.slice(1).map((part, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 rounded 
                    bg-slate-200 dark:bg-slate-600 
                    text-slate-800 dark:text-slate-200 text-xs"
                  >
                    {part.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })()}

      {/* LEGEND BOX (separate visually) */}
      {showLegend && legend.length > 0 && (
        <div
          className="relative rounded-lg p-3
          bg-white dark:bg-slate-800
          border border-slate-300 dark:border-slate-600
          shadow-sm"
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShowLegend(false)}
            className="
              absolute top-2 right-2
              px-2 py-0.5 text-xs font-semibold
              rounded-md
              bg-red-500 text-white
              hover:bg-red-600
              active:scale-95
              transition cursor-pointer
            "
          >
            ✕
          </button>

          {/* TITLE */}
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
            State Legend
          </div>

          {/* LEGEND ITEMS */}
          <div className="flex flex-wrap justify-center gap-2">
            {legend.map((item, index) => (
              <span
                key={index}
                className={`px-2 py-0.5 rounded text-white text-xs ${item.color}`}
              >
                {item.label}
              </span>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}
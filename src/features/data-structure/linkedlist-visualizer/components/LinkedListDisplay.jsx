import { motion } from "framer-motion";
import BackAndDarkButton from "../../../../components/BackAndDarkButton";

export default function LinkedListDisplay({ linkedlist, visualNodes , showIndexes}) {
  const displayVisualNodes = visualNodes.length > 0;

  return (
    <div className="w-full">
      <BackAndDarkButton />

      {/* SINGLE SCROLL CONTAINER */}
      <div className="w-full overflow-x-auto">

        <div className="w-max mx-auto px-4">

          {/* ================= VISUAL NODES ================= */}
          {displayVisualNodes && (
            <div className="mt-10 h-22">
              <div className="flex items-start gap-6">

                {visualNodes.map((node, index) => {
                  const isNull = node.state === "null";
                  const isHidden = node.state === "unvisible";

                  return (
                    <div key={node.id + "-" + index} className="flex flex-col items-center">

                      <div className="flex items-center ">

                        {/* NODE */}
                        <motion.div
                          layout
                          transition={{ type: "spring", stiffness: 120, damping: 20 }}
                          className={`flex items-center ${isHidden ? "opacity-0" : ""}`}
                        >
                          {isNull ? (
                            <div className="w-[112px] h-14 flex items-center justify-center border border-slate-500 rounded-md bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300 font-semibold">
                              NULL
                            </div>
                          ) : (
                            <>
                              <div className="w-14 h-14 flex items-center justify-center border border-slate-500 bg-white dark:bg-slate-700 text-black dark:text-white font-semibold rounded-l-md">
                                {node.value}
                              </div>

                              <div className="w-14 h-14 flex items-center justify-center border-t border-b border-r border-slate-500 bg-white dark:bg-slate-700 rounded-r-md">
                                <div className="w-3 h-3 rounded-full bg-black dark:bg-white"></div>
                              </div>
                            </>
                          )}
                        </motion.div>

                        {/* ARROW */}
                        {index !== visualNodes.length - 1 && (
                          <motion.div
                            layout
                            className={`ml-[-23px] mr-[-22px] flex items-center
                              ${node.arrow === "up" && "-rotate-90 relative bottom-6 left-[-34px]"}
                              ${node.arrow === "down" && "rotate-90 relative top-6 left-[-34px]"}
                            `}
                          >
                            <div className={`flex items-center ${isHidden || isNull ? "opacity-0" : ""}`}>
                              <div className="w-12 h-[4px] bg-black dark:bg-white"></div>
                              <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-slate-500 dark:border-l-white"></div>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* LABEL */}
                      <div className="mt-2 text-xs font-semibold">
                        {(node.state === "normal" && node.arrow === "forward") && (
                          <span className="text-green-600 dark:text-green-400">
                            New Node
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= MAIN LINKED LIST ================= */}
          <div className="mt-10 pb-2">
            <div className="flex items-start gap-6">

              {linkedlist.map((node, index) => {
                const isHead = index === 0;
                const isTail = index === linkedlist.length - 2 || (linkedlist.length === 1);

                const isNull = node.state === "null";
                const isHidden = node.state === "unvisible";

                return (
                  <div key={node.id + "-" + index} className="flex flex-col items-center">

                    <div className="flex items-center">

                      <motion.div
                        layout
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        className={`flex items-center   ${isHidden ? "opacity-0" : ""}`}
                      >
                        {isNull ? (
                          <div className="w-[112px] h-14 flex items-center justify-center border border-slate-500 rounded-md bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300 font-semibold">
                            NULL
                          </div>
                        ) : (
                          <>
                            <div className={`w-14 h-14 flex items-center justify-center border border-slate-500 text-black dark:text-white font-semibold rounded-l-md
                              ${node.state === "normal" ? "bg-white dark:bg-slate-700" : ""}

                              ${node.state === "inserted" ? "bg-green-500 text-white" : ""}
                              ${node.state === "deleted" ? "bg-red-500 text-white" : ""}

                              ${node.state === "traversing" ? "bg-amber-200 dark:bg-amber-400/60 text-black scale-105 shadow-md" : ""}

                              ${node.state === "created" ? "bg-green-200 dark:bg-green-500/40 text-black shadow-sm transition-all duration-300 ease-in-out" : ""}

                              ${node.state === "state1" ? "bg-yellow-200 dark:bg-yellow-400/70 text-black scale-105 shadow-md" : ""}   /* curr */
                              ${node.state === "state2" ? "bg-purple-200 dark:bg-purple-400/70 text-black shadow-md" : ""}   /* prev */
                            `}>
                              {node.value}
                            </div>

                            <div className={`w-14 h-14 flex items-center justify-center border-t border-b border-r border-slate-500 rounded-r-md
                              ${node.state === "normal" ? "bg-white dark:bg-slate-700" : ""}

                              ${node.state === "inserted" ? "bg-green-500 text-white" : ""}
                              ${node.state === "deleted" ? "bg-red-500 text-white" : ""}

                              ${node.state === "traversing" ? "bg-amber-200 dark:bg-amber-400/60 text-black scale-105 shadow-md" : ""}

                              ${node.state === "created" ? "bg-green-200 dark:bg-green-500/40 text-black shadow-sm transition-all duration-300 ease-in-out" : ""}

                              ${node.state === "state1" ? "bg-yellow-200 dark:bg-yellow-400/70 text-black scale-105 shadow-md" : ""}   /* curr */
                              ${node.state === "state2" ? "bg-purple-200 dark:bg-purple-400/70 text-black shadow-md" : ""}   /* prev */
                            `}>
                              <div className="w-3 h-3 rounded-full bg-black dark:bg-white"></div>
                            </div>
                          </>
                        )}
                      </motion.div>

                      {/* ARROW */}
                      {index !== linkedlist.length - 1 && (
                        <motion.div
                          layout
                          className={`ml-[-23px] mr-[-22px] flex items-center
                            ${node.arrow === "up" && "-rotate-90 relative bottom-6 left-[-34px]"}
                            ${node.arrow === "down" && "rotate-90 relative top-6 left-[-34px]"}
                          `}
                        >
                          <div className={`flex items-center ${isHidden || isNull ? "opacity-0" : ""}`}>
                            <div className="w-12 h-[4px] bg-black dark:bg-white"></div>
                            <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-slate-500 dark:border-l-white"></div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* LABELS + INDEX */}
                    <div className="mt-2 flex flex-col items-center">

                      {/* LABELS (fixed height to prevent layout shift) */}
                      <div className="h-6 flex items-center justify-center gap-2 text-xs font-semibold">

                        {isHead && !isHidden && (
                          <span className="
                            px-2 py-[2px] rounded-md
                            bg-blue-50 dark:bg-blue-500/10
                            text-blue-700 dark:text-blue-300
                            border border-blue-200 dark:border-blue-500/30
                          ">
                            HEAD
                          </span>
                        )}

                        {isTail && !isHidden && (
                          <span className="
                            px-2 py-[2px] rounded-md
                            bg-red-50 dark:bg-red-500/10
                            text-red-700 dark:text-red-300
                            border border-red-200 dark:border-red-500/30
                          ">
                            TAIL
                          </span>
                        )}

                        {node.tag !== null && node.tag !== undefined && !isHidden && (
                          <span className="
                            px-2 py-[2px] rounded-md
                            bg-white dark:bg-slate-700
                            text-slate-700 dark:text-slate-200
                            border border-slate-300 dark:border-slate-600
                            shadow-sm
                            font-medium
                          ">
                            {node.tag}
                          </span>
                        )}

                      </div>

                      {/* INDEX (always aligned) */}
                      {showIndexes && !isHidden && (
                        <span className="
                          text-xs font-semibold
                          text-indigo-600 dark:text-indigo-400
                          mt-1
                        ">
                          {node.state == "null" ? "" : index }
                        </span>
                      )}

                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
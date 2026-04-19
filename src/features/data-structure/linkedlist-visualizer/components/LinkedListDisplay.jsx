import { motion } from "framer-motion";

export default function LinkedListDisplay({ linkedlist,visualNodes }) {
  return (
    <div>
      <div className="w-full flex justify-center mt-10 overflow-visible">
      <div className="flex items-start gap-6">

        {visualNodes.map((node, index) => {

          const isNull = node.state === "null";
          const isHidden = node.state === "unvisible";

          return (
            <div key={node.id + "-" + index} className="flex flex-col items-center">

              {/* Node + Arrow */}
              <div className="flex items-center">

                {/* NODE */}
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className={`flex items-center ${isHidden ? "opacity-0" : ""}`}
                >
                  {isNull ? (
                    <div className="
                      w-[112px] h-14 flex items-center justify-center
                      border border-slate-500 rounded-md
                      bg-red-100 text-red-600
                      dark:bg-red-900/40 dark:text-red-300
                      font-semibold
                    ">
                      NULL
                    </div>
                  ) : (
                    <>
                      {/* VALUE */}
                      <div className="
                        w-14 h-14 flex items-center justify-center
                        border border-slate-500
                        bg-white dark:bg-slate-700
                        text-black dark:text-white
                        font-semibold
                        rounded-l-md
                      ">
                        {node.value}
                      </div>

                      {/* POINTER */}
                      <div className="
                        w-14 h-14 flex items-center justify-center
                        border-t border-b border-r border-slate-500
                        bg-white dark:bg-slate-700
                        rounded-r-md
                      ">
                        <div className="w-3 h-3 rounded-full bg-black dark:bg-white"></div>
                      </div>
                    </>
                  )}
                </motion.div>

                {/* ARROW (space always reserved) */}
                {index !== linkedlist.length - 1 && (
                  <motion.div
                    layout
                    className={`ml-[-23px] mr-[-22px] flex items-center
                        ${node.arrow == "up" && "-rotate-90 relative bottom-6 left-[-34px]"}
                        ${node.arrow == "down" && "rotate-90 relative top-6 left-[-34px]"}
                      `}
                  >
                    {/* Hide arrow visually but keep space */}
                    <div className={`flex items-center 
                      ${isHidden || isNull ? "opacity-0" : ""}
                    `}>
                      <div className="w-12 h-[4px] bg-black dark:bg-white"></div>
                      <div className="w-0 h-0 
                        border-t-[6px] border-b-[6px] border-l-[10px]
                        border-t-transparent border-b-transparent
                        border-l-slate-500 dark:border-l-white
                      "></div>
                    </div>
                  </motion.div>
                )}

              </div>

              

            </div>
          );
        })}

      </div>
    </div>
    
    
    
    
    
    <div className="w-full flex justify-center mt-10 overflow-visible">
      <div className="flex items-start gap-6">

        {linkedlist.map((node, index) => {
          const isHead = index === 0;
          const isTail = index === linkedlist.length - 1;

          console.log(node.arrow);
          const isNull = node.state === "null";
          const isHidden = node.state === "unvisible";

          return (
            <div key={node.id + "-" + index} className="flex flex-col items-center">

              {/* Node + Arrow */}
              <div className="flex items-center">

                {/* NODE */}
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className={`flex items-center ${isHidden ? "opacity-0" : ""}`}
                >
                  {isNull ? (
                    <div className="
                      w-[112px] h-14 flex items-center justify-center
                      border border-slate-500 rounded-md
                      bg-red-100 text-red-600
                      dark:bg-red-900/40 dark:text-red-300
                      font-semibold
                    ">
                      NULL
                    </div>
                  ) : (
                    <>
                      {/* VALUE */}
                      <div className="
                        w-14 h-14 flex items-center justify-center
                        border border-slate-500
                        bg-white dark:bg-slate-700
                        text-black dark:text-white
                        font-semibold
                        rounded-l-md
                      ">
                        {node.value}
                      </div>

                      {/* POINTER */}
                      <div className="
                        w-14 h-14 flex items-center justify-center
                        border-t border-b border-r border-slate-500
                        bg-white dark:bg-slate-700
                        rounded-r-md
                      ">
                        <div className="w-3 h-3 rounded-full bg-black dark:bg-white"></div>
                      </div>
                    </>
                  )}
                </motion.div>

                {/* ARROW (space always reserved) */}
                {index !== linkedlist.length - 1 && (
                  <motion.div
                    layout
                    className={`ml-[-23px] mr-[-22px] flex items-center
                       ${node.arrow == "up" && "-rotate-90 relative bottom-6 left-[-34px]"}
                       ${node.arrow == "down" && "rotate-90 relative top-6 left-[-34px]"}
                    `}
                  >
                    {/* Hide arrow visually but keep space */}
                    <div className={`flex items-center 
                      ${isHidden || isNull ? "opacity-0" : ""}
                    `}>
                      <div className="w-12 h-[4px] bg-black dark:bg-white"></div>
                      <div className="w-0 h-0 
                        border-t-[6px] border-b-[6px] border-l-[10px]
                        border-t-transparent border-b-transparent
                        border-l-slate-500 dark:border-l-white
                      "></div>
                    </div>
                  </motion.div>
                )}

              </div>

              {/* LABELS */}
              <div className="mt-2 text-xs font-semibold flex gap-2">
                {isHead && !isHidden && (
                  <span className="text-blue-600 dark:text-blue-400">
                    HEAD
                  </span>
                )}
                {isTail && !isHidden && (
                  <span className="text-red-600 dark:text-red-400">
                    TAIL
                  </span>
                )}
              </div>

            </div>
          );
        })}

      </div>
    </div>
    </div>
  );
}
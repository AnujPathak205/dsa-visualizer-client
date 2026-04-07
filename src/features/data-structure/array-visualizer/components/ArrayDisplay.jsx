import { motion } from "framer-motion";

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
export default function ArrayDisplay({array}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-10">
        {array.map((element, index) => (
          <motion.div 
            layout
            animate={{ x: 0 }}           
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 20
              }}
            className="flex flex-col items-center"
            key={element.id}>
            <motion.div
              layout
              className={`h-12 w-12 flex items-center justify-center rounded-lg border font-semibold transition-all duration-300
                ${element.state === "unvisible" ? "opacity-0" : ""}
                ${element.state === "inserted" ? "bg-green-500 text-white scale-110" : ""}
                ${element.state === "deleted" ? "bg-red-500 text-white scale-110" : ""}
                ${element.state === "normal" ? "bg-white dark:bg-slate-700 text-black dark:text-white" : ""}
                ${element.state === "searching" ? "bg-purple-500 text-white scale-110" : ""}
                ${element.state === "found" ? "bg-green-500 text-white scale-110" : ""}
              `}
            >
              {element.value != null?element.value:""}
            </motion.div>
            <div
            className="text-sm mt-1 text-gray-600 dark:text-gray-300">
              {index}
            </div>
          </motion.div>
        ))}
    </div>
  )
}

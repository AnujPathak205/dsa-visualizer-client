import React from 'react'

export default function ArrayHeader() {
  return (
    <>
        <div className="h-full flex flex-col justify-center items-center text-center px-6">
            
                      <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3 mt-3">
                        Array Visualizer
                      </h1>

                      <p className="text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
                        Visualize how arrays work internally with step-by-step execution.
                        
                        <br /><br />

                        Explore 
                        <span className="text-indigo-500 font-semibold"> core operations</span> like
                        <span className="text-green-500 font-semibold"> insertion</span>,
                        <span className="text-red-500 font-semibold"> deletion</span>, and
                        <span className="text-purple-500 font-semibold"> search</span>.

                        <br />

                        Also dive into
                        <span className="text-indigo-500 font-semibold"> advanced operations</span> like
                        <span className="text-blue-500 font-semibold"> reverse</span>,
                        <span className="text-orange-500 font-semibold"> min</span>, and
                        <span className="text-pink-500 font-semibold"> max</span>.
                      </p>

                      <p className="text-lg text-slate-400 mt-4">
                        Select an operation to begin 
                      </p>

                      <button onClick={e => setCreateArr(true)}>Create your own array</button>
                    </div>
    </>
  )
}

import React from 'react'
import { useState } from 'react'

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export default function Array() {


  const initailArr = [
    {id:0, value:12},
    {id:1, value:5},
    {id:2, value:1},
    {id:3, value:7}
  ]

  const [inputValue,setInputValue] = useState(22);
  const [inputIndex,setInputIndex] = useState(1);
  const [message,setMessage] = useState("Hello, visualize insertion, deletion and search in array");

  const [array, setArray] = useState(initailArr);

  const [speed,setSpeed] = useState(300);

  async function handleInsertion(){
    if(inputValue == "" || inputIndex == ""){
      setMessage("Enter the value and the index for insertion");
    };

    // for(let i = array.length-1;i > inputIndex;i++){
    //   // setArray(new Array(array));
    //   // await sleep(speed);
    // }

    
  }
  
  return (
    <>

      <div className='p-8 ml-20 mt-10 border-1 text-black dark:text-white'>
        {message}
      </div>

      <div className='flex gap-3 dark:text-white m-20'>
        {array.map((element) => 
        <div 
          key={element.id}
          className={`h-10 w-10 border-1 text-center
            ${element.value == -1?'opacity-0':''}
          `}
        >
          {element.value}
        </div>
        )}
      </div>

      <div className='mt-10 ml-20'>
        <label 
          htmlFor="inputValue"
          className='text-black dark:text-white mr-2 '
        >
          Enter value
        </label>
        <input
         id='inputValue'
         type='number' min={0} max={20}
         value={inputValue}
         className={`dark:text-white border border-gray-300 dark:border-slate-600 bg-gray-100 dark:bg-slate-700 text-slate-900 dark:text-white`}
         onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <div className='mt-10 ml-20'>
        <label 
          htmlFor="inputIndex"
          className='text-black dark:text-white mr-2 '
        >
          Enter index
        </label>
        <input
        id='inputIndex'
        type='number' min={0} max={20}
        value={inputIndex}
        className='dark:text-white border border-gray-300 dark:border-slate-600 bg-gray-100 dark:bg-slate-700 text-slate-900 dark:text-white'
        onChange={(e) => setInputIndex(e.target.value)}
        />
      </div>

      <button onClick={handleInsertion} className='bg-purple-400 dark:bg-purple-600 hover:bg-purple-500 dark:hover:bg-purple-700 text-white px-4 py-2 rounded transition font-semibold m-5'>Insert</button>
      {/* <button onClick={handleDeletion} className='bg-purple-400 dark:bg-purple-600 hover:bg-purple-500 dark:hover:bg-purple-700 text-white px-4 py-2 rounded transition font-semibold m-5'>Delete</button>
      <button onClick={handleSearch} className='bg-purple-400 dark:bg-purple-600 hover:bg-purple-500 dark:hover:bg-purple-700 text-white px-4 py-2 rounded transition font-semibold m-5'>Search</button> */}


      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />

    </>
  )
}

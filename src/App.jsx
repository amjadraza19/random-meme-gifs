import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  

  return (
    
     <div className='w-full h-screen flex flex-col backgroud relative overflow-x-hidden items-center'>
      <h1 className='absolute bg-blue-500 rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 h-20 text-3xl font-bold'>RANDOM GIFs (MEMEs R)</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random />
        <Tag />
      </div>
     </div>
   
  )
}

export default App

import React from 'react'

export default function Loader() {


  return (
    <div className= " z-10 h-[100%] w-[100vw] absolute left-0 bottom-0 bg-linear-to-b from-indigo-900 to-black snap-none flex justify-center items-center flex-col gap-5">

      <div className="animate-[spin_700ms_linear_infinite] rounded-full h-16 w-16 border-t-4 border-white "></div>
      <span className=" text-xl text-amber-50">Loading...</span>
    </div>
  )
}

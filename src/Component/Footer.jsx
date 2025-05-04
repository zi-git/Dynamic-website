import React from 'react'

export default function 
() {
  return (
    <div id='bottom' className=' h-[100vh] w-[100vw] bg-black text-white py-10 items-center flex flex-col justify-center items-center  '>

      <div className='text_scale_effect container mx-auto text-center flex flex-col gap-1 items-center justify-center h-full bg-black'>
        <div className='text-3xl font-bold'><img
          className="h-[100%] w-[auto] max-w-[120px] object-contain  rounded-lg"
          src="./src/assets/logo.png"
          alt="Logo"
        /></div>
        <p className='text-gray-400 mt-2 sm:text-[22px]'>Thank you for scrolling !
        </p>
        <p className=' sm:text-[18px] text-[10px] text-gray-400' >I'm currntly and continuously working on this project.</p>
        <p className='text-gray-400 sm:text-[18px]  h-auto a-auto flex flex-row gap-1'>© 2025 <a target='blank' href="https://www.linkedin.com/in/jishan95/">Jishan <img className=' h-2 w-2 inline' src="/src/assets/arrow.svg" alt="" /></a></p>
        <div className='text-[14px] sm:text-[18px] text-gray-400'>
      <p><a href="mailto:kazijishan50@gmail.com">Email <img className=' h-2 w-2 inline' src="/src/assets/arrow.svg" alt="" /></a></p>
      </div>
      </div>
      
        
    </div>
  )
}

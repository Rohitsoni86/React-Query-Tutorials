import React, { useEffect } from 'react'

export default function HomePage() {

  useEffect( () => {
    console.log("Home Page !!");
  },[])
  return (
   <>
    <div className='h-screen w-screen flex flex-col z-20 justify-center items-center bg-black'>
    <h2 className='text-2xl text-white'>Home Page ...</h2>

   
    </div>
    
   </>
  )
}

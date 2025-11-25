import React from 'react'

import back from './assets/image 1.png'
import image from './assets/Rectangle 1.png'
import Navbar from './componenets/Navbar'
// import './index.css'

function Home() {
  return (
  <div >
    <div className='bg-[#eca595] absolute h-screen sm:hidden w-[30.9em]' > </div>
    <div><img src={back} className='sm:h-screen absolute z-0 w-screen sm:block hidden sm:object-cover  ' alt="" /> </div>
    <Navbar/>
    <div className='z-10 relative ml-14 flex flex-col gap-6 mt-64'>
       <h2 className='text-6xl font-bold text-[86px] text-[#A6374B]'>Cool. <span className='text-[#ce576c]'>Creamy. <br /></span><span className='text-[#F13C2D]'>Craveable.</span></h2>
      <h5 className='font-medium text-[18px]'>Fresh Layers, fruity flavors, unforgettable taste</h5>
      <div className="flex gap-8">
        <button className='text-[#fff] font-semibold text-sm bg-[#FF6B6B] rounded-md px-4 py-2 border-[1px]'>Order Now</button>
        <button className='text-[#A6374B] font-semibold text-sm bg-[#E9BEB4] rounded-md px-4 py-2 border-[1px]'>View Menu</button>
      </div>
     </div>

     <div className="flex z-10 relative">
      <div><img src={image} alt="" /></div>
      <div></div>
     </div>
   </div> 
  )
}

export default Home

import React from 'react'

import back from './assets/image 1.png'
import Navbar from './componenets/Navbar'

import image from './assets/Rectangle 1.png'
import grid1 from './assets/Rectangle 2.png'
import grid2 from './assets/Rectangle 3.png'
import grid3 from './assets/Rectangle 4.png'
import grid4 from './assets/Rectangle 5.png'
// import './index.css'

function Home() {
  return (
  <div >
    <div className='bg-[#eca595] absolute h-screen sm:hidden w-[28em]' > </div>
    <div><img src={back} className='h-screen absolute z-0 sm:block hidden sm:object-cover sm:w-full w-[30em] ' alt="" /> </div>
    <Navbar/>
    <div className='z-10 relative ml-14 flex flex-col gap-6 mt-64'>
       <h2 className='text-5xl font-bold text-[86px] text-[#A6374B] sm:text-6xl'>Cool. <span className='text-[#ce576c]'>Creamy. <br /></span><span className='text-[#F13C2D]'>Craveable.</span></h2>
      <h5 className='font-medium text-[18px]'>Fresh Layers, fruity flavors, unforgettable taste</h5>
      <div className="flex gap-8">
        <button className='text-[#fff] font-semibold text-sm bg-[#FF6B6B] rounded-md px-4 py-2 border-[1px]'>Order Now</button>
        <button className='text-[#A6374B] font-semibold text-sm bg-[#E9BEB4] rounded-md px-4 py-2 border-[1px]'>View Menu</button>
      </div>
     </div>
     <div className="sm:flex z-10 relative justify-center items-start gap-10 p-6 mt-[50em] w-full">
  <div>
    <img 
      src={image} 
      alt="" 
      className="w-full sm:w-1/2 lg:w-[30em] lg:h-[55em] object-cover rounded-3xl md:hidden 2xl:block" 
    />
  </div>
  <div className="w-full sm:w-1/2">
    <h1 className="text-4xl lg:mt lg:text-5xl font-bold md:text-7xl">The Heart of Parfait</h1>
    <p className="mt-4 text-gray-700 md:text-lg lg:mt-12">
      At Parfait Bliss, we believe happiness comes in layers just like our parfaits. Our journey began with a simple passion: to create fresh, wholesome, and delicious treats that bring joy to every spoonful.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
      <img src={grid1} alt="" className="w-full" />
      <img src={grid2} alt="" className="w-full" />  
      <img src={grid3} alt="" className="w-full" />  
      <img src={grid4} alt="" className="w-full" />  
    </div>
  </div>
</div>

     
   </div> 
  )
}

export default Home

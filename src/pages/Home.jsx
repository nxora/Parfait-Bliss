import React from 'react'

import back from './../assets/image 1.png'
import Navbar from '../components/Navbar'

import image from './../assets/Rectangle 1.png'
import grid1 from './../assets/Rectangle 2.png'
import grid2 from './../assets/Rectangle 3.png'
import grid3 from './../assets/Rectangle 4.png'
import grid4 from './../assets/Rectangle 5.png'
import MenuItems from '../components/MenuItems'
import comma from './../assets/“.png'
import pic from './../assets/Ellipse 1 (2).png'
import pic1 from './../assets/Ellipse 1 (1).png'
import pic2 from './../assets/Ellipse 1.png'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  return (
    <div >
      <div className='bg-[#eca595] absolute h-[70em] sm:hidden sm:w-full w-[33em]' />
      <div><img src={back} className='h-screen absolute z-0 sm:block hidden sm:object-cover sm:w-full w-[30em] ' alt="" /> </div>
      <Navbar />
      <div className='z-10 relative ml-14 flex flex-col gap-6 mt-64'>
        <h2 className='text-5xl font-bold text-[86px] text-[#A6374B] sm:text-6xl'>Cool. <span className='text-[#ce576c]'>Creamy. <br /></span><span className='text-[#F13C2D]'>Craveable.</span></h2>
        <h5 className='font-medium text-[18px]'>Fresh Layers, fruity flavors, unforgettable taste</h5>
        <div className="flex gap-8">
          <button className='text-[#fff] font-semibold text-sm bg-[#FF6B6B] rounded-md px-4 py-2 border-[1px] relative transition-all duration-300 after:content-[""] after:absolute after:inset-0 after:border after:border-[#FFF8E7] after:rounded-md after:scale-0 after:transition-transform after:duration-300 hover:after:scale-100' onClick={() => window.location.href = "#menu"}>Order Now</button>
          <button className='text-[#A6374B] font-semibold text-sm bg-[#E9BEB4] rounded-md px-4 py-2 border-[1px] relative transition-all duration-300 after:content-[""] after:absolute after:inset-0 after:border after:border-[#FFF8E7] after:rounded-md after:scale-0 after:transition-transform after:duration-300 hover:after:scale-100' onClick={() => window.location.href = "#menu"}>View Menu</button>
        </div>
      </div>
      the upper div and lower are over-lapping
      <div className="sm:flex z-10 relative justify-center items-center gap-10 p-6 w-full mt-[24em] md:mt-[40em] ">
        <div>
          <img src={image} alt="" className="w-full sm:w-1/2 lg:w-[30em] lg:h-[55em] object-cover rounded-3xl md:hidden hidden 2xl:block" />
        </div>
        <div className="w-full sm:w-1/2 text-center ml-[4em]" id='about'>
          <h1 className="text-4xl  lg:text-5xl font-bold text-center">The Heart of Parfait</h1>
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
      <div className='bg-[#F2D5D1] text-center mt-16 sm:w-full w-[33em]' id='menu'>
        <h1 className=' h-[96px] opacity-1 text-5xl font-bold pt-[1em] mb-10  '>Parfaits</h1>
        <h1 className='font-medium sm:text-base text-slate-600 '> Explore our range of handcrafted parfaits designed to <br /> delight and suprise.</h1>
        <MenuItems />
        <button className='text-[#A6374B] font-semibold text-sm bg-[#E9BEB4] rounded-md px-4 py-2 border-[1px] mb-12 relative transition-all duration-300 after:content-[""] after:absolute after:inset-0 after:border after:border-[#FFF8E7] after:rounded-lg after:scale-0 after:transition-transform after:duration-300 hover:after:scale-100'>View Menu</button>
      </div>


      <div className="text-center bg-[#FFF8E7] py-24 sm:w-auto w-[33em]">
        <h1 className='text-4xl font-bold mb-12'> What people say</h1>
        <p>Real stories from people who have tasted out parfait and they had a good experience with it </p>
        <div className='flex-col flex sm:flex-row gap-8 justify-center items-center my-24'>
          <div className='bg-white rounded-xl w-72 md:p-10 lg:w-1/4 p-8'>
            <img src={comma} alt="" />
            <h4 className='my-12'>This parfait was the best I’ve ever had! Fresh fruits, crunchy granola, and creamy yogurt—absolutely perfect. I’ll definitely order again!</h4>
            <div className="grid grid-cols-2 gap-0">
              <img src={pic} alt="" />
              <h1>Amina K</h1>
            </div>
          </div>
          <div className='bg-white rounded-xl w-72 md:p-10 lg:w-1/4 p-8 '>
            <img src={comma} alt="" />
            <h4 className='my-12'>This parfait was the best I’ve ever had! Fresh fruits, crunchy granola, and creamy yogurt—absolutely perfect. I’ll definitely order again!</h4>
            <div className="grid grid-cols-2 gap-0">
              <img src={pic1} alt="" />
              <h1>Micheal T</h1>
            </div>
          </div>
          <div className='bg-white rounded-xl w-72 md:p-10 lg:w-1/4 p-8'>
            <img src={comma} alt="" />
            <h4 className='my-12'>This parfait was the best I’ve ever had! Fresh fruits, crunchy granola, and creamy yogurt—absolutely perfect. I’ll definitely order again!</h4>
            <div className="grid grid-cols-2 gap-0 items-center ">
              <img src={pic2} alt="" />
              <h1>Alex Smith</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

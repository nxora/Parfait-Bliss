  import React from 'react'
import pic from'./assets/Rectangle 9.png'
import logo from './assets/Logo.png'
import './index.css'


function Footer() {
  return (
      <div className="text-center bg-[#E9BEB4] px-4 py-10 w-[30.9em] sm:w-full">
  <h2 className="font-semibold text-3xl md:text-5xl leading-tight mb-4">
    Ready to taste pure bliss
  </h2>

  <p className="max-w-xl mx-auto">
    Experience our parfaits and discover a world of flavor crafted with passion and precision
  </p>

  <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
    <button className="text-white font-semibold text-sm bg-[#FF6B6B] rounded-md px-6 py-2 transform transition-transform duration-300 hover:scale-105">Order Now</button>
    <button className="text-[#A6374B] font-semibold text-sm bg-[#f5c9bf] rounded-md px-6 py-2 transform transition-transform duration-300 hover:scale-105">View Menu</button>
  </div>
  <img src={pic} alt="" className="object-cover mx-auto my-10 w-full max-w-screen-xl " />

  <hr className="bg-[#E36B4F] h-1 w-full" />

  {/* FOOTER SECTION */}
  <div className="flex flex-col lg:flex-row justify-evenly items-center gap-16 mt-20">
    <div className="text-center lg:text-left">
      <img src={logo} alt="" className="w-48 mx-auto lg:mx-0" />

      <div className="flex justify-center lg:justify-start gap-10 mt-10 font-semibold flex-wrap">
           <a href="#" className=' relative inline-block after:content-[" "] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition after:duration-300 hover:after:scale-x-100'>Menu</a>
          <a href="#" className='relative inline-block after:content-[" "] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition after:duration-300 hover:after:scale-x-100'>About Us</a>
          <a href="#" className='relative inline-block after:content-[" "] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition after:duration-300 hover:after:scale-x-100'>Order</a>
          <a href="#" className='relative inline-block after:content-[" "] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition after:duration-300 hover:after:scale-x-100'>Contact</a>
      </div>
    </div>

    <div className="font-semibold text-center lg:text-left">
      <h3 className="text-lg">Subscribe</h3>

      <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
        <h3>Get parfaits updates</h3>
        <button type="button" className="bg-[#FF6B6B] px-6 py-2 rounded-lg text-white transform transition-transform duration-300 hover:scale-105">
          Sign In
        </button>
      </div>

      <h3 className="mt-6 text-sm opacity-80">
        By subscribing you agree to our terms
      </h3>
    </div>
  </div>

  <hr className="h-px w-[90%] bg-black border-none mx-auto my-10" />

  <div className="flex flex-col md:flex-row justify-evenly items-center gap-6">
    <div className="flex gap-6 font-semibold flex-wrap justify-center">
      <a href="">Privacy policy</a>
      <a href="">Terms of service</a>
      <a href="">Cookie settings</a>
    </div>

    <div className="font-semibold text-center">
      ©2025 ParfaitBliss. All rights reserved.
      By <a className="text-[#FF6B6B]" href="https://github.com/nxora/">Nexora</a>
    </div>
  </div>
</div>

  )
}

export default Footer